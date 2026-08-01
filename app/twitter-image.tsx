import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Atlantis Utility Inc — Business VoIP, Internet, Telecom & IT Services in California";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0E1A28 0%, #0B131E 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 40 }}>
          <svg width="56" height="56" viewBox="0 0 34 34" fill="none">
            <path d="M17 4 A13 13 0 0 1 30 17" stroke="#1B65A6" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            <path d="M17 8.5 A8.5 8.5 0 0 1 25.5 17" stroke="#1B65A6" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.55" />
            <circle cx="17" cy="17" r="4" fill="white" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: "white", letterSpacing: -0.5 }}>ATLANTIS</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#1B65A6", letterSpacing: 4 }}>UTILITY INC</div>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 800, color: "white", lineHeight: 1.15, maxWidth: 980 }}>
          Business VoIP, Internet &amp; IT Services in California
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#7EB8E8", marginTop: 28 }}>
          SIP Trunking · Structured Cabling · Managed IT · 24/7 Support
        </div>
      </div>
    ),
    { ...size }
  );
}