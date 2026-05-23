"use client";

import Link from "next/link";
import { useState } from 'react';


export default function ButtonsSection() {
  return (
    <div className="w-full flex justify-center py-0">
      <div className="w-[1264px] h-[150px] flex items-center justify-center gap-4 px-6 py-6">

       
        <button  className="px-8 py-4 border border-gray-300 rounded-full text-base font-semibold hover:bg-black hover:text-white transition-colors duration-200">
          Fall Fleece
        </button>
        
         
       
        <button className="px-8 py-4 border border-gray-300 rounded-full text-base font-semibold hover:bg-black hover:text-white transition-colors duration-200">
          Our Icons
        </button>



        <button className="px-8 py-4 border border-gray-300 rounded-full text-base font-semibold hover:bg-black hover:text-white transition-colors duration-200">
          Just Dropped
        </button>
       
        
        
        <button className="px-8 py-4 border border-gray-300 rounded-full text-base font-semibold hover:bg-black hover:text-white transition-colors duration-200">
          Slipper Shop
        </button>
        
      </div>
    </div>
  );
}