import React from "react";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero-section";
import ProjectSection from "@/components/projects/project-section";
import { div } from "framer-motion/client";
import ContactMe from "@/components/contact/contact-section";
import Footer from "@/components/footer/footer-section";

export default function Home() {
  return (
    <div className=" font-jost bg-gray-200 text-shadow-lg">
      {/* Header */}
      <div className=" text-black px-46">
        <Header></Header>
      </div>
      {/* Body */}
      <div className=" px-4">
        {/* Hero Section */}
        <div className=" text-white rounded-2xl bg-gradient-to-tr px-46 from-gray-200 via-gray-500 to-gray-200 ">
          <Hero></Hero>
        </div>
        <div id="projects" className="px-46 py-20 text-black">
          <ProjectSection />
        </div>
        <div className="text-white rounded-2xl bg-gradient-to-tr px-46 from-gray-200 via-gray-500 to-gray-200 ">
          <ContactMe />
        </div>
        {/* Footer */}
        <div className=" py-3 text-black">
          <Footer />
        </div>
      </div>
    </div>
  );
}
