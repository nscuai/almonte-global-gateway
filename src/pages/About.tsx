
import React from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import TrustInformation from "@/components/about/TrustInformation";
import MissionVision from "@/components/about/MissionVision";
import Accreditations from "@/components/about/Accreditations";
import OurStory from "@/components/about/OurStory";
import CoreValues from "@/components/about/CoreValues";
import Timeline from "@/components/about/Timeline";
import LeadershipTeam from "@/components/about/LeadershipTeam";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AboutHero />
      <TrustInformation />
      <MissionVision />
      <Accreditations />
      <OurStory />
      <CoreValues />
      <Timeline />
      <LeadershipTeam />
      <Footer />
    </div>
  );
};

export default About;
