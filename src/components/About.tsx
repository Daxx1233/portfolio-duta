"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { MapPin, Mail, Phone } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 8vw, 12rem)",
        }}
      >
        <motion.h2
          className="numbered-heading"
          data-number="01"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p
              style={{
                color: "var(--slate)",
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              Saya adalah Fresh Graduate Sarjana Terapan Teknik Komputer dari{" "}
              <span style={{ color: "var(--teal)" }}>
                Politeknik Elektronika Negeri Surabaya (PENS)
              </span>{" "}
              dengan IPK{" "}
              <span style={{ color: "var(--teal)" }}>3.64 / 4.00</span>. Saya
              memiliki minat kuat pada bidang elektronika, embedded systems, dan
              desain PCB.
            </p>

            <p
              style={{
                color: "var(--slate)",
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              Keahlian saya meliputi pemrograman mikrokontroler, integrasi
              sensor serta aktuator, perancangan skematik, simulasi rangkaian
              elektronika, tata letak (layout) PCB, pengujian perangkat keras
              (hardware testing), dan troubleshooting.
            </p>

            <p
              style={{
                color: "var(--slate)",
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: "1.75rem",
              }}
            >
              Terbiasa menggunakan{" "}
              <span style={{ color: "var(--teal)" }}>
                ESP32, STM32, Arduino, EasyEDA, EAGLE, Proteus, Arduino IDE,
                STM32CubeIDE,
              </span>{" "}
              dan <span style={{ color: "var(--teal)" }}>Fusion 360</span>.
              Memiliki pengalaman praktis dalam mengembangkan dan menguji sistem
              elektronika embedded melalui proyek akademik dan magang industri.
            </p>

            {/* Contact info */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "var(--slate)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                }}
              >
                <MapPin
                  size={15}
                  style={{ color: "var(--teal)", flexShrink: 0 }}
                />
                {personalInfo.location}
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "var(--slate)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--teal)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--slate)";
                }}
              >
                <Mail
                  size={15}
                  style={{ color: "var(--teal)", flexShrink: 0 }}
                />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "var(--slate)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--teal)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--slate)";
                }}
              >
                <Phone
                  size={15}
                  style={{ color: "var(--teal)", flexShrink: 0 }}
                />
                {personalInfo.phone}
              </a>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              position: "relative",
              maxWidth: "300px",
              width: "100%",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              {/* Teal overlay border effect */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "4px",
                  background:
                    "linear-gradient(135deg, rgba(100,255,218,0.15), transparent)",
                  zIndex: 1,
                  pointerEvents: "none",
                  transition: "opacity 0.3s",
                }}
                className="photo-overlay"
              />
              <Image
                src={personalInfo.photo}
                alt={`${personalInfo.name} — Portfolio Photo`}
                width={300}
                height={360}
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                  display: "block",
                  filter: "grayscale(20%) contrast(1.05)",
                  transition: "filter 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.filter = "none";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.filter =
                    "grayscale(20%) contrast(1.05)";
                }}
                priority
              />
            </div>
            {/* Corner decoration */}
            <div
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                right: "-16px",
                bottom: "-16px",
                border: "2px solid var(--teal)",
                borderRadius: "4px",
                zIndex: -1,
                transition: "transform 0.3s",
              }}
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
