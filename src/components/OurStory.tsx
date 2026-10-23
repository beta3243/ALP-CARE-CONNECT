'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function OurStory() {
  return (
    <section id="our-story" className="py-28 bg-[#16202A] text-[#FCFCFB] relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#6FAFA6]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        
        {/* Official Brand Logo Stamp */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 inline-block"
        >
          <Image
            src="/logo.png"
            alt="ALP CareConnect Logo"
            width={260}
            height={70}
            className="h-16 w-auto object-contain bg-white/95 p-3 rounded-2xl shadow-xl mx-auto"
          />
        </motion.div>

        {/* Section Tag & Heading */}
        <div className="block mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6FAFA6] bg-[#6FAFA6]/10 px-3.5 py-1.5 rounded-full border border-[#6FAFA6]/20">
            Our Brand Purpose
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FCFCFB] tracking-tight mt-4 mb-10">
          Why ALP CareConnect exists.
        </h2>

        {/* Brand Story Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-base sm:text-lg text-[#D9D2C7] leading-relaxed font-normal text-left sm:text-center"
        >
          <p>
            ALP CareConnect was created with a simple purpose — to provide reliable local support for people who live away from their homes and families.
          </p>
          <p>
            For NRIs, managing a property in Chennai or supporting elderly parents from thousands of kilometres away can be challenging. Finding dependable people, coordinating maintenance and staying updated can take time and create unnecessary stress.
          </p>
          <p>
            ALP CareConnect aims to make this easier by becoming your trusted local support partner.
          </p>
          <p>
            From property inspections and home maintenance coordination to non-medical elderly support and comfortable PG accommodation, we provide practical services with clear communication and transparency.
          </p>
          <p>
            We believe that trust is built through responsibility, timely communication and honest service.
          </p>
          <p className="text-xl sm:text-2xl font-semibold text-[#6FAFA6] pt-4 italic">
            &ldquo;You may be far away. Your home and family don&apos;t have to feel far away.&rdquo;
          </p>
        </motion.div>

        {/* Slogan End Stamp */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <Image
            src="/logo.png"
            alt="ALP CareConnect Logo"
            width={200}
            height={50}
            className="h-12 w-auto object-contain bg-white/95 p-2 rounded-xl mx-auto mb-2"
          />
          <p className="text-sm text-[#D9D2C7] font-medium tracking-wide uppercase mt-1">
            Your Home. Your Family. Our Care.
          </p>
        </div>

      </div>
    </section>
  );
}
