"use client";

import React from 'react';

const HolidayTradeInBanner = () => {
  return (
    <div className="w-full">
     
      <div 
        className="w-full relative bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://assets.thenorthface.com/image/upload/q_auto:best,f_auto:image,d_na.png/v1759512376/1001-holiday-trade-in-promo_thin-banner-desktop)',
          minHeight: '280px'
        }}
      >
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Background Image for Mobile */}
        <picture className="md:hidden absolute inset-0">
          <img 
            src="https://assets.thenorthface.com/image/upload/q_auto:best,f_auto:image,d_na.png/v1759512374/1001-holiday-trade-in-promo_thin-banner-mobile"
            alt="Snowy mountain range with gray sky background"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </picture>

        {/* Content Container */}
        <div className="relative z-10 w-full py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 max-w-7xl mx-auto gap-6 md:gap-8">
            {/* Text Content */}
            <div className="flex-1 space-y-4 text-white">
              {/* Title */}
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                <a 
                  href="https://www.thenorthfacerenewed.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="hover:text-gray-200 transition-colors"
                  data-cta="EXT Link - Trade in"
                >
                  Holiday Trade-in Exclusive 10.1-1.31
                </a>
              </h2>

              {/* Description */}
              <div className="space-y-2">
                <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                  Earn an extra $5 on all outerwear trade-ins and an extra $10 on Nuptses, Denalis
                  and Mountain Jackets, in addition to our standard $10, $30 or $50 trade-in credit.
                </p>
                
                {/* Terms */}
                <p className="text-xs md:text-sm text-gray-200">
                  Limitations and exclusions apply.{' '}
                  <a 
                    href="/en-us/policies/xplrpass-renewed-takeback"
                    className="underline hover:text-white transition-colors"
                  >
                    See Terms.
                  </a>
                </p>
              </div>
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <a 
                href="https://www.thenorthfacerenewed.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-colors duration-200 rounded-md text-base font-medium shadow-sm min-w-[160px] font-semibold"
                data-cta="EXT Link - Trade in"
              >
                Start Trade-In
              </a>
            </div>
          </div>
        </div>

        {/* Overlay Link for Entire Banner */}
        <a 
          href="https://www.thenorthfacerenewed.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="absolute inset-0 z-5"
          aria-hidden="true"
          tabIndex={-1}
          data-cta="EXT Link - Trade in"
        />
      </div>

      {/* CTA Button - Mobile */}
      <div className="md:hidden bg-gray-900">
        <div className="px-6 py-4">
          <a 
            href="https://www.thenorthfacerenewed.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 hover:bg-gray-100 transition-colors duration-200 rounded-md text-sm font-medium w-full font-semibold"
            data-cta="EXT Link - Trade in"
          >
            Start Trade-In
          </a>
        </div>
      </div>
    </div>
  );
};

export default HolidayTradeInBanner;