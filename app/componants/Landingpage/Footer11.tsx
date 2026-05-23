"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface ExpandedSections {
  [key: string]: boolean;
}

const Footer = () => {
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const footerSections: { [key: string]: FooterSection } = {
    shop: {
      title: "Shop",
      links: [
        { name: "Women's", href: "/en-us/womens" },
        { name: "Men's", href: "/en-us/mens" },
        { name: "Kids'", href: "/en-us/kids" },
        { name: "Footwear", href: "/en-us/footwear" },
        { name: "Equipment", href: "/en-us/equipment" },
        { name: "By Activity", href: "/en-us/activity" },
        { name: "Gift Cards", href: "/en-us/more/gift-card" }
      ]
    },
    help: {
      title: "Help",
      links: [
        { name: "Live Chat", href: "/en-us/help/contact-us?form=open" },
        { name: "Help Center", href: "/en-us/help" },
        { name: "Order Status", href: "/en-us/order-status" },
        { name: "Size Chart", href: "/en-us/help/size-charts" },
        { name: "Returns & Warranty", href: "/en-us/help/returns-policy" },
        { name: "Submit a Warranty Claim", href: "/en-us/help/warranty" },
        { name: "Contact Us", href: "/en-us/help/contact-us?form=open" },
        { name: "Accessibility Statement", href: "https://www.levelaccess.com/a/the-north-face/", external: true },
        { name: "Product Recall", href: "/en-us/help/product-recall" }
      ]
    },
    about: {
      title: "About Us",
      links: [
        { name: "Who We Are", href: "/en-us/about-us" },
        { name: "Sustainability", href: "/en-us/sustainability" },
        { name: "Renewed", href: "https://www.thenorthfacerenewed.com", external: true },
        { name: "Technology & Innovation", href: "/en-us/about-us/technology-innovation/technology" },
        { name: "Explore Our Stories", href: "/en-us/approach" },
        { name: "Athletes", href: "/en-us/about-us/athletes" },
        { name: "Power of Nature", href: "/en-us/about-us/power-of-nature" },
        { name: "Careers", href: "/en-us/about-us/careers" }
      ]
    },
    discover: {
      title: "Discover",
      links: [
        { name: "Men's Raincoats", href: "/en-us/c/mens/mens-jackets-and-vests/mens-rainwear-299284" },
        { name: "Women's Raincoats", href: "/en-us/c/womens/womens-jackets-and-vests/womens-rainwear-299273" },
        { name: "Men's Windbreakers", href: "/en-us/c/mens/mens-jackets-and-vests/mens-windbreakers-299290" },
        { name: "Women's Windbreakers", href: "/en-us/c/womens/womens-jackets-and-vests/womens-windbreakers-299281" },
        { name: "School Backpacks", href: "/en-us/c/bags-and-gear/backpacks/school-backpacks-591786" },
        { name: "Hiking Backpacks", href: "/en-us/c/bags-and-gear/technical-packs/hike-224525" },
        { name: "Tents", href: "/en-us/c/bags-and-gear/tents-211750" }
      ]
    },
    explore: {
      title: "Explore",
      links: [
        { name: "XPLR Pass", href: "/en-us/xplr-pass" },
        { name: "Events", href: "/en-us/events" },
        { name: "Pro Program", href: "https://www.thenorthfacepro.com/en/pro", external: true },
        { name: "Student Discount", href: "/en-us/help/discounts/the-north-face-student-discount-program" },
        { name: "Teacher Discount", href: "/en-us/help/discounts/the-north-face-teacher-discount-program" },
        { name: "Military Discount", href: "/en-us/help/discounts/the-north-face-military-discount-program" },
        { name: "Healthcare Worker Discount", href: "/en-us/help/discounts/the-north-face-nurse-discount-program" }
      ]
    }
  };

  interface SocialLink {
    name: string;
    href: string;
    icon: 'youtube' | 'instagram' | 'tiktok' | 'pinterest';
  }

  const socialLinks: SocialLink[] = [
    { name: "youtube", href: "https://www.youtube.com/c/TheNorthFace", icon: "youtube" },
    { name: "instagram", href: "https://www.instagram.com/thenorthface/", icon: "instagram" },
    { name: "tiktok", href: "https://www.tiktok.com/@thenorthface", icon: "tiktok" },
    { name: "pinterest", href: "https://www.pinterest.com/thenorthface/", icon: "pinterest" }
  ];

  const legalLinks: FooterLink[] = [
    { name: "CA Supply Chains Act", href: "https://www.vfc.com/modern-slavery-statement", external: true },
    { name: "UK Slavery Act", href: "https://www.vfc.com/modern-slavery-statement", external: true },
    { name: "Privacy Policy", href: "/en-us/help/privacy" },
    { name: "Your Privacy Choices", href: "/en-us#TrustTool" },
    { name: "Notice at Collection", href: "/en-us/help/privacy#AdditionalInformationForResidentsOfCertainStates" },
    { name: "Terms of Use", href: "/en-us/help/terms" },
    { name: "Accessibility Statement", href: "/en-us/policies/the-north-face-accessibility-statement" }
  ];

  const ChevronIcon = ({ className = "" }: { className?: string }) => (
    <svg 
      className={`w-5 h-5 ${className}`}
      viewBox="0 0 20 20" 
      fill="currentColor"
    >
      <path 
        fillRule="evenodd" 
        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" 
        clipRule="evenodd" 
      />
    </svg>
  );

  interface SocialIconProps {
    icon: 'youtube' | 'instagram' | 'tiktok' | 'pinterest';
    className?: string;
  }

  const SocialIcon = ({ icon, className = "" }: SocialIconProps) => {
    const icons = {
      youtube: (
        <svg className={`w-5 h-5 ${className}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      instagram: (
        <svg className={`w-5 h-5 ${className}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      tiktok: (
        <svg className={`w-5 h-5 ${className}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      pinterest: (
        <svg className={`w-5 h-5 ${className}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017 12.014 0 12.017 0z"/>
        </svg>
      )
    };

    return icons[icon] || null;
  };

  return (
    <footer 
      className="bg-white border-t border-gray-200 mt-auto"
      style={{
        width: '1274px',
        minHeight: '882.33px'
      }}
    >
      {/* XPLR Pass Section */}
      <div className="px-4 py-8 text-center border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Join XPLR Pass</h2>
          <p className="text-sm text-gray-600 mb-6 max-w-2xl mx-auto">
            Free to join. Free shipping. Exclusive gear. Birthday gifts. Points on every purchase and rewards.
          </p>
          <button 
            className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors text-sm font-medium"
            style={{ backgroundColor: '#283e8d' }}
          >
            Join Now
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="px-4 py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key} className="w-full">
                {/* Mobile Accordion Header */}
                <button
                  className="w-full md:hidden flex items-center justify-between py-4 text-lg font-semibold"
                  onClick={() => toggleSection(key)}
                >
                  <span>{section.title}</span>
                  <ChevronIcon 
                    className={`transform transition-transform ${
                      expandedSections[key] ? 'rotate-90' : 'rotate-0'
                    }`}
                  />
                </button>

                {/* Desktop Title */}
                <h3 className="hidden md:block text-sm font-semibold mb-4 uppercase tracking-wide">
                  {section.title}
                </h3>

                {/* Links */}
                <div 
                  className={`${
                    expandedSections[key] ? 'block' : 'hidden'
                  } md:block space-y-3`}
                >
                  <ul className="space-y-2">
                    {section.links.map((link, index) => (
                      <li key={index}>
                        {link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors block py-1"
                          >
                            {link.name}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors block py-1"
                          >
                            {link.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter and Store Locator Section */}
      <div className="px-4 py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Join Our Email List</h3>
              <p className="text-sm text-gray-600">
                Adventure is everywhere. Even in your inbox.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="policy"
                    required
                    className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="policy" className="text-sm text-gray-600">
                    I agree to the{' '}
                    <a href="/en-us/help/privacy" className="underline hover:text-gray-900">
                      Privacy Policy
                    </a>{' '}
                    &{' '}
                    <a href="/en-us/help/terms" className="underline hover:text-gray-900">
                      Terms of Use
                    </a>
                    *
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium"
                >
                  Sign Up
                </button>
              </form>
            </div>

            {/* Store Locator and Social Media */}
            <div className="space-y-8">
              {/* Store Locator */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Find a Store</h3>
                <p className="text-sm text-gray-600">
                  Explore a retail store or outlet near you.
                </p>
                <Link
                  href="/en-us/more/store-locator"
                  className="inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium"
                >
                  Store Locator
                </Link>
              </div>


              {/* App Store Badges */}
              <div className="flex space-x-4">
                <a
                  href="https://smart.link/2qb8pqni8nya2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                 
                </a>
                <a
                  href="https://smart.link/2qb8pqni8nya2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Section */}
      <div className="px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Logo */}
            <div className="hidden md:block">
              
            </div>

            {/* Legal Links */}
            <div className="flex-1">
              <ul className="flex flex-wrap gap-4 text-sm text-gray-600">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="hover:text-gray-900 transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Country Selector */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <img
                src="/US.svg"
                alt="United States"
                className="w-4 h-3"
              />
              <span>EN</span>
              <span className="hidden md:inline">| Change Country</span>
            </div>
          </div>

          {/* Mobile Country Selector */}
          <div className="md:hidden mt-4">
            <Link
              href="/en-us/select-location"
              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900"
            >
              <img
                src="/img/flags/US.svg"
                alt="United States"
                className="w-4 h-3"
              />
              <span>EN | Change Country</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;