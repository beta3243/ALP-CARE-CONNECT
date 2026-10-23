'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Home, Heart, Building, CheckCircle2, Clock, MapPin, Eye, FileText, Smartphone, Sparkles } from 'lucide-react';

export default function HeroInteractiveShowcase() {
  const [activeTab, setActiveTab] = useState<'property' | 'elderly' | 'pg'>('property');

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Ambient Glows */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#6FAFA6]/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#D9D2C7]/30 rounded-full blur-3xl pointer-events-none" />

      {/* Main Floating Glass Command Card */}
      <div className="relative rounded-3xl p-6 sm:p-8 glass-card border border-[#16202A]/12 shadow-2xl overflow-hidden backdrop-blur-xl">
        
        {/* Top Header: Live On-Ground Pulse Badge */}
        <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#16202A]/08">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10b981]"></span>
            </span>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#16202A]">
              Live Chennai Concierge Portal
            </span>
          </div>

          <div className="px-2.5 py-1 rounded-md bg-[#6FAFA6]/15 border border-[#6FAFA6]/30 text-[10px] font-bold text-[#16202A] flex items-center gap-1">
            <Shield className="w-3 h-3 text-[#6FAFA6]" />
            <span>100% Transparent</span>
          </div>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="grid grid-cols-3 gap-1.5 p-1.5 rounded-2xl bg-[#16202A]/06 border border-[#16202A]/08 mb-6">
          <button
            onClick={() => setActiveTab('property')}
            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'property'
                ? 'bg-[#16202A] text-[#FCFCFB] shadow-md'
                : 'text-[#475569] hover:text-[#16202A]'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Property</span>
          </button>

          <button
            onClick={() => setActiveTab('elderly')}
            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'elderly'
                ? 'bg-[#16202A] text-[#FCFCFB] shadow-md'
                : 'text-[#475569] hover:text-[#16202A]'
            }`}
          >
            <Heart className="w-3.5 h-3.5 text-[#6FAFA6]" />
            <span>Parents</span>
          </button>

          <button
            onClick={() => setActiveTab('pg')}
            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'pg'
                ? 'bg-[#16202A] text-[#FCFCFB] shadow-md'
                : 'text-[#475569] hover:text-[#16202A]'
            }`}
          >
            <Building className="w-3.5 h-3.5" />
            <span>PG Stay</span>
          </button>
        </div>

        {/* Dynamic Live Update View Area */}
        <AnimatePresence mode="wait">
          {activeTab === 'property' && (
            <motion.div
              key="property-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="p-4 rounded-2xl bg-white border border-[#16202A]/08 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-[#6FAFA6] uppercase tracking-wider">
                    Task #ALP-884 • Verified Report
                  </span>
                  <span className="text-[10px] font-semibold text-[#475569] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#6FAFA6]" /> Today, 11:30 AM IST
                  </span>
                </div>

                <h4 className="text-sm font-bold text-[#16202A] mb-1">
                  Adyar Independent Villa — Bi-Weekly Check
                </h4>
                <p className="text-xs text-[#475569] mb-3">
                  Officer on-ground: <span className="font-semibold text-[#16202A]">K. Ramesh (Senior Concierge)</span>
                </p>

                {/* Photo & Video Walkthrough Pill */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-xl bg-[#F7F7F5] border border-[#16202A]/06 flex items-center gap-2 text-xs font-semibold text-[#16202A]">
                    <Eye className="w-4 h-4 text-[#6FAFA6]" />
                    <span>HD Video Walkthrough</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F7F7F5] border border-[#16202A]/06 flex items-center gap-2 text-xs font-semibold text-[#16202A]">
                    <FileText className="w-4 h-4 text-[#6FAFA6]" />
                    <span>Key & Lock Check OK</span>
                  </div>
                </div>
              </div>

              {/* Status Verification Checklist */}
              <div className="p-3.5 rounded-2xl bg-[#6FAFA6]/10 border border-[#6FAFA6]/20 flex items-center justify-between text-xs font-bold text-[#16202A]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6FAFA6]" />
                  <span>Ventilation & Leakage Inspection Complete</span>
                </div>
                <span className="text-[10px] bg-[#6FAFA6] text-white px-2 py-0.5 rounded font-extrabold">PASS</span>
              </div>
            </motion.div>
          )}

          {activeTab === 'elderly' && (
            <motion.div
              key="elderly-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="p-4 rounded-2xl bg-white border border-[#16202A]/08 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-[#6FAFA6] uppercase tracking-wider">
                    Parent Support Log • Anna Nagar
                  </span>
                  <span className="text-[10px] font-semibold text-[#475569] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#6FAFA6]" /> Today, 09:15 AM IST
                  </span>
                </div>

                <h4 className="text-sm font-bold text-[#16202A] mb-1">
                  Parent Care Check & Medicine Coordination
                </h4>
                <p className="text-xs text-[#475569] mb-3">
                  Concierge Escort: <span className="font-semibold text-[#16202A]">S. Priya (Family Liaison)</span>
                </p>

                <div className="space-y-2 text-xs font-medium text-[#16202A]">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-[#F7F7F5]">
                    <span>Monthly Prescription Medicine Delivery</span>
                    <CheckCircle2 className="w-4 h-4 text-[#6FAFA6]" />
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-[#F7F7F5]">
                    <span>Companionship Visit & Family Video Call</span>
                    <CheckCircle2 className="w-4 h-4 text-[#6FAFA6]" />
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#6FAFA6]/10 border border-[#6FAFA6]/20 text-[11px] text-[#16202A] font-semibold flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#6FAFA6] shrink-0" />
                <span>Parents in good spirits. Daily log update sent to family abroad.</span>
              </div>
            </motion.div>
          )}

          {activeTab === 'pg' && (
            <motion.div
              key="pg-view"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="p-4 rounded-2xl bg-white border border-[#16202A]/08 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-[#6FAFA6] uppercase tracking-wider">
                    Men&apos;s Premium PG • Nungambakkam
                  </span>
                  <span className="text-[10px] font-bold text-[#10b981] bg-[#10b981]/15 px-2 py-0.5 rounded">
                    Verified Accommodation
                  </span>
                </div>

                <h4 className="text-sm font-bold text-[#16202A] mb-1">
                  Fully Furnished Executive Suite
                </h4>
                <p className="text-xs text-[#475569] mb-3">
                  Ideal for Students & Professionals working in Chennai.
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-[#16202A]">
                  <div className="p-2 rounded-xl bg-[#F7F7F5] border border-[#16202A]/06">
                    ⚡ High-Speed Fiber Wi-Fi
                  </div>
                  <div className="p-2 rounded-xl bg-[#F7F7F5] border border-[#16202A]/06">
                    🍲 Nutritious Daily Meals
                  </div>
                  <div className="p-2 rounded-xl bg-[#F7F7F5] border border-[#16202A]/06">
                    🧹 Daily Housekeeping
                  </div>
                  <div className="p-2 rounded-xl bg-[#F7F7F5] border border-[#16202A]/06">
                    🛡️ 24/7 CCTV & Security
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Psychological Proof Floating Footer Card */}
        <div className="mt-6 pt-4 border-t border-[#16202A]/08 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold text-[#16202A]">
            <Smartphone className="w-4 h-4 text-[#6FAFA6]" />
            <span>Instant Updates via WhatsApp</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-[#475569] font-semibold">
            <MapPin className="w-3.5 h-3.5 text-[#6FAFA6]" />
            <span>Chennai, TN</span>
          </div>
        </div>

      </div>

      {/* Floating Psychological Badge 1 (Top Right) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden sm:flex absolute -top-5 -right-6 px-4 py-2.5 rounded-2xl glass-dark text-[#FCFCFB] text-xs font-bold shadow-xl border border-white/10 items-center gap-2 z-20"
      >
        <Sparkles className="w-4 h-4 text-[#6FAFA6]" />
        <span>100% Video Verification</span>
      </motion.div>

      {/* Floating Psychological Badge 2 (Bottom Left) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden sm:flex absolute -bottom-5 -left-6 px-4 py-2.5 rounded-2xl glass-panel text-[#16202A] text-xs font-bold shadow-xl border border-[#16202A]/15 items-center gap-2 z-20"
      >
        <Shield className="w-4 h-4 text-[#6FAFA6]" />
        <span>Trusted Local Feet on Ground</span>
      </motion.div>

    </div>
  );
}
