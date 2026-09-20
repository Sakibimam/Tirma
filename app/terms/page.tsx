import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Delivery, returns & terms',
  description:
    'How TIRMA ships, what we do if a pack arrives wrong, and the terms of sale.',
};

const SECTIONS = [
  {
    n: '01',
    title: 'What we claim about the tea',
    body: [
      'We tell you the region, the approximate elevation and the month the leaf was picked. Those three things are on every pack and we stand behind them.',
      'We do not claim organic certification for teas that do not carry it, and we do not make health or medical claims. Tea is a drink. Anything beyond that is somebody else’s marketing.',
    ],
  },
  {
    n: '02',
    title: 'Delivery',
    body: [
      'Orders are packed to order and dispatched within two working days. Delivery across India typically takes three to six working days depending on the pin code.',
      'Delivery is free on orders over ₹1,499. Below that a flat ₹120 applies. You will get a tracking number by email when the parcel leaves us.',
    ],
  },
  {
    n: '03',
    title: 'If something is wrong',
    body: [
      'If a pack arrives damaged, leaking, or is not what you ordered, tell us within seven days and we will replace it or refund it. You do not need to send it back and we will not ask you for a photograph of the inside of the pouch.',
      'Because tea is a food product, we cannot take back a pouch that has been opened simply because you did not care for it — which is exactly why the Index Box exists. Try four small ones first.',
    ],
  },
  {
    n: '04',
    title: 'Prices and payment',
    body: [
      'All prices are in Indian rupees and include applicable taxes. Prices change between harvests, because what we pay changes between harvests.',
      'Payment is taken at checkout. We do not store card details.',
    ],
  },
  {
    n: '05',
    title: 'Your details',
    body: [
      'We keep your name, address, email and order history so we can send you tea and answer questions about past orders. We do not sell that to anybody.',
      'The harvest notice is opt-in and every email carries an unsubscribe link that works.',
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="bg-cream">
      <header className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-shell px-6 pb-16 pt-20 sm:px-10 lg:px-16">
          <p className="eyebrow text-bark-50">Terms</p>
          <h1 className="mt-6 font-display text-d-md">
            Delivery, returns, <span className="italic">and the small print.</span>
          </h1>
          <p className="prose-measure mt-8 text-bark-70">
            Written to be read rather than to be defensible. If something here is
            unclear, write to us and we will fix the wording.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-shell px-6 py-16 sm:px-10 lg:px-16">
        <ol>
          {SECTIONS.map((s) => (
            <li
              key={s.n}
              className="grid gap-x-16 gap-y-4 border-t border-[color:var(--line)] py-10 last:border-b lg:grid-cols-12"
            >
              <span className="eyebrow text-bark-50 lg:col-span-1">{s.n}</span>
              <h2 className="font-display text-[1.625rem] leading-tight lg:col-span-4">
                {s.title}
              </h2>
              <div className="space-y-4 lg:col-span-7">
                {s.body.map((para) => (
                  <p key={para} className="text-[0.975rem] leading-[1.75] text-bark-70">
                    {para}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
