"use client";

import React from 'react';

const TopGiftsHorizontal = () => {
  const gifts = [
    {
      id: 1,
      title: "Nuptse",
      image: {
        desktop: "https://assets.thenorthface.com/image/upload/c_limit,w_1920/q_auto:best,f_auto:image,d_na.png/v1760543736/251021-holiday-gg-widget-nuptse-d",
        mobile: "https://assets.thenorthface.com/image/upload/c_limit,w_1080/q_auto:best,f_auto:image,d_na.png/v1760543737/251021-holiday-gg-widget-nuptse-d-m",
        alt: "Nuptse jacket by The North Face."
      },
      link: "/en-us/c/shop-all/icons/nuptse-829805"
    },
    {
      id: 2,
      title: "Gloves",
      image: {
        desktop: "https://assets.thenorthface.com/image/upload/q_auto:best,f_auto:image,d_na.png/v1760543733/251021-holiday-gg-widget-gloves-d",
        mobile: "https://assets.thenorthface.com/image/upload/q_auto:best,f_auto:image,d_na.png/v1760543735/251021-holiday-gg-widget-gloves-m",
        alt: "Gloves by The North Face"
      },
      link: "/en-us/c/shop-all/gloves-730284"
    },
    {
      id: 3,
      title: "Gifts Under $100",
      image: {
        desktop: "https://assets.thenorthface.com/image/upload/q_auto:best,f_auto:image,d_na.png/v1760543733/251021-holiday-gg-widget-gifts-d",
        mobile: "https://assets.thenorthface.com/image/upload/q_auto:best,f_auto:image,d_na.png/v1760543734/251021-holiday-gg-widget-gifts-m",
        alt: "Sling bag by The North Face."
      },
      link: "/en-us/c/gifts-under-100-829864"
    }
  ];

  return (
    <div className="w-full py-8">
      <div className="container mx-auto px-4">
        {/* Horizontal Cards Container */}
        <div className="relative">
          {/* Cards Grid - Horizontal Layout */}
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-6">
            {gifts.map((gift) => (
              <div 
                key={gift.id}
                data-test-id={`VfCanvasLinkedCard-${gift.id}`}
                className="flex-1 min-w-0 group"
                style={{
                  maxWidth: '414px' // 1242 / 3 = 414px per card
                }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  {/* Image Container with specified dimensions */}
                  <div className="relative overflow-hidden">
                    <picture>
                      <source 
                        srcSet={gift.image.desktop} 
                        media="(min-width:768px)"
                      />
                      <img 
                        src={gift.image.desktop}
                        alt={gift.image.alt}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        style={{
                          width: '1242px',
                          height: '431.57px',
                          maxWidth: '100%',
                          aspectRatio: '1242 / 431.57'
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
                  <div className="p-4 text-center">
                    <h2 className="text-xl font-semibold text-gray-900">
                      <a 
                        href={gift.link}
                        className="hover:text-gray-700 transition-colors duration-200 block"
                        role="link"
                        data-test-id="base-link"
                        data-cta={`${gift.title} (${gift.link.split('-').pop()})`}
                      >
                        {gift.title}
                      </a>
                    </h2>
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

export default TopGiftsHorizontal;