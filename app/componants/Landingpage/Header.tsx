"use client";

import React, { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => setOpenMenu(menu);
  const closeMenu = () => setOpenMenu(null);

  const SearchIcon = () => (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
      <path
        d="M21 21L16.514 16.506M19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  const BagIcon = () => (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
      <path
        d="M8 10V6C8 3.79 9.79 2 12 2C14.21 2 16 3.79 16 6V10M4 10H20V20C20 21.10 19.10 22 18 22H6C4.89 22 4 21.10 4 20V10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <header
      className="relative w-full top-0 z-50"
      onMouseLeave={closeMenu}
    >
      {/* Top Bar */}
      <div className="flex justify-end items-center text-[13px] gap-8 pr-4 py-3">
        <span className="flex items-center gap-1">
          <img src="/US.svg" className="w-4" />
          EN
        </span>
        <a>Order Status</a>
        <a>Live chat</a>
        <a>Join XPLR Pass™</a>
        <a>Find a Store</a>
        <a>Gift Cards</a>
        <a>Help</a>
        <a>Sign In</a>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center max-w-[1440px] mx-auto px-6 py-2">

        {/* Logo + Nav */}
        <div className="flex items-center gap-10">
          <a href="/">
            <img src="/TNF.svg" className="w-[90px]" alt="logo" />
          </a>

          <nav className="hidden lg:flex gap-10 font-medium text-[18.5px]">

            <div
              className="hover:underline cursor-pointer"
              onMouseEnter={() => toggleMenu("men")}
            >
              Men's
            </div>

            <div
              className="hover:underline cursor-pointer"
              onMouseEnter={() => toggleMenu("women")}
            >
              Women's
            </div>

            <div
              className="hover:underline cursor-pointer"
              onMouseEnter={() => toggleMenu("kids")}
            >
              Kids'
            </div>

            <div
              className="hover:underline cursor-pointer"
              onMouseEnter={() => toggleMenu("footwear")}
            >
              Footwear
            </div>

            <div
              className="hover:underline cursor-pointer"
              onMouseEnter={() => toggleMenu("bags-gear")}
            >
              Bags & Gear
            </div>
            
            <div
              className="hover:underline cursor-pointer"
              onMouseEnter={() => toggleMenu("about-us")}
            >
              About Us
            </div>
          </nav>
        </div>

        {/* Search + Bag */}
        <div className="flex items-center gap-5">
          <div className="hidden lg:flex items-center gap-1 border-b w-48">
            <input
              placeholder="Search"
              className="text-sm outline-none w-full py-1"
            />
            <SearchIcon />
          </div>

          <button className="relative">
            <BagIcon />
            <span className="absolute -top-1.5 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>

      {/* ==== MEN MENU ==== */}
      {openMenu === "men" && (
        <MegaMenu>
          <div className="col-span-6 grid grid-cols-6 gap-12">
            {/* Left Section - Shop All Men's */}
            <div className="col-span-2">
              <h3 className="font-semibold text-[15px] mb-4">Shop All Men's →</h3>
              <div className="mb-6">
                <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Best Sellers</h4>
                <ul className="space-y-2">
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Featured</li>
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">New Arrivals</li>
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">TNF Red Box</li>
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Advanced Mountain Kit</li>
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Gift Guide</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Summit Series</h4>
                <ul className="space-y-2">
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Icons</li>
                </ul>
              </div>
            </div>

            {/* Middle Section - Categories Grid */}
            <div className="col-span-3">
              <div className="grid grid-cols-4 gap-10">
                {/* Column 1 */}
                <div>
                  <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Men's</h4>
                  <div className="h-4"></div>
                  <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Women's</h4>
                  <div className="h-4"></div>
                  <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Kids'</h4>
                  <div className="h-4"></div>
                  <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Footwear</h4>
                </div>

                {/* Column 2 - Tops */}
                <div>
                  <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Tops</h4>
                  <ul className="space-y-2">
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Hoodies & Sweatshirts</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">T-Shirts</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Active</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Shirts & Polos</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Vests</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Softshell</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Windbreakers</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Parkas</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Snow</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Fleece</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Full Zip</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Pullover</li>
                  </ul>
                </div>

                {/* Column 3 - Mixed Categories */}
                <div className="space-y-8">
                  {/* Footwear Section */}
                  <div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Footwear</h4>
                    <ul className="space-y-2">
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Trail Run</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Sneakers</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Hike</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Sandals</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Boots</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Slippers</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Snow Boots</li>
                    </ul>
                  </div>

                  {/* Bottoms Section */}
                  <div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Bottoms</h4>
                    <ul className="space-y-2">
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Pants</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Shorts</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Sweatpants & Joggers</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Snow</li>
                    </ul>
                  </div>
                </div>

                {/* Column 4 - Right Side Categories */}
                <div className="space-y-8">
                  {/* Shop By Activity */}
                  <div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Shop By Activity</h4>
                    <ul className="space-y-2">
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Hike</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Trail Run</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Camp</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Climb</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Snow</li>
                    </ul>
                  </div>

                  {/* Sale Section */}
                  <div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Sale</h4>
                    <div className="h-4"></div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Big Sizes</h4>
                  </div>

                  {/* Resale Section */}
                  <div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Resale</h4>
                    <ul className="space-y-2">
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Trade In</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">REMADE</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Empty for spacing */}
            <div className="col-span-1"></div>
          </div>
        </MegaMenu>
      )}

      {/* ==== WOMEN MENU ==== */}
      {openMenu === "women" && (
        <MegaMenu>
          <div className="col-span-6 grid grid-cols-6 gap-12">
            {/* Left Section - Shop All Women's */}
            <div className="col-span-2">
              <h3 className="font-semibold text-[15px] mb-4">Shop All Women's →</h3>
              <div className="mb-6">
                <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Best Sellers</h4>
                <div className="mb-4">
                  <h5 className="font-semibold text-[13px] mb-2 text-gray-700">Featured</h5>
                  <ul className="space-y-2">
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">New Arrivals</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">TNF x Cecille Bahnsen</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">TNF Red Box</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Advanced Mountain Kit</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Gift Guide</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-[13px] mb-2 text-gray-700">Summit Series</h5>
                  <ul className="space-y-2">
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Icons</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Women's</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Kids'</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Middle Section - Categories Grid */}
            <div className="col-span-4">
              <div className="grid grid-cols-4 gap-8">
                {/* Column 1 - Jackets & Vests */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Jackets & Vests</h4>
                    <div className="mb-4">
                      <h5 className="font-semibold text-[13px] mb-2 text-gray-700">Puffer</h5>
                      <ul className="space-y-2">
                        <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Rain</li>
                        <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Insulated</li>
                        <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Parkas</li>
                        <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Lightweight</li>
                        <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Vests</li>
                        <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Windbreakers</li>
                        <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Softshell</li>
                        <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Snow</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-[13px] mb-2 text-gray-700">Fleece</h5>
                      <ul className="space-y-2">
                        <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Full Zip</li>
                        <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Pullover</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Column 2 - Tops & Bottoms */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Tops</h4>
                    <ul className="space-y-2">
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Hoodies & Sweatshirts</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">T-Shirts</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Active</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Casual Tops</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Bottoms</h4>
                    <ul className="space-y-2">
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Pants</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Sweatpants & Joggers</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Leggings</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Shorts</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Snow</li>
                    </ul>
                  </div>
                </div>

                {/* Column 3 - Footwear & Accessories */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Footwear</h4>
                    <ul className="space-y-2">
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Trail Run</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Sneakers</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Hike</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Sandals</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Boots</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Slippers</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Snow Boots</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Accessories</h4>
                    <ul className="space-y-2">
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Beanies</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Hats</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Gloves</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Gaiters</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Socks</li>
                    </ul>
                  </div>
                </div>

                {/* Column 4 - Shop By Activity & Sale */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Shop By Activity</h4>
                    <ul className="space-y-2">
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Hike</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Trail Run</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Camp</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Climb</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Snow</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Sale</h4>
                    <ul className="space-y-2">
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Plus Sizes</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Resale</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Trade In</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">REMADE</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MegaMenu>
      )}

      {/* ==== KIDS MENU ==== */}
      {openMenu === "kids" && (
        <MegaMenu>
          <div className="grid grid-cols-6 gap-12">
            {/* Left Section - Shop All Kids */}
            <div className="col-span-2">
              <h3 className="font-semibold text-[15px] mb-4">Shop All Kids →</h3>
              <div className="mb-6">
                <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Best Sellers</h4>
                <ul className="space-y-2">
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">New Arrivals</li>
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">TNF Red Box</li>
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Gift Guide</li>
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Back to School</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Summit Series</h4>
                <ul className="space-y-2">
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Icons</li>
                </ul>
              </div>
            </div>

            {/* Middle Section - Categories Grid */}
            <div className="col-span-4">
              <div className="grid grid-cols-4 gap-8">
                {/* Column 1 - Boys */}
                <div>
                  <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Boys</h4>
                  <ul className="space-y-2">
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Jackets</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Tops</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Bottoms</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Footwear</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Accessories</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Snow</li>
                  </ul>
                </div>

                {/* Column 2 - Girls */}
                <div>
                  <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Girls</h4>
                  <ul className="space-y-2">
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Jackets</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Tops</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Bottoms</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Footwear</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Accessories</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Snow</li>
                  </ul>
                </div>

                {/* Column 3 - Footwear & Accessories */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Footwear</h4>
                    <ul className="space-y-2">
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Boots</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Shoes</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Snow Boots</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Sneakers</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Sandals</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Accessories</h4>
                    <ul className="space-y-2">
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Hats</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Gloves</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Beanies</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Socks</li>
                    </ul>
                  </div>
                </div>

                {/* Column 4 - Shop By Activity & Sale */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Shop By Activity</h4>
                    <ul className="space-y-2">
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Hike</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Trail Run</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Camp</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Snow</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Everyday</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Sale</h4>
                    <ul className="space-y-2">
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Boys' Sale</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Girls' Sale</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Resale</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Trade In</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MegaMenu>
      )}

      {/* ==== FOOTWEAR MENU ==== */}
      {openMenu === "footwear" && (
        <MegaMenu>
          <div className="grid grid-cols-6 gap-12">
            {/* Left Section - Featured */}
            <div className="col-span-2">
              <h3 className="font-semibold text-[15px] mb-4">Featured →</h3>
              <div className="mb-6">
                <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Best Sellers</h4>
                <ul className="space-y-2">
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">New Arrivals</li>
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">TNF Red Box</li>
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Advanced Mountain Kit</li>
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Gift Guide</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Resale</h4>
                <ul className="space-y-2">
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Trade In</li>
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">REMADE</li>
                </ul>
              </div>
            </div>

            {/* Middle Section - Categories Grid */}
            <div className="col-span-4">
              <div className="grid grid-cols-4 gap-8">
                {/* Column 1 - Men's */}
                <div>
                  <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Men's</h4>
                  <ul className="space-y-2">
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Trail</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Sneakers</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Hiking</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Boots</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Snow Boots</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Sandals</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Slippers</li>
                  </ul>
                </div>

                {/* Column 2 - Women's */}
                <div>
                  <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Women's</h4>
                  <ul className="space-y-2">
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Trail</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Sneakers</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Hiking</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Boots</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Snow Boots</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Sandals</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Slippers</li>
                  </ul>
                </div>

                {/* Column 3 - Kids */}
                <div>
                  <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Kids</h4>
                  <ul className="space-y-2">
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Boys</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Girls</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Boots</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Sneakers</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Snow Boots</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Sandals</li>
                  </ul>
                </div>

                {/* Column 4 - Shop By Activity & Sale */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Shop By Activity</h4>
                    <ul className="space-y-2">
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Hike</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Trail Run</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Camp</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Climb</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Snow</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Everyday</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Sale</h4>
                    <ul className="space-y-2">
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Men's Footwear</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Women's Footwear</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Kids' Footwear</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MegaMenu>
      )}

      {/* ==== BAGS & GEAR MENU ==== */}
      {openMenu === "bags-gear" && (
        <MegaMenu>
          <div className="grid grid-cols-6 gap-12">
            {/* Left Section - Shop All Bags & Gear */}
            <div className="col-span-2">
              <h3 className="font-semibold text-[15px] mb-4">Shop All Bags & Gear →</h3>
              <div className="mb-6">
                <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Best Sellers</h4>
                <ul className="space-y-2">
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">New Arrivals</li>
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Base Camp Shop</li>
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Gift Guide</li>
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Icons</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Resale</h4>
                <ul className="space-y-2">
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Trade In</li>
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">REMADE</li>
                </ul>
              </div>
            </div>

            {/* Middle Section - Categories Grid */}
            <div className="col-span-4">
              <div className="grid grid-cols-4 gap-8">
                {/* Column 1 - Backpacks */}
                <div>
                  <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Backpacks</h4>
                  <ul className="space-y-2">
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Women's</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Men's</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">School</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Travel & Commuter</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Kids'</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Icons</li>
                  </ul>
                </div>

                {/* Column 2 - Technical Packs & Bags */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Technical Packs</h4>
                    <ul className="space-y-2">
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Backpacking</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Hike</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Trail Run</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Climb</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Snow</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Bags</h4>
                    <ul className="space-y-2">
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Fanny Packs</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Crossbody Bags</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Mini Backpacks & Slings</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Messengers & Tote Bags</li>
                    </ul>
                  </div>
                </div>

                {/* Column 3 - Luggage & Gear */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Luggage And Duffels</h4>
                    <ul className="space-y-2">
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Duffel Bags</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Rolling Luggage</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Carry On</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Travel Accessories</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Gear</h4>
                    <ul className="space-y-2">
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Tents</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Tent Accessories</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Sleeping Bags</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Blankets</li>
                    </ul>
                  </div>
                </div>

                {/* Column 4 - Shop By Activity & Sale */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Shop By Activity</h4>
                    <ul className="space-y-2">
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Hike</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Trail Run</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Camp</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Climb</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Snow</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Travel</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Sale</h4>
                    <ul className="space-y-2">
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Backpacks Sale</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Bags Sale</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Gear Sale</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MegaMenu>
      )}

      {/* ==== ABOUT US MENU ==== */}
      {openMenu === "about-us" && (
        <MegaMenu>
          <div className="grid grid-cols-6 gap-12">
            {/* Left Section - Who We Are */}
            <div className="col-span-2">
              <h3 className="font-semibold text-[15px] mb-4">Who We Are →</h3>
              <div className="mb-6">
                <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Our Story</h4>
                <ul className="space-y-2">
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Our History</li>
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Our Athletes</li>
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Our Icons</li>
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">XPLR Pass</li>
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">The Approach</li>
                  <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Power of Nature</li>
                </ul>
              </div>
            </div>

            {/* Middle Section - Categories Grid */}
            <div className="col-span-4">
              <div className="grid grid-cols-4 gap-8">
                {/* Column 1 - Sustainability */}
                <div>
                  <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Sustainability</h4>
                  <ul className="space-y-2">
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Circularity</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Materials</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Suppliers</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Packaging</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Warranty</li>
                  </ul>
                </div>

                {/* Column 2 - Technology */}
                <div>
                  <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Our Technology</h4>
                  <ul className="space-y-2">
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">FUTURELIGHT™</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">DryVent™</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">DotKnit™</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Circaloft™</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">FUTUREFLEECE™</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Ventrix™</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">VECTIV™</li>
                  </ul>
                </div>

                {/* Column 3 - Events & Gifts */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Events</h4>
                    <ul className="space-y-2">
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Resale</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Trade In</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">REMADE</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Gifts for Help</h4>
                    <ul className="space-y-2">
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Gifts for Him</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Gifts for Kids</li>
                      <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Gifts Under $100</li>
                    </ul>
                  </div>
                </div>

                {/* Column 4 - More Gifts */}
                <div>
                  <h4 className="font-semibold text-[14px] mb-3 text-gray-900">Gifts for Explorers</h4>
                  <ul className="space-y-2">
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Best Selling Gifts</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Gift Guide</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Gifts for Her</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Gifts for Adventurers</li>
                    <li className="hover:underline cursor-pointer text-[14px] text-gray-800">Holiday Collection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </MegaMenu>
      )}
    </header>
  );
};

/* Wrapper for mega menu layout */
const MegaMenu = ({ children }: { children: React.ReactNode }) => (
  <div className="absolute left-0 top-full w-full bg-white border-t shadow-xl pt-10 pb-12 z-40">
    <div className="max-w-[1500px] mx-auto px-10 text-[14px] text-black">
      {children}
    </div>
  </div>
);

export default Header;