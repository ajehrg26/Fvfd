import React from 'react';
import { ShieldCheck, Truck, RefreshCw, Award, ArrowUpRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const EditorialFeatureSection: React.FC = () => {
  const { navigateToCategory } = useShop();

  const brandPerks = [
    {
      icon: Truck,
      title: 'Complimentary Express',
      description: 'Free courier delivery on all orders over ₹499 with carbon-neutral tracking.',
    },
    {
      icon: RefreshCw,
      title: '30-Day Easy Returns',
      description: 'Hassle-free doorstep exchanges and returns with pre-paid labels.',
    },
    {
      icon: ShieldCheck,
      title: 'Ethical Craftsmanship',
      description: 'GOTS-certified organic cottons and traceable European workshops.',
    },
    {
      icon: Award,
      title: 'Flint N Steel Signature Guarantee',
      description: 'Engineered seam reinforcements and lifetime hardware repair support.',
    },
  ];

  return (
    <section id="editorial-brand-section" className="py-12 sm:py-16 w-full bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Animated GIF Showcase with Liquid Glass Tag */}
        <div
          id="animated-gif-showcase"
          onClick={() => navigateToCategory('best-sellers')}
          className="group relative w-full h-[320px] sm:h-[460px] lg:h-[540px] rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 flex items-end p-6 sm:p-10"
        >
          <img
            src="https://lh3.googleusercontent.com/d/1Y2-scntlS2dz8-_kBqlOpmBuQw20Qmqo"
            alt="Animated Showcase"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />

          {/* Subtle Ambient Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

          {/* Liquid Glass Badge with Small Text */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-white transition-all duration-300 group-hover:bg-white/30 group-hover:border-white/60 group-hover:scale-105">
              <span className="text-xs sm:text-sm font-semibold tracking-wide drop-shadow-sm">
                Get Yourself A Lighter
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>

        {/* Brand Perks / Trust Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-neutral-200">
          {brandPerks.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <div key={i} className="flex items-start space-x-4 p-4 rounded-2xl bg-white border border-neutral-100 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center flex-shrink-0 text-black">
                  <Icon className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black">{perk.title}</h4>
                  <p className="text-xs text-neutral-500 mt-1 leading-relaxed">{perk.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

