import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Jeff Samitt — AI-native product executive & builder/operator. I embed, lead, and ship.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The image renderer can't read CSS variables, so these mirror the role
// tokens in globals.css. Keep them in step.
const token = {
  page: "#F1F4EE",
  band: "#DDE7DA",
  ink: "#14302B",
  accent: "#F2B135",
  onDark: "#F1F4EE",
};

export default async function OGImage() {
  const [bricolage, figtree] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/BricolageGrotesque-ExtraBold.ttf")),
    readFile(join(process.cwd(), "assets/fonts/Figtree-SemiBold.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          background: token.page,
          color: token.ink,
          fontFamily: "Figtree",
        }}
      >
        {/* Sage and marigold circles, top right */}
        <div
          style={{
            position: "absolute",
            right: -140,
            top: -140,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: token.band,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 90,
            top: 90,
            width: 150,
            height: 150,
            borderRadius: "50%",
            background: token.accent,
          }}
        />

        {/* JS mark and name */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: token.ink,
              color: token.onDark,
              fontFamily: "Bricolage Grotesque",
              fontSize: 22,
            }}
          >
            JS
          </div>
          <div style={{ fontFamily: "Bricolage Grotesque", fontSize: 32 }}>
            Jeff Samitt
          </div>
        </div>

        {/* Headline, set as the two lines it wraps to on the canvas */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            fontFamily: "Bricolage Grotesque",
            fontSize: 76,
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
          }}
        >
          <div>AI-native product executive</div>
          <div style={{ display: "flex" }}>
            <span>&amp;&nbsp;</span>
            <span
              style={{
                background: token.accent,
                borderRadius: 14,
                padding: "0 12px",
              }}
            >
              builder/operator
            </span>
          </div>
        </div>

        <div
          style={{
            marginTop: 40,
            paddingTop: 22,
            borderTop: `2px solid ${token.ink}`,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
          }}
        >
          <span>I embed, lead, and ship.</span>
          <span>samitt.co</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bricolage Grotesque", data: bricolage, weight: 800, style: "normal" },
        { name: "Figtree", data: figtree, weight: 600, style: "normal" },
      ],
    },
  );
}
