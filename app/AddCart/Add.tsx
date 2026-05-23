'use client';

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

// StarRating component moved OUTSIDE the main component
const StarRating = ({ rating, size = '1rem' }: { rating: number; size?: string }) => {
  return (
    <div className="star-rating" style={{ fontSize: size }}>
      <div className="stars-background">
        {'★'.repeat(5)}
      </div>
      <div className="stars-filled" style={{ width: `${(rating / 5) * 100}%` }}>
        {'★'.repeat(5)}
      </div>
    </div>
  );
};

const ProductPage = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('EOJ');
  const [activeTab, setActiveTab] = useState('description');
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const product = {
    name: "Men&apos;s Yumiori Full-Zip",
    price: 100.00,
    description: "Extra Soft, Recycled",
    rating: 4.83,
    reviews: 92,
    recommendation: 97,
    styleCode: "NF0A883REOJ"
  };

  const colors = [
    { id: '8Z4', name: 'Smoked Pearl/Smoked Pearl', color: '#646466', image: '/api/placeholder/100/100' },
    { id: 'TNF', name: 'TNF Black/TNF Black/TNF Black', color: '#262527', image: '/api/placeholder/100/100' },
    { id: 'EBL', name: 'Estate Blue/Summit Navy/Summit Navy', color: 'linear-gradient(45deg, #1e3957 0%, #1e3957 50%, #2a3042 50%, #2a3042 100%)', image: '/api/placeholder/100/100' },
    { id: 'EOJ', name: 'Bark Mist/Slate Moss/Fizz Lime', color: 'linear-gradient(45deg, #717863 0%, #717863 33%, #879683 33%, #879683 67%, #cee83f 67%, #cee83f 100%)', image: '/api/placeholder/100/100' },
    { id: 'MGR', name: 'Mushroom Grey/Gravel/Mocha Brown', color: 'linear-gradient(45deg, #a08e7e 0%, #a08e7e 33%, #cbbea1 33%, #cbbea1 67%, #786a5f 67%, #786a5f 100%)', image: '/api/placeholder/100/100' }
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const productImages = [
    '/api/placeholder/600/700',
    '/api/placeholder/600/700',
    '/api/placeholder/600/700',
    '/api/placeholder/600/700',
    '/api/placeholder/600/700',
    '/api/placeholder/600/700'
  ];

  const reviews = [
    { rating: 5, title: "Jacket", comment: "Exactly what I wanted. Fits great and feels great. Very warm", author: "Rodney", location: "North Carolina", date: "4 days ago", helpful: 0, verified: true },
    { rating: 5, title: "100%", comment: "Exactly what I expected. Feels good, warm and comfortable without be like a big coat. Love my purchase.", author: "107", location: "Undisclosed", date: "1 week ago", helpful: 1, verified: true },
    { rating: 5, title: "I recommend", comment: "Good quality! Warm and cozy", author: "Jessica", location: "Undisclosed", date: "2 weeks ago", helpful: 0, verified: true },
    { rating: 3, title: "Very comfortable", comment: "I wear it to work to cover my uniform. It&apos;s very comfortable. I always liked North Face fleece.", author: "Usman", location: "Undisclosed", date: "2 weeks ago", helpful: 1, verified: true },
    { rating: 5, title: "I would buy this again", comment: "Fits great can&apos;t wait to use it", author: "Ryan", location: "Undisclosed", date: "3 weeks ago", helpful: 0, verified: true },
    { rating: 5, title: "Good for school", comment: "I ordered this for my high schooler, he loves it, comfy and not bulky which works for school because of the distance between lockers and classes", author: "AnnF", location: "Springfield Ma", date: "1 month ago", helpful: 1, verified: true },
    { rating: 5, title: "Perfect fit", comment: "Great jacket for everyday use", author: "Amir", location: "Springfield Ma", date: "1 month ago", helpful: 0, verified: true }
  ];

  const recommendedProducts = [
    { 
      id: 'NF0A883R8Z4', 
      name: "Men&apos;s Yumiori Full-Zip", 
      price: 100.00, 
      image: '/Mens29.jpg',
      colors: ['#717863', '#646466', '#262527']
    },
    { 
      id: 'NF0A8CHE8K2', 
      name: "TNF™ Logo Box Cuffed Beanie", 
      price: 30.00, 
      image: '/Mens20.jpg',
      colors: ['#262527', '#646466']
    },
    { 
      id: 'NF0A88XGJK3', 
      name: "Men&apos;s Retro Denali Hoodie", 
      price: 200.00, 
      image: '/Womens26.jpg',
      colors: ['#1e3957', '#262527']
    },
    { 
      id: 'NF0A88ZCQLI', 
      name: "Women&apos;s Extreme Pile 2 Pullover", 
      price: 150.00, 
      image: '/Womens46.jpg',
      colors: ['#a08e7e', '#262527']
    }
  ];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    setShowOverlay(true);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  return (
    <>
      <Head>
        <title>{product.name} | The North Face</title>
        <meta name="description" content={`Shop ${product.name} at The North Face`} />
      </Head>

      {/* Header Section */}
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="header-utility">
              <a href="/en-us/select-location" className="location-selector">
                <span className="flag">🇺🇸</span>
                EN
              </a>
              <a href="/en-us/order-status">Order Status</a>
              <button className="chat-btn">Live chat</button>
              <a href="/en-us/xplr-pass">Join XPLR Pass™</a>
              <a href="/en-us/more/store-locator">Find a Store</a>
              <a href="/en-us/more/gift-card">Gift Cards</a>
              <a href="/en-us/help">Help</a>
              <a href="/en-us/sign-in">Sign In</a>
            </div>
          </div>
        </div>
        
        <div className="header-main">
          <div className="container">
            <nav className="main-nav">
              <a href="/en-us" className="logo">
                <div className="logo-image">
                  <Image src="/TNF.svg" alt="The North Face" width={120} height={40} />
                </div>
              </a>
              
              <div className="nav-categories">
                <a href="/en-us/mens">Men&apos;s</a>
                <a href="/en-us/womens">Women&apos;s</a>
                <a href="/en-us/kids">Kids&apos;</a>
                <a href="/en-us/footwear">Footwear</a>
                <a href="/en-us/equipment">Bags & Gear</a>
                <a href="/en-us/about-us">About Us</a>
              </div>

              <div className="nav-actions">
                <button className="search-btn">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8.5 3a5.5 5.5 0 0 1 4.227 9.02l4.127 4.126a1 1 0 0 1-1.414 1.415l-4.126-4.127A5.5 5.5 0 1 1 8.5 3zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/>
                  </svg>
                </button>
                <a href="/en-us/cart" className="cart-btn">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm9 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM4.5 4h13l-1.2 6H5.7L4.5 4z"/>
                  </svg>
                  <span className="cart-count">1</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Product Section */}
      <main className="main-content">
        <div className="container">
          {/* Breadcrumbs */}
          <nav className="breadcrumbs">
            <a href="/en-us">Home</a> / 
            <a href="/en-us/mens">Men&apos;s</a> / 
            <a href="/en-us/mens-fleece">Men&apos;s Fleece</a> / 
            <a href="/en-us/mens-fleece-full-zip">Men&apos;s Fleece Full Zip</a> / 
            <span>{product.name}</span>
          </nav>

          <div className="product-grid">
            {/* Product Images */}
            <div className="product-images">
              <div className="main-image">
                <img
                  src="/Mens1.jpg"
                  alt={`${product.name} - View ${activeImage + 1}`}
                  width={600}
                  height={700}
                  className="product-image"
                />
              </div>
              <div className="image-thumbnails">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    className={`thumbnail ${activeImage === index ? 'active' : ''}`}
                    onClick={() => setActiveImage(index)}
                  >
                    <Image 
                      src="/Mens1.2.jpg" 
                      alt={`Thumbnail ${index + 1}`}
                      width={80}
                      height={80}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="product-details">
              <div className="product-badge">
                <span>🎯 70 Explorers recently purchased</span>
              </div>
              
              <h1 className="product-title">{product.name}</h1>
              <div className="product-subtitle">
                <span>{product.description}</span>
                <span className="recycled-badge">♻️</span>
              </div>
              
              <div className="product-price">${product.price.toFixed(2)}</div>

              {/* Rating Summary */}
              <div className="rating-summary">
                <div className="recommendation-rate">
                  {product.recommendation}% Customer Recommended
                </div>
                <div className="rating-display">
                  <StarRating rating={product.rating} />
                  <span className="rating-text">{product.rating} ({product.reviews} Reviews)</span>
                </div>
              </div>

              {/* Color Selection */}
              <div className="color-selection">
                <h3>Color: <span>{colors.find(c => c.id === selectedColor)?.name}</span></h3>
                <div className="color-options">
                  {colors.map(color => (
                    <button
                      key={color.id}
                      className={`color-option ${selectedColor === color.id ? 'active' : ''}`}
                      onClick={() => setSelectedColor(color.id)}
                      style={{ background: color.color }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="size-selection">
                <h3>Size</h3>
                <div className="size-options">
                  {sizes.map(size => (
                    <button
                      key={size}
                      className={`size-option ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <a href="#size-chart" className="size-chart-link">Size Chart</a>
              </div>

              {/* Add to Cart Section */}
              <div className="add-to-cart-section">
                <button 
                  className="add-to-cart-btn"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
                <button className="wishlist-btn">
                  ♡
                </button>
              </div>

              {/* Payment Options */}
              <div className="payment-options">
                <div className="klarna-badge">
                  {/* Klarna badge would go here */}
                </div>
                <button className="learn-more">Learn more</button>
              </div>

              {/* Product Features */}
              <div className="product-features">
                <div className="feature">
                  <span className="icon">🚚</span>
                  <div>
                    <strong>Ship to Home</strong>
                    <p>Standard Shipping • 3-6 business days</p>
                    <button className="delivery-details">Delivery Details</button>
                  </div>
                </div>
                <div className="feature">
                  <span className="icon">📍</span>
                  <div>
                    <strong>In-Store Pickup</strong>
                    <p>Complete selection to see availability.</p>
                    <button className="find-store">Find Store</button>
                  </div>
                </div>
              </div>

              {/* Guarantee */}
              <div className="guarantee">
                <strong>🛡️ Limited Lifetime Guarantee & Free Returns</strong>
                <a href="#shipping">Shipping and Returns</a>
              </div>
            </div>
          </div>

          {/* Product Info Tabs */}
          <div className="product-info-tabs">
            <div className="tab-headers">
              <button 
                className={`tab-header ${activeTab === 'description' ? 'active' : ''}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button 
                className={`tab-header ${activeTab === 'features' ? 'active' : ''}`}
                onClick={() => setActiveTab('features')}
              >
                Features
              </button>
              <button 
                className={`tab-header ${activeTab === 'reviews' ? 'active' : ''}`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'description' && (
                <div className="description-content">
                  <div className="eco-features">
                    <div className="eco-feature">
                      <div className="eco-icon">♻️</div>
                      <div>
                        <h4>Recycled material</h4>
                        <p>Recycled content – Helps reduce landfill waste and the use of virgin materials.</p>
                      </div>
                    </div>
                    <div className="eco-feature">
                      <div className="eco-icon">🔄</div>
                      <div>
                        <h4>Circular Design</h4>
                        <p>This item is part of our Circular Design initiative – a collection designed to help regenerate natural system by minimising waste and pollution.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="product-description">
                    <p><strong>Style {product.styleCode}</strong></p>
                    <p>The Men&apos;s Yumiori Full-Zip features 100% recycled, high-pile fleece designed for warmth and comfort – whether you&apos;re on an errand or on belay. As one of our Circular Design styles, it&apos;s built to be broken down and turned into new gear at the end of its usable life.</p>
                  </div>

                  <div className="product-gallery">
                    {/* Gallery content would go here */}
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="features-content">
                  <h3>Features</h3>
                  <div className="features-grid">
                    <div className="feature-item">
                      <div className="feature-icon">🧵</div>
                      <div>
                        <h5>100% Recycled Material</h5>
                        <p>Made from 100% recycled high-pile fleece</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">🤐</div>
                      <div>
                        <h5>Full-Zip Front</h5>
                        <p>Easy on and off with full-zip design</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">👕</div>
                      <div>
                        <h5>Raglan Sleeves</h5>
                        <p>Enhanced mobility and comfort</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">👜</div>
                      <div>
                        <h5>Zippered Pockets</h5>
                        <p>Secure storage for your essentials</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">✨</div>
                      <div>
                        <h5>Elastic Cuffs & Hem</h5>
                        <p>Better fit and heat retention</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">🌱</div>
                      <div>
                        <h5>Circular Design</h5>
                        <p>Part of our sustainability initiative</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="reviews-content">
                  {/* Review Snapshot */}
                  <div className="review-snapshot">
                    <div className="review-stats">
                      <div className="recommendation-percent">{product.recommendation}%</div>
                      <div>Customer Recommended</div>
                    </div>
                    <div className="rating-overview">
                      <div className="average-rating">{product.rating}</div>
                      <StarRating rating={product.rating} size="1.2rem" />
                      <div className="review-count">{product.reviews} Reviews</div>
                    </div>
                    <div className="rating-breakdown">
                      <h4>Rating Breakdown</h4>
                      <div className="breakdown-grid">
                        <div className="breakdown-item">
                          <span>5 stars</span>
                          <div className="progress-bar">
                            <div className="progress-fill" style={{ width: '83%' }}></div>
                          </div>
                          <span>83</span>
                        </div>
                        <div className="breakdown-item">
                          <span>4 stars</span>
                          <div className="progress-bar">
                            <div className="progress-fill" style={{ width: '3%' }}></div>
                          </div>
                          <span>3</span>
                        </div>
                        <div className="breakdown-item">
                          <span>3 stars</span>
                          <div className="progress-bar">
                            <div className="progress-fill" style={{ width: '5%' }}></div>
                          </div>
                          <span>5</span>
                        </div>
                        <div className="breakdown-item">
                          <span>2 stars</span>