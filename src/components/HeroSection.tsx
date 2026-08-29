import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useShop } from '../context/ShopContext';
import { ALL_PRODUCTS } from '../data/products';

const FallingCigarette: React.FC = () => {
  return (
    <motion.div
      id="hero-falling-cigarette"
      initial={{ y: -160, x: 0, rotate: -42, opacity: 0 }}
      animate={{
        y: [-160, -20, 200, 520],
        x: [0, 25, 45, 70],
        rotate: [-42, -15, 38, 85],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 3.2,
        times: [0, 0.15, 0.78, 1],
        ease: [0.33, 1, 0.68, 1],
      }}
      className="absolute top-0 left-[48%] sm:left-[56%] md:left-[62%] z-30 pointer-events-none drop-shadow-[0_20px_25px_rgba(0,0,0,0.85)]"
    >
      <div className="relative flex flex-col items-center">
        {/* Subtle ethereal smoke drift from the burning tip */}
        <motion.div
          animate={{
            opacity: [0.2, 0.65, 0.1],
            scale: [0.8, 1.4, 2.2],
            y: [-12, -45, -80],
            x: [-4, 12, -10],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeOut',
          }}
          className="absolute -top-7 w-6 h-10 bg-gradient-to-t from-white/35 via-white/15 to-transparent rounded-full blur-[3px] pointer-events-none"
        />

        {/* Realistic High-Detail Cigarette SVG */}
        <svg
          width="26"
          height="126"
          viewBox="0 0 26 126"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-[0_8px_18px_rgba(0,0,0,0.7)]"
        >
          {/* Glowing Ember Heat Aura */}
          <circle cx="13" cy="6" r="9" fill="#ff4500" fillOpacity="0.4" className="blur-[3px]" />
          <circle cx="13" cy="6" r="5" fill="#ffaa00" fillOpacity="0.5" className="blur-[1px]" />

          {/* Burning Tip Ash & Hot Spot */}
          <ellipse cx="13" cy="6" rx="6.5" ry="3.5" fill="#1e1e1e" />
          <ellipse cx="13" cy="6" rx="5.2" ry="2.8" fill="#ff3b00" />
          <ellipse cx="13" cy="6" rx="3.6" ry="1.8" fill="#ff9900" />
          <ellipse cx="13" cy="6" rx="1.8" ry="1" fill="#fff7d6" />

          {/* Charcoal Ash Band */}
          <rect x="6.5" y="6" width="13" height="7" fill="url(#ashGradientHero)" />

          {/* White Paper Cylinder Body with soft cylindrical 3D gradient */}
          <rect x="6.5" y="13" width="13" height="76" fill="url(#paperGradientHero)" />

          {/* Subtle Paper Texture Lines */}
          <line x1="6.5" y1="30" x2="19.5" y2="30" stroke="#e5e5ea" strokeWidth="0.6" strokeOpacity="0.75" />
          <line x1="6.5" y1="47" x2="19.5" y2="47" stroke="#e5e5ea" strokeWidth="0.6" strokeOpacity="0.75" />
          <line x1="6.5" y1="64" x2="19.5" y2="64" stroke="#e5e5ea" strokeWidth="0.6" strokeOpacity="0.75" />
          <line x1="6.5" y1="81" x2="19.5" y2="81" stroke="#e5e5ea" strokeWidth="0.6" strokeOpacity="0.75" />

          {/* Gold Metallic Accent Ring */}
          <rect x="6.5" y="88" width="13" height="2" fill="url(#goldGradientHero)" />

          {/* Cork/Tan Filter Tip */}
          <rect x="6.5" y="90" width="13" height="30" rx="1" fill="url(#corkGradientHero)" />

          {/* Cork Filter Micro-dots */}
          <circle cx="9" cy="97" r="0.65" fill="#9c5525" opacity="0.6" />
          <circle cx="15.5" cy="101" r="0.55" fill="#9c5525" opacity="0.6" />
          <circle cx="11" cy="108" r="0.7" fill="#9c5525" opacity="0.6" />
          <circle cx="16.5" cy="115" r="0.55" fill="#9c5525" opacity="0.6" />

          {/* Filter Base Rounded Cap */}
          <ellipse cx="13" cy="120" rx="6.5" ry="2.6" fill="#b0652e" />

          {/* SVG Lighting Gradients */}
          <defs>
            <linearGradient id="paperGradientHero" x1="6.5" y1="13" x2="19.5" y2="13" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ebebf0" />
              <stop offset="0.3" stopColor="#ffffff" />
              <stop offset="0.8" stopColor="#f4f4f7" />
              <stop offset="1" stopColor="#d5d5dc" />
            </linearGradient>
            <linearGradient id="corkGradientHero" x1="6.5" y1="90" x2="19.5" y2="90" gradientUnits="userSpaceOnUse">
              <stop stopColor="#bf773c" />
              <stop offset="0.3" stopColor="#e39d5f" />
              <stop offset="0.8" stopColor="#cc8344" />
              <stop offset="1" stopColor="#a05a24" />
            </linearGradient>
            <linearGradient id="goldGradientHero" x1="6.5" y1="88" x2="19.5" y2="88" gradientUnits="userSpaceOnUse">
              <stop stopColor="#c5a059" />
              <stop offset="0.5" stopColor="#ffd700" />
              <stop offset="1" stopColor="#9c7a36" />
            </linearGradient>
            <linearGradient id="ashGradientHero" x1="6.5" y1="6" x2="19.5" y2="6" gradientUnits="userSpaceOnUse">
              <stop stopColor="#222222" />
              <stop offset="0.4" stopColor="#555555" />
              <stop offset="0.8" stopColor="#383838" />
              <stop offset="1" stopColor="#181818" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </motion.div>
  );
};

