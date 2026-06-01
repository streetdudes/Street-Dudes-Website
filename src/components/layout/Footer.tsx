'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { RestaurantMap } from '../map/RestaurantMap';

/**
 * Footer component providing site footer information including address,
 * opening hours, tagline, brand logo, and the interactive location map.
 *
 * WHY: Delivers high fidelity localized layout and navigation details at the viewport bottom.
 */
export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="w-full bg-[#0b0b0b] border-t border-[#F5A500]/10 py-12 px-6 shadow-2xl mt-auto animate-none">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Restaurant Map Embed */}
        <div className="w-full">
          <RestaurantMap />
        </div>

        {/* Right Column: Brand Details, Tagline, Address, Hours, Rating Chip */}
        <div className="flex flex-col gap-4 text-left">
          <div className="flex flex-col">
            <h3 className="text-2xl font-extrabold tracking-wider text-[#F5A500] font-display uppercase">
              STREET DUDES
            </h3>
            <p className="text-xs text-zinc-500 font-body italic mt-0.5">{t('tagline')}</p>
          </div>

          <div className="flex flex-col gap-2.5 font-body text-xs text-zinc-400">
            <div className="flex gap-2.5 items-start">
              <svg
                className="w-4 h-4 text-[#F5A500] shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{t('address')}</span>
            </div>

            <div className="flex gap-2.5 items-center">
              <svg
                className="w-4 h-4 text-[#F5A500] shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h2.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.242.923L7.13 8.28a15.147 15.147 0 006.59 6.59l1.414-1.415a1 1 0 01.923-.242l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
                href="tel:+46705937920"
                className="text-white/60 text-sm hover:text-white/90 
                            transition-colors"
              >
                {t('phone')}
              </a>
            </div>

            <div className="flex gap-2.5 items-center">
              <svg
                className="w-4 h-4 text-[#F5A500] shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              <a
                href="https://www.tiktok.com/@streetdudesboras"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Street Dudes på TikTok"
                className="text-white/60 text-sm hover:text-brand-gold 
                            transition-colors tracking-wide uppercase"
              >
                TikTok ↗
              </a>
            </div>

            <div className="flex gap-2.5 items-start">
              <svg
                className="w-4 h-4 text-[#F5A500] shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="flex flex-col">
                <span className="font-bold text-zinc-300 uppercase tracking-wider text-[10px] font-display">
                  Öppettider / Opening Hours
                </span>
                <span className="mt-0.5 whitespace-pre-line">{t('openingHours')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
