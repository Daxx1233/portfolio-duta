"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { Building2, Calendar, MapPin, ChevronRight } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  const exp = experiences[activeTab];

  return (
    <section id="experience" ref={ref}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 8vw, 12rem)",
        }}
      >
        <motion.h2
          className="numbered-heading"
          data-number="03"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "flex",
            gap: "0",
            flexDirection: "row",
          }}
          className="exp-wrapper"
        >
          {/* Tab buttons */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minWidth: "200px",
              borderLeft: "2px solid var(--navy-lighter)",
            }}
            className="tab-list"
          >
            {experiences.map((e, i) => (
              <button
                key={e.id}
                onClick={() => setActiveTab(i)}
                style={{
                  background: "none",
                  border: "none",
                  borderLeft: activeTab === i
                    ? "2px solid var(--teal)"
                    : "2px solid transparent",
                  marginLeft: "-2px",
                  padding: "0.9rem 1.25rem",
                  textAlign: "left",
                  cursor: "pointer",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  color: activeTab === i ? "var(--teal)" : "var(--slate)",
                  backgroundColor:
                    activeTab === i ? "rgba(100,255,218,0.05)" : "transparent",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== i) {
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--slate-lighter)";
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "rgba(100,255,218,0.03)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== i) {
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--slate)";
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "transparent";
                  }
                }}
              >
                {e.company.split(" ").slice(0, 2).join(" ")}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            style={{ padding: "0.5rem 0 0.5rem 2rem", flex: 1 }}
          >
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "var(--slate-lighter)",
                margin: "0 0 0.25rem",
              }}
            >
              {exp.role}{" "}
              <span style={{ color: "var(--teal)" }}>@ {exp.company}</span>
            </h3>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "1.25rem",
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
                {exp.period}
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
                {exp.location}
              </span>
            </div>

            <ul
              style={{
                listStyle: "none",
                margin: "0 0 1.5rem",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {exp.highlights.map((point, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    color: "var(--slate)",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                  }}
                >
                  <ChevronRight
                    size={16}
                    style={{
                      color: "var(--teal)",
                      flexShrink: 0,
                      marginTop: "0.25rem",
                    }}
                  />
                  {point}
                </li>
              ))}
            </ul>

            {/* Tech tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {exp.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--teal)",
                    background: "rgba(100,255,218,0.08)",
                    border: "1px solid rgba(100,255,218,0.15)",
                    borderRadius: "4px",
                    padding: "0.25rem 0.6rem",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .exp-wrapper {
            flex-direction: column !important;
          }
          .tab-list {
            flex-direction: row !important;
            border-left: none !important;
            border-bottom: 2px solid var(--navy-lighter);
            overflow-x: auto;
          }
          .tab-list button {
            border-left: none !important;
            border-bottom: 2px solid transparent;
            margin-left: 0 !important;
            margin-bottom: -2px;
          }
        }
      `}</style>
    </section>
  );
}
