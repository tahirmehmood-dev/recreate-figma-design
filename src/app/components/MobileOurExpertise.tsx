"use client";

import expertiseImg from "@/imports/InstaconLandingPageV2/36b1e79b764e5320c8775146b6ba7a9ce5d31f7c.png";

const PJS = "'Plus Jakarta Sans', sans-serif";
const FA_REGULAR = "'Font_Awesome_5_Free:Regular'";

const skills = [
  "PROJECT MANAGEMENT",
  "CONSTRUCTION DESIGN",
  "INTERIOR FIT-OUTS",
  "KITCHEN PLANNING",
  "STAFF POLICY SYSTEMS",
  "SUPPLY CHAIN SETUP",
];

export default function MobileOurExpertise() {
  return (
    <section
      id="mobile-expertise"
      className="bg-[#040404] px-4 pb-16 pt-12 min-[430px]:px-5"
      style={{ fontFamily: PJS }}
    >
      {/* Section label */}
      <div className="mb-5 flex items-center gap-[10px]">
        <span
          className="text-[18px] leading-none text-[#ffbe0b]"
          style={{ fontFamily: FA_REGULAR }}
          aria-hidden="true"
        >
          {""}
        </span>
        <span className="text-[15px] font-bold tracking-wide text-[#d1d1d1]">
          Our Expertise
        </span>
      </div>

      {/* Heading */}
      <h2
        className="text-[clamp(34px,9vw,50px)] font-bold leading-[1.18] text-[#d1d1d1]"
        style={{ letterSpacing: "-0.025em" }}
      >
        Design. Build.<br />Launch. Manage.
      </h2>

      {/* Description */}
      <p className="mt-5 text-[15px] font-medium leading-[26px] text-[#8b8b8b]">
        We are dedicated to building a safer and more efficient world by delivering high-quality
        Project Management and Execution services. Our focus is on innovation, reliability, and
        excellence—creating value for our clients.
      </p>

      {/* Stats card */}
      <div
        className="mt-8 overflow-hidden rounded-[22px] p-6"
        style={{
          background: "radial-gradient(ellipse 141.42% 141.42% at 0% 0%, #1F1F1F 0%, #0E0E0E 50%)",
          boxShadow: "3px 3px 7px rgba(255,190,11,0.44)",
        }}
      >
        <div className="flex items-start gap-5">
          {/* Number */}
          <div className="flex shrink-0 items-start">
            <span
              className="text-[80px] font-bold leading-none"
              style={{ WebkitTextStroke: "2.5px #FFBE0B", color: "transparent" }}
            >
              21
            </span>
            <span className="mt-1 text-[36px] font-normal leading-none text-[#040404]">+</span>
          </div>
          {/* Label */}
          <p className="mt-[14px] text-[15px] font-bold leading-[1.55] text-[#d1d1d1]">
            Years of Experience on<br />Digital Marketing<br />Services
          </p>
        </div>
        <p className="mt-4 text-[14px] font-medium leading-[1.75] text-[#8b8b8b]">
          Aiming Speed with quality While building instagramable interiors and exteriors in the
          most eco friendly and sustainable manner.
        </p>
      </div>

      {/* What We Do Best + skills grid */}
      <div className="mt-9">
        <p className="mb-5 text-[18px] font-bold text-[#d1d1d1]">What We Do Best</p>
        <div className="grid grid-cols-2 gap-x-3 gap-y-[14px] min-[400px]:gap-x-5">
          {skills.map((skill) => (
            <div key={skill} className="flex items-start gap-[9px]">
              <span
                className="mt-[1px] shrink-0 text-[15px] leading-none text-[#ffbe0b]"
                style={{ fontFamily: FA_REGULAR }}
                aria-hidden="true"
              >
                {""}
              </span>
              <span className="text-[11.5px] font-bold uppercase leading-[1.55] tracking-[0.04em] text-[#8b8b8b]">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Image with overlay card */}
      <div className="relative mt-9 overflow-hidden rounded-[22px]">
        <img
          src={expertiseImg}
          alt="Instacon restaurant interior expertise"
          className="h-[300px] w-full object-cover object-center min-[430px]:h-[340px]"
        />

        {/* Overlay card — top-left corner, matching Figma layout */}
        <div
          className="absolute left-0 top-0"
          style={{ background: "#040404", borderBottomRightRadius: 28 }}
        >
          <div
            className="overflow-hidden rounded-[18px] p-4 min-[380px]:p-5"
            style={{
              background:
                "radial-gradient(ellipse 141.42% 141.42% at 100% 100%, #1F1F1F 0%, #0E0E0E 50%)",
              boxShadow: "-3px -3px 7px rgba(255,190,11,0.44)",
            }}
          >
            <p className="text-[15px] font-bold leading-[1.4] text-[#d1d1d1]">
              Design. Build.<br />Launch. Manage.
            </p>
            <p className="mt-[6px] text-[12px] font-medium leading-[1.6] text-[#8b8b8b]">
              Bringing you the experience<br />of more than 30 years
            </p>
            <div className="mt-3 flex items-center gap-[6px]">
              <span className="text-[13px] font-semibold text-[#ffbe0b]">
                Get Free Consultation
              </span>
              <span
                className="text-[13px] leading-none text-[#ffbe0b]"
                style={{ fontFamily: FA_REGULAR }}
                aria-hidden="true"
              >
                {""}
              </span>
            </div>
          </div>
        </div>

        {/* Subtle dark gradient at bottom for depth */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[rgba(4,4,4,0.45)] to-transparent" />
      </div>
    </section>
  );
}

