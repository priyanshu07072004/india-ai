import Hero from "./components/Hero";
import ImportantDates from "./components/ImportantDates";
import ConferenceTracks from "./components/ConferenceTracks";
import AboutConference from "./components/AboutConference";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <div className="mt-16">
      <Hero />
      <AboutConference />
      <ConferenceTracks />
      <ImportantDates />
      <CTASection />
    </div>
  );
}
