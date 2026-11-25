import { ImageResponse } from "next/og";

export const dynamic = "force-static";
const palette = { background: "#f4f8fd", navy: "#101b36", blue: "#1764e8", lime: "#a8df20", white: "#ffffff" };

export function GET() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", background: palette.background, color: palette.navy, fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}><div style={{ display: "flex", alignItems: "center", justifyContent: "center", background: palette.blue, color: palette.white, borderRadius: 16, width: 96, height: 72, fontSize: 30, fontWeight: 700 }}>VVB</div><div style={{ display: "flex", fontSize: 32, fontWeight: 700 }}>Virtual Value Bridge</div></div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 62, lineHeight: 1.15, fontWeight: 700 }}><span>Bilingual nearshore specialists.</span><span style={{ color: palette.blue }}>Built for U.S. businesses.</span></div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24 }}><span style={{ background: palette.lime, padding: "12px 20px", borderRadius: 10 }}>Your tools. Your time zone. Your team.</span><span>www.vvbridge.net</span></div>
    </div>,
    { width: 1200, height: 630 },
  );
}
