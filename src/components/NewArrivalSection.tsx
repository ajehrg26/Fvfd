import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { ALL_PRODUCTS } from '../data/products';
import { useShop } from '../context/ShopContext';

export const NewArrivalSection: React.FC = () => {
  const { navigateToCategory } = useShop();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Filter new arrival products
  const newArrivals = ALL_PRODUCTS.filter((p) => p.isNewArrival);

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = carouselRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [newArrivals.length]);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.9;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="new-arrival-section" className="w-full">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <h3
          id="new-arrival-title"
          className="text-xl sm:text-2xl font-black uppercase italic tracking-tighter text-black m-0"
        >
          New Arrival
        </h3>

        <div className="flex items-center gap-2">
          {/* Carousel navigation arrows */}
          <div className="flex items-center gap-1">
            <button
              id="new-arrival-prev-btn"
              onClick={() => scrollCarousel('left')}
              disabled={!canScrollLeft}
              className={`w-7 h-7 rounded-full border flex items-center justify-center transition-colors focus:outline-none ${
                canScrollLeft
                  ? 'border-gray-300 text-black hover:bg-black hover:text-white hover:border-black cursor-pointer'
                  : 'border-gray-100 text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Previous new arrivals"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              id="new-arrival-next-btn"
              onClick={() => scrollCarousel('right')}
              disabled={!canScrollRight}
              className={`w-7 h-7 rounded-full border flex items-center justify-center transition-colors focus:outline-none ${
                canScrollRight
                  ? 'border-gray-300 text-black hover:bg-black hover:text-white hover:border-black cursor-pointer'
                  : 'border-gray-100 text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Next new arrivals"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Minimal Editorial See All pill */}
          <button
            id="new-arrival-see-all-btn"
            onClick={() => navigateToCategory('new-arrivals')}
            className="text-[10px] font-bold uppercase tracking-widest border border-black rounded-full px-4 py-1 hover:bg-black hover:text-white transition-colors focus:outline-none"
          >
            See All
          </button>
        </div>
      </div>

      {/* Swipeable 2-Column Product Carousel */}
      <div
        ref={carouselRef}
        id="new-arrival-grid"
        className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth pb-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {newArrivals.map((product) => (
          <div
            key={product.id}
            className="w-[calc(50%-6px)] sm:w-[calc(50%-8px)] flex-shrink-0 snap-start"
          >
            <ProductCard product={product} variant="standard" />
          </div>
        ))}
      </div>
    </section>
  );
};
