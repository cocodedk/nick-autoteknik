import { ImageResponse } from "next/og";
import contentData from "@/data/content.da.json";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  const { business, hero } = contentData;

  return new ImageResponse(
    (
      <div
        style={{
          width: size.width,
          height: size.height,
          display: "flex",
          backgroundColor: "#111111",
          color: "#ffffff",
          fontFamily: "system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 16,
            height: size.height,
            backgroundColor: "#E11D2E",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 64,
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: -1,
            }}
          >
            {business.name}
          </div>
          <div
            style={{
              width: 80,
              height: 6,
              backgroundColor: "#E11D2E",
            }}
          />
          <div style={{ fontSize: 36, color: "#e5e7eb" }}>{hero.subtitle}</div>
          <div style={{ fontSize: 28, color: "#9ca3af" }}>{business.address}</div>
          <div style={{ fontSize: 28, color: "#9ca3af" }}>Tlf. {business.phone}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}

