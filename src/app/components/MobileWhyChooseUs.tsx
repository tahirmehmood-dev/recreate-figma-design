"use client";

import imgWhyChooseUsIcon from "@/imports/InstaconLandingPageV2/03704b5f309b59e8b53b91e4e65fb0fa93a69e38.png";

const PJS = "'Plus Jakarta Sans', sans-serif";
const FA_REGULAR = "'Font_Awesome_5_Free:Regular'";

const features = [
  {
    title: "Creative Excellence",
    desc: "Led by a management team with extensive project experience",
  },
  {
    title: "Experienced Professionals",
    desc: "Committed to the highest standards of professionalism and integrity",
  },
  {
    title: "Tailored Solutions",
    desc: "Powered by certified, qualified, and experienced technical professionals",
  },
  {
    title: "Innovative Approach",
    desc: "Fully compliant with Health, Safety & Environmental (HSE) practice",
  },
];

export default function MobileWhyChooseUs() {
  return (
    <section
      className="relative overflow-hidden bg-[#040404] px-4 pb-14 pt-12 min-[430px]:px-5"
      style={{ fontFamily: PJS }}
    >
      {/* Radial gold glow at bottom (mirrors hero) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[52%] bg-[radial-gradient(ellipse_85%_60%_at_50%_100%,rgba(255,190,11,0.12),transparent_70%)]" />
      {/* Subtle top gold divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,transparent_0%,rgba(255,190,11,0.45)_40%,rgba(255,190,11,0.45)_60%,transparent_100%)]" />

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
            Why Choose Us
          </span>
        </div>

        {/* Heading */}
        <h2 className="mb-10 text-[clamp(22px,7vw,34px)] font-bold leading-[1.18] tracking-[-0.03em] text-[#D1D1D1]">
          Crafting Excellence Across{" "}
          <span className="text-[#FFBE0B]">Diverse Industries</span>
        </h2>

        {/* 2×2 feature card grid */}
        <div className="grid grid-cols-2 gap-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col rounded-[18px] border border-[#1F1F1F] bg-[#0E0E0E] p-4 shadow-[-2px_-2px_5px_rgba(255,190,11,0.18)]"
            >
              {/* Icon */}
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-[12px] border border-[#1F1F1F] bg-[#141414] p-2">
                <img
                  src={imgWhyChooseUsIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-contain"
                />
              </div>
              {/* Title */}
              <h3 className="text-[14px] font-bold leading-[1.25] text-[#D1D1D1]">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="mt-2 text-[12px] font-medium leading-[19px] text-[#8B8B8B]">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


