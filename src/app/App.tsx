"use client";

import { useEffect, useState } from "react";
import InstaconLandingPageV from "@/imports/InstaconLandingPageV2/index";
import HeaderNav from "@/imports/Header→Nav/index";
import Iframe from "@/imports/Iframe-1/index";
import MobileHeaderHero from "./components/MobileHeaderHero";
import MobileOurExpertise from "./components/MobileOurExpertise";
import MobileClients from "./components/MobileClients";
import MobileWhyChooseUs from "./components/MobileWhyChooseUs";
import MobileServices from "./components/MobileServices";
import MobileTestimonials from "./components/MobileTestimonials";
import MobileProcess from "./components/MobileProcess";
import MobileProjects from "./components/MobileProjects";
import MobileContact from "./components/MobileContact";
import MobileFooter from "./components/MobileFooter";

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 12600;

export default function App() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => setScale(Math.min(1, window.innerWidth / DESIGN_WIDTH));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <main className="bg-[#040404]">
      <div
        className="relative hidden overflow-hidden bg-[#040404] lg:block"
        style={{ width: "100%", height: DESIGN_HEIGHT * scale }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: DESIGN_WIDTH,
            height: DESIGN_HEIGHT,
            transformOrigin: "top left",
            transform: `scale(${scale})`,
          }}
        >
          <div className="absolute z-0" style={{ top: 0, left: 30, width: 1860, height: 961 }}>
            <Iframe />
          </div>
          <div className="absolute inset-0 z-10">
            <InstaconLandingPageV />
          </div>
          <div className="absolute z-50 rounded-[25px]" style={{ top: 30, left: 30, width: 1860, height: 101 }}>
            <HeaderNav />
          </div>
        </div>
      </div>

      <div className="bg-[#040404] lg:hidden">
        <MobileHeaderHero />
        <MobileOurExpertise />
        <MobileClients />
        <MobileWhyChooseUs />
        <MobileServices />
        <MobileTestimonials />
        <MobileProcess />
        <MobileProjects />
        <MobileContact />
        <MobileFooter />
      </div>
    </main>
  );
}
