import Hero from "./components/Hero";
import ConferenceTracks from "./components/ConferenceTracks";
import AboutConference from "./components/AboutConference";
import CTASection from "./components/CTASection";
import LogoSection from "./components/LogoSection";

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <LogoSection />
      <AboutConference />
      <ConferenceTracks />
      <CTASection />
    </div>
  );
}
