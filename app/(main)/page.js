import React from "react";
import AboutSection from "../components/About/About";
import { HeroSection } from "../components/Hero/Hero";
import { ProjectsSection } from "../components/Project/Project";
import { SkillsSection } from "../components/Skills/Skills";
export default function Home() {
  return (
    <div className="bg-black font-['Inter', sans-serif]">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
    </div>
  );
}
