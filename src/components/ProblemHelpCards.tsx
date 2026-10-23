'use client';

import { motion } from 'framer-motion';
import { Home, Wrench, Heart, Building, ArrowRight } from 'lucide-react';

export default function ProblemHelpCards() {
  const choices = [
    {
      id: 'nri-property',
      tag: 'CARD 01',
      title: 'My Property',
      description: "I need someone reliable to look after my home while I'm away.",
      serviceTarget: 'NRI Property Care',
      targetHash: '#service-nri-property',
      icon: Home,
      accentBg: 'bg-[#6FAFA6]/15',
      accentColor: 'text-[#6FAFA6]',
    },
    {
      id: 'home-maint',
      tag: 'CARD 02',
      title: 'My Home',
      description: 'I need help coordinating repairs, maintenance or everyday issues.',
      serviceTarget: 'Home Maintenance',
      targetHash: '#service-home-maint',
      icon: Wrench,
      accentBg: 'bg-[#16202A]/10',
      accentColor: 'text-[#16202A]',
    },
    {
      id: 'elderly-care',
      tag: 'CARD 03',
      title: 'My Family',
      description: 'I want reliable local support for my elderly parents.',
      serviceTarget: 'Elderly Care Support',
      targetHash: '#service-elderly-care',
      icon: Heart,
      accentBg: 'bg-[#6FAFA6]/15',
      accentColor: 'text-[#6FAFA6]',
    },
    {
      id: 'mens-pg',
      tag: 'CARD 04',
      title: 'My Stay in Chennai',
      description: "I'm looking for comfortable men's PG accommodation.",
      serviceTarget: "Men's PG Accommodation",
      targetHash: '#service-mens-pg',
      icon: Building,
      accentBg: 'bg-[#D9D2C7]/30',
      accentColor: 'text-[#16202A]',
    },
  ];

  return (
    <section className="py-24 bg-[#FCFCFB] border-t border-[#16202A]/05 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6FAFA6] bg-[#6FAFA6]/10 px-3.5 py-1.5 rounded-full border border-[#6FAFA6]/20">
            Personalized Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16202A] tracking-tight mt-4 mb-3">
            What can we help you take care of?
          </h2>
          <p className="text-base sm:text-lg text-[#475569]">
            Tell us what matters most to you. Select your primary requirement below to explore how ALP CareConnect supports you in Chennai.
          </p>
        </div>

        {/* 4 Interactive Choice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {choices.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.id}
                href={item.targetHash}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl glass-card flex flex-col justify-between hover:border-[#6FAFA6] transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-bold tracking-widest text-[#475569] uppercase">
                      {item.tag}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl ${item.accentBg} ${item.accentColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#16202A] mb-3 group-hover:text-[#6FAFA6] transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#16202A]/06 flex items-center justify-between text-xs font-bold text-[#16202A]">
                  <span>Explore {item.serviceTarget}</span>
                  <ArrowRight className="w-4 h-4 text-[#6FAFA6] group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
