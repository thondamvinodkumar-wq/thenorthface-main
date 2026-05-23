// 'use client';

// import { useState } from 'react';

// export default function ProductListingPage() {
//   const [activeFilter, setActiveFilter] = useState<string>("Fall Fleece");
//   const [email, setEmail] = useState("");
//   const [agreeToPolicy, setAgreeToPolicy] = useState(false);

//   const handleButtonClick = (filterName: string) => {
//     setActiveFilter(filterName);
//   };

//   const handleSignUp = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle email signup logic here
//     console.log("Email:", email, "Agreed to policy:", agreeToPolicy);
//     setEmail("");
//     setAgreeToPolicy(false);
//   };

//   // Main navigation buttons
//   const mainButtons = [
//     { name: "Fall Fleece", key: "Fall Fleece" },
//     { name: "Our Icons", key: "Our Icons" },
//     { name: "Just Dropped", key: "Just Dropped" },
//     { name: "Slipper Shop", key: "Slipper Shop" }
//   ];

//   // Filter categories
//   const filterCategories = [
//     "Gender",
//     "Sizes", 
//     "Category",
//     "Style",
//     "Color",
//     "Price"
//   ];

//   // Extended product data with more items to fill the screen
//   const products = [
//     {
//       id: 1,
//       name: "Men's Yumiori Full-Zip",
//       price: "$100.00",
//       badge: "Top Seller",
//       description: "Extra Soft, Recycled",
//       image: "/Mens1.a.jpg",
//       colors: ["#646466", "#262527", "linear-gradient(45deg, #1e3957 0%, #1e3957 50%, #2a3042 50%, #2a3042 100%)", "linear-gradient(45deg, #717863 0%, #717863 33%, #879683 33%, #879683 67%, #cee83f 67%, #cee83f 100%)", "linear-gradient(45deg, #a08e7e 0%, #a08e7e 33%, #cbbea1 33%, #cbbea1 67%, #786a5f 67%, #786a5f 100%)"]
//     },
//     {
//       id: 2,
//       name: "Women's Yumiori Full-Zip",
//       price: "$100.00",
//       badge: "Top Seller",
//       description: "High Pile, Regular Fit",
//       image: "/Womens2.jpg",
//       colors: ["linear-gradient(45deg, #4b4b4d 0%, #4b4b4d 50%, #646466 50%, #646466 100%)", "linear-gradient(45deg, #cbbea1 0%, #cbbea1 33%, #3b5f68 33%, #3b5f68 67%, #79a5a8 67%, #79a5a8 100%)", "linear-gradient(45deg, #b29c79 0%, #b29c79 33%, #ece5da 33%, #ece5da 67%, #8c6e4b 67%, #8c6e4b 100%)", "linear-gradient(45deg, #a0a6af 0%, #a0a6af 33%, #5d6577 33%, #5d6577 67%, #0f5466 67%, #0f5466 100%)", "#262527"]
//     },
//     {
//       id: 3,
//       name: "Men's Yumiori ¼-Zip",
//       price: "$85.00",
//       badge: "Top Seller",
//       description: "Extra Soft, Recycled",
//       image: "/Mens3.jpg",
//       colors: ["linear-gradient(45deg, #2a3042 0%, #2a3042 50%, #1e3957 50%, #1e3957 100%)", "linear-gradient(45deg, #262527 0%, #262527 50%, #3c3c3f 50%, #3c3c3f 100%)", "linear-gradient(45deg, #4d4a40 0%, #4d4a40 50%, #50502f 50%, #50502f 100%)", "linear-gradient(45deg, #a08e7e 0%, #a08e7e 33%, #cbbea1 33%, #cbbea1 67%, #786a5f 67%, #786a5f 100%)", "linear-gradient(45deg, #8c6e4b 0%, #8c6e4b 33%, #b29c79 33%, #b29c79 67%, #717863 67%, #717863 100%)"]
//     },
//     {
//       id: 4,
//       name: "Women's Yumiori ¼-Zip",
//       price: "$85.00",
//       badge: "Top Seller",
//       description: "",
//       image: "/Womens4.jpg",
//       colors: ["linear-gradient(45deg, #717863 0%, #717863 33%, #879683 33%, #879683 67%, #d1e6a3 67%, #d1e6a3 100%)", "linear-gradient(45deg, #646466 0%, #646466 50%, #4b4b4d 50%, #4b4b4d 100%)", "linear-gradient(45deg, #b29c79 0%, #b29c79 33%, #ece5da 33%, #ece5da 67%, #8c6e4b 67%, #8c6e4b 100%)", "linear-gradient(45deg, #3b5f68 0%, #3b5f68 33%, #cbbea1 33%, #cbbea1 67%, #79a5a8 67%, #79a5a8 100%)", "linear-gradient(45deg, #5d6577 0%, #5d6577 33%, #a0a6af 33%, #a0a6af 67%, #0f5466 67%, #0f5466 100%)", "linear-gradient(45deg, #5d4a4c 0%, #5d4a4c 33%, #ece5da 33%, #ece5da 67%, #a08e7e 67%, #a08e7e 100%)", "linear-gradient(45deg, #b35952 0%, #b35952 33%, #683437 33%, #683437 67%, #e45a37 67%, #e45a37 100%)"]
//     },
//     {
//       id: 5,
//       name: "Girls' Yumiori Full-Zip Jacket",
//       price: "$90.00",
//       badge: "Top Seller",
//       description: "",
//       image: "/Girls5.jpg",
//       colors: ["linear-gradient(45deg, #879683 0%, #879683 50%, #ece5da 50%, #ece5da 100%)", "linear-gradient(45deg, #b32351 0%, #b32351 50%, #e1c9ce 50%, #e1c9ce 100%)", "linear-gradient(45deg, #5d6577 0%, #5d6577 50%, #bba4d0 50%, #bba4d0 100%)", "linear-gradient(45deg, #ece5da 0%, #ece5da 50%, #a08e7e 50%, #a08e7e 100%)"]
//     },
//     {
//       id: 6,
//       name: "Boys' Yumiori Full-Zip Jacket",
//       price: "$90.00",
//       badge: "Top Seller",
//       description: "",
//       image: "/Boys6.jpg",
//       colors: ["#262527", "linear-gradient(45deg, #683437 0%, #683437 50%, #b60b31 50%, #b60b31 100%)", "linear-gradient(45deg, #a08e7e 0%, #a08e7e 50%, #5b4c43 50%, #5b4c43 100%)", "linear-gradient(45deg, #006a84 0%, #006a84 50%, #2a3042 50%, #2a3042 100%)", "linear-gradient(45deg, #4d4a40 0%, #4d4a40 50%, #717863 50%, #717863 100%)"]
//     },
//     {
//       id: 7,
//       name: "Women's Yumiori Off Peak Full-Zip Jacket",
//       price: "$130.00",
//       badge: "Top Seller",
//       description: "Brushed, Relaxed Fit",
//       image: "/Women7.jpg",
//       colors: ["#ece5da", "linear-gradient(45deg, #879683 0%, #879683 50%, #717863 50%, #717863 100%)", "linear-gradient(45deg, #3d485d 0%, #3d485d 50%, #5d6577 50%, #5d6577 100%)", "#262527"]
//     },
//     {
//       id: 8,
//       name: "Women's Yumiori Off Peak ½-Zip Jacket",
//       price: "$120.00",
//       badge: "Top Seller",
//       description: "",
//       image: "/Womens8.jpg",
//       colors: ["linear-gradient(45deg, #3b5f68 0%, #3b5f68 50%, #79a5a8 50%, #79a5a8 100%)", "#ece5da", "#b35952", "linear-gradient(45deg, #879683 0%, #879683 50%, #717863 50%, #717863 100%)", "#262527"]
//     },
//     {
//       id: 9,
//       name: "Women's Yumiori Vest",
//       price: "$75.00",
//       badge: "Top Seller",
//       description: "",
//       image: "/Womens9.jpg",
//       colors: ["#262527", "#b29c79", "#646466", "linear-gradient(45deg, #717863 0%, #717863 50%, #879683 50%, #879683 100%)", "linear-gradient(45deg, #5d6577 0%, #5d6577 50%, #3d485d 50%, #3d485d 100%)"]
//     },
//     {
//       id: 10,
//       name: "Men's Yumiori Vest",
//       price: "$75.00",
//       description: "",
//       image: "/Mens10.jpg",
//       colors: ["#262527", "linear-gradient(45deg, #2a3042 0%, #2a3042 50%, #1e3957 50%, #1e3957 100%)", "#646466"]
//     },
//     {
//       id: 11,
//       name: "Men's Yumiori Reversible Jacket",
//       price: "$180.00",
//       badge: "Top Seller",
//       description: "Wind, Water Resistant",
//       image: "/Mens11.jpg",
//       colors: ["linear-gradient(45deg, #262527 0%, #262527 50%, #646466 50%, #646466 100%)", "linear-gradient(45deg, #262527 0%, #262527 50%, #50502f 50%, #50502f 100%)"]
//     },
//     {
//       id: 12,
//       name: "TNF™ Red Box ½-Zip Fleece",
//       price: "$175.00",
//       description: "",
//       image: "/Mens12.jpg",
//       colors: ["#3f3750", "#972536", "#39373b"]
//     },
//     {
//       id: 13,
//       name: "Women's Retro Denali Jacket",
//       price: "$180.00",
//       badge: "Top Seller",
//       description: "Midweight Fleece Icon",
//       image: "/Womens13.jpg",
//       colors: ["#262527", "#969696", "linear-gradient(45deg, #ece5da 0%, #ece5da 50%, #262527 50%, #262527 100%)", "linear-gradient(45deg, #969696 0%, #969696 50%, #262527 50%, #262527 100%)", "linear-gradient(45deg, #879683 0%, #879683 50%, #262527 50%, #262527 100%)", "linear-gradient(45deg, #3b5f68 0%, #3b5f68 50%, #3e646e 50%, #3e646e 100%)", "linear-gradient(45deg, #5d4a4c 0%, #5d4a4c 50%, #262527 50%, #262527 100%)"]
//     },
//     {
//       id: 14,
//       name: "Men's Retro Denali Jacket",
//       price: "$180.00",
//       badge: "Top Seller",
//       description: "Midweight, Relaxed",
//       image: "/Mens14.jpg",
//       colors: ["linear-gradient(45deg, #f4a01f 0%, #f4a01f 50%, #262527 50%, #262527 100%)", "#262527", "linear-gradient(45deg, #a08e7e 0%, #a08e7e 50%, #262527 50%, #262527 100%)", "linear-gradient(45deg, #969696 0%, #969696 50%, #262527 50%, #262527 100%)", "linear-gradient(45deg, #2a3042 0%, #2a3042 50%, #262527 50%, #262527 100%)"]
//     },
//     {
//       id: 15,
//       name: "Women's Retro Denali Hoodie",
//       price: "$200.00",
//       badge: "Top Seller",
//       description: "",
//       image: "/Womens15.jpg",
//       colors: ["linear-gradient(45deg, #ece5da 0%, #ece5da 50%, #262527 50%, #262527 100%)", "#262527", "linear-gradient(45deg, #5d4a4c 0%, #5d4a4c 50%, #262527 50%, #262527 100%)"]
//     },
//     {
//       id: 16,
//       name: "Men's Retro Denali Hoodie",
//       price: "$200.00",
//       badge: "Top Seller",
//       description: "",
//       image: "/Mens16.jpg",
//       colors: ["#262527", "linear-gradient(45deg, #683437 0%, #683437 50%, #262527 50%, #262527 100%)", "linear-gradient(45deg, #717863 0%, #717863 50%, #262527 50%, #262527 100%)"]
//     }
//   ];

