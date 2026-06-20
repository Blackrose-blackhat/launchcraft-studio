"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    index: "01",
    title: "Inventory & Invoice Management System",
    description:
      "Comprehensive Electron.js desktop application for automated invoice generation with complex tax logic — CGST, SGST, and IGST calculations — backed by real-time inventory tracking.",
    stack: ["Electron.js", "React", "Node.js", "SQLite"],
    link: null,
    status: "Shipped",
  },
  {
    index: "02",
    title: "Agency Landing Page",
    description:
      "High-conversion landing page for a creative agency. Focused on Core Web Vitals performance, fully responsive layout, and a modern visual identity from scratch.",
    stack: ["Next.js", "TailwindCSS", "Framer Motion"],
    link: null, // TODO: add live URL when available
    status: "Live",
  },
  {
    index: "03",
    title: "Resume ATS Checker",
    description:
      "Sophisticated frontend for an AI-powered resume analysis tool. Real-time feedback on ATS compatibility, keyword coverage, and section scoring.",
    stack: ["React", "TypeScript", "REST API"],
    link: null,
    status: "Shipped",
  },
];

export function FreelanceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="freelance"
      ref={sectionRef}
      className="relative py-32 lg:py-40 bg-background overflow-hidden"
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right,currentColor 1px,transparent 1px),linear-gradient(to bottom,currentColor 1px,transparent 1px)",
          backgroundSize: "80px 80px",
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
            Freelance
          </span>
          <h2 className="text-5xl lg:text-7xl font-display tracking-tight leading-[0.95]">
            Independent work.
            <br />
            <span className="text-muted-foreground">Production grade.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
            Client engagements delivered as an independent engineer — from desktop tooling to
            AI-powered web apps.
          </p>
        </div>

        {/* Project list */}
        <div className="divide-y divide-foreground/10 border-t border-foreground/10">
          {projects.map((project, i) => (
            <div
              key={project.index}
              className={`group py-10 lg:py-12 grid lg:grid-cols-12 gap-6 lg:gap-12 items-start transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 120}ms` : "0ms" }}
            >
              {/* Index */}
              <div className="lg:col-span-1">
                <span className="font-mono text-xs text-muted-foreground">{project.index}</span>
              </div>

              {/* Title + description */}
              <div className="lg:col-span-6">
                <div className="flex items-start gap-3 mb-3">
                  <h3 className="text-xl lg:text-2xl font-display tracking-tight leading-snug">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 mt-1 p-1.5 rounded-full border border-foreground/20 text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-colors"
                      aria-label={`View ${project.title}`}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm max-w-lg">
                  {project.description}
                </p>
              </div>

              {/* Stack */}
              <div className="lg:col-span-3">
                <span className="block text-xs font-mono text-muted-foreground/50 uppercase tracking-widest mb-3">
                  Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs border border-foreground/15 text-foreground/60 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="lg:col-span-2 flex lg:justify-end items-start pt-0.5">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      project.status === "Live" ? "bg-[#6ee7b7]" : "bg-foreground/30"
                    }`}
                  />
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials note */}
        <div
          className={`mt-16 p-6 border border-foreground/10 rounded-sm max-w-xl transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="block text-xs font-mono text-muted-foreground/50 uppercase tracking-widest mb-2">
            Client testimonials
          </span>
          <p className="text-sm text-muted-foreground leading-relaxed">
            References and testimonials from these engagements are being collected and will appear
            here soon.
          </p>
        </div>

      </div>
    </section>
  );
}
