"use client";
import { useEffect, useRef } from "react";
import { Separator } from "@/components/ui/separator";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Redeemer's Health Village",
      period: "Present",
      points: [
        "Collaborated in a cross-functional engineering team to architect and deploy a secure internal Document Management System.",
        "Designed and implemented secure file-sharing mechanisms and robust role-based access control, ensuring strict compliance with data access policies.",
        "Optimized backend API endpoints for faster data retrieval and improved server response times.",
      ],
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-4");
          }
        });
      },
      { threshold: 0.1 },
    );

    const items = sectionRef.current?.querySelectorAll(".scroll-reveal");
    items?.forEach((item) => observer.observe(item));

    return () => items?.forEach((item) => observer.unobserve(item));
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="w-full max-w-5xl mx-auto px-6 py-16 md:py-24 text-slate-900 dark:text-slate-50 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left Column: Section Title */}
        <div className="md:col-span-1">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400 md:sticky md:top-24">
            03 / EXPERIENCE
          </h2>
        </div>

        {/* Right Column: Timeline Content */}
        <div className="md:col-span-2 space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="scroll-reveal opacity-0 translate-y-4 transition-all duration-700 ease-out relative pl-6 border-l border-slate-200 dark:border-slate-800 space-y-4"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute left-[4.5px] top-2 h-2 w-2 rounded-full bg-slate-400 dark:bg-slate-600 border border-white dark:border-slate-950" />

              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <h3 className="text-lg font-medium tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-normal">
                    {exp.company}
                  </p>
                </div>
                <span className="text-xs font-mono tracking-wider text-slate-400 dark:text-slate-500 uppercase sm:text-right">
                  {exp.period}
                </span>
              </div>

              {/* Experience Descriptions */}
              <ul className="space-y-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                {exp.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="relative pl-5 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-slate-300 dark:before:bg-slate-700"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              {index < experiences.length - 1 && (
                <Separator className="my-8 bg-slate-200 dark:bg-slate-800" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