//   // Pick Up Where You Left Off products data
//   const pickUpProducts = [
//     {
//       id: 1,
//       name: "Base Camp Voyager Daypack (26L)",
//       price: "$139.00",
//       originalPrice: null,
//       image: "https://assets.thenorthface.com/images/t_img/f_auto,h_349,e_unsharp_mask:150,w_300/dpr_2.0/v1750345010/NF0A81DM926-HERO/Base-Camp-Voyager-Daypack-26L.png?$PLP-IMAGE$",
//       alt: "Base Camp Voyager Daypack (26L)"
//     },
//     {
//       id: 2,
//       name: "Men's Evolution BTS Hoodie—Graphic",
//       price: "$46.00",
//       originalPrice: "$65.00",
//       image: "https://assets.thenorthface.com/images/t_img/f_auto,h_349,e_unsharp_mask:150,w_300/dpr_2.0/v1748527638/NF0A8E9SBOM-HERO/Mens-Evolution-BTS-HoodieGraphic.png?$PLP-IMAGE$",
//       alt: "Men's Evolution BTS Hoodie—Graphic"
//     },
//     {
//       id: 3,
//       name: "Women's Arctic Bomber",
//       price: "$300.00",
//       originalPrice: null,
//       image: "https://assets.thenorthface.com/images/t_img/f_auto,h_349,e_unsharp_mask:150,w_300/dpr_2.0/v1752167357/NF0A84IYQLI-HERO/Womens-Arctic-Bomber.png?$PLP-IMAGE$",
//       alt: "Women's Arctic Bomber"
//     },
//     {
//       id: 4,
//       name: "Women's Hydrenalite™ Down A-Line Vest",
//       price: "$150.00",
//       originalPrice: null,
//       image: "https://assets.thenorthface.com/images/t_img/f_auto,h_349,e_unsharp_mask:150,w_300/dpr_2.0/v1754067777/NF0A89VJBOB-HERO/Womens-Hydrenalite-Down-ALine-Vest.png?$PLP-IMAGE$",
//       alt: "Women's Hydrenalite™ Down A-Line Vest"
//     },
//     {
//       id: 5,
//       name: "Men's Altamesa 300 Shoes",
//       price: "$129.00",
//       originalPrice: null,
//       image: "https://assets.thenorthface.com/images/t_img/f_auto,h_349,e_unsharp_mask:150,w_300/dpr_2.0/v1722983136/NF0A8A9RMN8-HERO/Mens-Altamesa-300-Shoes.png?$PLP-IMAGE$",
//       alt: "Men's Altamesa 300 Shoes"
//     },
//     {
//       id: 6,
//       name: "Women's Evolution Simple Dome Oversized Crew",
//       price: "$60.00",
//       originalPrice: null,
//       image: "https://assets.thenorthface.com/images/t_img/f_auto,h_349,e_unsharp_mask:150,w_300/dpr_2.0/v1750346192/NF0A8FKTJK3-HERO/Womens-Evolution-Simple-Dome-Oversized-Crew.png?$PLP-IMAGE$",
//       alt: "Women's Evolution Simple Dome Oversized Crew"
//     },
//     {
//       id: 7,
//       name: "Men's Freedom Bibs",
//       price: "$220.00",
//       originalPrice: null,
//       image: "https://assets.thenorthface.com/images/t_img/f_auto,h_349,e_unsharp_mask:150,w_300/dpr_2.0/v1754338876/NF0A5ABT0VO-HERO/Mens-Freedom-Bibs.png?$PLP-IMAGE$",
//       alt: "Men's Freedom Bibs"
//     },
//     {
//       id: 8,
//       name: "Multisport Cush Crew Socks—3P",
//       price: "$20.00",
//       originalPrice: null,
//       image: "https://assets.thenorthface.com/images/t_img/f_auto,h_349,e_unsharp_mask:150,w_300/dpr_2.0/v1723274128/NF0A882HFN4-HERO/Multisport-Cush-Crew-Socks3P.png?$PLP-IMAGE$",
//       alt: "Multisport Cush Crew Socks—3P"
//     },
//     {
//       id: 9,
//       name: "Women's THERMOBALL™ Traction Mules V",
//       price: "$59.00",
//       originalPrice: null,
//       image: "https://assets.thenorthface.com/images/t_img/f_auto,h_349,e_unsharp_mask:150,w_300/dpr_2.0/v1754665334/NF0A3V1HD0P-HERO/Womens-THERMOBALL-Traction-Mules-V.png?$PLP-IMAGE$",
//       alt: "Women's THERMOBALL™ Traction Mules V"
//     },
//     {
//       id: 10,
//       name: "Glenclyffe Mid Leather GORE-TEX® Boots",
//       price: "$250.00",
//       originalPrice: null,
//       image: "https://assets.thenorthface.com/images/t_img/f_auto,h_349,e_unsharp_mask:150,w_300/dpr_2.0/v1753295862/NF0A8D94KX7-HERO/Glenclyffe-Mid-Leather-GORETEX-Boots.png?$PLP-IMAGE$",
//       alt: "Glenclyffe Mid Leather GORE-TEX® Boots"
//     }
//   ];

