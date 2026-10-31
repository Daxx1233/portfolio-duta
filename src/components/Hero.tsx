"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Mail, Globe } from "lucide-react";

export default function Hero() {
  const handleContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 clamp(1.5rem, 8vw, 12rem)",
        paddingTop: "80px",
        maxWidth: "1100px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(0.85rem, 2vw, 1rem)",
          color: "var(--teal)",
          marginBottom: "1.25rem",
          letterSpacing: "0.05em",
        }}
      >
        {personalInfo.greeting}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        style={{
          fontSize: "clamp(2.5rem, 8vw, 5rem)",
          fontWeight: 800,
          color: "var(--slate-lighter)",
          lineHeight: 1.1,
          margin: 0,
        }}
      >
        {personalInfo.name}.
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        style={{
          fontSize: "clamp(2rem, 6vw, 4.2rem)",
          fontWeight: 800,
          color: "var(--slate)",
          lineHeight: 1.1,
          margin: "0 0 1.5rem",
        }}
      >
        {personalInfo.subtitle}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.95 }}
        style={{
          maxWidth: "560px",
          fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
          color: "var(--slate)",
          lineHeight: 1.75,
          marginBottom: "3rem",
        }}
      >
        Sarjana Terapan Teknik Komputer dari{" "}
        <span style={{ color: "var(--teal)" }}>PENS Surabaya</span> dengan
        spesialisasi di{" "}
        <span style={{ color: "var(--teal)" }}>embedded systems</span>,{" "}
        <span style={{ color: "var(--teal)" }}>PCB design</span>, dan{" "}
        <span style={{ color: "var(--teal)" }}>IoT systems</span>. Berpengalaman
        dalam perancangan skematik, layout PCB, pemrograman mikrokontroler, dan
        hardware testing.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
      >
        <button
          onClick={handleContact}
          className="resume-btn"
          style={{
            fontSize: "0.9rem",
            padding: "1rem 1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <Mail size={16} />
          Get In Touch
        </button>

        <motion.a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "var(--slate-light)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            padding: "1rem 1.5rem",
            border: "1px solid rgba(136,146,176,0.3)",
            borderRadius: "4px",
            transition: "color 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.color = "var(--teal)";
            el.style.borderColor = "var(--teal)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.color = "var(--slate-light)";
            el.style.borderColor = "rgba(136,146,176,0.3)";
          }}
        >
          <Globe size={16} />
          LinkedIn
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          color: "var(--slate)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{
            width: "1.5px",
            height: "60px",
            background:
              "linear-gradient(to bottom, transparent, var(--slate), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
