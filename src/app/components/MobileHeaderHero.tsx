"use client";

import { useEffect, useRef, useState } from "react";
import logo from "@/imports/InstaconLandingPageV2/477bb1ead533139a364b97591c35aa762f8c91f0.png";
import reviewerOne from "@/imports/InstaconLandingPageV2/7857b67afe262a57dec2cc5dbc118b6f35729fcd.png";
import reviewerTwo from "@/imports/InstaconLandingPageV2/73af6db2a4519f7e02aaa9fe6c7d57b435d576c6.png";
import reviewerThree from "@/imports/InstaconLandingPageV2/5c512320eea1158f09889c5dbc518174b1cf8aac.png";

const PJS = "'Plus Jakarta Sans', sans-serif";
const FA_SOLID = "'Font_Awesome_5_Free:Solid'";

const navItems = [
  { label: "Home",       sectionId: ""                  },
  { label: "About",      sectionId: "mobile-expertise"  },
  { label: "Services",   sectionId: "mobile-services"   },
  { label: "Projects",   sectionId: "mobile-projects"   },
  { label: "Contact Us", sectionId: "mobile-contact"    },
];

export default function MobileHeaderHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = (sectionId: string) => {
    setMenuOpen(false);
    document.body.style.overflow = "";
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleVideo = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
      setVideoPlaying(true);
    } else {
      video.pause();
      setVideoPlaying(false);
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative isolate min-h-[860px] overflow-hidden bg-[#040404] px-4 pb-10 pt-4 min-[430px]:min-h-[900px] min-[430px]:px-5"
      style={{ fontFamily: PJS }}
    >
      <video ref={videoRef} aria-hidden="true" className="absolute inset-0 -z-30 h-full w-full object-cover object-[58%_center]" src="/videos/Instacon.mp4" autoPlay loop muted playsInline preload="metadata" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(4,4,4,0.56)_0%,rgba(4,4,4,0.78)_48%,#040404_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[52%] bg-[radial-gradient(ellipse_85%_60%_at_50%_100%,rgba(255,190,11,0.14),transparent_70%)]" />

      <header className="relative z-50 flex h-[68px] items-center justify-between rounded-[22px] border border-[#2a2a2a] bg-[rgba(14,14,14,0.88)] px-4 shadow-[0_10px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <img src={logo} alt="Instacon" className="h-auto w-[132px] object-contain" />
        <button type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="relative grid size-11 place-items-center rounded-full border border-[rgba(255,190,11,0.45)] bg-[#151515] text-[#ffbe0b] shadow-[-2px_-2px_7px_rgba(255,190,11,0.18)]">
          <span className="sr-only">Menu</span>
          <span className="flex w-[18px] flex-col gap-[5px]" aria-hidden="true">
            <span className={`h-[2px] w-full rounded-full bg-current transition-transform duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-[2px] w-full rounded-full bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-[2px] w-full rounded-full bg-current transition-transform duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>

        <nav aria-label="Mobile navigation" className={`absolute left-0 right-0 top-[78px] overflow-hidden rounded-[22px] border border-[#2a2a2a] bg-[rgba(14,14,14,0.97)] p-2 shadow-[0_24px_60px_rgba(0,0,0,0.55)] backdrop-blur-2xl transition-all duration-300 ${menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"}`}>
          {navItems.map((item) => (
            <button type="button" key={item.label} onClick={() => scrollToSection(item.sectionId)} className="flex min-h-12 w-full items-center justify-between rounded-2xl px-4 text-left text-[15px] font-semibold text-[#d1d1d1] transition-colors active:bg-[#1f1f1f]">
              {item.label}
              <span className="text-[#ffbe0b]" style={{ fontFamily: FA_SOLID }} aria-hidden="true">{`\uF061`}</span>
            </button>
          ))}
          <a href="tel:+9298775463" className="mt-1 flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-[#ffbe0b] px-4 text-[15px] font-bold text-[#040404]">
            <span style={{ fontFamily: FA_SOLID }} aria-hidden="true">{`\uF095`}</span>
            +92 987 75463
          </a>
        </nav>
      </header>

      <div className="relative z-10 mx-auto flex max-w-[520px] flex-col pt-[76px] min-[430px]:pt-[92px]">
        <h1 className="max-w-[500px] text-[clamp(38px,11vw,58px)] font-bold leading-[1.04] tracking-[-0.045em] text-white">
          Design. Build.<br />Launch. Manage.
          <span className="mt-2 block bg-clip-text text-transparent [background-image:linear-gradient(110deg,#d1d1d1_20%,#8b8b8b_100%)]">Your Restaurant Journey Starts Here</span>
        </h1>

        <p className="mt-6 max-w-[480px] text-[16px] font-semibold leading-[25px] text-[rgba(255,255,255,0.76)]">
          From concept to grand opening, we provide complete end-to-end solutions for new restaurants. We’re not just builders — we’re partners in your restaurant journey.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <button type="button" onClick={() => scrollToSection("mobile-services")} className="flex h-[60px] min-w-[196px] items-center justify-between rounded-full bg-[#0e0e0e] pl-6 text-[15px] font-semibold text-[#d1d1d1] shadow-[-3px_-3px_7px_rgba(255,190,11,0.38)]">
            Get Started
            <span className="mr-[5px] grid size-[50px] place-items-center rounded-full bg-[#ffbe0b] text-[22px] text-white" style={{ fontFamily: FA_SOLID }} aria-hidden="true">{`\uF061`}</span>
          </button>
          <button type="button" onClick={toggleVideo} aria-label={videoPlaying ? "Pause Instacon introduction video" : "Play Instacon introduction video"} className="grid size-[58px] shrink-0 place-items-center rounded-full border-2 border-[rgba(255,190,11,0.46)] bg-[rgba(4,4,4,0.82)] text-[19px] text-[#f6f6f6] backdrop-blur-md" style={{ fontFamily: FA_SOLID }}>
            <span className={videoPlaying ? "" : "translate-x-[1px]"} aria-hidden="true">{videoPlaying ? `\uF04C` : `\uF04B`}</span>
          </button>
        </div>

        <div className="mt-10 flex items-center gap-4 border-t border-[rgba(255,255,255,0.12)] pt-6">
          <div className="flex pl-[5px]">
            {[reviewerOne, reviewerTwo, reviewerThree].map((reviewer, index) => (
              <img key={reviewer} src={reviewer} alt="Instacon client" className="-ml-[5px] size-11 rounded-full border-[3px] border-[#ffbe0b] object-cover" style={{ zIndex: 3 - index }} />
            ))}
          </div>
          <div>
            <div className="text-[16px] font-bold leading-5 text-[#d1d1d1]">2.7k positive reviews</div>
            <div className="mt-1 text-[12px] font-medium text-[#8b8b8b]">Trusted by growing restaurant brands</div>
          </div>
        </div>
      </div>
    </section>
  );
}