//   // Duplicate products to create more content
//   const allProducts = [...products, ...products.map(p => ({...p, id: p.id + 20}), ...products.map(p => ({...p, id: p.id + 40})))];

//   return (
//     <div className="w-full min-h-screen bg-white">
//       {/* Breadcrumb */}
//       <div className="container mx-auto px-4 py-4">
//         <nav className="flex items-center gap-2 text-sm">
//           <a href="/en-us" className="text-gray-600 hover:text-black">Home</a>
//           <span className="text-xs text-gray-400">/</span>
//           <a href="/en-us/c/shop-all-829783" className="text-gray-600 hover:text-black">Shop All</a>
//           <span className="text-xs text-gray-400">/</span>
//           <span className="text-gray-400">Fleece</span>
//         </nav>
//       </div>

//       {/* Page Title */}
//       <div className="container mx-auto px-4 mb-3">
//         <h1 className="text-2xl lg:text-3xl font-light lg:mt-2">Fleece</h1>
//       </div>

//       {/* Main Navigation Buttons */}
//       <div className="w-full bg-white border-b border-gray-200">
//         <div className="w-full max-w-[1264px] mx-auto">
//           <div className="flex items-center justify-center gap-12 px-6 py-6">
//             {mainButtons.map((button) => (
//               <button
//                 key={button.key}
//                 onClick={() => handleButtonClick(button.key)}
//                 className={`px-8 py-4 border border-gray-300 rounded-full text-base font-semibold transition-all duration-200 ${
//                   activeFilter === button.key
//                     ? "bg-black text-white border-black"
//                     : "bg-white text-black hover:bg-black hover:text-white"
//                 }`}
//               >
//                 {button.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Fall Fleece Section - Large white area with extensive content */}
//       {activeFilter === "Fall Fleece" && (
//         <div className="w-full bg-white">
//           {/* Filter Section */}
//           <div className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
//             <div className="container mx-auto px-4">
//               {/* Top Tabs */}
//               <div className="w-full flex justify-center border-b border-gray-200 text-center mb-8">
//                 <div className="flex w-full max-w-md">
//                   <button className="flex-1 border-b-4 border-black pb-3">
//                     <span className="text-sm font-medium">All Items</span>
//                   </button>
//                   <button className="flex flex-1 items-center justify-center border-b-4 border-transparent pb-3">
//                     <span className="text-sm font-medium">Pick up in 24 hours</span>
//                     <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>

