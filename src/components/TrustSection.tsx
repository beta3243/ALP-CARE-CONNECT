'use client';

import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-24 bg-[#FCFCFB] border-t border-[#16202A]/06 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6FAFA6] bg-[#6FAFA6]/10 px-3.5 py-1.5 rounded-full border border-[#6FAFA6]/20">
            Client Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16202A] tracking-tight mt-4 mb-3">
            Trusted by families who value peace of mind.
          </h2>
          <p className="text-base text-[#475569]">
            Real feedback from NRIs and families who count on ALP CareConnect for local support in Chennai.
          </p>
        </div>

        {/* Polished Developer Placeholder State */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto p-10 sm:p-14 rounded-3xl glass-card text-center border-dashed border-2 border-[#6FAFA6]/40 relative overflow-hidden"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#6FAFA6]/15 text-[#6FAFA6] flex items-center justify-center mx-auto mb-6">
            <Quote className="w-8 h-8" />
          </div>

          <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest text-[#6FAFA6] bg-[#6FAFA6]/15 px-3 py-1 rounded-md mb-4 border border-[#6FAFA6]/30">
            <Sparkles className="w-3.5 h-3.5" />
            Client Reviews Section Placeholder
          </span>

          <h3 className="text-xl sm:text-2xl font-bold text-[#16202A] mb-4">
            Authentic Customer Stories Coming Soon
          </h3>

          <p className="text-sm sm:text-base text-[#475569] max-w-xl mx-auto leading-relaxed mb-6">
            We hold transparency to the highest standard. Customer reviews and verified client stories will be published here as our clientele experiences our concierge services.
          </p>

          <div className="inline-block p-3 rounded-xl bg-[#F7F7F5] border border-[#16202A]/08 text-xs text-[#475569] font-medium">
            [Developer Note: Fictional reviews are strictly excluded to preserve brand integrity. Real client feedback will populate here]
          </div>
        </motion.div>

      </div>
    </section>
  );
}
