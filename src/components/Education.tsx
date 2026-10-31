"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education } from "@/data/portfolio";
import { GraduationCap, Calendar, MapPin, Star } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 8vw, 12rem)",
        }}
      >
        <motion.h2
          className="numbered-heading"
          data-number="02"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              style={{
                background: "var(--navy-light)",
                border: "1px solid rgba(100, 255, 218, 0.12)",
                borderRadius: "8px",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.3s, border-color 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px)";
                el.style.borderColor = "rgba(100, 255, 218, 0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.borderColor = "rgba(100, 255, 218, 0.12)";
              }}
            >
              {/* Top accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background:
                    "linear-gradient(90deg, var(--teal), transparent)",
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <GraduationCap
                      size={22}
                      style={{ color: "var(--teal)", flexShrink: 0 }}
                    />
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "var(--slate-lighter)",
                        margin: 0,
                      }}
                    >
                      {edu.institution}
                    </h3>
                  </div>

                  <p
                    style={{
                      color: "var(--teal)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.9rem",
                      marginBottom: "0.75rem",
                      marginLeft: "2.1rem",
                    }}
                  >
                    {edu.degree}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "1rem",
                      marginLeft: "2.1rem",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        color: "var(--slate)",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.82rem",
                      }}
                    >
                      <Calendar size={13} />
                      {edu.period}
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        color: "var(--slate)",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.82rem",
                      }}
                    >
                      <MapPin size={13} />
                      {edu.location}
                    </span>
                  </div>
                </div>

                {/* GPA Badge */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(135deg, rgba(100,255,218,0.1), rgba(100,255,218,0.05))",
                    border: "1px solid rgba(100, 255, 218, 0.25)",
                    borderRadius: "8px",
                    padding: "1rem 1.5rem",
                    minWidth: "130px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      color: "var(--teal)",
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-mono)",
                      marginBottom: "0.4rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    <Star size={12} />
                    GPA / IPK
                  </div>
                  <span
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      color: "var(--slate-lighter)",
                      lineHeight: 1,
                    }}
                  >
                    {edu.gpa.split(" ")[0]}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      color: "var(--slate)",
                    }}
                  >
                    / 4.00
                  </span>
                </div>
              </div>

              {edu.description && (
                <p
                  style={{
                    color: "var(--slate)",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    marginTop: "1.25rem",
                    marginLeft: "2.1rem",
                  }}
                >
                  {edu.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