//               {/* Mobile Filter Button */}
//               <div className="flex items-center justify-between py-4 lg:hidden">
//                 <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm bg-gray-50">
//                   Filter
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
//                   </svg>
//                 </button>
//                 <p className="text-sm text-gray-600 whitespace-nowrap">92 Products</p>
//               </div>

//               {/* Desktop Filter Row */}
//               <div className="hidden lg:flex items-start justify-between gap-3 bg-white py-4">
//                 <div className="flex gap-3 flex-wrap">
//                   {filterCategories.map((category) => (
//                     <div key={category} className="relative">
//                       <button className="flex items-center gap-2 px-4 py-2 h-10 border border-gray-300 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
//                         <span className="text-sm text-gray-700">{category}</span>
//                         <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                         </svg>
//                       </button>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex items-center gap-4">
//                   {/* Sort Dropdown */}
//                   <div className="relative">
//                     <select className="appearance-none bg-white border border-gray-300 rounded-full pl-4 pr-10 py-2 h-10 text-sm focus:outline-none focus:border-black min-w-[150px]">
//                       <option>Sort: Relevance</option>
//                       <option>Prices: Low to high</option>
//                       <option>Prices: High to low</option>
//                       <option>Rating</option>
//                     </select>
//                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </div>
//                   </div>
//                   <p className="text-sm text-gray-600 whitespace-nowrap">92 Products</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Product Content Area */}
//           <div className="w-full">
//             <div className="p-6">
//               {/* View Toggle Buttons */}
//               <div className="flex justify-end gap-2 py-4">
//                 <button className="p-2 border-b-2 border-black text-black">
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
//                   </svg>
//                 </button>
//                 <button className="p-2 border-b-2 border-transparent text-gray-400 hover:text-gray-600">
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
//                   </svg>
//                 </button>
//               </div>

