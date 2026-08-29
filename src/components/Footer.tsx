import React, { useState } from 'react';
import { ArrowRight, Instagram, Twitter, Youtube, Music, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Footer: React.FC = () => {
  const { navigateToCategory, showToast } = useShop();
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      showToast(
        'Welcome to Flint N Steel Club',
        '10% off your next order code (FLINT10) has been activated.',
        'success'
      );
      setNewsletterEmail('');
    }
  };

  return (
    <footer id="main-footer" className="bg-[#111111] text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Newsletter & Brand statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-neutral-800">
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center space-x-1.5">
              <span className="font-brand text-3xl sm:text-4xl font-extrabold tracking-tighter text-white">
                Flint N Steel
              </span>
              <span className="w-2 h-2 rounded-full bg-[#ff4500]" />
            </div>
            <p className="text-neutral-400 text-sm max-w-md leading-relaxed">
              We don’t just make lighters. We make sparks. Born in India, built for the culture. Old soul. New flame. Unique designs. Bold attitude. Made to stand out.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#ff4500]">
              Join The Flint N Steel Syndicate
            </h4>
            <p className="text-xs text-neutral-400">
              Receive secret drop alerts, VIP early access, and 10% off your inaugural order.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 text-xs px-4 py-3 rounded-full bg-neutral-900 border border-neutral-700 text-white placeholder:text-neutral-500 focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="bg-white text-black hover:bg-neutral-200 text-xs font-bold px-6 py-3 rounded-full transition-colors flex items-center space-x-1 flex-shrink-0"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Links Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          {/* Shop */}
          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs">Collections</h5>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button
                  onClick={() => navigateToCategory('new-arrivals')}
                  className="hover:text-white transition-colors"
                >
                  New Arrivals
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToCategory('best-sellers')}
                  className="hover:text-white transition-colors"
                >
                  Best Sellers (3k+ Reviews)
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs">Customer Studio</h5>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="#hero-section" className="hover:text-white transition-colors">
                  Complimentary Express Shipping
                </a>
              </li>
              <li>
                <a href="#hero-section" className="hover:text-white transition-colors">
                  30-Day Hassle-Free Returns
                </a>
              </li>
              <li>
                <a href="#hero-section" className="hover:text-white transition-colors">
                  Garment Care & Sizing Matrix
                </a>
              </li>
              <li>
                <a href="#hero-section" className="hover:text-white transition-colors">
                  Track Package In Realtime
                </a>
              </li>
            </ul>
          </div>

          {/* About Flint N Steel */}
          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs">About Flint N Steel</h5>
            <div className="text-neutral-400 text-xs leading-relaxed space-y-2">
              <p>Flint N Steel is an Indian lighter brand built around fire, design, and attitude.</p>
              <p className="text-neutral-300 font-medium">Not just a lighter.</p>
              <p className="text-white font-medium">A little piece of fire you carry with you. 🔥</p>
            </div>
          </div>

          {/* Community & Socials */}
          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs">Community</h5>
            <p className="text-neutral-400 text-xs">
              Tag <strong>#FeelTheVibes</strong> and <strong>@FlintNSteelFashion</strong> to be featured on our official runway feed.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-white hover:text-black flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-white hover:text-black flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <Music className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-white hover:text-black flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Founders Credit */}
        <div className="pt-8 pb-3 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs text-neutral-400">
          <span className="font-bold uppercase tracking-wider text-neutral-300 text-[11px]">Founders:</span>
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="https://instagram.com/spiri1ual"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-white hover:text-[#ff4500] font-medium transition-colors"
            >
              <Instagram className="w-3 h-3 text-neutral-500" />
              <span>@spiri1ual</span>
            </a>
            <span className="text-neutral-700">•</span>
            <a
              href="https://instagram.com/mainakk__"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-white hover:text-[#ff4500] font-medium transition-colors"
            >
              <Instagram className="w-3 h-3 text-neutral-500" />
              <span>@mainakk__</span>
            </a>
            <span className="text-neutral-700">•</span>
            <a
              href="https://instagram.com/anirvannn"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-white hover:text-[#ff4500] font-medium transition-colors"
            >
              <Instagram className="w-3 h-3 text-neutral-500" />
              <span>@anirvannn</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Flint N Steel Studio Inc. All rights reserved.</p>
            <span className="hidden sm:inline text-neutral-700">•</span>
            <p className="text-neutral-300 flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
              <span>Bhai ne website aisi banayi, seedha scene on.</span>
              <a
                href="https://instagram.com/anirvannn"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 text-white hover:text-[#ff4500] font-semibold transition-colors underline underline-offset-2 ml-0.5 animate-pulse"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Anirvan (@anirvannn)</span>
                <span>🫡⚡</span>
              </a>
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hover:text-neutral-300 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-neutral-300 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-neutral-300 cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
