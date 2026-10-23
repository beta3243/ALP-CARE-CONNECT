'use client';

import { motion } from 'framer-motion';
import { ArrowDown, MessageCircle, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const handleTalkToALP = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
      'Hello ALP CareConnect, I would like to know more about your services in Chennai.'
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-[90vh] pt-36 pb-24 flex items-center justify-center overflow-hidden bg-[#F7F7F5]">
      {/* Background Soft Lighting Gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-[#6FAFA6]/12 via-[#D9D2C7]/20 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 w-full z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center max-w-4xl mx-auto"
        >
          {/* Pill Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-[#16202A]/10 text-xs font-bold text-[#16202A] mb-8 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6FAFA6] animate-pulse" />
            <span>Reliable Chennai Concierge Partner</span>
            <span className="text-[#475569] font-normal">•</span>
            <span className="text-[#6FAFA6] font-bold">24/7 On-Ground Support</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#16202A] tracking-tight leading-[1.12] mb-8">
            Luxury Local Support for Your Home & Family in{' '}
            <span className="text-[#6FAFA6] relative inline-block underline decoration-[#6FAFA6]/30 underline-offset-8">
              Chennai
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-2xl text-[#475569] font-normal leading-relaxed mb-10 max-w-3xl">
            Whether you&apos;re living abroad or away from Chennai, ALP CareConnect provides reliable local support for your home, property and loved ones.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full sm:w-auto">
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4.5 rounded-2xl bg-[#16202A] text-[#FCFCFB] font-bold text-sm tracking-wide hover:bg-[#16202A]/90 transition-all duration-300 shadow-xl hover:shadow-2xl group"
            >
              <span>Explore Our Services</span>
              <ArrowDown className="w-4 h-4 text-[#6FAFA6] group-hover:translate-y-1 transition-transform duration-300" />
            </a>

            <button
              onClick={handleTalkToALP}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4.5 rounded-2xl bg-white/80 border border-[#16202A]/15 text-[#16202A] font-bold text-sm tracking-wide hover:bg-white hover:border-[#16202A]/30 transition-all duration-300 shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#6FAFA6]" />
              <span>Talk to ALP</span>
            </button>
          </div>

          {/* Key Value Micro-Badges */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#16202A]/10">
            <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold text-[#16202A] p-3 rounded-xl bg-white/50 border border-[#16202A]/06">
              <CheckCircle2 className="w-4 h-4 text-[#6FAFA6] shrink-0" />
              <span>NRI Property Care</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold text-[#16202A] p-3 rounded-xl bg-white/50 border border-[#16202A]/06">
              <CheckCircle2 className="w-4 h-4 text-[#6FAFA6] shrink-0" />
              <span>Non-Medical Elder Support</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold text-[#16202A] p-3 rounded-xl bg-white/50 border border-[#16202A]/06">
              <CheckCircle2 className="w-4 h-4 text-[#6FAFA6] shrink-0" />
              <span>Men&apos;s Premium PG</span>
            </div>
          </div>

          {/* Trust Footnote */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#475569] font-medium">
            <ShieldCheck className="w-4 h-4 text-[#6FAFA6]" />
            <span>100% Transparent • Photo & Video Updates • Verified On-Ground Concierge</span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