//               {/* Product Grid */}
//               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-10 pb-10">
//                 {allProducts.map((product) => (
//                   <div key={product.id} className="relative group">
//                     <div className="h-full flex flex-col">
//                       {/* Product Image */}
//                       <div className="relative w-full mb-3 overflow-hidden rounded-lg">
//                         <div className="relative">
//                           <img
//                             src={product.image}
//                             alt={product.name}
//                             className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
//                             height={400}
//                             width={344}
//                           />
//                           {product.badge && (
//                             <span className="absolute right-0 bottom-0 m-2 bg-white px-3 py-2 text-xs rounded-full border border-gray-300 shadow-sm flex items-center gap-1">
//                               {product.badge}
//                             </span>
//                           )}
//                         </div>
//                       </div>

//                       {/* Color Swatches */}
//                       <div className="relative z-10 mb-2">
//                         <div className="flex items-start flex-wrap pr-10 gap-1 max-h-10 overflow-hidden">
//                           {product.colors.map((color, index) => (
//                             <button
//                               key={index}
//                               className="w-10 h-10 rounded-full border border-gray-300 hover:ring-2 hover:ring-gray-300 hover:ring-inset p-1 transition-all duration-200"
//                               style={{ background: color }}
//                             >
//                               <span className="sr-only">Color option {index + 1}</span>
//                             </button>
//                           ))}
//                           <button className="absolute right-0 top-0 w-10 h-10 flex items-center justify-center">
//                             <span className="bg-white rounded-full p-2 border border-gray-300">
//                               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                               </svg>
//                             </span>
//                           </button>
//                         </div>
//                       </div>

