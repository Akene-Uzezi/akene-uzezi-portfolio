import AgencyHeroSection from "@/components/shadcn-space/blocks/hero-01";
import AboutSection from "@/components/AboutSection";
import { brandList } from "@/components/brands/brandlist";
import BrandSlider from "@/components/shadcn-space/blocks/hero-01/brand-slider";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="flex-1">
      <AgencyHeroSection />
      <AboutSection />
      <BrandSlider brandList={brandList} />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
