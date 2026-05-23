'use client';

import { useState, useEffect } from 'react';
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
useEffect(() => {
  if (typeof document !== "undefined") {
    const form = document.querySelector("form");
    const btn = document.querySelector("button");

    // your code here
  }
}, []);
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
                          <div className="progress-bar">
                            <div className="progress-fill" style={{ width: '1%' }}></div>
                          </div>
                          <span>1</span>
                        </div>
                        <div className="breakdown-item">
                          <span>1 star</span>
                          <div className="progress-bar">
                            <div className="progress-fill" style={{ width: '0%' }}></div>
                          </div>
                          <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Reviews Actions */}
                  <div className="reviews-actions">
                    <button className="write-review-btn">✏️ Write a Review</button>
                    <div className="reviews-controls">
                      <div className="search-reviews">
                        <input type="text" placeholder="Search Reviews..." />
                        <button>🔍</button>
                      </div>
                      <select className="sort-reviews">
                        <option>Sort: Most Recent</option>
                        <option>Most Helpful</option>
                        <option>Highest Rated</option>
                        <option>Lowest Rated</option>
                      </select>
                    </div>
                  </div>

                  {/* Customer Reviews */}
                  <div className="customer-reviews-list">
                    <div className="reviews-header">
                      <h3>Reviewed by {reviews.length} Customers</h3>
                      <div className="check-size">
                        <strong>Check Your Size</strong>
                      </div>
                    </div>
                    
                    <div className="reviews-grid">
                      {displayedReviews.map((review) => (
                        <div key={`${review.author}-${review.date}`} className="review-card">
                          <div className="review-header">
                            <div className="review-rating">
                              <StarRating rating={review.rating} />
                              <span>({review.rating}) {review.title}</span>
                            </div>
                          </div>
                          <p className="review-comment">{review.comment}</p>
                          <div className="review-meta">
                            <p className="bottom-line"><strong>Bottom Line:</strong> Yes, I would recommend to a friend</p>
                            <div className="reviewer-info">
                              <span className="review-date">Submitted {review.date}</span>
                              <span className="review-author">By {review.author}</span>
                              <span className="review-location">From {review.location}</span>
                              {review.verified && <span className="verified">✅ Verified Buyer</span>}
                            </div>
                          </div>
                          <div className="review-actions">
                            <p>Was this review helpful to you?</p>
                            <div className="helpful-buttons">
                              <button className="helpful-btn">👍 {review.helpful}</button>
                              <button className="not-helpful-btn">👎 0</button>
                              <button className="flag-review">🚩 Flag this review</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="reviews-footer">
                      <p>Displaying reviews 1-{displayedReviews.length}</p>
                      {!showAllReviews && reviews.length > 3 && (
                        <button 
                          className="show-more-reviews"
                          onClick={() => setShowAllReviews(true)}
                        >
                          Show More Reviews
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Just For You Section */}
        <section className="recommended-section">
          <div className="container">
            <h2 className="section-title">Just For You</h2>
            <div className="recommended-products">
              {recommendedProducts.map((product) => (
                <div key={product.id} className="recommended-product">
                  <div className="product-image">
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      width={200}
                      height={250}
                    />
                    <div className="color-options-small">
                      {product.colors.map((color, colorIndex) => (
                        <span 
                          key={colorIndex} 
                          className="color-dot" 
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                  <h3>{product.name}</h3>
                  <div className="product-price">${product.price.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* XPLR Pass Section */}
        <section className="xplr-section">
          <div className="container">
            <div className="xplr-content">
              <div className="xplr-icon">🎁</div>
              <h2>Join XPLR Pass</h2>
              <p>Free to join. Free shipping. Exclusive gear. Birthday gifts. Points on every purchase and rewards.</p>
              <button className="join-now-btn">Join Now</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-main">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h4>Shop</h4>
                <a href="/en-us/womens">Women&apos;s</a>
                <a href="/en-us/mens">Men&apos;s</a>
                <a href="/en-us/kids">Kids&apos;</a>
                <a href="/en-us/footwear">Footwear</a>
                <a href="/en-us/equipment">Equipment</a>
                <a href="/en-us/activity">By Activity</a>
                <a href="/en-us/more/gift-card">Gift Cards</a>
              </div>

              <div className="footer-section">
                <h4>Help</h4>
                <a href="/en-us/help/contact-us">Live Chat</a>
                <a href="/en-us/help">Help Center</a>
                <a href="/en-us/order-status">Order Status</a>
                <a href="/en-us/help/size-charts">Size Chart</a>
                <a href="/en-us/help/returns-policy">Returns & Warranty</a>
                <a href="/en-us/help/warranty">Submit a Warranty Claim</a>
                <a href="/en-us/help/contact-us">Contact Us</a>
                <a href="#accessibility">Accessibility Statement</a>
                <a href="/en-us/help/product-recall">Product Recall</a>
              </div>

              <div className="footer-section">
                <h4>About Us</h4>
                <a href="/en-us/about-us">Who We Are</a>
                <a href="/en-us/sustainability">Sustainability</a>
                <a href="https://www.thenorthfacerenewed.com">Renewed</a>
                <a href="/en-us/about-us/technology-innovation/technology">Technology & Innovation</a>
                <a href="/en-us/approach">Explore Our Stories</a>
                <a href="/en-us/about-us/athletes">Athletes</a>
                <a href="/en-us/about-us/power-of-nature">Power of Nature</a>
                <a href="/en-us/about-us/careers">Careers</a>
              </div>

              <div className="footer-section">
                <h4>Discover</h4>
                <a href="/en-us/mens-rainwear">Men&apos;s Raincoats</a>
                <a href="/en-us/womens-rainwear">Women&apos;s Raincoats</a>
                <a href="/en-us/mens-windbreakers">Men&apos;s Windbreakers</a>
                <a href="/en-us/womens-windbreakers">Women&apos;s Windbreakers</a>
                <a href="/en-us/school-backpacks">School Backpacks</a>
                <a href="/en-us/hiking-backpacks">Hiking Backpacks</a>
                <a href="/en-us/tents">Tents</a>
              </div>

              <div className="footer-section">
                <h4>Explore</h4>
                <a href="/en-us/xplr-pass">XPLR Pass</a>
                <a href="/en-us/events">Events</a>
                <a href="https://www.thenorthfacepro.com/en-pro">Pro Program</a>
                <a href="/en-us/student-discount">Student Discount</a>
                <a href="/en-us/teacher-discount">Teacher Discount</a>
                <a href="/en-us/military-discount">Military Discount</a>
                <a href="/en-us/healthcare-discount">Healthcare Worker Discount</a>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="footer-newsletter">
              <h3>Join Our Email List</h3>
              <p>Adventure is everywhere. Even in your inbox.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Email Address *" />
                <button>Sign Up</button>
              </div>
              <div className="newsletter-agreement">
                <input type="checkbox" id="newsletter-agree" />
                <label htmlFor="newsletter-agree">
                  I agree to the Privacy Policy & Terms of Use*
                </label>
              </div>
            </div>

            {/* Store Locator */}
            <div className="store-locator-section">
              <h3>Find a Store</h3>
              <p>Explore a retail store or outlet near you.</p>
              <button className="store-locator-btn">📍 Store Locator</button>
            </div>

            {/* Social Media */}
            <div className="social-media-section">
              <h3>Follow The North Face</h3>
              <div className="social-icons">
                <a href="#" className="social-icon">📘</a>
                <a href="#" className="social-icon">📷</a>
                <a href="#" className="social-icon">🐦</a>
                <a href="#" className="social-icon">🎵</a>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
              <div className="footer-links">
                <a href="#supply-chains">CA Supply Chains Act</a>
                <a href="#slavery-act">UK Slavery Act</a>
                <a href="/en-us/help/privacy">Privacy Policy</a>
                <a href="#privacy-choices">Your Privacy Choices</a>
                <a href="#notice-collection">Notice at Collection</a>
                <a href="/en-us/help/terms">Terms of Use</a>
                <a href="#accessibility">Accessibility Statement</a>
              </div>
              
              <div className="footer-country">
                <a href="/en-us/select-location">
                  <span className="flag">🇺🇸</span>
                  EN | Change Country
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Add to Cart Overlay */}
      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            {isLoading ? (
              <>
                <div className="loading-spinner"></div>
                <h2>Adding to Cart...</h2>
              </>
            ) : (
              <>
                <div className="success-icon">✅</div>
                <h2>Added to Cart</h2>
                <p>Your item has been successfully added to your shopping cart.</p>
                <div className="overlay-buttons">
                  <button className="continue-shopping" onClick={closeOverlay}>
                    Continue Shopping
                  </button>
                  <button className="view-cart" onClick={() => window.location.href = '/en-us/cart'}>
                    View Cart
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Header Styles */
        .header-top {
          background: #f8f8f8;
          border-bottom: 1px solid #e5e5e5;
          font-size: 0.875rem;
        }

        .header-utility {
          display: flex;
          justify-content: flex-end;
          gap: 1.5rem;
          padding: 0.5rem 0;
        }

        .header-utility a, .header-utility button {
          color: #666;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 0.875rem;
        }

        .location-selector {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .flag {
          font-size: 1rem;
        }

        .header-main {
          background: white;
          border-bottom: 1px solid #e5e5e5;
        }

        .main-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }

        .logo-image img {
          height: 40px;
          width: auto;
        }

        .nav-categories {
          display: flex;
          gap: 2rem;
        }

        .nav-categories a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .nav-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .search-btn, .cart-btn {
          background: none;
          border: none;
          cursor: pointer;
          position: relative;
          color: #333;
          padding: 0.5rem;
        }

        .search-btn svg, .cart-btn svg {
          width: 20px;
          height: 20px;
        }

        .cart-count {
          position: absolute;
          top: 0;
          right: 0;
          background: #d4001a;
          color: white;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          font-size: 0.7rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Breadcrumbs */
        .breadcrumbs {
          font-size: 0.875rem;
          color: #666;
          margin: 1rem 0;
        }

        .breadcrumbs a {
          color: #666;
          text-decoration: none;
        }

        .breadcrumbs a:hover {
          text-decoration: underline;
        }

        /* Product Grid */
        .product-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin: 2rem 0;
        }

        .product-images {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .main-image img {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }

        .image-thumbnails {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 0.5rem;
        }

        .thumbnail {
          border: 2px solid transparent;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          background: none;
          padding: 0;
        }

        .thumbnail.active {
          border-color: #000;
        }

        .thumbnail img {
          width: 100%;
          height: 80px;
          object-fit: cover;
        }

        /* Product Details */
        .product-badge {
          background: #f3f3f3;
          padding: 0.5rem;
          border-radius: 4px;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .product-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .product-subtitle {
          color: #666;
          margin-bottom: 1rem;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .recycled-badge {
          font-size: 1.2rem;
        }

        .product-price {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 1rem 0;
        }

        /* Rating Styles */
        .rating-summary {
          border-top: 1px solid #e5e5e5;
          border-bottom: 1px solid #e5e5e5;
          padding: 1rem 0;
          margin: 1rem 0;
        }

        .recommendation-rate {
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .rating-display {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .star-rating {
          position: relative;
          display: inline-block;
          color: #e5e5e5;
        }

        .stars-background, .stars-filled {
          display: flex;
        }

        .stars-filled {
          position: absolute;
          top: 0;
          left: 0;
          color: #000;
          overflow: hidden;
        }

        .rating-text {
          font-size: 0.875rem;
          text-decoration: underline;
          cursor: pointer;
        }

        /* Color and Size Selection */
        .color-selection, .size-selection {
          margin: 1.5rem 0;
        }

        .color-selection h3, .size-selection h3 {
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }

        .color-options, .size-options {
          display: flex;
          gap: 0.5rem;
          margin: 1rem 0;
        }

        .color-option {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          border: 2px solid transparent;
          cursor: pointer;
        }

        .color-option.active {
          border-color: #000;
        }

        .size-option {
          padding: 0.75rem 1rem;
          border: 1px solid #ddd;
          background: white;
          border-radius: 4px;
          cursor: pointer;
          min-width: 50px;
          text-align: center;
        }

        .size-option.active {
          border-color: #000;
          background: #000;
          color: white;
        }

        .size-chart-link {
          font-size: 0.875rem;
          text-decoration: underline;
          margin-top: 0.5rem;
          display: inline-block;
          color: #666;
        }

        /* Add to Cart Section */
        .add-to-cart-section {
          display: flex;
          gap: 1rem;
          margin: 2rem 0;
        }

        .add-to-cart-btn {
  background: #000;
  color: white;
  border: none;
  padding: 0.9rem 1.8rem; /* makes button smaller */
  font-size: 1rem;
  font-weight: bold;
  border-radius: 40px; /* round pill */
  cursor: pointer;
  transition: background-color 0.2s;
  width: auto; /* button size based on content */
}
.add-to-cart-btn:hover {
  background: #333;
}


        .wishlist-btn {
          background: white;
          border: 1px solid #ddd;
          padding: 1rem;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1.2rem;
          transition: border-color 0.2s;
        }

        .wishlist-btn:hover {
          border-color: #000;
        }

        /* Payment Options */
        .payment-options {
          background: #f8f8f8;
          padding: 1rem;
          border-radius: 4px;
          margin: 1rem 0;
          text-align: center;
        }

        .klarna-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .learn-more {
          background: none;
          border: none;
          text-decoration: underline;
          cursor: pointer;
          font-size: 0.875rem;
          color: #666;
        }

        /* Product Features */
        .product-features {
          border: 1px solid #e5e5e5;
          border-radius: 4px;
          margin: 2rem 0;
        }

        .feature {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          border-bottom: 1px solid #e5e5e5;
        }

        .feature:last-child {
          border-bottom: none;
        }

        .feature .icon {
          font-size: 1.5rem;
        }

        .feature strong {
          display: block;
          margin-bottom: 0.25rem;
        }

        .feature p {
          margin: 0;
          color: #666;
          font-size: 0.875rem;
        }

        .delivery-details, .find-store {
          background: none;
          border: 1px solid #000;
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 0.5rem;
          font-size: 0.875rem;
        }

        /* Guarantee */
        .guarantee {
          text-align: center;
          padding: 1rem;
          border-top: 1px solid #e5e5e5;
          margin-top: 2rem;
        }

        .guarantee a {
          display: block;
          margin-top: 0.5rem;
          color: #666;
          text-decoration: underline;
        }

        /* Product Info Tabs */
        .product-info-tabs {
          margin: 4rem 0;
        }

        .tab-headers {
          display: flex;
          border-bottom: 1px solid #e5e5e5;
        }

        .tab-header {
          background: none;
          border: none;
          padding: 1rem 2rem;
          cursor: pointer;
          border-bottom: 2px solid transparent;
        }

        .tab-header.active {
          border-bottom-color: #000;
          font-weight: bold;
        }

        .tab-content {
          padding: 2rem 0;
        }

        /* Description Content */
        .eco-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .eco-feature {
          display: flex;
          gap: 1rem;
          padding: 1.5rem;
          background: #f8f8f8;
          border-radius: 4px;
        }

        .eco-icon {
          font-size: 2rem;
        }

        .eco-feature h4 {
          margin-bottom: 0.5rem;
        }

        .product-gallery {
          margin-top: 3rem;
        }

        .gallery-images {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-top: 1rem;
        }

        .gallery-images img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 4px;
        }

        /* Features Content */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 2rem;
        }

        .feature-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .feature-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        /* Reviews Content */
        .review-snapshot {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
          padding: 2rem;
          border: 1px solid #e5e5e5;
          border-radius: 4px;
        }

        .review-stats, .rating-overview {
          text-align: center;
        }

        .recommendation-percent {
          font-size: 3rem;
          font-weight: bold;
        }

        .average-rating {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .review-count {
          margin-top: 0.5rem;
          font-size: 0.875rem;
        }

        .rating-breakdown h4 {
          margin-bottom: 1rem;
        }

        .breakdown-grid {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .breakdown-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .progress-bar {
          flex: 1;
          background: #e5e5e5;
          height: 8px;
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          background: #000;
          height: 100%;
        }

        /* Reviews Actions */
        .reviews-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding: 1rem 0;
          border-bottom: 1px solid #e5e5e5;
        }

        .write-review-btn {
          background: #000;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
        }

        .reviews-controls {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .search-reviews {
          display: flex;
          align-items: center;
          border: 1px solid #ddd;
          border-radius: 4px;
          overflow: hidden;
        }

        .search-reviews input {
          border: none;
          padding: 0.5rem;
          outline: none;
          min-width: 200px;
        }

        .search-reviews button {
          background: none;
          border: none;
          padding: 0.5rem;
          cursor: pointer;
        }

        .sort-reviews {
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          background: white;
        }

        /* Customer Reviews */
        .customer-reviews-list .reviews-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .check-size {
          background: #f8f8f8;
          padding: 0.5rem 1rem;
          border-radius: 4px;
        }

        .reviews-grid {
          display: grid;
          gap: 2rem;
        }

        .review-card {
          border-bottom: 1px solid #e5e5e5;
          padding-bottom: 2rem;
        }

        .review-header {
          margin-bottom: 1rem;
        }

        .review-rating {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .review-comment {
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .review-meta {
          margin-bottom: 1rem;
        }

        .bottom-line {
          margin-bottom: 0.5rem;
        }

        .reviewer-info {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          font-size: 0.875rem;
          color: #666;
        }

        .verified {
          color: #007b00;
          font-weight: bold;
        }

        .review-actions {
          background: #f8f8f8;
          padding: 1rem;
          border-radius: 4px;
        }

        .review-actions p {
          margin: 0 0 0.5rem 0;
          font-size: 0.875rem;
        }

        .helpful-buttons {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .helpful-btn, .not-helpful-btn {
          background: white;
          border: 1px solid #ddd;
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.875rem;
        }

        .flag-review {
          background: none !important;
          border: none !important;
          text-decoration: underline;
          color: #666;
          cursor: pointer;
        }

        .reviews-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid #e5e5e5;
        }

        .show-more-reviews {
          background: none;
          border: none;
          color: #666;
          text-decoration: underline;
          cursor: pointer;
        }

        /* Recommended Products */
        .recommended-section {
          padding: 4rem 0;
          background: #f8f8f8;
        }

        .section-title {
          font-size: 2rem;
          text-align: center;
          margin-bottom: 2rem;
        }

        .recommended-products {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .recommended-product {
          text-align: center;
          background: white;
          padding: 1rem;
          border-radius: 4px;
          position: relative;
        }

        .product-image {
          position: relative;
          margin-bottom: 1rem;
        }

        .product-image img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 4px;
        }

        .color-options-small {
          display: flex;
          justify-content: center;
          gap: 0.25rem;
          margin-top: 0.5rem;
        }

        .color-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 1px solid #ddd;
        }

        .recommended-product h3 {
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }

        /* XPLR Pass Section */
        .xplr-section {
          background: #000;
          color: white;
          padding: 3rem 0;
          text-align: center;
        }

        .xplr-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .xplr-content h2 {
          margin-bottom: 1rem;
        }

        .xplr-content p {
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .join-now-btn {
          background: white;
          color: #000;
          border: none;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: bold;
          border-radius: 4px;
          cursor: pointer;
        }

        /* Footer Styles */
        .footer {
          background: #f5f5f5;
          border-top: 1px solid #e5e5e5;
        }

        .footer-main {
          padding: 3rem 0;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .footer-section h4 {
          margin-bottom: 1rem;
          font-weight: bold;
        }

        .footer-section a {
          display: block;
          color: #666;
          text-decoration: none;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }

        .footer-section a:hover {
          text-decoration: underline;
        }

        .footer-newsletter, .store-locator-section, .social-media-section {
          text-align: center;
          padding: 2rem 0;
          border-top: 1px solid #e5e5e5;
        }

        .newsletter-form {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin: 1rem 0;
        }

        .newsletter-form input {
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          min-width: 250px;
        }

        .newsletter-form button {
          background: #000;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
        }

        .newsletter-agreement {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.875rem;
        }

        .store-locator-btn {
          background: #000;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 0.5rem;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 1rem;
        }

        .social-icon {
          font-size: 1.5rem;
          text-decoration: none;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          padding-top: 2rem;
          border-top: 1px solid #e5e5e5;
        }

        .footer-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .footer-links a {
          color: #666;
          text-decoration: none;
          font-size: 0.875rem;
        }

        .footer-links a:hover {
          text-decoration: underline;
        }

        .footer-country a {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #666;
          text-decoration: none;
        }

        /* Overlay Styles */
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .overlay-content {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
          max-width: 400px;
          width: 90%;
        }

        .success-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .overlay h2 {
          margin-bottom: 1rem;
        }

        .overlay p {
          margin-bottom: 1.5rem;
          color: #666;
        }

        .overlay-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .continue-shopping {
          background: white;
          border: 1px solid #000;
          color: #000;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          cursor: pointer;
        }

        .view-cart {
          background: #000;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          cursor: pointer;
        }

        .loading-spinner {
          border: 3px solid #f3f3f3;
          border-top: 3px solid #000;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
          margin: 0 auto 1rem;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .product-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .nav-categories {
            display: none;
          }

          .footer-content {
            grid-template-columns: 1fr;
          }

          .review-snapshot {
            grid-template-columns: 1fr;
          }

          .eco-features {
            grid-template-columns: 1fr;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .recommended-products {
            grid-template-columns: repeat(2, 1fr);
          }

          .reviews-actions {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }

          .customer-reviews-list .reviews-header {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .header-utility {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
          }

          .image-thumbnails {
            grid-template-columns: repeat(3, 1fr);
          }

          .gallery-images {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .recommended-products {
            grid-template-columns: 1fr;
          }

          .add-to-cart-section {
            flex-direction: column;
          }

          .helpful-buttons {
            flex-direction: column;
            align-items: flex-start;
          }

          .reviewer-info {
            flex-direction: column;
            gap: 0.25rem;
          }

          .overlay-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
};

export default ProductPage;