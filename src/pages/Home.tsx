import React from "react";
import HeroSection from "../components/home/HeroSection";
import ContentPreview from "../components/home/ContentPreview";

const Home: React.FC = () => {
  return (
    <div className="bg-steel-gray min-h-screen">
      <HeroSection />
      <ContentPreview />
    </div>
  );
};

export default Home;
