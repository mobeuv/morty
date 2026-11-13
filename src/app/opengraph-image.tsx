import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };
export const alt = "MOBEUV — Mobility Beyond the Universe";
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A1928",
          color: "#ffffff",
          padding: "72px 80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Traço de acento */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "42%",
            height: "8px",
            background: "#48B8E8",
            borderRadius: "0 0 0 8px",
          }}
        />

        {/* Topo: marca */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <svg width="64" height="44" viewBox="0 0 48 32" fill="none">
            <path
              d="M6 27 V9 L22 22 L38 9 V27"
              stroke="#ffffff"
              strokeWidth="6.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="44" cy="3.5" r="3" stroke="#48B8E8" strokeWidth="2.25" />
          </svg>
          <div
            style={{
              fontSize: "36px",
              fontWeight: 700,
              letterSpacing: "4px",
            }}
          >
            MOBEUV
          </div>
        </div>

        {/* Centro: mensagem */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "76px",
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: "-2px",
            }}
          >
            We build beyond
            <br />
            what exists.
          </div>
          <div style={{ fontSize: "30px", color: "#74CBF0" }}>
            Mobility Beyond the Universe
          </div>
        </div>

        {/* Trajetória decorativa */}
        <svg
          width="200"
          height="80"
          viewBox="0 0 200 80"
          fill="none"
          style={{ alignSelf: "flex-end" }}
        >
          <path
            d="M0 72 L56 52 L110 58 L168 26 L200 12"
            stroke="#1769E0"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="168" cy="26" r="6" fill="#48B8E8" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
