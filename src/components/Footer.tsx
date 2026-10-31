"use client";

import { personalInfo } from "@/data/portfolio";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "2rem",
        borderTop: "1px solid rgba(100,255,218,0.05)",
        color: "var(--slate)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.78rem",
        lineHeight: 2,
      }}
    >
      <p>
        Designed & Built by{" "}
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "var(--teal)",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.7"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
        >
          {personalInfo.name}, {personalInfo.degree}
        </a>
      </p>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.35rem",
        }}
      >
        Made with{" "}
        <Heart
          size={12}
          style={{ color: "var(--teal)", fill: "var(--teal)" }}
        />{" "}
        using Next.js, TypeScript & Framer Motion
      </p>
      <p style={{ marginTop: "0.5rem", fontSize: "0.72rem", opacity: 0.6 }}>
        © 2026 {personalInfo.name}. All Rights Reserved.
      </p>
    </footer>
  );
}
