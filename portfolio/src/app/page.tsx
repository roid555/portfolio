import React from "react";
import NavBar from "@/components/nav-bar/nav-bar-top";
import Hero from "@/components/hero/hero-section";
import ProjectSection from "@/components/projects/project-section";

export default function Home() {
  return (
    <div className="font-jost min-h-screen px-22 sm:px-22 lg:px-22 py-8 max-w-8xl mx-auto bg-gradient-to-b  to-gray-800 from-gray-900 text-white">
      <NavBar />
      <Hero></Hero>
      <div id="projects">
        <ProjectSection />
      </div>
    </div>
  );
}
