'use client';

import { motion } from 'framer-motion';
import { MessageCircle, MapPin, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function WhyChooseALP() {
  const principles = [
    {
      title: 'Clear Communication',
      desc: 'Know what is happening with your home or family in Chennai without having to chase multiple people or vendors remotely.',
      icon: MessageCircle,
    },
    {
      title: 'Local Presence',
      desc: 'Having dependable, responsible feet on the ground in Chennai to inspect, coordinate, and assist when you cannot be there.',
      icon: MapPin,
    },
    {
      title: 'Responsible Support',
      desc: 'Every single request is handled with genuine care, accountability, and clear documentation from start to finish.',
      icon: ShieldCheck,
    },
    {
      title: 'Peace of Mind',
      desc: 'Spend less time worrying about things happening back home, knowing a dedicated local partner is managing details properly.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-28 bg-[#F7F7F5] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6FAFA6] bg-[#6FAFA6]/10 px-3.5 py-1.5 rounded-full border border-[#6FAFA6]/20">
            Our Core Values
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#16202A] tracking-tight mt-4 mb-4">
            Because being far away shouldn&apos;t mean being out of touch.
          </h2>
          <p className="text-base sm:text-lg text-[#475569]">
            Built on responsibility, timely communication, and genuine care for your property and loved ones in Chennai.
          </p>
        </div>

        {/* 4 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 sm:p-10 rounded-3xl glass-card flex flex-col sm:flex-row items-start gap-6 hover:border-[#6FAFA6] transition-all duration-300 shadow-sm"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#16202A] text-[#6FAFA6] flex items-center justify-center shrink-0 shadow-md">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#16202A] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
