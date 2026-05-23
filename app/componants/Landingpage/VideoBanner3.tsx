"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';

const VideoBannerWithContent = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="flex flex-col" style={{ margin: '-1rem 0' }}>
            {/* Video and Image Section */}
            <div className="relative">
                <div className="relative w-full" data-test-id="vf-video">
                    <video
                        ref={videoRef}
                        className="w-full h-auto object-cover"
                        style={{
                            aspectRatio: '392 / 120', // Reduced height from 150 to 120
                            margin: '0.5rem 0',
                            display: 'block',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            objectFit: 'cover'
                        }}
                        loop
                        muted
                        playsInline
                        poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        preload="metadata"
                        autoPlay
                        itemScope
                        itemType="https://schema.org/VideoObject"
                    >
                        <meta itemProp="contentUrl" content="https://assets.thenorthface.com/video/upload/c_limit,w_1080/ac_none/q_auto:best,f_auto:video,d_na.png/v1761882128/tnf-251104-fw25-bcfw-plp-banner-m" />
                        <meta itemProp="thumbnailUrl" content="https://assets.thenorthface.com/video/upload/q_auto,f_auto:image/v1761882128/tnf-251104-fw25-bcfw-plp-banner-m" />
                        <meta itemProp="name" content="Person walking across snowy terrain in The North Face Base Camp ThermoBall™ Mules in Calacatta beneath rugged mountain peaks." />

                        {/* Video sources */}
                        <source
                            src="https://assets.thenorthface.com/video/upload/c_limit,w_1920/ac_none/q_auto:best,f_auto:video,d_na.png/v1761882128/tnf-251104-fw25-bcfw-plp-banner-d"
                            media="(min-width:1024px)"
                        />
                        <source
                            src="https://assets.thenorthface.com/video/upload/c_limit,w_1080/ac_none/q_auto:best,f_auto:video,d_na.png/v1761882128/tnf-251104-fw25-bcfw-plp-banner-d"
                            media="(min-width:768px)"
                        />
                        <source
                            src="https://assets.thenorthface.com/video/upload/c_limit,w_1080/ac_none/q_auto:best,f_auto:video,d_na.png/v1761882128/tnf-251104-fw25-bcfw-plp-banner-m"
                        />
                    </video>

                    {/* Pause/Play Button */}
                    <button
                        data-test-id="base-button"
                        type="button"
                        aria-label={isPlaying ? "Pause Video" : "Play Video"}
                        className="absolute right-0 z-10 text-white duration-200 hover:text-gray-300"
                        onClick={togglePlayPause}
                        style={{
                            margin: '0.25rem',
                            bottom: '0',
                            width: '0.5rem',
                            height: '0.5rem',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            borderRadius: '2px'
                        }}
                    >
                        <i
                            aria-hidden="true"
                            className="block shrink-0"
                            style={{
                                background: 'currentColor',
                                mask: `url("https://www.thenorthface.com/_nuxt/nora/icons.CbT-bG8V.svg#${isPlaying ? 'pause' : 'play'}") left center / contain no-repeat`,
                                width: '100%',
                                height: '100%'
                            }}
                        ></i>
                    </button>
                </div>

                {/* Overlay Link */}
                <a
                    href="/en-us/c/shop-all/footwear-new-arrivals-829848"
                    className="absolute inset-0 z-5"
                    role="link"
                    aria-hidden="true"
                    tabIndex={-1}
                    data-cta="Footwear New Arrivals (829848)"
                >
                    {/* Hidden link for entire banner area */}
                </a>
            </div>

            {/* Content Section */}
            <div style={{ margin: '1rem 0' }}>
                <div className="justify-center items-center text-center md:justify-center md:text-center flex w-full container mx-auto">
                    <div className="pt-4 space-y-3 w-full md:py-6 md:max-w-2/3 self-center">

                        {/* Text Content */}
                        <div className="space-y-1" style={{ margin: '0.5rem 0' }}>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                <a
                                    href="/en-us/c/shop-all/footwear-new-arrivals-829848"
                                    className="hover:text-gray-700 transition-colors"
                                >
                                    Find your footing.
                                </a>
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Burly materials meet legendary design.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="items-center py-4 px-4 bg-black w-[200] rounded-full  mx-auto">
                            <a
                                href="/en-us/c/shop-all/footwear-new-arrivals-829848"
                                role="link"
                                aria-disabled="false"
                                style={{ margin: '0.25rem 0' }}
                            >
                                <span className="flex items-center text-white justify-center text-center">
                                    <span>Base Camp Footwear</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoBannerWithContent;