'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [step, setStep] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    // Step 0: "ALP"
    const timer1 = setTimeout(() => setStep(1), 500); // Step 1: "CareConnect"
    const timer2 = setTimeout(() => setStep(2), 1100); // Step 2: Slogan
    const timer3 = setTimeout(() => setIsVisible(false), 2000); // Fade out

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#16202A] text-[#FCFCFB]"
      >
        <div className="text-center px-6">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.h1
                key="step-0"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="text-4xl sm:text-6xl font-extrabold tracking-tight"
              >
                ALP
              </motion.h1>
            )}

            {step === 1 && (
              <motion.h1
                key="step-1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#6FAFA6]"
              >
                ALP <span className="text-[#FCFCFB]">CareConnect</span>
              </motion.h1>
            )}

            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="space-y-2"
              >
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FCFCFB]">
                  ALP <span className="text-[#6FAFA6]">CareConnect</span>
                </h1>
                <p className="text-sm sm:text-base text-[#D9D2C7] font-medium tracking-wide">
                  Your Home. Your Family. Our Care.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
