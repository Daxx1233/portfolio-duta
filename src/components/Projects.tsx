"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/portfolio";
import { ExternalLink, ChevronRight, X, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [imgIndex, setImgIndex] = useState(0);

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  const openProject = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setImgIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  return (
    <section id="projects" ref={ref}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 8vw, 12rem)",
        }}
      >
        <motion.h2
          className="numbered-heading"
          data-number="04"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        {/* Featured Projects */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6rem", marginBottom: "4rem" }}>
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
                alignItems: "center",
                direction: i % 2 === 0 ? "ltr" : "rtl",
              }}
              className="featured-project"
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  borderRadius: "4px",
                  overflow: "hidden",
                  cursor: "pointer",
                  direction: "ltr",
                }}
                onClick={() => project.images.length > 0 && openProject(project)}
              >
                {project.coverImage ? (
                  <div style={{ position: "relative", paddingTop: "65%" }}>
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover", transition: "transform 0.4s" }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(10, 25, 47, 0.6)",
                        transition: "opacity 0.3s",
                      }}
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      paddingTop: "65%",
                      background: "var(--navy-lighter)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--slate)",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.85rem",
                      }}
                    >
                      No Image Available
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div style={{ direction: "ltr" }}>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.82rem",
                    color: "var(--teal)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Featured Project
                </p>
                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "var(--slate-lighter)",
                    marginBottom: "0.25rem",
                    cursor: "pointer",
                    transition: "color 0.2s",
                  }}
                  onClick={() => project.images.length > 0 && openProject(project)}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--teal)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--slate-lighter)"; }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    color: "var(--slate)",
                    marginBottom: "1.25rem",
                  }}
                >
                  {project.period}
                </p>

                <div
                  style={{
                    background: "var(--navy-light)",
                    border: "1px solid rgba(100,255,218,0.08)",
                    borderRadius: "4px",
                    padding: "1.25rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <p
                    style={{
                      color: "var(--slate)",
                      fontSize: "0.95rem",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.25rem" }}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--slate-light)",
                        padding: "0.2rem 0",
                        marginRight: "0.5rem",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.images.length > 0 && (
                  <button
                    onClick={() => openProject(project)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "var(--teal)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.82rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: 0,
                      transition: "gap 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.gap = "0.7rem";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.gap = "0.4rem";
                    }}
                  >
                    <ExternalLink size={15} />
                    View Details
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          style={{
            textAlign: "center",
            color: "var(--slate-lighter)",
            fontSize: "1.2rem",
            fontWeight: 700,
            marginBottom: "0.5rem",
          }}
        >
          Other Noteworthy Projects
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.55 }}
          style={{
            textAlign: "center",
            color: "var(--slate)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            marginBottom: "2.5rem",
          }}
        >
          view the archive
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1rem",
          }}
        >
          {others.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              className="project-card"
              style={{
                background: "var(--navy-light)",
                border: "1px solid rgba(100,255,218,0.08)",
                borderRadius: "4px",
                padding: "2rem 1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                cursor: "default",
                transition: "transform 0.3s, border-color 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-6px)";
                el.style.borderColor = "rgba(100,255,218,0.25)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.borderColor = "rgba(100,255,218,0.08)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5">
                  <path d="M3 3h18v18H3z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 9h6M9 12h6M9 15h4" strokeLinecap="round" />
                </svg>
              </div>

              <div>
                <h4
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "var(--slate-lighter)",
                    marginBottom: "0.5rem",
                    transition: "color 0.2s",
                  }}
                >
                  {project.title}
                </h4>
                <p
                  style={{
                    color: "var(--slate)",
                    fontSize: "0.88rem",
                    lineHeight: 1.65,
                  }}
                >
                  {project.description}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginTop: "auto",
                }}
              >
                {project.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "var(--slate)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProject}
              style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.75)",
                zIndex: 100,
                backdropFilter: "blur(4px)",
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 25 }}
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "min(90vw, 900px)",
                maxHeight: "90vh",
                backgroundColor: "var(--navy-light)",
                borderRadius: "8px",
                zIndex: 101,
                overflow: "hidden auto",
                border: "1px solid rgba(100,255,218,0.15)",
              }}
            >
              {/* Close btn */}
              <button
                onClick={closeProject}
                style={{
                  position: "sticky",
                  top: "1rem",
                  float: "right",
                  marginRight: "1rem",
                  zIndex: 2,
                  background: "rgba(10,25,47,0.8)",
                  border: "1px solid rgba(100,255,218,0.2)",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "var(--slate-lighter)",
                }}
              >
                <X size={18} />
              </button>

              {/* Image gallery */}
              {selectedProject.images.length > 0 && (
                <div style={{ position: "relative" }}>
                  <div style={{ position: "relative", paddingTop: "55%" }}>
                    <Image
                      src={selectedProject.images[imgIndex]}
                      alt={`${selectedProject.title} — Image ${imgIndex + 1}`}
                      fill
                      style={{ objectFit: "contain", background: "var(--navy)" }}
                      sizes="90vw"
                    />
                  </div>
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setImgIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)}
                        style={{
                          position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)",
                          background: "rgba(10,25,47,0.7)", border: "1px solid rgba(100,255,218,0.2)",
                          borderRadius: "50%", width: "36px", height: "36px",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          cursor: "pointer", color: "var(--teal)",
                        }}
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        onClick={() => setImgIndex((prev) => (prev + 1) % selectedProject.images.length)}
                        style={{
                          position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)",
                          background: "rgba(10,25,47,0.7)", border: "1px solid rgba(100,255,218,0.2)",
                          borderRadius: "50%", width: "36px", height: "36px",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          cursor: "pointer", color: "var(--teal)",
                        }}
                      >
                        <ChevronRightIcon size={18} />
                      </button>
                      <div style={{
                        position: "absolute", bottom: "0.75rem", left: "50%", transform: "translateX(-50%)",
                        display: "flex", gap: "0.4rem",
                      }}>
                        {selectedProject.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setImgIndex(idx)}
                            style={{
                              width: imgIndex === idx ? "24px" : "8px",
                              height: "8px",
                              borderRadius: "4px",
                              background: imgIndex === idx ? "var(--teal)" : "rgba(100,255,218,0.3)",
                              border: "none",
                              cursor: "pointer",
                              transition: "width 0.3s",
                            }}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Modal content */}
              <div style={{ padding: "2rem" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--teal)", marginBottom: "0.5rem" }}>
                  {selectedProject.category}
                </p>
                <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--slate-lighter)", marginBottom: "0.25rem" }}>
                  {selectedProject.title}
                </h2>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--slate)", marginBottom: "1.5rem" }}>
                  {selectedProject.period}
                </p>
                <p style={{ color: "var(--slate)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                  {selectedProject.longDescription}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {selectedProject.tech.map((t) => (
                    <span key={t} style={{
                      fontFamily: "var(--font-mono)", fontSize: "0.75rem",
                      color: "var(--teal)", background: "rgba(100,255,218,0.08)",
                      border: "1px solid rgba(100,255,218,0.15)", borderRadius: "4px",
                      padding: "0.25rem 0.6rem",
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .featured-project {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
          }
        }
      `}</style>
    </section>
  );
}
