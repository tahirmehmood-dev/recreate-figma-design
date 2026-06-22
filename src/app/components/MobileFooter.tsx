"use client";

import logo from "@/imports/InstaconLandingPageV2/477bb1ead533139a364b97591c35aa762f8c91f0.png";

const PJS = "'Plus Jakarta Sans', sans-serif";
const FA_SOLID = "'Font_Awesome_5_Free:Solid'";
const FA_BRANDS = "'Font_Awesome_5_Brands:Regular'";

const quickLinks = [
  "Home",
  "About Us",
  "Service",
  "Case Studies",
  "Blog",
  "Contact Us",
];

export default function MobileFooter() {
  return (
    <footer
      className="border-t border-[#1F1F1F] bg-[#040404] px-4 pb-10 pt-12 min-[430px]:px-5"
      style={{ fontFamily: PJS }}
    >
      {/* Brand column */}
      <div>
        <img
          src={logo}
          alt="Instacon"
          className="h-auto w-[130px] object-contain"
        />
        <p className="mt-4 text-[14px] font-semibold leading-[1.5] text-[#D1D1D1]">
          Driving Digital Growth with Innovation &amp; Strategy
        </p>
        <p className="mt-3 text-[13px] leading-[1.7] text-[#8B8B8B]">
          Lorem ipsum dolor si consectetur adipiscing elit ut elit tellus luctus
          nec ullamcorper mattis pulvinar dapibus leo.
        </p>

        {/* Social icons */}
        <div className="mt-5 flex items-center gap-3">
          {/* Facebook */}
          <a
            href="#"
            aria-label="Facebook"
            className="flex size-9 items-center justify-center rounded-[10px] border border-[#1F1F1F] bg-[#0E0E0E] text-[14px] text-[#8B8B8B] transition-colors hover:border-[#FFBE0B] hover:text-[#FFBE0B]"
            style={{ fontFamily: FA_BRANDS }}
          >
            <span aria-hidden="true">{``}</span>
          </a>

          {/* Twitter */}
          <a
            href="#"
            aria-label="Twitter"
            className="flex size-9 items-center justify-center rounded-[10px] border border-[#1F1F1F] bg-[#0E0E0E] text-[14px] text-[#8B8B8B] transition-colors hover:border-[#FFBE0B] hover:text-[#FFBE0B]"
            style={{ fontFamily: FA_BRANDS }}
          >
            <span aria-hidden="true">{``}</span>
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            aria-label="LinkedIn"
            className="flex size-9 items-center justify-center rounded-[10px] border border-[#1F1F1F] bg-[#0E0E0E] text-[14px] text-[#8B8B8B] transition-colors hover:border-[#FFBE0B] hover:text-[#FFBE0B]"
            style={{ fontFamily: FA_BRANDS }}
          >
            <span aria-hidden="true">{``}</span>
          </a>

          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            className="flex size-9 items-center justify-center rounded-[10px] border border-[#1F1F1F] bg-[#0E0E0E] text-[14px] text-[#8B8B8B] transition-colors hover:border-[#FFBE0B] hover:text-[#FFBE0B]"
            style={{ fontFamily: FA_BRANDS }}
          >
            <span aria-hidden="true">{``}</span>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-8">
        <h3 className="text-[15px] font-bold text-[#D1D1D1]">Quick Links</h3>
        <ul className="mt-4 flex flex-col gap-3">
          {quickLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="flex items-center gap-2 text-[14px] text-[#8B8B8B] transition-colors hover:text-[#FFBE0B]"
              >
                <span
                  className="text-[11px] text-[#FFBE0B]"
                  style={{ fontFamily: FA_SOLID }}
                  aria-hidden="true"
                >{``}</span>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div className="mt-8">
        <h3 className="text-[15px] font-bold text-[#D1D1D1]">Contact Info</h3>
        <div className="mt-4 flex flex-col gap-4">
          {/* Phone */}
          <div className="flex items-center gap-3">
            <span
              className="text-[13px] text-[#FFBE0B]"
              style={{ fontFamily: FA_SOLID }}
              aria-hidden="true"
            >{``}</span>
            <span className="text-[14px] text-[#8B8B8B]">+92 987 75463</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <span
              className="text-[13px] text-[#FFBE0B]"
              style={{ fontFamily: FA_SOLID }}
              aria-hidden="true"
            >{``}</span>
            <span className="text-[14px] text-[#8B8B8B]">
              hello@markoagency.com
            </span>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3">
            <span
              className="mt-[2px] text-[13px] text-[#FFBE0B]"
              style={{ fontFamily: FA_SOLID }}
              aria-hidden="true"
            >{``}</span>
            <span className="text-[14px] leading-[1.6] text-[#8B8B8B]">
              123 Digital Street, New York, USA
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-[#1F1F1F] pt-6 text-center">
        <p className="text-[13px] text-[#4a4a4a]">
          © 2025 Instacon. Fox Creation All Rights Reserved.
        </p>
        <div className="mt-3 flex items-center justify-center gap-4">
          <a
            href="#"
            className="text-[13px] text-[#4a4a4a] transition-colors hover:text-[#8B8B8B]"
          >
            Terms of Service
          </a>
          <span className="text-[#2a2a2a]">·</span>
          <a
            href="#"
            className="text-[13px] text-[#4a4a4a] transition-colors hover:text-[#8B8B8B]"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

