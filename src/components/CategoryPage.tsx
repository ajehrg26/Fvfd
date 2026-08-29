import React, { useMemo } from 'react';
import { Sparkles, Package } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { ALL_PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';

export const CategoryPage: React.FC = () => {
  const {
    selectedCategory,
    filterState,
    setFilterState,
  } = useShop();

  const categoryTitles: Record<string, { title: string; subtitle: string }> = {
    all: {
      title: 'Catalog',
      subtitle: 'Explore the complete universe of pieces and limited drop editions.',
    },
    men: {
      title: "Men's Collection",
      subtitle: 'Technical windbreakers, heavy selvedge denim, and washed heavyweight fleece.',
    },
    women: {
      title: "Women's Collection",
      subtitle: 'Sculptural silhouettes, relaxed botanical cuts, and fluid fabrics.',
    },
    kids: {
      title: 'Junior Collection',
      subtitle: 'Ultra-warm colorblock puffers and everyday streetwear.',
    },
    featured: {
      title: 'Featured Collection',
      subtitle: 'High-voltage streetwear statements and experimental aesthetics.',
    },
    'new-arrivals': {
      title: 'New Arrivals',
      subtitle: 'Fresh drops straight from the design studio.',
    },
    'best-sellers': {
      title: 'Best Sellers',
      subtitle: 'Our most-loved silhouettes with top community ratings.',
    },
  };

  const currentMeta = categoryTitles[selectedCategory] || {
    title: `${selectedCategory.toUpperCase()} COLLECTION`,
    subtitle: 'Curated fashion pieces engineered for contemporary style.',
  };

  // Filter & sort logic
  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((product) => {
      // Category match
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'new-arrivals' && !product.isNewArrival) return false;
        if (selectedCategory === 'best-sellers' && !product.isBestSeller) return false;
        if (
          selectedCategory !== 'new-arrivals' &&
          selectedCategory !== 'best-sellers' &&
          product.category !== selectedCategory &&
          !(selectedCategory === 'featured' && product.isFeatured)
        ) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (filterState.sortBy === 'price-low') return a.price - b.price;
      if (filterState.sortBy === 'price-high') return b.price - a.price;
      if (filterState.sortBy === 'rating') return b.rating - a.rating;
      if (filterState.sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      return 0;
    });
  }, [selectedCategory, filterState.sortBy]);

  return (
    <div id="category-page-view" className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Category Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between border-b border-neutral-100 pb-6 gap-4">
        <div>
          <h1
            id="category-title"
            className="font-editorial text-3xl sm:text-4xl font-extrabold tracking-tight text-black"
          >
            {currentMeta.title}
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-xl mt-1">
            {currentMeta.subtitle}
          </p>
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          <span className="text-xs text-neutral-500 font-medium">Sort by:</span>
          <select
            id="sort-select"
            value={filterState.sortBy}
            onChange={(e) =>
              setFilterState((prev) => ({
                ...prev,
                sortBy: e.target.value as any,
              }))
            }
            className="text-xs font-bold bg-neutral-100 hover:bg-neutral-200 text-black px-3.5 py-2 rounded-xl border-none focus:outline-none cursor-pointer"
          >
            <option value="featured">Featured / Curated</option>
            <option value="newest">Newest Drops</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div
          id="catalog-product-grid"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              variant={
                product.isBestSeller && selectedCategory === 'best-sellers'
                  ? 'framed-warm'
                  : 'standard'
              }
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-neutral-100 p-8 space-y-4">
          <div className="w-16 h-16 rounded-full bg-neutral-100 text-neutral-400 flex items-center justify-center mx-auto">
            <Package className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-black">No products available in this section</h3>
          <p className="text-xs text-neutral-500 max-w-sm mx-auto">
            Check back soon for upcoming drops and new additions.
          </p>
        </div>
      )}
    </div>
  );
};