export const HeroSection: React.FC = () => {
  const { navigateToCategory, navigateToProduct } = useShop();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const blackDragonProduct = ALL_PRODUCTS.find((p) => p.id === 'daisy-shirt') || ALL_PRODUCTS[0];
  const skullLighterProduct = ALL_PRODUCTS.find((p) => p.id === 'skull-phantom-silver-lighter') || ALL_PRODUCTS[1];

  const heroSlides = [
    {
      id: 'slide-1',
      title: 'FEEL THE VIBES',
      modelImage: 'https://lh3.googleusercontent.com/d/1wodjfs7irax0-rAnK-mnhm6fZeK76Loz',
      bgGradient: 'from-neutral-950 via-zinc-900 to-black',
      badgeText: 'Fire Your Way',
      objectFit: 'cover',
      objectPosition: 'center 40%',
      zoomScale: 1.38,
    },
    {
      id: 'slide-2',
      title: 'STREET ATTITUDE',
      modelImage: 'https://lh3.googleusercontent.com/d/1Q9wMjSvs6Ii-PX-WKSJGdaL-3S3siIcq',
      bgGradient: 'from-neutral-950 via-zinc-900 to-black',
    },
    {
      id: 'slide-3',
      title: 'ICONIC SILHOUETTE',
      modelImage: 'https://lh3.googleusercontent.com/d/15SzdVUBFkoVhpzvbun7eRyGAr4yR4AIu',
      bgGradient: 'from-neutral-950 via-zinc-900 to-black',
      slantedCards: {
        left: {
          product: blackDragonProduct,
          title: 'Black Dragon Lighter',
          price: '₹599.00',
          badge: 'New Drop',
          image: 'https://lh3.googleusercontent.com/d/1i6-gHxCE6Wtwqc1bjf9MSF3EWbPkat-3',
        },
        right: {
          product: skullLighterProduct,
          title: 'Skull Face Lighter',
          price: '₹399.00',
          badge: 'Hot Drop',
          image: 'https://lh3.googleusercontent.com/d/1Z34yuLquOFDWnWL0prXDWODBZF4MqSs5',
        },
      },
    },
    {
      id: 'slide-4',
      title: 'RAW EXPRESSION',
      modelImage: 'https://lh3.googleusercontent.com/d/1fItn9EnvRZY6h6lbI41hQiOi_K1PTi6U',
      bgGradient: 'from-neutral-950 via-zinc-900 to-black',
    },
  ];

  const current = heroSlides[activeSlide];

  // Auto-change hero slide every 5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length, isPaused]);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section id="hero-section" className="w-full flex flex-col shrink-0">
      {/* 1. Large Editorial Headline with Smooth Cross-Fade */}
      <div className="h-[65px] sm:h-[80px] lg:h-[90px] flex items-center justify-center shrink-0 px-4 select-none overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.h1
            key={current.id + '-title'}
            id="hero-editorial-title"
            initial={{ opacity: 0, y: 12, filter: 'blur(3px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(3px)' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[76px] font-black uppercase tracking-tighter leading-none m-0 text-center text-black"
          >
            {current.title}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* 2. Black Promotional Ticker Bar */}
      <div
        id="hero-scrolling-ticker"
        className="h-[26px] sm:h-[28px] bg-black flex items-center overflow-hidden whitespace-nowrap shrink-0 border-y border-neutral-900"
      >
        <div className="animate-marquee flex items-center gap-12 text-[11px] font-bold text-white uppercase tracking-widest">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 whitespace-nowrap">
              <span>Catch the style</span>
              <span className="text-[#ff4500] text-sm">✦</span>
              <span>New Arrivals Live</span>
              <span className="text-[#ff7b00] text-sm">✦</span>
              <span>Feel the vibes</span>
              <span className="text-[#ff4500] text-sm">✦</span>
              <span>Season 2026 Drop</span>
              <span className="text-[#ff7b00] text-sm">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Editorial Magazine Hero Banner */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-3">
        <div
          id="hero-banner-card"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="h-[430px] sm:h-[410px] md:h-[400px] lg:h-[420px] rounded-2xl sm:rounded-3xl relative overflow-hidden flex shrink-0 shadow-xl text-white group/banner bg-neutral-950"
        >
          {/* Background and Slide Content animated seamlessly */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`absolute inset-0 w-full h-full bg-gradient-to-br ${current.bgGradient} flex flex-col md:flex-row items-stretch overflow-hidden`}
            >
              <div
                id="hero-full-banner-image"
                onClick={() => navigateToCategory('featured')}
                className="w-full h-full relative cursor-pointer group bg-neutral-950 flex items-center justify-center overflow-hidden"
              >
                {current.objectFit === 'contain' && (
                  <div
                    className="absolute inset-0 bg-cover bg-center blur-2xl opacity-30 scale-110 pointer-events-none"
                    style={{ backgroundImage: `url(${current.modelImage})` }}
                  />
                )}
                <motion.img
                  initial={{ scale: (current.zoomScale || 1) * 1.02, opacity: 0.85 }}
                  animate={{ scale: current.zoomScale || 1, opacity: 1 }}
                  whileHover={{ scale: (current.zoomScale || 1) * 1.03 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  src={current.modelImage}
                  alt={current.title}
                  style={{ objectPosition: current.objectPosition || 'center' }}
                  className={`relative z-10 w-full h-full ${
                    current.objectFit === 'contain' ? 'object-contain' : 'object-cover'
                  } transition-transform duration-700 ease-out`}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none z-10" />

                {/* Liquid Glass Badge with "Fire Your Way" (matching EditorialFeatureSection) */}
                {current.badgeText && (
                  <motion.div
                    id="hero-liquid-glass-badge"
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-5 sm:bottom-8 left-4 sm:left-8 z-20 pointer-events-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateToCategory('new-arrivals');
                    }}
                  >
                    <div className="group/pill inline-flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-white transition-all duration-300 hover:bg-white/30 hover:border-white/60 hover:scale-105 cursor-pointer">
                      <span className="text-xs sm:text-sm font-semibold tracking-wide drop-shadow-sm select-none">
                        {current.badgeText}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/90 group-hover/pill:translate-x-0.5 group-hover/pill:-translate-y-0.5 transition-transform" />
                    </div>
                  </motion.div>
                )}

                {/* Slanted Product Cards for 3rd Slide */}
                {current.slantedCards && (
                  <>
                    {/* Left Slanted Card: Black Dragon Luxury Metal Lighter */}
                    <motion.div
                      id="hero-slanted-card-left"
                      initial={{ opacity: 0, x: -20, y: 20, rotate: -7 }}
                      animate={{ opacity: 1, x: 0, y: 0, rotate: -6 }}
                      exit={{ opacity: 0, x: -15, y: 10, rotate: -3 }}
                      transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateToProduct(current.slantedCards!.left.product);
                      }}
                      className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-3 sm:left-6 md:left-8 z-20 pointer-events-auto cursor-pointer group hover:-rotate-2 hover:scale-105 transition-all duration-300"
                    >
                      <div className="bg-black/85 hover:bg-black/95 backdrop-blur-md p-1.5 sm:p-2 rounded-xl sm:rounded-2xl border border-white/25 shadow-[0_12px_32px_rgba(0,0,0,0.8)] w-24 sm:w-28 md:w-32 flex flex-col gap-1">
                        <div className="w-full h-16 sm:h-20 rounded-lg overflow-hidden bg-neutral-900 relative">
                          <img
                            src={current.slantedCards.left.image}
                            alt={current.slantedCards.left.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                          />
                          <span className="absolute top-1 left-1 text-[7px] sm:text-[8px] font-black uppercase px-1.5 py-0.5 rounded bg-amber-400 text-black leading-none shadow">
                            {current.slantedCards.left.badge}
                          </span>
                        </div>
                        <div className="px-0.5">
                          <p className="text-[9px] sm:text-[10px] md:text-[11px] font-bold text-white leading-tight truncate">
                            {current.slantedCards.left.title}
                          </p>
                          <p className="text-[9px] sm:text-[10px] md:text-[11px] font-black text-amber-400">
                            {current.slantedCards.left.price}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Right Slanted Card: Skull Face Luxury Metal Lighter */}
                    <motion.div
                      id="hero-slanted-card-right"
                      initial={{ opacity: 0, x: 20, y: 20, rotate: 7 }}
                      animate={{ opacity: 1, x: 0, y: 0, rotate: 6 }}
                      exit={{ opacity: 0, x: 15, y: 10, rotate: 3 }}
                      transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateToProduct(current.slantedCards!.right.product);
                      }}
                      className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-8 sm:right-12 md:right-16 z-20 pointer-events-auto cursor-pointer group hover:rotate-2 hover:scale-105 transition-all duration-300"
                    >
                      <div className="bg-black/85 hover:bg-black/95 backdrop-blur-md p-1.5 sm:p-2 rounded-xl sm:rounded-2xl border border-white/25 shadow-[0_12px_32px_rgba(0,0,0,0.8)] w-24 sm:w-28 md:w-32 flex flex-col gap-1">
                        <div className="w-full h-16 sm:h-20 rounded-lg overflow-hidden bg-neutral-900 relative">
                          <img
                            src={current.slantedCards.right.image}
                            alt={current.slantedCards.right.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                          />
                          <span className="absolute top-1 left-1 text-[7px] sm:text-[8px] font-black uppercase px-1.5 py-0.5 rounded bg-red-500 text-white leading-none shadow">
                            {current.slantedCards.right.badge}
                          </span>
                        </div>
                        <div className="px-0.5">
                          <p className="text-[9px] sm:text-[10px] md:text-[11px] font-bold text-white leading-tight truncate">
                            {current.slantedCards.right.title}
                          </p>
                          <p className="text-[9px] sm:text-[10px] md:text-[11px] font-black text-red-400">
                            {current.slantedCards.right.price}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}

                {/* 4th Slide Falling Cigarette Effect */}
                {current.id === 'slide-4' && <FallingCigarette key={`falling-cig-${activeSlide}`} />}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Quick Slide Navigation Arrows */}
          <button
            id="hero-prev-btn"
            onClick={handlePrevSlide}
            aria-label="Previous Slide"
            className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover/banner:opacity-100 transition-all duration-300 z-30 cursor-pointer focus:outline-none"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            id="hero-next-btn"
            onClick={handleNextSlide}
            aria-label="Next Slide"
            className="absolute right-9 sm:right-12 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover/banner:opacity-100 transition-all duration-300 z-30 cursor-pointer focus:outline-none"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Vertical Slide Indicators */}
          <div
            id="hero-pagination-indicators"
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-30 pointer-events-auto"
          >
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                id={`hero-dot-${idx}`}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-500 rounded-full focus:outline-none cursor-pointer ${
                  activeSlide === idx
                    ? 'w-1.5 h-8 bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]'
                    : 'w-1.5 h-3 bg-white/40 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

