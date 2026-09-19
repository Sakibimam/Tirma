'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { productsData } from '@/lib/teaData';
import {
  Sparkles,
  ShoppingBag,
  ArrowRight,
  Thermometer,
  Clock,
  RotateCcw,
  CheckCircle2,
} from 'lucide-react';

export const MainProduct: React.FC = () => {
  const { addToCart } = useCart();
  const product = productsData.find((p) => p.isFeatured) || productsData[0];
  const [selectedImage, setSelectedImage] = useState(product.mainImage);
  const [selectedSize, setSelectedSize] = useState(product.packageSizes[0]);

  const allImages = [product.mainImage, ...product.extraPhotos];

  return (
    <section className="py-24 bg-gradient-to-br from-tea-950 via-tea-900 to-tea-950 text-white relative overflow-hidden border-y border-tea-800">
      {/* Background ambient lighting */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gold-600/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-tea-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Gallery */}
          <div className="lg:col-span-6 flex flex-col items-center">
            {/* Main Showcase Image */}
            <div className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden bg-white/5 p-8 border border-gold-500/20 shadow-2xl backdrop-blur-sm group">
              <Image
                src={selectedImage}
                alt={product.title}
                fill
                className="object-contain p-6 group-hover:scale-105 transition-transform duration-700 drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)]"
              />

              <div className="absolute top-4 left-4 rounded-full bg-gold-500/20 border border-gold-400/40 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-300 backdrop-blur-md">
                Masterwork Selection
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-6 flex items-center gap-3">
              {allImages.slice(0, 4).map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative h-16 w-16 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === img
                      ? 'border-gold-400 scale-105 shadow-glow'
                      : 'border-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt="Thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Product Details & Agronomy Telemetry */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-gold-400 mb-3">
              <Sparkles className="h-4 w-4 text-gold-400" />
              <span>Agro-Tech Flagship Reserve</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              {product.title}
            </h2>

            <p className="mt-2 text-gold-300 font-serif italic text-lg">
              {product.subtitle}
            </p>

            <p className="mt-5 text-sm sm:text-base text-tea-100/80 leading-relaxed">
              {product.description}
            </p>

            {/* Flavor Tasting Profile Radar / Meters */}
            <div className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
              <h4 className="text-xs uppercase tracking-widest font-bold text-tea-200 mb-4">
                Phytochemical Tasting Profile
              </h4>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="flex justify-between text-tea-100 mb-1">
                    <span>Umami & Savory</span>
                    <span className="text-gold-300 font-bold">5.0 / 5.0</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gold-400 rounded-full w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-tea-100 mb-1">
                    <span>Natural Sweetness</span>
                    <span className="text-gold-300 font-bold">4.5 / 5.0</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gold-400 rounded-full w-[90%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-tea-100 mb-1">
                    <span>Floral Aroma</span>
                    <span className="text-gold-300 font-bold">4.8 / 5.0</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gold-400 rounded-full w-[96%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-tea-100 mb-1">
                    <span>Bitterness / Tannins</span>
                    <span className="text-tea-300 font-bold">Very Low</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-tea-400 rounded-full w-[15%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Brewing Protocol Quick Guide */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-white/5 p-3.5 border border-white/5 text-center">
                <Thermometer className="h-4 w-4 text-gold-400 mx-auto mb-1" />
                <span className="block text-[10px] text-tea-200">Water Temp</span>
                <span className="text-xs font-bold text-white">{product.brewingGuide.temp}</span>
              </div>

              <div className="rounded-xl bg-white/5 p-3.5 border border-white/5 text-center">
                <Clock className="h-4 w-4 text-gold-400 mx-auto mb-1" />
                <span className="block text-[10px] text-tea-200">Whisk Duration</span>
                <span className="text-xs font-bold text-white">40 Seconds</span>
              </div>

              <div className="rounded-xl bg-white/5 p-3.5 border border-white/5 text-center">
                <RotateCcw className="h-4 w-4 text-gold-400 mx-auto mb-1" />
                <span className="block text-[10px] text-tea-200">Origin Terroir</span>
                <span className="text-xs font-bold text-white truncate">Uji Highlands</span>
              </div>
            </div>

            {/* Size & Purchase */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="text-xs text-tea-300 block mb-2 font-medium">Select Packaging:</span>
                <div className="flex gap-2">
                  {product.packageSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                        selectedSize === size
                          ? 'bg-gold-500 text-tea-950 font-bold shadow-md'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-gold-300">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="block text-[10px] text-tea-300">In Stock • Fresh Batch</span>
                </div>

                <button
                  onClick={() => addToCart(product, selectedSize)}
                  className="inline-flex items-center gap-2 rounded-xl bg-gold-500 px-6 py-3.5 text-sm font-bold text-tea-950 shadow-lg hover:bg-gold-400 transition-colors"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>Add to Bag</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
