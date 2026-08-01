import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          borderRadius: 7,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 34 34" fill="none">
          <path d="M17 4 A13 13 0 0 1 30 17" stroke="#1B65A6" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <path d="M17 8.5 A8.5 8.5 0 0 1 25.5 17" stroke="#1B65A6" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.55" />
          <circle cx="17" cy="17" r="4" fill="#0E1A28" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
