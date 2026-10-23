'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  MessageSquare,
  Send,
  X,
  RotateCcw,
  Sparkles,
  Key,
  ExternalLink,
  AlertCircle,
  Coffee,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isError?: boolean;
}

const STARTER_PROMPTS = [
  'Which tea is best with hot milk?',
  'How do I brew Darjeeling without bitterness?',
  'What spices are cracked into Dhaba Mix?',
  'What is included in The Index Box?',
];

// Offline verified answers from catalog in case API key is not yet configured
const SAMPLE_ANSWERS: Record<string, string> = {
  'Which tea is best with hot milk?':
    'For hot milk chai, Kadak Chai (Upper Assam high-fire CTC) and Regular Everyday Assam CTC are specifically crafted for this. Always boil the leaf in water first for 3 minutes to extract deep liquor, then add milk and bring to a rolling boil.',
  'How do I brew Darjeeling without bitterness?':
    'Darjeeling Delight is a high-grown orthodox leaf. Steep 2.5g in 200ml water at 85–90°C (let boiling water rest 1 minute) for 3 to 4 minutes. Drink it clear in porcelain or glass — never add milk, as milk fats suppress the natural muscatel aromatics.',
  'What spices are cracked into Dhaba Mix?':
    'Dhaba Mix combines high-fire Upper Assam CTC with coarse-cracked sun-dried ginger root, Malabar cloves, and green cardamom pods. They are smashed whole rather than powdered, so the essential oils stay intact until the boil.',
  'What is included in The Index Box?':
    'The Index Box contains four signature teas (25g each): Darjeeling Delight, Kadak Chai, Regular Everyday Assam CTC, and Green Tea (approx. 40 cups total). It also comes with exact brewing cards and a ₹300 credit toward your next full-size order.',
};

