'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { productsData } from '@/lib/teaData';
import { ArrowRight } from 'lucide-react';

export const MainProduct: React.FC = () => {
  const { addToCart } = useCart();
  const product = productsData[0];
  const [selectedImage, setSelectedImage] = useState(product.mainImage);
  const [selectedSize, setSelectedSize] = useState(product.packageSizes[0]);

  const allImages = [product.mainImage, ...product.extraPhotos];

  return (
    <section className="py-24 bg-[#14241C] text-[#FAF7F2] border-y border-[#243F32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Product Images */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-md aspect-square bg-[#1B3026] border border-[#2F4D3D] p-8">
              <Image
                src={selectedImage}
                alt={product.title}
                fill
                className="object-contain p-6"
              />
              <div className="absolute top-4 left-4 font-serif italic text-xs text-[#DEC284]">
                Solstice Reserve No. 01
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-4 flex items-center gap-3">
              {allImages.slice(0, 4).map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative h-16 w-16 border transition-all ${
                    selectedImage === img
                      ? 'border-[#DEC284] opacity-100'
                      : 'border-[#2F4D3D] opacity-50 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt="Thumb" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Masterwork Narrative */}
          <div className="lg:col-span-6">
            <span className="font-serif italic text-sm text-[#74A287] block mb-2">
              The Flagship Masterwork
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FAF7F2] leading-tight">
              {product.title}
            </h2>

            <p className="mt-2 text-sm text-[#C7DBD0] font-serif italic">
              {product.subtitle}
            </p>

            <p className="mt-6 text-sm sm:text-base text-[#DCD4C7] font-serif leading-relaxed">
              {product.description}
            </p>

            {/* Sensory Organoleptic Breakdown */}
            <div className="mt-8 border-y border-[#2F4D3D] py-6 space-y-3 font-serif">
              <div className="flex flex-col sm:flex-row sm:justify-between text-xs text-[#C7DBD0]">
                <span className="text-[#DEC284] uppercase tracking-wider text-[10px] font-sans font-semibold">
                  Aromatics
                </span>
                <span>Steamed young bamboo, roasted chestnut, warm wild honey</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between text-xs text-[#C7DBD0]">
                <span className="text-[#DEC284] uppercase tracking-wider text-[10px] font-sans font-semibold">
                  Mouthfeel & Palate
                </span>
                <span>Thick, velvet micro-crema, sweet vegetal umami, zero astringency</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between text-xs text-[#C7DBD0]">
                <span className="text-[#DEC284] uppercase tracking-wider text-[10px] font-sans font-semibold">
                  Origin Terroir
                </span>
                <span>{product.origin} • {product.elevation}</span>
              </div>
            </div>

            {/* Brewing Method Card */}
            <div className="mt-6 bg-[#1B3026] p-4 border border-[#2F4D3D] text-xs font-serif text-[#C7DBD0]">
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#DEC284] font-bold block mb-1">
                The Gentle Steep
              </span>
              <p className="leading-relaxed">
                Whisk 2g with 70ml of spring water cooled to 75°C using a 100-prong bamboo chasen. Drink immediately while the froth floats like silk.
              </p>
            </div>

            {/* Size & Purchase */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#74A287] block mb-2">
                  Select Format:
                </span>
                <div className="flex gap-2">
                  {product.packageSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1 text-xs border transition-colors ${
                        selectedSize === size
                          ? 'bg-[#FAF7F2] text-[#182B22] border-[#FAF7F2] font-semibold'
                          : 'bg-transparent text-[#DCD4C7] border-[#2F4D3D] hover:border-[#DEC284]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <span className="font-serif text-2xl font-bold text-[#DEC284]">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <span className="block text-[10px] text-[#74A287]">Fresh Pluck Sealed at Garden</span>
                </div>

                <button
                  onClick={() => addToCart(product, selectedSize)}
                  className="bg-[#DEC284] text-[#182B22] px-6 py-3 text-xs uppercase tracking-widest-estate font-bold hover:bg-[#FAF7F2] transition-colors"
                >
                  Add to Bag
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
