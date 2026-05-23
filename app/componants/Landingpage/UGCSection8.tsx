"use client";

import React from 'react';

const UGCSection = () => {
  return (
    <div className="w-full py-8 bg-white">
      <div className="container mx-auto px-4">
        <div 
          className="text-center mx-auto space-y-4"
          style={{
            maxWidth: '1274px',
            height: '152px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            #NeverStopExploring
          </h1>

          {/* Description Paragraph */}
          <div className="space-y-2">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              We love seeing our gear out in the wild. Share your photos with{' '}
              <a 
                href="https://www.instagram.com/explore/search/keyword/?q=%23neverstopexploring"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-900 transition-colors duration-200 font-medium"
              >
                #neverstopexploring
              </a>
              , and tag{' '}
              <a 
                href="https://www.instagram.com/thenorthface"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-900 transition-colors duration-200 font-medium"
              >
                @thenorthface
              </a>
              {' '}to be featured here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UGCSection;