'use client';

import React from 'react';
import Image from 'next/image';

const PickUpWhereYouLeftOff = () => {
  const products = [
    {
      id: 1,
      name: "Base Camp Voyager Daypack (26L)",
      price: "$139.00",
      originalPrice: null,
      image: "https://assets.thenorthface.com/images/t_img/f_auto,h_349,e_unsharp_mask:150,w_300/dpr_2.0/v1750345010/NF0A81DM926-HERO/Base-Camp-Voyager-Daypack-26L.png?$PLP-IMAGE$",
      alt: "Base Camp Voyager Daypack (26L)"
    },
    {
      id: 2,
      name: "Men's Evolution BTS Hoodie—Graphic",
      price: "$46.00",
      originalPrice: "$65.00",
      image: "https://assets.thenorthface.com/images/t_img/f_auto,h_349,e_unsharp_mask:150,w_300/dpr_2.0/v1748527638/NF0A8E9SBOM-HERO/Mens-Evolution-BTS-HoodieGraphic.png?$PLP-IMAGE$",
      alt: "Men's Evolution BTS Hoodie—Graphic"
    },
    {
      id: 3,
      name: "Women's Arctic Bomber",
      price: "$300.00",
      originalPrice: null,
      image: "https://assets.thenorthface.com/images/t_img/f_auto,h_349,e_unsharp_mask:150,w_300/dpr_2.0/v1752167357/NF0A84IYQLI-HERO/Womens-Arctic-Bomber.png?$PLP-IMAGE$",
      alt: "Women's Arctic Bomber"
    },
    {
      id: 4,
      name: "Women's Hydrenalite™ Down A-Line Vest",
      price: "$150.00",
      originalPrice: null,
      image: "https://assets.thenorthface.com/images/t_img/f_auto,h_349,e_unsharp_mask:150,w_300/dpr_2.0/v1754067777/NF0A89VJBOB-HERO/Womens-Hydrenalite-Down-ALine-Vest.png?$PLP-IMAGE$",
      alt: "Women's Hydrenalite™ Down A-Line Vest"
    },
    {
      id: 5,
      name: "Men's Altamesa 300 Shoes",
      price: "$129.00",
      originalPrice: null,
      image: "https://assets.thenorthface.com/images/t_img/f_auto,h_349,e_unsharp_mask:150,w_300/dpr_2.0/v1722983136/NF0A8A9RMN8-HERO/Mens-Altamesa-300-Shoes.png?$PLP-IMAGE$",
      alt: "Men's Altamesa 300 Shoes"
    },
    {
      id: 6,
      name: "Women's Evolution Simple Dome Oversized Crew",
      price: "$60.00",
      originalPrice: null,
      image: "https://assets.thenorthface.com/images/t_img/f_auto,h_349,e_unsharp_mask:150,w_300/dpr_2.0/v1750346192/NF0A8FKTJK3-HERO/Womens-Evolution-Simple-Dome-Oversized-Crew.png?$PLP-IMAGE$",
      alt: "Women's Evolution Simple Dome Oversized Crew"
    },
    {
      id: 7,
      name: "Men's Freedom Bibs",
      price: "$220.00",
      originalPrice: null,
      image: "https://assets.thenorthface.com/images/t_img/f_auto,h_349,e_unsharp_mask:150,w_300/dpr_2.0/v1754338876/NF0A5ABT0VO-HERO/Mens-Freedom-Bibs.png?$PLP-IMAGE$",
      alt: "Men's Freedom Bibs"
    },
    {
      id: 8,
      name: "Multisport Cush Crew Socks—3P",
      price: "$20.00",
      originalPrice: null,
      image: "https://assets.thenorthface.com/images/t_img/f_auto,h_349,e_unsharp_mask:150,w_300/dpr_2.0/v1723274128/NF0A882HFN4-HERO/Multisport-Cush-Crew-Socks3P.png?$PLP-IMAGE$",
      alt: "Multisport Cush Crew Socks—3P"
    },
    {
      id: 9,
      name: "Women's THERMOBALL™ Traction Mules V",
      price: "$59.00",
      originalPrice: null,
      image: "https://assets.thenorthface.com/images/t_img/f_auto,h_349,e_unsharp_mask:150,w_300/dpr_2.0/v1754665334/NF0A3V1HD0P-HERO/Womens-THERMOBALL-Traction-Mules-V.png?$PLP-IMAGE$",
      alt: "Women's THERMOBALL™ Traction Mules V"
    },
    {
      id: 10,
      name: "Glenclyffe Mid Leather GORE-TEX® Boots",
      price: "$250.00",
      originalPrice: null,
      image: "https://assets.thenorthface.com/images/t_img/f_auto,h_349,e_unsharp_mask:150,w_300/dpr_2.0/v1753295862/NF0A8D94KX7-HERO/Glenclyffe-Mid-Leather-GORETEX-Boots.png?$PLP-IMAGE$",
      alt: "Glenclyffe Mid Leather GORE-TEX® Boots"
    }
  ];

  return (
    <div 
      className="mb-16" 
      data-placement="cms-lazy-main-13" 
      data-test-id="cms-bloomreach-recommendations-3413628" 
      data-tracking-id="Recently Viewed HP"
    >
      <div className="overflow-hidden container">
        <h2 className="mb-4 lg:mx-9 lg:mb-6 text-2xl font-bold">
          <span>Pick Up Where You Left Off</span>
        </h2>
        
        <div 
          className="relative -mx-2" 
          data-test-id="vf-carousel"
        >
          <div className="relative max-w-full">
            {/* Left Arrow Button */}
            <button 
              data-test-id="vf-carousel-arrow-left" 
              type="button" 
              aria-label="Previous" 
              className="top-1/2 transform -translate-y-1/2 left-0 absolute z-10 flex bg-white/50 -mt-9 mx-2 p-2 rounded-full shadow-lg hover:bg-white/80 transition-colors"
            >
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className="rotate-180"
              >
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>

            {/* Product Carousel */}
            <div className="flex overflow-x-auto scrollbar-hide snap-x space-x-4 px-2 py-4">
              {products.map((product) => (
                <div 
                  key={product.id}
                  className="w-1/2 md:w-1/4 lg:w-1/6 flex-shrink-0 px-2"
                >
                  <div className="h-full flex flex-col space-y-2">
                    <div className="relative flex flex-col space-y-2">
                      {/* Product Image */}
                     <div className="w-full aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
                          <img
                           src={product.image}
                       alt={product.alt}
                      className="w-full h-full object-cover"
                      />
                    </div>
                      
                      {/* Product Info */}
                      <div className="space-y-2">
                        <a 
                          href="#" 
                          className="line-clamp-2 self-start text-sm font-medium hover:text-blue-600 transition-colors"
                          role="link"
                          data-test-id="base-link"
                        >
                          {product.name}
                          <span className="absolute-0"></span>
                        </a>
                        
                        <div 
                          data-dynatrace="product-price" 
                          data-test-id="product-pricing" 
                          className="grow text-sm"
                        >
                          <span className="gap-x-2 flex items-center flex-wrap font-medium">
                            {product.originalPrice ? (
                              <>
                                <del className="text-gray-500 mr-2">
                                  <span className="sr-only">Initial price: </span> 
                                  {product.originalPrice}
                                </del>
                                <ins className="text-red-600 no-underline">
                                  <span className="sr-only">Discounted price: </span>
                                  <span className="whitespace-nowrap">{product.price}</span>
                                </ins>
                              </>
                            ) : (
                              <span>{product.price}</span>
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow Button */}
            <button 
              data-test-id="vf-carousel-arrow-right" 
              type="button" 
              aria-label="Next" 
              className="top-1/2 transform -translate-y-1/2 right-0 justify-end absolute z-10 flex bg-white/50 -mt-9 mx-2 p-2 rounded-full shadow-lg hover:bg-white/80 transition-colors"
            >
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1274px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .aspect-square {
          aspect-ratio: 1 / 1;
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 0 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PickUpWhereYouLeftOff;