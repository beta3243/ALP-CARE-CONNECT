'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    // Default WhatsApp web action with pre-filled message
    const message = encodeURIComponent(
      'Hello ALP CareConnect, I would like to know more about your services in Chennai.'
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      aria-label="Contact ALP CareConnect on WhatsApp"
      className="fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full bg-[#10b981] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer border border-white/20"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
      <span className="absolute right-16 bg-[#16202A] text-[#FCFCFB] text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-white/10">
        Talk to ALP
      </span>
    </button>
  );
}
