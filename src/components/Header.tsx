import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Header: React.FC = () => {
  const {
    setActivePage,
    setIsCartOpen,
    setIsWishlistOpen,
    cartCount,
    wishlist,
  } = useShop();

  const handleLogoClick = () => {
    setActivePage('home');
  };

  return (
    <header
      id="main-header"
      className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-[52px] sm:h-[56px] flex items-center justify-between gap-4">
        {/* Left: Brand Logo */}
        <div className="flex items-center flex-shrink-0">
          <button
            id="brand-logo-btn"
            onClick={handleLogoClick}
            className="group flex items-center gap-1.5 text-left focus:outline-none"
          >
            <span className="text-xl sm:text-2xl font-black tracking-tighter text-black group-hover:opacity-75 transition-opacity flex items-center gap-1">
              Flint N Steel
            </span>
          </button>
        </div>

        {/* Right Section: Wishlist, Cart */}
        <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
          {/* Wishlist Icon with count */}
          <button
            id="header-wishlist-btn"
            onClick={() => setIsWishlistOpen(true)}
            className="relative text-black hover:text-gray-500 transition-colors focus:outline-none p-1"
            aria-label="View Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span
                id="wishlist-badge"
                className="absolute -top-1 -right-1 bg-red-600 text-[9px] text-white w-4 h-4 rounded-full flex items-center justify-center font-bold"
              >
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Cart Icon with count */}
          <button
            id="header-cart-btn"
            onClick={() => setIsCartOpen(true)}
            className="relative text-black hover:text-gray-500 transition-colors focus:outline-none p-1"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span
                id="cart-count-badge"
                className="absolute -top-1 -right-1 bg-red-600 text-[9px] text-white w-4 h-4 rounded-full flex items-center justify-center font-bold"
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

