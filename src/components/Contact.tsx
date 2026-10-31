"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Mail, Globe, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref}>
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 8vw, 12rem)",
          textAlign: "center",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "1rem",
            color: "var(--teal)",
            marginBottom: "1rem",
          }}
        >
          06. What&apos;s Next?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
            fontWeight: 800,
            color: "var(--slate-lighter)",
            marginBottom: "1.5rem",
            lineHeight: 1.1,
          }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            color: "var(--slate)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "3rem",
          }}
        >
          Saya saat ini sedang aktif mencari peluang baru di bidang elektronika dan
          embedded systems. Apakah Anda memiliki pertanyaan, peluang kolaborasi, atau
          sekadar ingin menyapa? Kotak masuk saya selalu terbuka — saya akan segera
          membalasnya!
        </motion.p>

        <motion.a
          href={`mailto:${personalInfo.email}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="resume-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "1rem",
            padding: "1.2rem 2rem",
            marginBottom: "4rem",
          }}
          whileHover={{ scale: 1.05 }}
        >
          <Mail size={18} />
          Say Hello
        </motion.a>

        {/* Contact details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
            color: "var(--slate)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
          }}
        >
          <a
            href={`mailto:${personalInfo.email}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--teal)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--slate)"; }}
          >
            <Mail size={15} style={{ color: "var(--teal)" }} />
            {personalInfo.email}
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--teal)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--slate)"; }}
          >
            <Globe size={15} style={{ color: "var(--teal)" }} />
            LinkedIn
          </a>

          <a
            href={`tel:${personalInfo.phone}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--teal)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--slate)"; }}
          >
            <Phone size={15} style={{ color: "var(--teal)" }} />
            {personalInfo.phone}
          </a>

          <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <MapPin size={15} style={{ color: "var(--teal)" }} />
            Surabaya, Indonesia
          </span>
        </motion.div>
      </div>
    </section>
  );
}
