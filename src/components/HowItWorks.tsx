'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Compass, ShieldCheck, Smile } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Tell Us What You Need',
      desc: 'Contact ALP via our enquiry form or WhatsApp and explain your property, family, or accommodation requirement.',
      icon: MessageSquare,
    },
    {
      number: '02',
      title: 'We Understand & Coordinate',
      desc: 'Our team assesses the situation in Chennai and coordinates the right local support personnel or service professional.',
      icon: Compass,
    },
    {
      number: '03',
      title: 'You Stay Updated',
      desc: 'Receive transparent, step-by-step progress updates, including photos or video walkthroughs where applicable.',
      icon: ShieldCheck,
    },
    {
      number: '04',
      title: 'Peace of Mind',
      desc: 'You remain fully informed and in control of your home and family needs without managing everything remotely.',
      icon: Smile,
    },
  ];

  return (
    <section id="how-it-works" className="py-28 bg-[#FCFCFB] border-t border-b border-[#16202A]/06 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6FAFA6] bg-[#6FAFA6]/10 px-3.5 py-1.5 rounded-full border border-[#6FAFA6]/20">
            Seamless Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#16202A] tracking-tight mt-4 mb-4">
            Simple support. Clear communication.
          </h2>
          <p className="text-base sm:text-lg text-[#475569]">
            We make managing your home and family needs from a distance effortless, transparent, and completely stress-free.
          </p>
        </div>

        {/* Horizontal Animated Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-[2px] bg-[#16202A]/10 -translate-y-10 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative z-10 p-8 rounded-3xl glass-card flex flex-col items-start hover:border-[#6FAFA6] transition-all duration-300 shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#16202A] text-[#6FAFA6] flex items-center justify-center font-bold mb-6 shadow-md">
                  <Icon className="w-7 h-7" />
                </div>

                <span className="text-xs font-extrabold text-[#6FAFA6] uppercase tracking-widest mb-1">
                  Step {step.number}
                </span>

                <h3 className="text-xl font-bold text-[#16202A] mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-[#475569] leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
