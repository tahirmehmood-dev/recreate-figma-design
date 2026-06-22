import imgImage812 from "./477bb1ead533139a364b97591c35aa762f8c91f0.png";

const PJS = "'Plus Jakarta Sans', sans-serif";
const FA_SOLID = "'Font_Awesome_5_Free:Solid'";

export default function HeaderNav() {
  return (
    <div
      className="relative size-full rounded-[25px]"
      style={{ background: "#0E0E0E", outline: "1px solid #1F1F1F", outlineOffset: "-1px" }}
      data-name="Header → Nav"
    >
      {/* Nav links */}
      <div className="absolute" style={{ width: 595.73, height: 40, left: 632.13, top: 31 }} data-name="List">

        {/* Home */}
        <div className="absolute" style={{ width: 78.72, height: 40, left: 0, top: 0 }} data-name="Item → Link">
          <div className="absolute" style={{ width: 47.06, height: 21, left: 16, top: 9, display: "flex", flexDirection: "column", justifyContent: "center", color: "#D1D1D1", fontSize: 16, fontFamily: PJS, fontWeight: 600, lineHeight: "24px", wordWrap: "break-word" }}>Home</div>
        </div>

        {/* About */}
        <div className="absolute" style={{ width: 80.11, height: 40, left: 78.71, top: 0 }} data-name="Item → Link">
          <div className="absolute" style={{ width: 48.46, height: 21, left: 16, top: 9, display: "flex", flexDirection: "column", justifyContent: "center", color: "#D1D1D1", fontSize: 16, fontFamily: PJS, fontWeight: 600, lineHeight: "24px", wordWrap: "break-word" }}>About</div>
        </div>

        {/* Services */}
        <div className="absolute" style={{ width: 115.17, height: 40, left: 158.82, top: 0 }} data-name="Item → Button">
          <div className="absolute" style={{ width: 69.48, height: 21, left: 16, top: 9, display: "flex", flexDirection: "column", justifyContent: "center", color: "#D1D1D1", fontSize: 16, fontFamily: PJS, fontWeight: 600, lineHeight: "24px", wordWrap: "break-word" }}>Services </div>
          <div className="absolute not-italic" style={{ width: 14.36, height: 16, left: 90.05, top: 14.5, display: "flex", flexDirection: "column", justifyContent: "center", color: "#FFBE0B", fontSize: 16, fontFamily: FA_SOLID, fontWeight: 900, lineHeight: "16px" }}>{``}</div>
        </div>

        {/* Pages */}
        <div className="absolute" style={{ width: 96.31, height: 40, left: 274, top: 0 }} data-name="Item → Button">
          <div className="absolute" style={{ width: 50.66, height: 21, left: 16, top: 9, display: "flex", flexDirection: "column", justifyContent: "center", color: "#D1D1D1", fontSize: 16, fontFamily: PJS, fontWeight: 600, lineHeight: "24px", wordWrap: "break-word" }}>Pages </div>
          <div className="absolute not-italic" style={{ width: 14.36, height: 16, left: 69.87, top: 14.5, display: "flex", flexDirection: "column", justifyContent: "center", color: "#FFBE0B", fontSize: 16, fontFamily: FA_SOLID, fontWeight: 900, lineHeight: "16px" }}>{``}</div>
        </div>

        {/* Archive */}
        <div className="absolute" style={{ width: 107.11, height: 40, left: 370.31, top: 0 }} data-name="Item → Button">
          <div className="absolute" style={{ width: 61.50, height: 21, left: 16, top: 9, display: "flex", flexDirection: "column", justifyContent: "center", color: "#D1D1D1", fontSize: 16, fontFamily: PJS, fontWeight: 600, lineHeight: "24px", wordWrap: "break-word" }}>Archive </div>
          <div className="absolute not-italic" style={{ width: 14.36, height: 16, left: 82.56, top: 14.5, display: "flex", flexDirection: "column", justifyContent: "center", color: "#FFBE0B", fontSize: 16, fontFamily: FA_SOLID, fontWeight: 900, lineHeight: "16px" }}>{``}</div>
        </div>

        {/* Contact Us */}
        <div className="absolute" style={{ width: 118.31, height: 40, left: 477.42, top: 0 }} data-name="Item → Link">
          <div className="absolute" style={{ width: 86.64, height: 21, left: 16, top: 9, display: "flex", flexDirection: "column", justifyContent: "center", color: "#D1D1D1", fontSize: 16, fontFamily: PJS, fontWeight: 600, lineHeight: "24px", wordWrap: "break-word" }}>Contact Us</div>
        </div>

      </div>

      {/* Phone button */}
      <div
        className="absolute rounded-[74.45px]"
        style={{ width: 201.01, height: 51.37, left: 1609.99, top: 25, background: "rgba(255,255,255,0)", boxShadow: "-2.233px -2.233px 5.211px rgba(255,190,11,0.44)" }}
        data-name="Overlay+Shadow"
      >
        <div className="absolute" style={{ width: 115.88, height: 22.33, left: 66.76, top: 14.52, display: "flex", flexDirection: "column", justifyContent: "center", color: "#D1D1D1", fontSize: 14.889, fontFamily: PJS, fontWeight: 700, lineHeight: "22.334px", wordWrap: "break-word" }}>+92 987 75463</div>
        <div className="absolute rounded-[21.96px]" style={{ width: 43.92, height: 43.92, left: 3.72, top: 3.72, background: "#FFBE0B" }} data-name="Background">
          <div className="absolute not-italic text-center" style={{ width: 22.62, height: 23.08, left: 10.79, top: 10.05, display: "flex", flexDirection: "column", justifyContent: "center", color: "#040404", fontSize: 22.334, fontFamily: FA_SOLID, fontWeight: 900, lineHeight: "22.334px" }}>{``}</div>
        </div>
      </div>

      {/* Logo */}
      <div className="absolute" style={{ width: 202.17, height: 64.67, left: 55, top: 18 }} data-name="image 812">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage812} />
      </div>
    </div>
  );
}
