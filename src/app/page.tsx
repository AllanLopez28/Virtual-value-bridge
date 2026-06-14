import HeroSection from "@/components/sections/HeroSection";
import StatsBanner from "@/components/sections/StatsBanner";
import AboutSection from "@/components/sections/AboutSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CTASection from "@/components/sections/CTASection";
import Comparison from "@/components/sections/Comparison";
import TeamProfiles from "@/components/sections/TeamProfiles";
import Testimonials from "@/components/sections/Testimonials";
import SavingsCalculator from "@/components/sections/SavingsCalculator";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <StatsBanner />
      <AboutSection />
      <ServicesGrid />
      <CTASection />
      <Comparison />
      <TeamProfiles />
      <Testimonials />
      <SavingsCalculator />
      <ContactForm />
    </main>
  );
}
