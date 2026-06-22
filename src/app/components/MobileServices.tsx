"use client";

import imgServiceIcon from "@/imports/InstaconLandingPageV2/4b2ba99fdbbc8f5d35bdb7726a580e58c42b1c32.png";
import imgServiceIcon1 from "@/imports/InstaconLandingPageV2/015a142df95a1231a2a9d8a9928dfd0557e5cc18.png";
import imgServiceIcon2 from "@/imports/InstaconLandingPageV2/d309442c80fac18467d7d0fe4f8899f7d342fe5d.png";
import imgServiceIcon3 from "@/imports/InstaconLandingPageV2/048f40ee04c214f5be8a8142cb1d3ea77be28757.png";
import imgServiceIcon4 from "@/imports/InstaconLandingPageV2/39787bc59022e9dcafc6eafd36f026ebd8c184ba.png";
import imgServiceIcon5 from "@/imports/InstaconLandingPageV2/b7e48da518cdf2c7a22927bcfc6990ea82e6fd2e.png";

const PJS = "'Plus Jakarta Sans', sans-serif";
const FA_REGULAR = "'Font_Awesome_5_Free:Regular'";

const services = [
  {
    icon: imgServiceIcon,
    title: "PROJECT MANAGEMENT",
    desc: "Complete restaurant build & launch support — from scope to store opening.",
  },
  {
    icon: imgServiceIcon1,
    title: "CONSTRUCTION DESIGN BUILD",
    desc: "Architectural design + civil execution for optimal flow and efficiency.",
  },
  {
    icon: imgServiceIcon2,
    title: "INTERIOR FIT-OUTS",
    desc: "Turnkey interiors tailored to your brand personality and customer experience.",
  },
  {
    icon: imgServiceIcon3,
    title: "COMMUNITY OUTLET",
    desc: "Smart modular formats for franchises, kiosks, food courts, and more.",
  },
  {
    icon: imgServiceIcon4,
    title: "STAFF POLICY SYSTEMS",
    desc: "Structure your team with SOPs, training plans, and operational policies.",
  },
  {
    icon: imgServiceIcon5,
    title: "SUPPLY CHAIN SETUP",
    desc: "Raw material sourcing, vendor alignment, and backend logistics planning.",
  },
];

export default function MobileServices() {
  return (
    <section
      id="mobile-services"
      className="relative overflow-hidden bg-[#040404] px-4 pb-14 pt-12 min-[430px]:px-5"
      style={{ fontFamily: PJS }}
    >
      {/* Top gold divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,transparent_0%,rgba(255,190,11,0.45)_40%,rgba(255,190,11,0.45)_60%,transparent_100%)]" />
      {/* Soft ambient radial glow (centered) */}
      <div className="pointer-events-none absolute inset-x-0 top-1/3 h-[300px] bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(255,190,11,0.05),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-[520px]">
        {/* Section label */}
        <div className="mb-5 flex items-center gap-2">
          <span
            className="text-[13px] text-[#FFBE0B]"
            style={{ fontFamily: FA_REGULAR }}
            aria-hidden="true"
          >
            {""}
          </span>
          <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#FFBE0B]">
            Our Core Services
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[clamp(22px,7vw,34px)] font-bold leading-[1.18] tracking-[-0.03em] text-[#D1D1D1]">
          Digital Solutions That Drive{" "}
          <span className="text-[#FFBE0B]">Real Results</span>
        </h2>

        {/* Subtext */}
        <p className="mt-4 mb-9 text-[14px] font-medium leading-[23px] text-[#8B8B8B]">
          Need a custom solution? Let&apos;s create a strategy tailored for your business.
        </p>

        {/* 2-column service card grid */}
        <div className="grid grid-cols-2 gap-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative flex flex-col overflow-hidden rounded-[18px] border border-[#1F1F1F] p-5 shadow-[4px_4px_18px_rgba(255,190,11,0.10)]"
              style={{
                background:
                  "radial-gradient(ellipse 100% 80% at 50% 100%, #111108 0%, #0E0E0E 60%)",
              }}
            >
              {/* Service icon */}
              <div className="mb-3 h-12 w-12 shrink-0">
                <img
                  src={service.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-contain"
                />
              </div>
              {/* Title */}
              <h3 className="mt-3 text-[13px] font-bold uppercase leading-[1.3] tracking-[0.04em] text-[#D1D1D1]">
                {service.title}
              </h3>
              {/* Description */}
              <p className="mt-2 text-[13px] font-medium leading-[20px] text-[#8B8B8B]">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


