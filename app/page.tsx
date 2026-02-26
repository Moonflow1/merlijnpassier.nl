import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import BioSection from '@/components/sections/BioSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AwardsSection from '@/components/sections/AwardsSection';
import TheNewSection from '@/components/sections/TheNewSection';
import CutjongensSection from '@/components/sections/CutjongensSection';
import GallerySection from '@/components/sections/GallerySection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ProjectsSection />
        <BioSection />
        <AwardsSection />
        <TheNewSection />
        <CutjongensSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
