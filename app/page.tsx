import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { HowItWorks } from '@/components/how-it-works';
import { StatsSection } from '@/components/stats-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <StatsSection />
      <Footer />
    </main>
  );
}