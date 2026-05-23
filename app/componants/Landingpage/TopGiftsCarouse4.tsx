"use client";

import React from 'react';
import Image from 'next/image';

const TopGiftsCarousel = () => {
  const gifts = [
    {
      id: 1,
      title: "Slippers",
      image: {
        desktop: "https://assets.thenorthface.com/image/upload/c_limit,w_1920/q_auto:best,f_auto:image,d_na.png/v1760543738/251021-holiday-gg-widget-slippers-d",
        mobile: "https://assets.thenorthface.com/image/upload/c_limit,w_1080/q_auto:best,f_auto:image,d_na.png/v1761840793/251021-holiday-gg-widget-slippers-m",
        alt: "Green booties slippers by The North Face."
      },
      link: "/en-us/c/shop-all/slippers-829865"
    },
    {
      id: 2,
      title: "Fleece",
      image: {
        desktop: "https://assets.thenorthface.com/image/upload/q_auto:best,f_auto:image,d_na.png/v1760543731/251021-holiday-gg-widget-fleece-d",
        mobile: "https://assets.thenorthface.com/image/upload/q_auto:best,f_auto:image,d_na.png/v1760543732/251021-holiday-gg-widget-fleece-m",
        alt: "Green high pile fleece by The North Face."
      },
      link: "/en-us/c/shop-all/fleece-723792"
    },
    {
      id: 3,
      title: "Beanies",
      image: {
        desktop: "https://assets.thenorthface.com/image/upload/q_auto:best,f_auto:image,d_na.png/v1760543729/251021-holiday-gg-widget-beanies-d",
        mobile: "https://assets.thenorthface.com/image/upload/q_auto:best,f_auto:image,d_na.png/v1761840713/251021-holiday-gg-widget-beanies-m",
        alt: "Knit beanie by The North Face."
      },
      link: "/en-us/c/shop-all/beanies-829866"
    }
  ];

  return (
    <div className="w-full py-8">
      {/* Full width container */}
      <div className="w-full px-4">
        {/* Header Section */}
        <div className="pb-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore our top gifts.
          </h2>
        </div>

        {/* Full Width Cards Container */}
        <div className="w-full">
          {/* Cards Grid - Full width horizontal layout */}
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 md:gap-6 w-full">
            {gifts.map((gift) => (
              <div 
                key={gift.id}
                data-test-id={`VfCanvasLinkedCard-${gift.id}`}
                className="flex-1 w-full group"
              >
                <div className="bg-white overflow-hidden transition-all duration-300 h-full flex flex-col w-full">
                  {/* Image Container - Full width */}
                  <div className="relative overflow-hidden w-full">
                    <picture className="w-full block">
                      <source 
                        srcSet={gift.image.desktop} 
                        media="(min-width:768px)"
                      />
                      <img 
                        src={gift.image.mobile}
                        alt={gift.image.alt}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        style={{
                          aspectRatio: '4/3',
                          minHeight: '250px',
                          width: '100%',
                          display: 'block'
                        }}
                        loading="lazy"
                      />
                    </picture>
                    
                    {/* Overlay Link */}
                    <a 
                      href={gift.link}
                      className="absolute inset-0"
                      role="link"
                      aria-hidden="true"
                      tabIndex={-1}
                      data-cta={`${gift.title} (${gift.link.split('-').pop()})`}
                    />
                  </div>
                  
                  {/* Title Section */}
                  <div className="p-6 text-center w-full">
                    <h3 className="text-xl font-semibold text-gray-900">
                      <a 
                        href={gift.link}
                        className="hover:text-gray-700 transition-colors duration-200 block"
                        role="link"
                        data-test-id="base-link"
                        data-cta={`${gift.title} (${gift.link.split('-').pop()})`}
                      >
                        {gift.title}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopGiftsCarousel;