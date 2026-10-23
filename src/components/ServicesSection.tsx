'use client';

import { motion } from 'framer-motion';
import { Home, Wrench, Heart, Building, Eye, Check, AlertCircle, ArrowUpRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: 'service-nri-property',
      number: '01',
      title: 'NRI Property Care',
      icon: Home,
      shortDesc: 'Reliable local assistance for keeping a watchful eye on your property in Chennai while you are living abroad.',
      features: [
        'Tenant coordination and communication',
        'Rental listing and property viewing coordination',
        'Rental agreement and documentation coordination',
        'Rental renewal and expiry follow-up',
        'Rent follow-up and payment status updates',
        'Regular property inspections with photo and video reports',
        'Maintenance and repair coordination',
      ],
      badge: 'Most Requested by NRIs',
    },
    {
      id: 'service-home-maint',
      number: '02',
      title: 'Home Maintenance Coordination',
      icon: Wrench,
      shortDesc: 'From everyday household repairs to coordinating skilled service professionals, we keep your Chennai home running smoothly.',
      features: [
        'Plumbing & leak inspection coordination',
        'Electrical system checks & repairs',
        'Professional deep cleaning oversight',
        'Pest control & painting management',
        'Vendor supervision & progress updates',
      ],
    },
    {
      id: 'service-elderly-care',
      number: '03',
      title: 'Elderly Care Support',
      icon: Heart,
      shortDesc: 'Non-medical local assistance and scheduled visits to ensure your parents feel supported, connected, and cared for.',
      features: [
        'Scheduled companionship & home check-ins',
        'Grocery & daily essentials delivery coordination',
        'Local errand & utility assistance',
        'Escort coordination for outings',
        'Detailed visit updates for family abroad',
      ],
      disclaimer: 'ALP CareConnect provides non-medical assistance only and is not a clinical healthcare provider.',
    },
    {
      id: 'service-mens-pg',
      number: '04',
      title: "Men's Premium PG Accommodation",
      icon: Building,
      shortDesc: 'Comfortable, well-maintained living accommodations in Chennai designed for students and working professionals.',
      features: [
        'Fully furnished rooms [Locations — to be updated]',
        'High-speed Wi-Fi & work desk setup',
        'Nutritious meal options & RO water',
        'Daily housekeeping & laundry coordination',
        '24/7 CCTV security & power backup',
      ],
      placeholderNote: '[Specific PG branches, pricing, and room specifications will be listed upon confirmation]',
    },
    {
      id: 'service-property-inspection',
      number: '05',
      title: 'Property Inspection & Verification',
      icon: Eye,
      shortDesc: 'A practical, objective way to verify the current visual condition of a property when you cannot inspect it in person.',
      features: [
        'Comprehensive visual site inspection',
        '360-degree photo documentation',
        'Guided video walkthrough for owner',
        'Structural & cosmetic issue logging',
        'Pre-rental or post-tenant departure checks',
      ],
    },
  ];

  return (
    <section id="services" className="py-28 bg-[#F7F7F5] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6FAFA6] bg-[#6FAFA6]/10 px-3.5 py-1.5 rounded-full border border-[#6FAFA6]/20">
            Our Core Offerings
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#16202A] tracking-tight mt-4 mb-4">
            Local support, wherever you are.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            From your home to your family, we help take care of the things that are difficult to manage from a distance.
          </p>
        </div>

        {/* 5 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative p-8 rounded-3xl glass-card flex flex-col justify-between hover:border-[#6FAFA6]/50 transition-all duration-300 shadow-sm hover:shadow-2xl"
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black text-[#6FAFA6]/60 tracking-wider">
                      {service.number}
                    </span>
                    
                    <div className="w-14 h-14 rounded-2xl bg-[#16202A] text-[#6FAFA6] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Badge if present */}
                  {service.badge && (
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#6FAFA6] bg-[#6FAFA6]/15 border border-[#6FAFA6]/30 px-2.5 py-1 rounded-md mb-3">
                      {service.badge}
                    </span>
                  )}

                  {/* Service Title */}
                  <h3 className="text-2xl font-bold text-[#16202A] mb-3 group-hover:text-[#6FAFA6] transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#16202A] font-medium">
                        <Check className="w-4 h-4 text-[#6FAFA6] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Non-Medical Disclaimer for Elderly Care */}
                  {service.disclaimer && (
                    <div className="mb-6 p-3.5 rounded-xl bg-[#6FAFA6]/10 border border-[#6FAFA6]/30 text-[11px] text-[#16202A] flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-[#6FAFA6] shrink-0 mt-0.5" />
                      <span>{service.disclaimer}</span>
                    </div>
                  )}

                  {/* Placeholder Note for PG */}
                  {service.placeholderNote && (
                    <div className="mb-6 p-3 rounded-xl bg-[#D9D2C7]/30 text-[11px] text-[#475569] italic">
                      {service.placeholderNote}
                    </div>
                  )}
                </div>

                {/* Enquire CTA */}
                <div className="pt-6 border-t border-[#16202A]/08 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#16202A] group-hover:text-[#6FAFA6] transition-colors"
                  >
                    <span>Request Service Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
