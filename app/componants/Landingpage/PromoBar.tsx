// app/components/Landingpage/PromoBar.tsx
'use client';

import React from 'react';

const PromoBar = () => {
  const handleClose = () => {
    // Handle closing the promo bar
    console.log('Close promo bar');
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="w-full bg-black text-white">
        <div className="relative w-full mx-auto h-12 flex items-center justify-center px-8">
          {/* Promo message */}
          <div className="w-full text-center px-4">
            <a 
              href="/en-us/xplr-pass" 
              className="text-xs font-medium transition-all duration-200 block w-full"
            >
              <p className="line-clamp-2 underline underline-offset-2 decoration-1">
                XPLR Pass members make the most of the holiday season with free shipping. Sign In.
              </p>
            </a>
          </div>
          
          {/* Close button */}
          <button 
            onClick={handleClose}
            type="button" 
            aria-label="Hide"
            className="absolute right-8 top-0 self-center p-3 hover:text-gray-300 transition-colors duration-200"
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-current"
            >
              <path 
                d="M12 4L4 12M4 4L12 12" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBar;