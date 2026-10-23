'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#16202A] text-[#D9D2C7] border-t border-white/10 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
            
            {/* Col 1: Brand Info & Official Logo */}
            <div className="lg:col-span-4 space-y-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/logo.png"
                  alt="ALP CareConnect — Your Home. Your Family. Our Care."
                  width={220}
                  height={60}
                  className="h-12 w-auto object-contain bg-white/90 p-2 rounded-xl"
                />
              </Link>
              <p className="text-xs text-[#D9D2C7] font-medium tracking-wide uppercase">
                Your Home. Your Family. Our Care.
              </p>
              <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm">
                Providing reliable local property care, elderly assistance, home maintenance, and PG accommodations for families and NRIs with roots in Chennai.
              </p>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#FCFCFB]">Navigation</h4>
              <ul className="space-y-2 text-xs font-medium">
                <li><a href="#services" className="hover:text-[#6FAFA6] transition-colors">Services</a></li>
                <li><a href="#how-it-works" className="hover:text-[#6FAFA6] transition-colors">How It Works</a></li>
                <li><a href="#contact" className="hover:text-[#6FAFA6] transition-colors">Contact</a></li>
                <li><a href="#our-story" className="hover:text-[#6FAFA6] transition-colors">Our Story</a></li>
              </ul>
            </div>

            {/* Col 3: Services List (Updated) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#FCFCFB]">Our Services</h4>
              <ul className="space-y-2 text-xs font-medium">
                <li><a href="#service-nri-property" className="hover:text-[#6FAFA6] transition-colors">NRI Property Care</a></li>
                <li><a href="#service-home-maint" className="hover:text-[#6FAFA6] transition-colors">Home Maintenance</a></li>
                <li><a href="#service-elderly-care" className="hover:text-[#6FAFA6] transition-colors">Elderly Care Support</a></li>
                <li><a href="#service-mens-pg" className="hover:text-[#6FAFA6] transition-colors">Men&apos;s PG Accommodation</a></li>
                <li><a href="#service-property-inspection" className="hover:text-[#6FAFA6] transition-colors">Property Inspection</a></li>
              </ul>
            </div>

            {/* Col 4: Contact & Social */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#FCFCFB]">Contact Info</h4>
              <ul className="space-y-2.5 text-xs">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#6FAFA6] shrink-0" />
                  <span>Chennai, Tamil Nadu</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#6FAFA6] shrink-0" />
                  <a href="mailto:alpcareconnect@gmail.com" className="hover:text-[#6FAFA6]">alpcareconnect@gmail.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#94A3B8] shrink-0" />
                  <span className="text-[#94A3B8] italic">[Phone Number]</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#94A3B8] shrink-0" />
                  <span className="text-[#94A3B8] italic">[WhatsApp Number]</span>
                </li>
              </ul>
              <div className="pt-2">
                <span className="text-[11px] text-[#94A3B8] italic">Instagram — [Instagram Link to be added]</span>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-[#94A3B8]">
            <p>© {new Date().getFullYear()} ALP CareConnect. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <button onClick={() => setPrivacyOpen(true)} className="hover:text-[#FCFCFB] transition-colors cursor-pointer">
                Privacy Policy
              </button>
              <span>•</span>
              <span>Chennai, Tamil Nadu</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {privacyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
          >
            <div className="bg-[#16202A] text-[#FCFCFB] border border-white/10 p-8 rounded-3xl max-w-lg w-full relative">
              <button
                onClick={() => setPrivacyOpen(false)}
                className="absolute top-4 right-4 p-2 text-[#94A3B8] hover:text-[#FCFCFB]"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-bold mb-4">Privacy & Data Handling Policy</h3>
              <p className="text-xs text-[#D9D2C7] leading-relaxed mb-4">
                ALP CareConnect strictly respects customer privacy. Any personal information submitted through our enquiry form (including full name, email, phone number, and service requirements) is utilized exclusively to respond to your specific service requests in Chennai.
              </p>
              <p className="text-xs text-[#D9D2C7] leading-relaxed mb-6">
                We do not sell, share, or disclose client information to third-party marketing companies. For any privacy queries, contact us at <a href="mailto:alpcareconnect@gmail.com" className="text-[#6FAFA6] underline">alpcareconnect@gmail.com</a>.
              </p>

              <button
                onClick={() => setPrivacyOpen(false)}
                className="w-full py-2.5 rounded-xl bg-[#6FAFA6] text-[#16202A] font-bold text-xs uppercase tracking-wider"
              >
                Close Policy
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
