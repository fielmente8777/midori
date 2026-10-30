import AboutSection from "./components/AboutSection";
import CelebrationSection from "./components/CelebrationSection";
import DaySection from "./components/DaySection";
import ExperienceSection from "./components/ExperienceSection";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import LocationSection from "./components/LocationSection";
import { landingPageData } from "./components/pageData";
import PhotoshootSection from "./components/PhotoshootSection";
import ReviewSection from "./components/ReviewSection";
import StaySection from "./components/StaySection";

export default function LandingPage() {
  return (
    <main className="bg-background">
      <HeroSection {...landingPageData.hero} />
      <AboutSection {...landingPageData.aboutSection} />
      <StaySection {...landingPageData.staySection} />
      <ExperienceSection {...landingPageData.experienceSection} />
      <DaySection {...landingPageData.daySection} />
      <CelebrationSection {...landingPageData.celebrationSection} />
      <PhotoshootSection {...landingPageData.photoshootSection} />
      <GallerySection {...landingPageData.gallerySection} />
      <LocationSection {...landingPageData.locationSection} />
      <ReviewSection {...landingPageData.reviewSection} />
      <Faq {...landingPageData.faq} />
      <FinalCta {...landingPageData.finalCta} />
    </main>
  );
}