//                       {/* Product Description */}
//                       {product.description && (
//                         <p className="text-xs text-gray-600 mb-1 truncate uppercase tracking-wide">{product.description}</p>
//                       )}

//                       {/* Product Name */}
//                       <a href="#" className="text-sm mb-1 font-light hover:underline line-clamp-2 transition-colors duration-200">
//                         {product.name}
//                       </a>

//                       {/* Price */}
//                       <div className="mt-2 text-sm font-medium">
//                         <span>{product.price}</span>
//                       </div>

//                       {/* Add to Cart Button */}
//                       <button className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-lg text-xs hover:bg-gray-50 mt-4 self-start transition-all duration-200 hover:border-black">
//                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                         </svg>
//                         Add
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Load More Section */}
//               <div className="mx-auto max-w-md space-y-4 mt-10 mb-16">
//                 <p className="text-center text-sm">Viewing 48 of 92 Products</p>
//                 <div className="overflow-hidden h-2 rounded bg-gray-300 mx-auto">
//                   <div className="h-full bg-black" style={{ width: '52.17%' }}></div>
//                 </div>
//                 <button
//                className="bg-black text-white py-4 px-10 rounded-[50px] text-base font-semibold hover:bg-gray-800 transition-colors duration-200 mx-auto block"
//                style={{ width: "250px" }}
//                   >
//                     View More (44)
//                    </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Spacer between main content and Pick Up Where You Left Off */}
//       <div className="h-8 bg-transparent"></div>

//       {/* Pick Up Where You Left Off Section - With proper spacing and radius */}
//       <div 
//         className="bg-gray-50 py-12 rounded-3xl mx-4 mb-16"
//         data-placement="cms-lazy-main-13" 
//         data-test-id="cms-bloomreach-recommendations-3413628" 
//         data-tracking-id="Recently Viewed HP"
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="mb-8 text-3xl font-bold text-center">
//             <span>Pick Up Where You Left Off</span>
//           </h2>
          
