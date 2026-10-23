import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemHelpCards from '@/components/ProblemHelpCards';
import ServicesSection from '@/components/ServicesSection';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseALP from '@/components/WhyChooseALP';
import TrustSection from '@/components/TrustSection';
import ContactSection from '@/components/ContactSection';
import OurStory from '@/components/OurStory';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F7F5] text-[#16202A] relative selection:bg-[#6FAFA6]/30 selection:text-[#16202A]">
      <Loader />
      <Navbar />
      <Hero />
      <ProblemHelpCards />
      <ServicesSection />
      <HowItWorks />
      <WhyChooseALP />
      <TrustSection />
      <ContactSection />
      <OurStory />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
