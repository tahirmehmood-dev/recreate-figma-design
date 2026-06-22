"use client";

import imgClient from "@/imports/InstaconLandingPageV2/cf358bd14bdf501762280275736754c115d883f4.png";
import imgClient1 from "@/imports/InstaconLandingPageV2/a71ef2991fd2b69d33647e2dc34f2cfc8d40cfa9.png";
import imgClient2 from "@/imports/InstaconLandingPageV2/a8613e5880190f1bb70d9c9f99afb38c083913b1.png";
import imgClient3 from "@/imports/InstaconLandingPageV2/c88a76ab6ffd1374cc14e1f7b22caecbf368abe7.png";
import imgClient4 from "@/imports/InstaconLandingPageV2/0f84e45efec80681ec92bae5c4496ff7799365da.png";
import imgClient5 from "@/imports/InstaconLandingPageV2/55a3d33fb7432d271d035d7320b57f470d9a1906.png";

const PJS = "'Plus Jakarta Sans', sans-serif";

const clients = [
  { src: imgClient,  alt: "Client brand 1" },
  { src: imgClient1, alt: "Client brand 2" },
  { src: imgClient2, alt: "Client brand 3" },
  { src: imgClient3, alt: "Client brand 4" },
  { src: imgClient4, alt: "Client brand 5" },
  { src: imgClient5, alt: "Client brand 6" },
];

export default function MobileClients() {
  return (
    <section
      className="relative overflow-hidden bg-[#040404] px-4 pb-14 pt-12 min-[430px]:px-5"
      style={{ fontFamily: PJS }}
    >
      {/* Golden divider line at top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,transparent_0%,rgba(255,190,11,0.55)_40%,rgba(255,190,11,0.55)_60%,transparent_100%)]" />
      {/* Soft radial glow above */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[160px] bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(255,190,11,0.07),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-[520px]">
        {/* Text block */}
        <div className="mb-10 text-center">
          <h2 className="text-[clamp(24px,7.5vw,36px)] font-bold leading-[1.15] tracking-[-0.03em] text-[#D1D1D1]">
            Powering Success for{" "}
            <span className="text-[#FFBE0B]">Top Brands</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[420px] text-[14px] font-medium leading-[23px] text-[#8B8B8B]">
            At INSTACON, we build spaces, brands, and stories that speak your language. From smart construction and bold rebranding to scroll-stopping content.
          </p>
        </div>

        {/* 3×2 logo grid */}
        <div className="grid grid-cols-3 gap-3">
          {clients.map((client) => (
            <div
              key={client.src}
              className="flex items-center justify-center rounded-[16px] border border-[#1F1F1F] bg-[#0E0E0E] p-4 shadow-[0_4px_18px_rgba(0,0,0,0.45)]"
            >
              <img
                src={client.src}
                alt={client.alt}
                className="h-10 w-full object-contain opacity-80 transition-opacity duration-200"
              />
            </div>
          ))}
        </div>

        {/* Bottom caption */}
        <p className="mt-8 text-center text-[12px] font-semibold uppercase tracking-[0.12em] text-[#8B8B8B]">
          Trusted by growing restaurant brands worldwide
        </p>
      </div>
    </section>
  );
}
