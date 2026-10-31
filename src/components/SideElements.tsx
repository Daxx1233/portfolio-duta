"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Globe, Mail, Phone } from "lucide-react";

export default function SideElements() {
  return (
    <>
      {/* Left sidebar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{
          position: "fixed",
          bottom: 0,
          left: "2rem",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.25rem",
        }}
        className="side-element left-side"
      >
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          style={{
            color: "var(--slate)",
            transition: "color 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.color = "var(--teal)";
            el.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.color = "var(--slate)";
            el.style.transform = "translateY(0)";
          }}
        >
          <Globe size={20} />
        </a>

        <a
          href={`mailto:${personalInfo.email}`}
          aria-label="Email"
          style={{
            color: "var(--slate)",
            transition: "color 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.color = "var(--teal)";
            el.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.color = "var(--slate)";
            el.style.transform = "translateY(0)";
          }}
        >
          <Mail size={20} />
        </a>

        <a
          href={`tel:${personalInfo.phone}`}
          aria-label="Phone"
          style={{
            color: "var(--slate)",
            transition: "color 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.color = "var(--teal)";
            el.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.color = "var(--slate)";
            el.style.transform = "translateY(0)";
          }}
        >
          <Phone size={20} />
        </a>

        {/* Vertical line */}
        <div
          style={{
            width: "1px",
            height: "90px",
            background: "var(--slate)",
            opacity: 0.4,
          }}
        />
      </motion.div>

      {/* Right sidebar - email */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{
          position: "fixed",
          bottom: 0,
          right: "2rem",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.25rem",
        }}
        className="side-element right-side"
      >
        <a
          href={`mailto:${personalInfo.email}`}
          style={{
            writingMode: "vertical-rl",
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            color: "var(--slate)",
            transition: "color 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.color = "var(--teal)";
            el.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.color = "var(--slate)";
            el.style.transform = "translateY(0)";
          }}
        >
          {personalInfo.email}
        </a>

        {/* Vertical line */}
        <div
          style={{
            width: "1px",
            height: "90px",
            background: "var(--slate)",
            opacity: 0.4,
          }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 1080px) {
          .side-element {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
