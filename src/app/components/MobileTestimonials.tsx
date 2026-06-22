"use client";

import imgTestimonialReviewer from "@/imports/InstaconLandingPageV2/7857b67afe262a57dec2cc5dbc118b6f35729fcd.png";
import imgTestimonialReviewer1 from "@/imports/InstaconLandingPageV2/73af6db2a4519f7e02aaa9fe6c7d57b435d576c6.png";
import imgTestimonialReviewer2 from "@/imports/InstaconLandingPageV2/5c512320eea1158f09889c5dbc518174b1cf8aac.png";

const PJS = "'Plus Jakarta Sans', sans-serif";
const FA_REGULAR = "'Font_Awesome_5_Free:Regular'";
const FA_SOLID = "'Font_Awesome_5_Free:Solid'";

const stats = [
  { value: "2.7k", label: "Positive Reviews" },
  { value: "90%", label: "Improved Projects" },
  { value: "49%", label: "New Projects" },
];

const testimonials = [
  {
    image: imgTestimonialReviewer,
    name: "David Mont",
    role: "Marketing Director",
    quote:
      "We've worked with many agencies before, but Marko stands out. Their data-driven approach and creative solutions gave us an edge over competitors.",
  },
  {
    image: imgTestimonialReviewer1,
    name: "Sophia Lewis",
    role: "Founder",
    quote:
      "From SEO to paid ads, Marko nailed every aspect of our campaign. Our website traffic skyrocketed, and lead generation has never been better!",
  },
  {
    image: imgTestimonialReviewer2,
    name: "James Peterson",
    role: "COO, BrightWave",
    quote:
      "Highly professional and results-oriented. Marko's expertise in branding and content marketing helped us build a strong online identity.",
  },
];

export default function MobileTestimonials() {
  return (
    <section
      className="bg-[#040404] px-4 py-14 min-[430px]:px-5"
      style={{ fontFamily: PJS }}
    >
      {/* Stats Row */}
      <div className="mb-12 grid grid-cols-3 gap-2 rounded-[20px] border border-[#1F1F1F] bg-[#0E0E0E] px-3 py-5">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center text-center ${
              i !== stats.length - 1 ? "border-r border-[#1F1F1F]" : ""
            }`}
          >
            <span className="text-[clamp(22px,6vw,28px)] font-bold leading-none text-[#FFBE0B]">
              {stat.value}
            </span>
            <span className="mt-1.5 text-[11px] font-medium leading-[1.3] text-[#8B8B8B]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Section Label */}
      <div className="mb-4 flex items-center gap-2">
        <span
          className="text-[10px] text-[#FFBE0B]"
          style={{ fontFamily: FA_REGULAR }}
          aria-hidden="true"
        >
          {""}
        </span>
        <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#8B8B8B]">
          Testimonials
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-[clamp(26px,8vw,34px)] font-bold leading-[1.15] tracking-[-0.03em] text-[#D1D1D1]">
        What Our Clients Say
      </h2>

      {/* Subtext */}
      <p className="mt-3 text-[14px] leading-[1.65] text-[#8B8B8B]">
        We take pride in the relationships we build with our clients, and their
        satisfaction is our greatest reward.
      </p>

      {/* Testimonial Cards */}
      <div className="mt-8 flex flex-col gap-4">
        {testimonials.map((t) => (
          <article
            key={t.name}
            className="rounded-[20px] border border-[#1F1F1F] bg-[#0E0E0E] p-5"
          >
            {/* Opening quote icon */}
            <span
              className="mb-3 block text-[28px] leading-none text-[#FFBE0B]"
              style={{ fontFamily: FA_SOLID }}
              aria-hidden="true"
            >
              {""}
            </span>

            {/* Stars */}
            <div
              className="mb-3 text-[15px] leading-none tracking-[2px] text-[#FFBE0B]"
              aria-label="5 out of 5 stars"
            >
              {"★★★★★"}
            </div>

            {/* Quote */}
            <p className="text-[14px] italic leading-[1.7] text-[#D1D1D1]">
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Reviewer */}
            <div className="mt-5 flex items-center gap-3 border-t border-[#1F1F1F] pt-4">
              <img
                src={t.image}
                alt={t.name}
                className="size-11 shrink-0 rounded-full border-2 border-[rgba(255,190,11,0.45)] object-cover"
              />
              <div>
                <div className="text-[14px] font-bold text-[#D1D1D1]">
                  {t.name}
                </div>
                <div className="mt-0.5 text-[12px] text-[#8B8B8B]">
                  {t.role}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

