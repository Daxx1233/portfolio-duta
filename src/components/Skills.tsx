"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import React from "react";
import { skills } from "@/data/portfolio";
import { CircuitBoard, Cpu, Code2, Box, Wifi, BrainCircuit } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Circuit: <CircuitBoard size={20} />,
  Cpu: <Cpu size={20} />,
  Code2: <Code2 size={20} />,
  Box: <Box size={20} />,
  Wifi: <Wifi size={20} />,
  BrainCircuit: <BrainCircuit size={20} />,
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 8vw, 12rem)",
        }}
      >
        <motion.h2
          className="numbered-heading"
          data-number="05"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              style={{
                background: "var(--navy-light)",
                border: "1px solid rgba(100,255,218,0.1)",
                borderRadius: "8px",
                padding: "1.75rem",
                transition: "transform 0.3s, border-color 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px)";
                el.style.borderColor = "rgba(100,255,218,0.25)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.borderColor = "rgba(100,255,218,0.1)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    color: "var(--teal)",
                    width: "36px",
                    height: "36px",
                    background: "rgba(100,255,218,0.08)",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {iconMap[group.icon] || <Cpu size={20} />}
                </div>
                <h3
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "var(--slate-lighter)",
                    margin: 0,
                  }}
                >
                  {group.category}
                </h3>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.9rem",
                }}
              >
                {group.items.map((skill, si) => (
                  <div key={skill.name}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "0.3rem",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.8rem",
                          color: "var(--slate-light)",
                        }}
                      >
                        {skill.name}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                          color: "var(--slate)",
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar" style={{ height: "4px" }}>
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1.2,
                          delay: 0.3 + si * 0.1 + i * 0.05,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
