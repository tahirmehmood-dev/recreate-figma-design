"use client";

import imgBlogImage from "@/imports/InstaconLandingPageV2/ac9bd00a48804506b35c3b860bb88c0e399f3070.png";
import imgImage813 from "@/imports/InstaconLandingPageV2/e393276e09cc8b5304325a11e91e4804c27e5ae2.png";
import imgImage814 from "@/imports/InstaconLandingPageV2/09285fb4225cd93a8e32161b641dec7235c79e04.png";
import imgBlogImage1 from "@/imports/InstaconLandingPageV2/34924c82d9f576b59cc728728475044863862a39.png";

const PJS = "'Plus Jakarta Sans', sans-serif";
const FA_REGULAR = "'Font_Awesome_5_Free:Regular'";
const FA_SOLID = "'Font_Awesome_5_Free:Solid'";

const projects = [
  {
    image: imgBlogImage,
    date: "April 14, 2025",
    category: "Commercial Project",
    title: "NY212 Gujranwala",
  },
  {
    image: imgImage813,
    date: "April 14, 2025",
    category: "Commercial Project",
    title: "NY212 Cantt",
  },
  {
    image: imgImage814,
    date: "April 14, 2025",
    category: "Restaurant Design",
    title: "Crumble MM Alam",
  },
  {
    image: imgBlogImage1,
    date: "April 14, 2025",
    category: "Commercial Project",
    title: "NY212 SHALAMAR",
  },
];

export default function MobileProjects() {
  return (
    <section
      id="mobile-projects"
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
          {""}
        </span>
        <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#8B8B8B]">
          Our Projects
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-[clamp(26px,8vw,34px)] font-bold leading-[1.15] tracking-[-0.03em] text-[#D1D1D1]">
        Our Projects: Built to Inspire
      </h2>

      {/* Subtext */}
      <p className="mt-3 text-[14px] leading-[1.65] text-[#8B8B8B]">
        From luxurious homes and modern offices to vibrant hospitality and
        retail spaces, our portfolio showcases the depth, diversity, and quality
        of Instacon&apos;s work.
      </p>

      {/* Project Grid */}
      <div className="mt-8 grid grid-cols-2 gap-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-[18px] border border-[#1F1F1F] bg-[#0E0E0E]"
          >
            {/* Project Image */}
            <div className="h-[160px] w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Card Body */}
            <div className="p-4">
              {/* Date */}
              <div className="flex items-center gap-1.5 text-[12px] text-[#8B8B8B]">
                <span
                  style={{ fontFamily: FA_SOLID }}
                  aria-hidden="true"
                  className="text-[10px]"
                >
                  {""}
                </span>
                <span>{project.date}</span>
              </div>

              {/* Category chip */}
              <div className="mt-2">
                <span className="inline-block rounded-full bg-[rgba(255,190,11,0.12)] px-2 py-0.5 text-[11px] font-semibold text-[#FFBE0B]">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-2 text-[15px] font-bold leading-[1.3] text-[#D1D1D1]">
                {project.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

