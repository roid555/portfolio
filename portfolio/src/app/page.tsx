import React from "react";
import NavBar from "@/components/nav-bar/nav-bar-top";
import Hero from "@/components/hero/hero-section";
import ProjectSection from "@/components/projects/project-section";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero></Hero>
      <div id="projects">
        <ProjectSection />
      </div>
    </div>
  );
}
