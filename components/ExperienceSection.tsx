"use client";
import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Redeemer&apos;s Health Village",
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
      className="w-full max-w-5xl mx-auto px-6 py-16 md:py-28"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-start mb-12">
        <div className="md:col-span-1">
          <div className="md:sticky md:top-28">
            <Badge
              variant="outline"
              className="rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border-border/60 text-muted-foreground mb-4"
            >
              03 — Experience
            </Badge>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-[1.1]">
              Work<br />experience
            </h2>
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-lg">
            Building production-grade systems and contributing to meaningful
            engineering teams.
          </p>

          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="scroll-reveal opacity-0 translate-y-4 transition-all duration-700 ease-out relative"
              >
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-primary/80 mt-1.5 shrink-0 ring-4 ring-background" />
                    {index < experiences.length - 1 && (
                      <div className="w-px flex-1 bg-border/80 my-3" />
                    )}
                  </div>

                  <div className="flex-1 pb-10">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-muted-foreground font-normal mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-xs font-mono tracking-wider text-muted-foreground uppercase sm:text-right shrink-0">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed font-normal">
                      {exp.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="relative pl-5 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/50"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