export const TeaAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'assistant',
      content:
        'Namaste! I am your Tirma Tea Assistant. I can guide you through our Upper Assam and Darjeeling harvests, suggest exact brewing temperatures, or help you find your ideal morning cup. How may I help you today?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKeyMissing, setApiKeyMissing] = useState(false);
  const [lastFailedMessage, setLastFailedMessage] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);

  // Auto-scroll to bottom of messages
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Focus input when opening
      setTimeout(() => inputRef.current?.focus(), 150);
    } else if (wasOpenRef.current) {
      // Return focus to launcher button when closing (WCAG a11y best practice)
      launcherButtonRef.current?.focus();
    }
    wasOpenRef.current = isOpen;
  }, [isOpen, messages, scrollToBottom]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const sendMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed || isLoading) return;

    if (trimmed.length > 500) {
      return;
    }

    const userMessage: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: 'user',
      content: trimmed,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setLastFailedMessage(null);

    // Prepare bounded history for server (excluding errors)
    const historyPayload = messages
      .filter((m) => !m.isError)
      .slice(-6)
      .map((m) => ({
        role: m.role,
        content: m.content,
      }));

    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          history: historyPayload,
        }),
      });

      const data = await response.json().catch(() => null);

      if (data?.status === 'api_key_missing') {
        setApiKeyMissing(true);
        // Normalized matching for starter prompts in offline mode
        const normalizedInput = trimmed.toLowerCase().replace(/[?!.,]+$/, '').trim();
        const matchedKey = Object.keys(SAMPLE_ANSWERS).find(
          (k) => k.toLowerCase().replace(/[?!.,]+$/, '').trim() === normalizedInput
        );
        const sampleAnswer = matchedKey ? SAMPLE_ANSWERS[matchedKey] : undefined;

        const assistantMessage: ChatMessage = {
          id: `ast-${Date.now()}`,
          role: 'assistant',
          content: sampleAnswer
            ? `${sampleAnswer}\n\n*(Note: Running in offline demo mode. Configure your GEMINI_API_KEY for dynamic conversations.)*`
            : 'The Tirma Tea Assistant requires a Google Gemini API key to generate live responses. Please see the setup instructions below.',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else if (!response.ok || !data?.reply) {
        const errorText =
          data?.error || 'Unable to connect to the tea assistant. Please check your network and try again.';
        setLastFailedMessage(trimmed);
        setMessages((prev) => [
          ...prev,
          {
            id: `err-${Date.now()}`,
            role: 'assistant',
            content: errorText,
            timestamp: new Date(),
            isError: true,
          },
        ]);
      } else {
        setApiKeyMissing(false);
        setMessages((prev) => [
          ...prev,
          {
            id: `ast-${Date.now()}`,
            role: 'assistant',
            content: data.reply,
            timestamp: new Date(),
          },
        ]);
      }
    } catch {
      setLastFailedMessage(trimmed);
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: 'assistant',
          content: 'Network connection error. Please verify your internet connection and try again.',
          timestamp: new Date(),
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleRetry = () => {
    if (lastFailedMessage) {
      sendMessage(lastFailedMessage);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'assistant',
        content:
          'Namaste! I am your Tirma Tea Assistant. I can guide you through our Upper Assam and Darjeeling harvests, suggest exact brewing temperatures, or help you find your ideal morning cup. How may I help you today?',
        timestamp: new Date(),
      },
    ]);
    setApiKeyMissing(false);
    setLastFailedMessage(null);
    setInput('');
  };

  // Inline formatting helper for markdown bold (**text**) and markdown links ([text](url))
  const renderFormattedInline = (lineText: string) => {
    const tokens = lineText.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
    return tokens.map((token, i) => {
      if (token.startsWith('**') && token.endsWith('**')) {
        return (
          <strong key={i} className="font-semibold text-bark">
            {token.slice(2, -2)}
          </strong>
        );
      }
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        const [, label, href] = linkMatch;
        return (
          <a
            key={i}
            href={href}
            className="text-garden-500 font-medium underline underline-offset-2 hover:text-garden-600 transition-colors"
          >
            {label}
          </a>
        );
      }
      return token;
    });
  };

  // Helper to format basic line breaks, bullet points, and inline emphasis safely
  const formatMessageText = (text: string) => {
    return text.split('\n').map((line, idx) => {
      const isBullet = line.trim().startsWith('* ') || line.trim().startsWith('- ');
      const cleanLine = isBullet ? line.trim().replace(/^[-*]\s+/, '') : line;

      return (
        <span key={idx} className={isBullet ? 'block pl-3 text-xs sm:text-sm my-0.5' : 'block text-xs sm:text-sm my-1'}>
          {isBullet && <span className="inline-block w-2 text-saffron font-bold mr-1">•</span>}
          {renderFormattedInline(cleanLine)}
        </span>
      );
    });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          ref={launcherButtonRef}
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 rounded-full bg-garden-500 px-4 py-3 text-white shadow-2xl transition-all duration-300 hover:bg-garden-600 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron focus-visible:ring-offset-2 border border-saffron/30 select-none"
          aria-label="Open Tirma Tea Assistant"
          aria-haspopup="dialog"
          aria-expanded={false}
          aria-controls="tirma-assistant-dialog"
          id="tirma-assistant-trigger"
        >
          <div className="relative flex items-center justify-center">
            <Coffee className="h-5 w-5 text-cream transition-transform group-hover:rotate-12" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saffron opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-saffron"></span>
            </span>
          </div>
          <span className="font-display text-sm font-medium tracking-wide text-cream">
            Tea Assistant
          </span>
        </button>
      )}

      {/* Chat Window Dialog */}
      {isOpen && (
        <div
          id="tirma-assistant-dialog"
          role="dialog"
          aria-modal="false"
          aria-labelledby="tirma-assistant-title"
          className="flex flex-col w-[calc(100vw-2rem)] sm:w-[400px] h-[540px] max-h-[82vh] rounded-2xl bg-cream border border-[#DFD8C8] shadow-2xl overflow-hidden animate-fade-in font-sans"
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-garden-500 px-4 py-3.5 text-cream border-b border-garden-600 select-none">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3D5C45] border border-saffron/40 text-cream">
                <Coffee className="h-4 w-4" />
              </div>
              <div>
                <h2
                  id="tirma-assistant-title"
                  className="font-display text-base font-medium text-cream leading-tight"
                >
                  Tirma Tea Assistant
                </h2>
                <p className="text-[11px] text-[#A89B89] tracking-wider uppercase">
                  Upper Assam & Darjeeling Sommelier
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                className="p-1.5 text-[#A89B89] hover:text-white hover:bg-white/10 rounded-full transition-colors"
                title="Restart conversation"
                aria-label="Restart conversation"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-[#A89B89] hover:text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close tea assistant"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages Thread */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#FAF6EE] select-text">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-6 w-6 rounded-full bg-[#2F4A36] flex items-center justify-center text-[#E8DCC4] text-[10px]">
                      <Sparkles className="h-3 w-3 text-[#C9962B]" />
                    </div>
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-sm text-sm ${
                    msg.role === 'user'
                      ? 'bg-[#2F4A36] text-[#FBF7F0] rounded-br-none'
                      : msg.isError
                      ? 'bg-red-50 text-red-900 border border-red-200 rounded-bl-none'
                      : 'bg-white text-[#1C1814] border border-[#E8E2D6] rounded-bl-none'
                  }`}
                >
                  {msg.isError && (
                    <div className="flex items-center gap-1.5 text-red-700 font-medium mb-1 text-xs">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>Connection Issue</span>
                    </div>
                  )}

                  <div className="leading-relaxed whitespace-pre-wrap">
                    {formatMessageText(msg.content)}
                  </div>

                  {msg.isError && lastFailedMessage && (
                    <button
                      onClick={handleRetry}
                      className="mt-2 inline-flex items-center gap-1 rounded-md bg-red-100 hover:bg-red-200 px-2 py-1 text-xs font-medium text-red-800 transition-colors"
                    >
                      <RotateCcw className="h-3 w-3" />
                      Retry question
                    </button>
                  )}

                  <span
                    className={`block mt-1 text-[10px] ${
                      msg.role === 'user' ? 'text-cream/60 text-right' : 'text-[#8C8275]'
                    }`}
                  >
                    {new Intl.DateTimeFormat('en-IN', {
                      hour: 'numeric',
                      minute: '2-digit',
                      hour12: true,
                    }).format(msg.timestamp)}
                  </span>
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-2.5 justify-start">
                <div className="h-6 w-6 rounded-full bg-[#2F4A36] flex items-center justify-center text-[#E8DCC4] text-[10px] mt-0.5">
                  <Sparkles className="h-3 w-3 text-[#C9962B]" />
                </div>
                <div className="bg-white border border-[#E8E2D6] rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#2F4A36] animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="h-2 w-2 rounded-full bg-[#C9962B] animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="h-2 w-2 rounded-full bg-[#2F4A36] animate-bounce"></span>
                    <span className="sr-only">Tirma Tea Assistant is thinking...</span>
                  </div>
                </div>
              </div>
            )}

            {/* API Key Missing Guidance Card */}
            {apiKeyMissing && (
              <div className="rounded-xl border border-[#C9962B]/40 bg-[#FFFDF9] p-3.5 text-xs text-[#4A3E31] shadow-sm">
                <div className="flex items-center gap-2 font-display text-sm font-semibold text-[#784712]">
                  <Key className="h-4 w-4 text-[#C9962B]" />
                  <span>Gemini API Key Setup</span>
                </div>
                <p className="mt-1 text-[#6B5E4F] leading-relaxed">
                  To enable live AI responses powered by Google Gemini, create a free API key and set it in your local environment:
                </p>
                <div className="mt-2 rounded bg-[#2F4A36] px-2.5 py-1.5 font-mono text-[11px] text-[#E8DCC4]">
                  GEMINI_API_KEY=your_key_here
                </div>
                <div className="mt-2.5 flex items-center justify-between">
                  <a
                    href="https://aistudio.google.com/app/apikey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#2F4A36] font-semibold hover:underline"
                  >
                    <span>Get free key at Google AI Studio</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Starters (Visible when conversation is starting) */}
          {messages.length <= 2 && !isLoading && (
            <div className="px-3 py-2 bg-[#F3EDE2] border-t border-[#E8E2D6]">
              <p className="text-[11px] font-medium text-[#786D5E] uppercase tracking-wider mb-1.5 px-1">
                Suggested questions:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {STARTER_PROMPTS.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(prompt)}
                    className="rounded-full bg-white hover:bg-[#2F4A36] hover:text-white px-2.5 py-1 text-xs text-[#4A3E31] border border-[#DFD8C8] transition-colors text-left"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Footer */}
          <form
            onSubmit={handleSubmit}
            className="p-3 bg-white border-t border-[#DFD8C8] flex flex-col gap-1.5"
          >
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                maxLength={500}
                placeholder="Ask about teas, brewing, or harvests..."
                disabled={isLoading}
                aria-label="Your message to the tea assistant"
                className="flex-1 rounded-xl border border-[#DFD8C8] bg-[#FBF7F0] px-3.5 py-2 text-xs sm:text-sm text-[#1C1814] placeholder-[#8C8275] focus:border-[#2F4A36] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2F4A36] transition-colors disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2F4A36] text-white transition-all hover:bg-[#243B2B] disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F4A36]"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>

            <div className="flex justify-between items-center px-1 text-[10px] text-[#A89B89]">
              <span>Grounded in verified Tirma harvest data</span>
              <span className={input.length >= 450 ? 'text-[#B5643C] font-semibold' : ''}>
                {input.length}/500
              </span>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
