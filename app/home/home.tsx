import React from "react"
import Footer from "../componants/Landingpage/Footer11"
import HeroBanner from "../componants/Landingpage/HeroBanner2"
import FeedbackForm from "../componants/Landingpage/FeedBackForm1.a"
import HolidayTradeInBanner from "../componants/Landingpage/HolidayTradeInBanner7"
import HydrenaliteBanner from "../componants/Landingpage/HydrenaliteBanner6"
import MediaGallery from "../componants/Landingpage/MediaGallery9"
import PickUpWhereYouLeftOff from "../componants/Landingpage/PickUpWhereYouLeftOff10"
import TopGiftsHorizontal from "../componants/Landingpage/TopGifts5"
import TopGiftsCarousel from "../componants/Landingpage/TopGiftsCarouse4"
import UGCSection from "../componants/Landingpage/UGCSection8"
import VideoBannerWithContent from "../componants/Landingpage/VideoBanner3"

export const Home = () => {
    return(
        <>
            <HeroBanner />
            <div style={
            {
                padding: '50px'
            }
            }></div>
            
           <FeedbackForm/>

            <TopGiftsCarousel />
            <TopGiftsHorizontal />
            <HydrenaliteBanner />
            <HolidayTradeInBanner />
            <UGCSection />
            <MediaGallery />
            <VideoBannerWithContent/>
            <PickUpWhereYouLeftOff />
            <Footer />
        </>
    )
}