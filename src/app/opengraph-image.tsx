import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jeff Samitt — AI-Native Product Executive & Builder/Operator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1B3A5C",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Teal accent bar */}
        <div
          style={{
            width: 80,
            height: 6,
            background: "#0D7C8F",
            borderRadius: 3,
            marginBottom: 32,
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 32,
            color: "#0D7C8F",
            fontWeight: 600,
            marginBottom: 16,
            letterSpacing: "-0.02em",
          }}
        >
          Jeff Samitt
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#F4F7F9",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: 24,
          }}
        >
          AI-Native Product Executive
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#02C39A",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: 40,
          }}
        >
          & Builder/Operator
        </div>

        {/* Subhead */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(244, 247, 249, 0.6)",
            lineHeight: 1.4,
          }}
        >
          Fractional CPO · Interim Product Leader · Hands-on Builder
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 80,
            fontSize: 24,
            color: "rgba(244, 247, 249, 0.3)",
            fontWeight: 600,
          }}
        >
          samitt.co
        </div>
      </div>
    ),
    { ...size }
  );
}
