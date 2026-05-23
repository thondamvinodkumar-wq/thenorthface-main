"use client";

import React, { useRef, useState } from 'react';

interface ImageData {
  desktop: string;
  mobile: string;
  alt: string;
}

interface VideoData {
  desktop: string;
  mobile: string;
  poster: string;
  alt: string;
}

interface CardData {
  id: number;
  type: 'image' | 'video';
  title: string;
  subtitle: string;
  cta: string;
  link: string;
  image?: ImageData;
  video?: VideoData;
  textColor: string;
}

const HydrenaliteBanner = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingStates, setPlayingStates] = useState<boolean[]>([]);

  const togglePlayPause = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (playingStates[index]) {
        video.pause();
      } else {
        video.play();
      }
      setPlayingStates(prev => {
        const newStates = [...prev];
        newStates[index] = !newStates[index];
        return newStates;
      });
    }
  };

  // Initialize video refs array
  const setVideoRef = (index: number) => (el: HTMLVideoElement | null) => {
    videoRefs.current[index] = el;
  };

  const cards: CardData[] = [
    {
      id: 1,
      type: 'image',
      title: "Weather the cold. Hydrenalite City.",
      subtitle: "",
      cta: "Shop Hydrenalite",
      link: "/en-us/c/shop-all/jackets/hydrenalite-jackets-829916",
      image: {
        desktop: "https://assets.thenorthface.com/image/upload/c_limit,w_1920/q_auto:best,f_auto:image,d_na.png/v1760557206/HP-SM-BANNER-Card-1-D",
        mobile: "https://assets.thenorthface.com/image/upload/c_limit,w_1080/q_auto:best,f_auto:image,d_na.png/v1760628220/HP-SM-BANNER-Card-1-M",
        alt: "A female wearing The North Face Hydrenalite City Long Down Hooded Parka in White Dune and a brown knit beanie looks down against a neutral background."
      },
      textColor: "text-white"
    },
    {
      id: 2,
      type: 'video',
      title: "_",
      subtitle: "HYDRENALITE™ CITY<br>DOWN HOODED JACKET",
      cta: "",
      link: "/en-us#modal=quickshop_NF0A8D3JJK3",
      video: {
        desktop: "https://assets.thenorthface.com/video/upload/c_limit,w_1920/ac_none/q_auto:best,f_auto:video,d_na.png/v1760557209/HP-SM-BANNER-Card_2_D",
        mobile: "https://assets.thenorthface.com/video/upload/c_limit,w_1080/ac_none/q_auto:best,f_auto:video,d_na.png/v1760557210/HP-SM-BANNER-Card_2_M",
        poster: "https://assets.thenorthface.com/video/upload/q_auto,f_auto:image/v1760557210/HP-SM-BANNER-Card_2_M",
        alt: "A female wearing The North Face Hydrenalite City Long Down Hooded Parka in White Dune and a brown knit beanie looks down against a neutral background."
      },
      textColor: "text-white"
    },
    {
      id: 3,
      type: 'image',
      title: "_",
      subtitle: "HYDRENALITE™ CITY<br>DOWN HOODED PARKA",
      cta: "",
      link: "/en-us#modal=quickshop_NF0A8D3KBQ7",
      image: {
        desktop: "https://assets.thenorthface.com/image/upload/c_limit,w_1920/q_auto:best,f_auto:image,d_na.png/v1760557206/HP-SM-BANNER-Card-3-D",
        mobile: "https://assets.thenorthface.com/image/upload/c_limit,w_1080/q_auto:best,f_auto:image,d_na.png/v1760557208/HP-SM-BANNER-Card-3-M",
        alt: "A female wearing The North Face Hydrenalite City Long Down Hooded Parka in White Dune and a brown knit beanie looks down against a neutral background."
      },
      textColor: "text-white"
    }
  ];

  // Initialize playing states
  React.useEffect(() => {
    setPlayingStates(cards.map(card => card.type === 'video'));
    // Initialize video refs array
    videoRefs.current = videoRefs.current.slice(0, cards.length);
  }, []);

  return (
    <div className="w-full py-4">
      {/* Full width container */}
      <div className="w-full px-0">
        {/* Full Width Cards Container */}
        <div className="w-full">
          {/* Cards Grid - Full width horizontal layout */}
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 md:gap-6 w-full">
            {cards.map((card, index) => (
              <div 
                key={card.id}
                data-test-id={`VfCanvasLinkedCard-${card.id}`}
                className="flex-1 w-full group relative overflow-hidden"
                style={{
                  height: '350px' // Increased height for better visibility
                }}
              >
                {/* Media Content */}
                <div className="absolute inset-0 w-full h-full">
                  {card.type === 'image' && card.image ? (
                    <picture className="w-full h-full block">
                      <source 
                        srcSet={card.image.desktop} 
                        media="(min-width:768px)"
                      />
                      <img 
                        src={card.image.desktop}
                        alt={card.image.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </picture>
                  ) : card.type === 'video' && card.video ? (
                    <div className="relative w-full h-full">
                      <video
                        ref={setVideoRef(index)}
                        className="w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        poster={card.video.poster}
                        preload="metadata"
                        autoPlay
                      >
                        <source 
                          src={card.video.desktop} 
                          media="(min-width:1024px)" 
                        />
                        <source 
                          src={card.video.desktop} 
                          media="(min-width:768px)" 
                        />
                        <source 
                          src={card.video.mobile} 
                        />
                      </video>
                      
                      {/* Play/Pause Button */}
                      <button
                        data-test-id="base-button"
                        type="button"
                        aria-label={playingStates[index] ? "Pause Video" : "Play Video"}
                        className="absolute right-0 z-10 text-white duration-200 m-4 bottom-0 hover:text-gray-300"
                        onClick={() => togglePlayPause(index)}
                      >
                        <i 
                          aria-hidden="true" 
                          className="block shrink-0"
                          style={{
                            background: 'currentColor',
                            mask: `url("https://www.thenorthface.com/_nuxt/nora/icons.CbT-bG8V.svg#${playingStates[index] ? 'pause' : 'play'}") left center / contain no-repeat`,
                            width: '1rem',
                            height: '2rem'
                          }}
                        ></i>
                      </button>
                    </div>
                  ) : (
                    // Fallback in case of missing data
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Media not available</span>
                    </div>
                  )}
                </div>

                {/* Overlay Link */}
                <a 
                  href={card.link}
                  className="absolute inset-0 z-5"
                  role={card.id === 1 ? "link" : "button"}
                  aria-hidden="true"
                  tabIndex={-1}
                  data-cta={card.id === 1 ? "Hydrenalite Jackets (829916)" : 
                           card.id === 2 ? "Quickshop - Hydrenalite City Hooded Jacket" : 
                           "Quickshop - Hydrenalite City Down Hooded Parka"}
                />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <div className="space-y-2 lg:space-y-4 text-left">
                    {/* Title */}
                    {card.title !== "_" && (
                      <h2 className={`text-2xl md:text-3xl font-bold ${card.textColor}`}>
                        <a 
                          href={card.link}
                          className="hover:opacity-80 transition-opacity"
                          role={card.id === 1 ? "link" : "button"}
                          data-test-id="base-link"
                        >
                          {card.title}
                        </a>
                      </h2>
                    )}

                    {/* Subtitle */}
                    {card.subtitle && (
                      <div className={`text-sm ${card.textColor} font-secondary`}>
                        <p dangerouslySetInnerHTML={{ __html: card.subtitle }} />
                      </div>
                    )}

                    {/* CTA Button */}
                    {card.cta && (
                      <div className="flex items-start">
                        <a 
                          href={card.link}
                          className="inline-flex items-center justify-center px-6 py-3 bg-white text-black hover:bg-gray-100 rounded-full  text-sm font-medium"
                          role="link"
                          aria-disabled="false"
                        >
                          <span className="flex items-center justify-center gap-1 text-center">
                            <span>{card.cta}</span>
                          </span>
                        </a>
                      </div>
                    )}
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

export default HydrenaliteBanner;