//           <div 
//             className="relative" 
//             data-test-id="vf-carousel"
//           >
//             <div className="relative max-w-full">
//               {/* Left Arrow Button */}
//               <button 
//                 data-test-id="vf-carousel-arrow-left" 
//                 type="button" 
//                 aria-label="Previous" 
//                 className="top-1/2 transform -translate-y-1/2 left-4 absolute z-10 flex bg-white/80 -mt-9 p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
//               >
//                 <svg 
//                   width="24" 
//                   height="24" 
//                   viewBox="0 0 24 24" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   strokeWidth="2"
//                   className="rotate-180"
//                 >
//                   <path d="m9 18 6-6-6-6"/>
//                 </svg>
//               </button>

//               {/* Product Carousel */}
//               <div className="flex overflow-x-auto scrollbar-hide snap-x space-x-6 px-4 py-4">
//                 {pickUpProducts.map((product) => (
//                   <div 
//                     key={product.id}
//                     className="w-48 flex-shrink-0"
//                   >
//                     <div className="h-full flex flex-col space-y-3 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
//                       <div className="relative flex flex-col space-y-3">
//                         {/* Product Image */}
//                         <div className="w-full aspect-square relative bg-gray-100 rounded-xl overflow-hidden">
//                           <img
//                             src={product.image}
//                             alt={product.alt}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
                        
//                         {/* Product Info */}
//                         <div className="space-y-2">
//                           <a 
//                             href="#" 
//                             className="line-clamp-2 self-start text-sm font-medium hover:text-blue-600 transition-colors duration-200"
//                             role="link"
//                             data-test-id="base-link"
//                           >
//                             {product.name}
//                             <span className="absolute-0"></span>
//                           </a>
                          
//                           <div 
//                             data-dynatrace="product-price" 
//                             data-test-id="product-pricing" 
//                             className="grow text-sm"
//                           >
//                             <span className="gap-x-2 flex items-center flex-wrap font-medium">
//                               {product.originalPrice ? (
//                                 <>
//                                   <del className="text-gray-500 mr-2">
//                                     <span className="sr-only">Initial price: </span> 
//                                     {product.originalPrice}
//                                   </del>
//                                   <ins className="text-red-600 no-underline">
//                                     <span className="sr-only">Discounted price: </span>
//                                     <span className="whitespace-nowrap">{product.price}</span>
//                                   </ins>
//                                 </>
//                               ) : (
//                                 <span>{product.price}</span>
//                               )}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Right Arrow Button */}
//               <button 
//                 data-test-id="vf-carousel-arrow-right" 
//                 type="button" 
//                 aria-label="Next" 
//                 className="top-1/2 transform -translate-y-1/2 right-4 justify-end absolute z-10 flex bg-white/80 -mt-9 p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
//               >
//                 <svg 
//                   width="24" 
//                   height="24" 
//                   viewBox="0 0 24 24" 
//                   fill="none" 
//                   stroke="currentColor" 
//                   strokeWidth="2"
//                 >
//                   <path d="m9 18 6-6-6-6"/>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Additional Content Sections */}
//       <div className="my-16">
//         {/* FAQ/Information Sections */}
//         <div className="container mx-auto px-4">
//           <div className="space-y-4">
//             {/* FAQ Item 1 */}
//             <div className="border-t border-gray-300">
//               <button className="w-full flex items-center justify-between py-6 px-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
//                 <span className="text-lg font-light">The North Face Fleece Outerwear</span>
//                 <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//             </div>

//             {/* FAQ Item 2 */}
//             <div className="border-t border-gray-300">
//               <button className="w-full flex items-center justify-between py-6 px-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
//                 <span className="text-lg font-light">Tackle Trails with High-Performance Fleece</span>
//                 <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//             </div>

//             {/* FAQ Item 3 */}
//             <div className="border-t border-gray-300">
//               <button className="w-full flex items-center justify-between py-6 px-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
//                 <span className="text-lg font-light">Flaunt Your Style with Fleece</span>
//                 <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//             </div>

