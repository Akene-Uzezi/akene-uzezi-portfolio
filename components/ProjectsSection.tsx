"use client";
import { useEffect, useRef } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { BsGithub } from "react-icons/bs";

export default function ProjectsSection() {
  const projects = [
    {
      title: "URL & Text Summarization API",
      description:
        "A high-throughput, multi-tier API built to intelligently scrape, process, and summarize web content and raw text.",
      tags: ["Node.js", "LangChain", "Cerebras LLaMA", "TypeScript", "Express"],
      details: [
        "Implemented strict multi-tier rate limiting to optimize API cost management and prevent service abuse.",
        "Engineered resilient web scraping fallbacks to seamlessly handle dynamic, JavaScript-heavy web pages.",
        "Optimized processing pipelines for low-latency delivery of tokenized summary payloads.",
      ],
      github: "https://github.com/Akene-Uzezi/summ-it-up-backend",
      live: "https://summ-it-up.vercel.app",
    },
    {
      title: "Enterprise Document Management System",
      description:
        "A secure, scalable document management system designed for cross-departmental collaboration and protected asset distribution.",
      tags: ["Node.js", "Express", "MongoDB", "RBAC", "Docker"],
      details: [
        "Engineered granular Role-Based Access Control (RBAC) to dynamically enforce secure data access boundaries.",
        "Implemented high-performance, encrypted file-sharing functionalities across the platform.",
        "Collaborated in a team environment to deliver comprehensive API documentation and system modules.",
      ],
      github: "https://github.com/Akene-Uzezi/Document-Repository-React",
      live: "#",
    },
  ];

  // Native Intersection Observer for Scroll Effects
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

    const cards = sectionRef.current?.querySelectorAll(".scroll-reveal");
    cards?.forEach((card) => observer.observe(card));

    return () => cards?.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-5xl mx-auto px-6 py-16 md:py-24 text-slate-900 dark:text-slate-50 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left Column: Section Title */}
        <div className="md:col-span-1">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400 md:sticky md:top-24">
            02 / SELECTED PROJECTS
          </h2>
        </div>

        {/* Right Column: Projects Container */}
        <div className="md:col-span-2 space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="scroll-reveal opacity-0 translate-y-4 transition-all duration-700 ease-out bg-slate-50/40 dark:bg-slate-900/10 border-slate-200 dark:border-slate-800/80 rounded-xl p-6 md:p-8 group shadow-sm hover:shadow-md dark:hover:bg-slate-900/30 hover:border-slate-300 dark:hover:border-slate-700"
            >
              <CardHeader className="p-0 pb-4">
                <div className="flex items-center justify-between gap-4">
                  <CardTitle className="text-xl font-medium tracking-tight group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center space-x-4 text-slate-400 dark:text-slate-500 shrink-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                    >
                      <BsGithub className="h-5 w-5" />
                    </a>
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                <CardDescription className="text-slate-600 dark:text-slate-400 text-base mt-2 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-0 space-y-6">
                {/* Fixed Bullet Padding Layout */}
                <ul className="list-none space-y-3 text-sm text-slate-600 dark:text-slate-400 font-normal">
                  {project.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-slate-400 dark:text-slate-600 mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full bg-current" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Badges Layout */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-mono text-xs border border-slate-200/60 dark:border-slate-800 px-2.5 py-0.5"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
