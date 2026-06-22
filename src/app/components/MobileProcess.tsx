"use client";

import imgDigitalProccessIcon from "@/imports/InstaconLandingPageV2/ab7c8737b4fd4caf836593b925fcf725762fbc5f.png";
import imgDigitalProcessIcon from "@/imports/InstaconLandingPageV2/0b9763953a4df900d883944d918ce8f2f900dcdf.png";
import imgDigitalProcessIcon1 from "@/imports/InstaconLandingPageV2/eecf4315a0025a06e45c567d4d088e775e91ed71.png";
import imgDigitalProcessIcon2 from "@/imports/InstaconLandingPageV2/43c00ec4646a14d4b5648198cbf8ebcf781937e3.png";

const PJS = "'Plus Jakarta Sans', sans-serif";
const FA_REGULAR = "'Font_Awesome_5_Free:Regular'";

const steps = [
  {
    number: "01",
    title: "Scoping",
    description: "Understand your concept, vision, and operational goals.",
    icon: imgDigitalProccessIcon,
  },
  {
    number: "02",
    title: "Design & Plan",
    description:
      "We create layouts, workflows, and systems designed to perform.",
    icon: imgDigitalProcessIcon,
  },
  {
    number: "03",
    title: "Build & Launch",
    description:
      "We deliver a ready-to-operate brand — built, equipped, and ready to serve.",
    icon: imgDigitalProcessIcon1,
  },
  {
    number: "04",
    title: "Result & Growth",
    description:
      "Driving results and sustainable growth with data-driven strategies.",
    icon: imgDigitalProcessIcon2,
  },
];

export default function MobileProcess() {
  return (
    <section
      className="bg-[#040404] px-4 py-14 min-[430px]:px-5"
      style={{ fontFamily: PJS }}
    >
      {/* Section Label */}
      <div className="mb-4 flex items-center gap-2">
        <span
          className="text-[10px] text-[#FFBE0B]"
          style={{ fontFamily: FA_REGULAR }}
          aria-hidden="true"
        >
          {""}
        </span>
        <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#8B8B8B]">
          How it Works
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-[clamp(26px,8vw,34px)] font-bold leading-[1.15] tracking-[-0.03em] text-[#D1D1D1]">
        Simple Steps to Digital Success
      </h2>

      {/* Subtext */}
      <p className="mt-3 text-[14px] leading-[1.65] text-[#8B8B8B]">
        At Instacon, we make the construction journey seamless and stress-free.
        Our process ensures clarity, quality, and collaboration at every step.
      </p>

      {/* Steps */}
      <div className="mt-10 flex flex-col">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          return (
            <div key={step.number} className="flex gap-4">
              {/* Left column: icon + connector */}
              <div className="flex flex-col items-center">
                {/* Icon square */}
                <div className="flex size-12 shrink-0 items-center justify-center rounded-[14px] border border-[#1F1F1F] bg-[#0E0E0E]">
                  <img
                    src={step.icon}
                    alt=""
                    aria-hidden="true"
                    className="size-7 object-contain"
                  />
                </div>
                {/* Connector line */}
                {!isLast && (
                  <div className="my-1 flex-1 border-l-2 border-dashed border-[rgba(255,190,11,0.3)]" />
                )}
              </div>

              {/* Right column: content */}
              <div className={`pb-8 ${isLast ? "pb-0" : ""}`}>
                <span className="text-[12px] font-bold text-[#FFBE0B]">
                  {step.number}
                </span>
                <h3 className="mt-1 text-[18px] font-bold leading-[1.2] text-[#D1D1D1]">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-[1.6] text-[#8B8B8B]">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


