import { ImageResponse } from "next/og";

export const alt = "ProScaleMEDIA: Dubai's Growth Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "#000000",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#e8152a",
            marginBottom: 24,
          }}
        >
          ProScaleMEDIA
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 96,
            lineHeight: 0.95,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: -1,
          }}
        >
          <span>SCALE IS A</span>
          <span style={{ color: "#e8152a" }}>NUMBER.</span>
          <span>NOT AN ADJECTIVE.</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
