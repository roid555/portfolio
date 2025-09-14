import React from "react";
import Header from "@/sections/header/header";
import Hero from "@/sections/hero/hero-section";
import ProjectSection from "@/sections/projects/project-section";
import { div } from "framer-motion/client";
import ContactMe from "@/sections/contact/contact-section";
import Footer from "@/sections/footer/footer-section";
import AboutSection from "@/sections/about/about-section";
import SkillSection from "@/sections/skills/skill-section";

export default function Home() {
  return (
    <div className=" bg-gray-200 ">
      {/* Header */}
      <div className=" text-black px-46 mx-4 py-0">
        <Header></Header>
      </div>
      {/* Body */}
      <div className=" px-4">
        {/* Hero Section */}
        <div className=" my-gray-bg ">
          <Hero></Hero>
        </div>
        {/* About Section */}
        <div id="about" className="my-white-bg">
          <AboutSection />
        </div>
        {/* Skills Section */}
        <div className="my-gray-bg">
          <SkillSection />
        </div>
        {/* Projects Section */}
        <div id="projects" className="my-white-bg py-50 ">
          <ProjectSection />
        </div>
        <div className="my-gray-bg ">
          <ContactMe />
        </div>
        {/* Footer */}
        <div className="my-white-bg">
          <Footer />
        </div>
      </div>
    </div>
  );
}
