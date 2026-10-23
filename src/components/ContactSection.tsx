'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, MessageCircle, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { submitEnquiryAction } from '@/app/actions/contact';
import { EnquiryActionResult } from '@/lib/types';

export default function ContactSection() {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<EnquiryActionResult | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'NRI Property Care',
    message: '',
    website_url: '', // Honeypot
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (result && result.errors) {
      setResult({ ...result, errors: { ...result.errors, [e.target.name]: '' } });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const payload = new FormData();
    payload.append('fullName', formData.fullName);
    payload.append('email', formData.email);
    payload.append('phone', formData.phone);
    payload.append('service', formData.service);
    payload.append('message', formData.message);
    payload.append('website_url', formData.website_url);

    try {
      const res = await submitEnquiryAction(null, payload);
      setResult(res);
      if (res.success) {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          service: 'NRI Property Care',
          message: '',
          website_url: '',
        });
      }
    } catch (err: unknown) {
      console.error(err);
      setResult({
        success: false,
        message: "We couldn't send your enquiry right now. Please try again or reach out directly to alpcareconnect@gmail.com.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#F7F7F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6FAFA6] bg-[#6FAFA6]/10 px-3.5 py-1.5 rounded-full border border-[#6FAFA6]/20">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#16202A] tracking-tight mt-4 mb-4">
            Let&apos;s take care of what matters.
          </h2>
          <p className="text-base sm:text-lg text-[#475569]">
            Tell us what you need help with, and we&apos;ll get back to you promptly.
          </p>
        </div>

        {/* Split Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side — Contact Information & Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-8 sm:p-10 rounded-3xl glass-dark text-[#FCFCFB] flex flex-col justify-between"
          >
            <div>
              <div className="mb-8">
                <Image
                  src="/logo.png"
                  alt="ALP CareConnect Logo"
                  width={240}
                  height={65}
                  className="h-14 w-auto object-contain mb-3 bg-white/90 p-2.5 rounded-2xl"
                />
                <p className="text-xs text-[#D9D2C7] font-medium tracking-wide uppercase">
                  Your Home. Your Family. Our Care.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#6FAFA6]/20 border border-[#6FAFA6]/40 text-[#6FAFA6] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-[#D9D2C7] tracking-wider mb-0.5">Location</h4>
                    <p className="text-sm font-semibold text-[#FCFCFB]">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#6FAFA6]/20 border border-[#6FAFA6]/40 text-[#6FAFA6] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-[#D9D2C7] tracking-wider mb-0.5">Official Email</h4>
                    <a href="mailto:alpcareconnect@gmail.com" className="text-sm font-semibold text-[#6FAFA6] hover:underline">
                      alpcareconnect@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#D9D2C7] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-[#D9D2C7] tracking-wider mb-0.5">Phone Line</h4>
                    <span className="text-xs text-[#D9D2C7] italic">[Phone Number — to be added]</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#D9D2C7] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-[#D9D2C7] tracking-wider mb-0.5">WhatsApp Direct</h4>
                    <span className="text-xs text-[#D9D2C7] italic">[WhatsApp Number — to be added]</span>
                  </div>
                </div>
              </div>

              {/* Map Location Placeholder Card */}
              <div className="p-5 rounded-2xl bg-white/05 border border-white/10 text-center">
                <MapPin className="w-6 h-6 text-[#6FAFA6] mx-auto mb-2" />
                <h5 className="text-xs font-bold text-[#FCFCFB] mb-1">Serving All Major Areas in Chennai</h5>
                <p className="text-[11px] text-[#D9D2C7]">
                  From Adyar, ECR & OMR to Anna Nagar, T. Nagar & Mylapore.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side — Real Functional Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 sm:p-12 rounded-3xl glass-card border border-[#16202A]/10 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Honeypot Spam Prevention (Hidden) */}
              <div className="hidden">
                <input
                  type="text"
                  name="website_url"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website_url}
                  onChange={handleChange}
                />
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#16202A] mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="e.g. Anand Ramakrishnan"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 rounded-xl bg-white border text-sm text-[#16202A] focus:outline-none focus:ring-2 focus:ring-[#6FAFA6] transition-all ${
                    result?.errors?.fullName ? 'border-red-500' : 'border-[#16202A]/15'
                  }`}
                />
                {result?.errors?.fullName && (
                  <p className="text-xs text-red-500 mt-1">{result.errors.fullName}</p>
                )}
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#16202A] mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-xl bg-white border text-sm text-[#16202A] focus:outline-none focus:ring-2 focus:ring-[#6FAFA6] transition-all ${
                      result?.errors?.email ? 'border-red-500' : 'border-[#16202A]/15'
                    }`}
                  />
                  {result?.errors?.email && (
                    <p className="text-xs text-red-500 mt-1">{result.errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#16202A] mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210 or +1..."
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-xl bg-white border text-sm text-[#16202A] focus:outline-none focus:ring-2 focus:ring-[#6FAFA6] transition-all ${
                      result?.errors?.phone ? 'border-red-500' : 'border-[#16202A]/15'
                    }`}
                  />
                  {result?.errors?.phone && (
                    <p className="text-xs text-red-500 mt-1">{result.errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Service Requirement Dropdown (Updated) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#16202A] mb-2">
                  What can we help you with? <span className="text-red-500">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#16202A]/15 text-sm text-[#16202A] focus:outline-none focus:ring-2 focus:ring-[#6FAFA6] transition-all cursor-pointer font-medium"
                >
                  <option value="NRI Property Care">NRI Property Care</option>
                  <option value="Home Maintenance">Home Maintenance Coordination</option>
                  <option value="Elderly Care Support">Elderly Care Support (Non-Medical)</option>
                  <option value="Men's PG Accommodation">Men&apos;s PG Accommodation</option>
                  <option value="Property Inspection">Property Inspection & Verification</option>
                  <option value="Other Requirement">Other Requirement</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#16202A] mb-2">
                  Message Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Please describe your specific requirement in Chennai..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 rounded-xl bg-white border text-sm text-[#16202A] focus:outline-none focus:ring-2 focus:ring-[#6FAFA6] transition-all ${
                    result?.errors?.message ? 'border-red-500' : 'border-[#16202A]/15'
                  }`}
                />
                {result?.errors?.message && (
                  <p className="text-xs text-red-500 mt-1">{result.errors.message}</p>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-[#16202A] text-[#FCFCFB] font-bold text-sm uppercase tracking-wider hover:bg-[#16202A]/90 transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 text-[#6FAFA6] animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#6FAFA6]" />
                    <span>Send Enquiry</span>
                  </>
                )}
              </button>

              {/* Feedback State Alerts */}
              {result && result.success && (
                <div className="p-4 rounded-xl bg-[#6FAFA6]/15 border border-[#6FAFA6]/40 text-sm text-[#16202A] flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6FAFA6] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-[#16202A]">Enquiry Received</h5>
                    <p className="text-xs text-[#475569] mt-0.5">{result.message}</p>
                  </div>
                </div>
              )}

              {result && !result.success && result.message && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-sm text-red-700 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-red-800">Submission Error</h5>
                    <p className="text-xs text-red-600 mt-0.5">{result.message}</p>
                  </div>
                </div>
              )}

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
