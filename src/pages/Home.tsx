import React from "react";
import HeroSection from "../components/home/HeroSection";
import ContentPreview from "../components/home/ContentPreview";

const Home: React.FC = () => {
  return (
    <div style={{background:'#232a32'}}>
      <HeroSection />
      <ContentPreview />
    </div>
  );
};

export default Home;
