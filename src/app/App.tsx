import { useState, useEffect } from "react";
import InstaconLandingPageV from "@/imports/InstaconLandingPageV2/index";
import HeaderNav from "@/imports/Header→Nav/index";
import Iframe from "@/imports/Iframe-1/index";

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 12600;

export default function App() {
  const [scale, setScale] = useState(() =>
    typeof window !== "undefined"
      ? Math.min(1, window.innerWidth / DESIGN_WIDTH)
      : 1
  );

  useEffect(() => {
    const update = () =>
      setScale(Math.min(1, window.innerWidth / DESIGN_WIDTH));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      className="bg-[#040404]"
      style={{
        width: "100%",
        height: DESIGN_HEIGHT * scale,
        position: "relative",
        overflow: "hidden",
      }}
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
        {/* Hero video background — z-0, sits behind all page content */}
        <div
          className="absolute z-0"
          style={{ top: 0, left: 30, width: 1860, height: 961 }}
        >
          <Iframe />
        </div>

        {/* Main landing page content */}
        <div className="absolute inset-0 z-10">
          <InstaconLandingPageV />
        </div>

        {/* Header nav — topmost layer */}
        <div
          className="absolute rounded-[25px] z-50"
          style={{ top: 30, left: 30, right: 30, height: 88 }}
        >
          <HeaderNav />
        </div>
      </div>
    </div>
  );
}