//             {/* FAQ Item 4 */}
//             <div className="border-t border-gray-300">
//               <button className="w-full flex items-center justify-between py-6 px-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
//                 <span className="text-lg font-light">Discover More in Fleece</span>
//                 <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Recommended Products Carousel */}
//         <div className="container mx-auto px-4 mt-12">
//           <h2 className="text-2xl font-light mb-8 text-center">Explorers Like You Also Loved</h2>
//           <div className="relative">
//             <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide px-4">
//               {products.slice(0, 6).map((product) => (
//                 <div key={product.id} className="min-w-[280px] flex-shrink-0">
//                   <div className="flex flex-col space-y-3 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-72 object-cover rounded-lg"
//                       height={233}
//                       width={280}
//                     />
//                     <a href="#" className="text-sm font-medium line-clamp-2 hover:text-blue-600 transition-colors duration-200">
//                       {product.name}
//                     </a>
//                     <div className="text-sm font-medium">
//                       {product.price}
//                     </div>
//                     <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-xs hover:bg-gray-50 transition-colors duration-200 w-full">
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                       </svg>
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <footer className="bg-black text-white">
//         {/* Newsletter Signup Section */}
//         <div className="border-b border-gray-700">
//           <div className="container mx-auto px-4 py-12">
//             <div className="max-w-4xl mx-auto text-center">
//               <h2 className="text-2xl font-bold mb-4">Join The North Face Email List</h2>
//               <p className="text-gray-300 mb-6">
//                 Be the first to know about the latest products, exclusive offers, and more.
//               </p>
//               <form onSubmit={handleSignUp} className="max-w-md mx-auto">
//                 <div className="flex flex-col sm:flex-row gap-3">
//                   <input
//                     type="email"
//                     placeholder="Enter your email address"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="flex-1 px-4 py-3 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
//                     required
//                   />
//                   <button
//                     type="submit"
//                     className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200"
//                   >
//                     Sign Up
//                   </button>
//                 </div>
//                 <div className="mt-4 flex items-center justify-center">
//                   <input
//                     type="checkbox"
//                     id="agreeToPolicy"
//                     checked={agreeToPolicy}
//                     onChange={(e) => setAgreeToPolicy(e.target.checked)}
//                     className="mr-2"
//                     required
//                   />
//                   <label htmlFor="agreeToPolicy" className="text-sm text-gray-300">
//                     I agree to the Privacy Policy and Terms & Conditions
//                   </label>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Main Footer Links */}
//         <div className="container mx-auto px-4 py-12">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Customer Service */}
//             <div>
//               <h3 className="font-semibold text-lg mb-4">CUSTOMER SERVICE</h3>
//               <ul className="space-y-2 text-gray-300">
//                 <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">My Account</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Store Locator</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Rewards Program</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Shipping Information</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Offers & Promotions</a></li>
//               </ul>
//             </div>

//             {/* About The North Face */}
//             <div>
//               <h3 className="font-semibold text-lg mb-4">ABOUT THE NORTH FACE</h3>
//               <ul className="space-y-2 text-gray-300">
//                 <li><a href="#" className="hover:text-white transition-colors">Responsibility</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Diversity, Equity & Inclusion</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">The North Face Blog</a></li>
//               </ul>
//             </div>

//             {/* Find Us On */}
//             <div>
//               <h3 className="font-semibold text-lg mb-4">FIND US ON</h3>
//               <ul className="space-y-2 text-gray-300">
//                 <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
//               </ul>
//             </div>

//             {/* Contact Info */}
//             <div>
//               <h3 className="font-semibold text-lg mb-4">CONTACT US</h3>
//               <div className="text-gray-300 space-y-2">
//                 <p>US: 1-855-997-1963</p>
//                 <p>International: 1-510-713-0462</p>
//                 <p className="mt-4">Mon-Fri: 7:00 AM - 5:00 PM (PT)</p>
//                 <p>Sat-Sun: 8:00 AM - 4:00 PM (PT)</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Footer */}
//         <div className="border-t border-gray-700">
//           <div className="container mx-auto px-4 py-6">
//             <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//               <div className="text-gray-300 text-sm">
//                 © 2024 The North Face. All Rights Reserved.
//               </div>
//               <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
//                 <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
//                 <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
//                 <a href="#" className="hover:text-white transition-colors">Accessibility Statement</a>
//                 <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
//                 <a href="#" className="hover:text-white transition-colors">Do Not Sell or Share My Personal Information</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }