import InstaconLandingPageV from "@/imports/InstaconLandingPageV2/index";
import HeaderNav from "@/imports/Header→Nav/index";
import Iframe from "@/imports/Iframe-1/index";

export default function App() {
  return (
    <div className="w-full overflow-x-auto bg-[#040404]">
      <div className="relative" style={{ width: "1920px", minHeight: "12600px", height: "12600px" }}>
        {/* Hero video background — z-0, sits behind all page content */}
        <div className="absolute z-0" style={{ top: 0, left: 30, width: 1860, height: 961 }}>
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
