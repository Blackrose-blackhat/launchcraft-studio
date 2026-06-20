"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    index: "01",
    category: "Desktop Application",
    title: "Inventory & Invoice Management System",
    description:
      "Comprehensive desktop application for automated invoice generation with complex tax logic — CGST, SGST, and IGST calculations — backed by real-time inventory tracking.",
    stack: ["Electron.js", "React", "Node.js", "SQLite"],
    link: null,
  },
  {
    index: "02",
    category: "Web — Landing Page",
    title: "Agency Landing Page",
    description:
      "High-conversion landing page for a creative agency. Focused on Core Web Vitals performance, fully responsive layout, and a modern visual identity.",
    stack: ["Next.js", "TailwindCSS", "Framer Motion"],
    link: null,
  },
  {
    index: "03",
    category: "Web Application",
    title: "Resume ATS Checker",
    description:
      "Frontend for an AI-powered resume analysis tool. Real-time feedback on ATS compatibility, keyword coverage, and section scoring for job seekers.",
    stack: ["React", "TypeScript", "REST API"],
    link: null,
  },
];

export function WorkSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative py-32 lg:py-40 bg-background overflow-hidden"
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div
          className={`mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Selected Work
          </span>
          <h2 className="text-5xl lg:text-7xl font-display tracking-tight leading-[0.95]">
            Products we&apos;ve
            <br />
            <span className="text-muted-foreground">shipped.</span>
          </h2>
        </div>

        {/* Project rows */}
        <div className="border-t border-foreground/10 divide-y divide-foreground/10">
          {projects.map((project, i) => (
            <div
              key={project.index}
              className={`group py-12 lg:py-14 grid lg:grid-cols-12 gap-6 lg:gap-12 items-start transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 120}ms` : "0ms" }}
            >
              {/* Number */}
              <div className="lg:col-span-1 pt-1">
                <span className="font-mono text-xs text-muted-foreground/50">{project.index}</span>
              </div>

              {/* Category + title + description */}
              <div className="lg:col-span-7">
                <span className="text-xs font-mono text-muted-foreground/50 uppercase tracking-widest block mb-3">
                  {project.category}
                </span>
                <div className="flex items-start gap-3 mb-4">
                  <h3 className="text-2xl lg:text-3xl font-display tracking-tight leading-snug">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 mt-1.5 p-1.5 rounded-full border border-foreground/20 text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-colors"
                      aria-label={`View ${project.title}`}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-lg">
                  {project.description}
                </p>
              </div>

              {/* Stack */}
              <div className="lg:col-span-4 lg:pt-8 flex flex-wrap gap-2 content-start">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs border border-foreground/15 text-foreground/60 rounded-sm font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* More coming note */}
        <p
          className={`mt-10 text-sm font-mono text-muted-foreground/40 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          More case studies coming soon.
        </p>

      </div>
    </section>
  );
}
