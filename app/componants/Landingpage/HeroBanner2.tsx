"use client";

import React, { useState, useEffect, useRef } from "react";

const HeroBanner = () => {
  const banners = [
    {
      id: 1,
      title: "Never fear the forecast",
      description: "The cold can't stop you in uncompromising jackets made to weather every storm.",
      image: {
        desktop:
          "https://assets.thenorthface.com/image/upload/c_limit,w_1920/q_auto:best,f_auto:image,d_na.png/v1760393932/tnf-251021-fw25wp-hp-hero-banner-d",
        mobile:
          "https://assets.thenorthface.com/image/upload/c_limit,w_1080/q_auto:best,f_auto:image,d_na.png/v1760393930/tnf-251021-fw25wp-hp-hero-m",
      },
      buttons: [
        { text: "Shop Women's Jackets", href: "#" },
        { text: "Shop Men's Jackets", href: "#" },
        { text: "Shop Kids' Jackets", href: "#" },
      ],
      textColor: "#fff",
    },
    {
      id: 2,
      title: "Exploration is",
      subtitle: "a gift.",
      description: "The right gear helps you unwrap it.",
      image: {
        desktop:
          "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2022/05/fjallraven_ss22-best-leggings-1940x1293.jpg",
        mobile:
          "https://assets.thenorthface.com/image/upload/c_limit,w_1080/q_auto:best,f_auto:image,d_na.png/v1760543704/251021-holiday-gg-hp-hero-m",
      },
      buttons: [
        { text: "Gifts for Her", href: "https://www.thenorthface.com/en-us/c/gifts-for-her-293/4" },
        { text: "Gifts for Him", href: "#" },
        { text: "Gifts for Kids", href: "#" },
      ],
      textColor: "#fff",
      leftAligned: true, // New property for left-aligned layout
      hasBackground: true,
    },
    {
      id: 3,
      title: "",
      description: "",
      image: {
        desktop:
          "https://assets.thenorthface.com/image/upload/c_limit,w_1920/q_auto:best,f_auto:image,d_na.png/v1760486587/TNFxBialetti_HP_Hero-d_1",
        mobile:
          "https://assets.thenorthface.com/image/upload/c_limit,w_1080/q_auto:best,f_auto:image,d_na.png/v1760552254/TNFxBialetti_HP_Hero-m",
      },
      buttons: [{ text: "Shop the Collection", href: "#" }],
      textColor: "#fff",
      constantText: {
        line1: "THE",
        line2: "STOP EXPLORING*",
        line3: "Just for a moment.",
        description: "Every expedition needs good coffee. Crafted for any kind of adventure, The North Face X Bialetti coffee set is a bold gift for the adventurous."
      }
    },
  ];

  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const delay = 4000;

  useEffect(() => {
    if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);

    timeoutRef.current = window.setTimeout(() => {
      setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, delay);

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slider Track */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((banner) => (
          <div key={banner.id} className="w-full shrink-0 relative h-[600px] md:h-[700px]">
            {/* Background Image - Full visibility */}
            <div className="absolute inset-0">
              <picture>
                <source media="(min-width:1024px)" srcSet={banner.image.desktop} />
                <img
                  src={banner.image.mobile}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>

            {/* Background Overlay for Banner 2 */}
            {banner.hasBackground && (
              <div className="absolute inset-0 bg-black/30 z-5"></div>
            )}

            {/* Banner Layout Conditions */}
            {banner.leftAligned ? (
              // Left-aligned layout for "Exploration is a gift" banner
              <div className="absolute inset-0 flex items-end justify-start z-10 pb-8 md:pb-12">
                <div className="text-left px-6 md:px-16 max-w-2xl">
                  {/* Main Title Split */}
                  <div className="space-y-2 mb-6">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                      {banner.title}
                    </h1>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                      {banner.subtitle}
                    </h1>
                  </div>

                  {/* Description */}
                  {banner.description && (
                    <p className="text-xl md:text-2xl text-white mb-8 max-w-md font-medium">
                      {banner.description}
                    </p>
                  )}

                  {/* Buttons - Horizontal layout */}
                  <div className="flex flex-col sm:flex-row justify-start items-start gap-4 md:gap-6">
                    {banner.buttons.map((btn, i) => (
                      <a
                        key={i}
                        href={btn.href}
                        className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100 duration-300 font-semibold text-base whitespace-nowrap transition-all shadow-lg"
                      >
                        {btn.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : banner.constantText ? (
              // Layout for "THE STOP EXPLORING" banner
              <div className="absolute bottom-0 left-0 flex flex-col justify-end px-6 md:px-16 z-10 pb-8 md:pb-12">
                <div className="space-y-4 mb-6 text-white text-left">
                  <div className="space-y-2">
                    <div className="text-4xl md:text-6xl font-bold tracking-tight leading-none">
                      {banner.constantText.line1}
                    </div>
                    <div className="text-4xl md:text-6xl font-bold tracking-tight leading-none">
                      {banner.constantText.line2}
                    </div>
                  </div>
                  <div className="text-xl md:text-2xl font-semibold italic">
                    {banner.constantText.line3}
                  </div>
                  <p className="text-lg md:text-xl max-w-2xl leading-relaxed">
                    {banner.constantText.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  {banner.buttons.map((btn, i) => (
                    <a
                      key={i}
                      href={btn.href}
                      className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 duration-300 font-medium"
                    >
                      {btn.text}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              // Default layout for other banners
              <div className="absolute bottom-0 left-0 flex flex-col justify-end px-6 md:px-16 z-10 pb-8 md:pb-12">
                {banner.title && (
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 max-w-2xl text-white">
                    {banner.title}
                  </h2>
                )}
                {banner.description && (
                  <p className="text-lg md:text-xl mb-6 max-w-lg text-white">
                    {banner.description}
                  </p>
                )}
                <div className="flex flex-wrap gap-4">
                  {banner.buttons.map((btn, i) => (
                    <a
                      key={i}
                      href={btn.href}
                      className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 duration-300 font-medium"
                    >
                      {btn.text}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 absolute bottom-5 w-full z-20">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${i === current ? "bg-white scale-125" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;