"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { certifications } from "@/data/portfolio";
import { Award, X, ZoomIn } from "lucide-react";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [zoom, setZoom] = useState<string | null>(null);

  return (
    <section id="certifications" ref={ref}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 8vw, 12rem)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
            fontWeight: 700,
            color: "var(--slate-lighter)",
            marginBottom: "2.5rem",
          }}
        >
          <span
            style={{
              color: "var(--teal)",
              fontFamily: "var(--font-mono)",
              fontSize: "1.1rem",
              fontWeight: 400,
              marginRight: "0.75rem",
            }}
          >
            05.5.
          </span>
          Certifications
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "var(--navy-lighter)",
              marginLeft: "1.5rem",
              maxWidth: "300px",
            }}
          />
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              style={{
                background: "var(--navy-light)",
                border: "1px solid rgba(100,255,218,0.1)",
                borderRadius: "8px",
                overflow: "hidden",
                transition: "transform 0.3s, border-color 0.3s",
                cursor: "pointer",
              }}
              onClick={() => setZoom(cert.image)}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px)";
                el.style.borderColor = "rgba(100,255,218,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.borderColor = "rgba(100,255,218,0.1)";
              }}
            >
              {/* Certificate image */}
              {cert.image && (
                <div style={{ position: "relative", paddingTop: "65%", overflow: "hidden" }}>
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    style={{ objectFit: "cover", transition: "transform 0.4s" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(10,25,47,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.3s",
                    }}
                    className="cert-overlay"
                  >
                    <ZoomIn size={32} color="var(--teal)" />
                  </div>
                </div>
              )}

              <div style={{ padding: "1.25rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <Award size={18} style={{ color: "var(--teal)", flexShrink: 0 }} />
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--slate-lighter)",
                      margin: 0,
                    }}
                  >
                    {cert.name}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    color: "var(--teal)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {cert.score}
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--slate)",
                    lineHeight: 1.6,
                  }}
                >
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Zoom modal */}
      {zoom && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setZoom(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.9)",
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            cursor: "zoom-out",
          }}
        >
          <button
            onClick={() => setZoom(null)}
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              background: "rgba(10,25,47,0.8)",
              border: "1px solid rgba(100,255,218,0.2)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--slate-lighter)",
            }}
          >
            <X size={20} />
          </button>
          <div style={{ position: "relative", maxWidth: "900px", width: "100%", maxHeight: "80vh" }}>
            <Image
              src={zoom}
              alt="Certificate"
              width={900}
              height={640}
              style={{ objectFit: "contain", width: "100%", height: "auto", maxHeight: "80vh" }}
            />
          </div>
        </motion.div>
      )}

      <style>{`
        .cert-overlay {
          opacity: 0;
        }
        [class*="cert-card"]:hover .cert-overlay {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
