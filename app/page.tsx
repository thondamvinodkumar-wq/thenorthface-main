'use client';

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PromoBar from "./componants/Landingpage/PromoBar";
import Header from "./componants/Landingpage/Header";
import ButtonCarousel from "./componants/Landingpage/ButtonCarousel1";
import ProductListingPage from "./componants/Landingpage/FallFleece1.1";
import { Home } from "./home/home";
import ProductPageWithFooter from "./AddCart/Add";

// Landing Page Component
function LandingPage() {
  return (
    <>
      <PromoBar />
      <Header />

      {/* Navigation Buttons */}
      <div className="w-full flex justify-center py-0">
        <div className="w-[1264px] h-[150px] flex items-center justify-center gap-4 px-6 py-6">
          <Link
            to="/fall-fleece"
            className="px-8 py-4 border border-gray-300 rounded-full text-base font-semibold bg-white text-black hover:bg-black hover:text-white transition"
          >
            Fall Fleece
          </Link>

          <button className="px-8 py-4 border border-gray-300 rounded-full text-base font-semibold bg-white text-black hover:bg-black hover:text-white">
            Our Icons
          </button>
          <button className="px-8 py-4 border border-gray-300 rounded-full text-base font-semibold bg-white text-black hover:bg-black hover:text-white">
            Just Dropped
          </button>
          <button className="px-8 py-4 border border-gray-300 rounded-full text-base font-semibold bg-white text-black hover:bg-black hover:text-white">
            Slipper Shop
          </button>
        </div>
      </div>

      <Home/>

      

      
    </>
  );
}

// Product Listing Page
function FallFleecePage() {
  return (
    <div className="min-h-screen w-full bg-zinc-50 dark:bg-black">
      <PromoBar />
      <Header />

      <div className="px-8 py-4">
        <Link
          to="/"
          className="mb-6 inline-block px-6 py-3 border border-gray-400 rounded-full font-semibold hover:bg-black hover:text-white transition"
        >
          ← Back to Home
        </Link>
      </div>

      <ProductListingPage />
    </div>
  );
}

// Main Component
export default function HomePage() {
  return (
    <Router>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="min-h-screen w-full">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/fall-fleece" element={<FallFleecePage />} />
            <Route path="/AddToCort" element={<ProductPageWithFooter />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
