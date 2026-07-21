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
      id="projects"
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
              02 — Selected Projects
            </Badge>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-[1.1]">
              Selected<br />Projects
            </h2>
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-lg">
            A curated selection of projects showcasing my expertise in backend
            architecture, system design, and full-stack development.
          </p>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="scroll-reveal opacity-0 translate-y-4 transition-all duration-700 ease-out bg-card border-border/80 rounded-2xl p-0 group shadow-sm hover:shadow-md hover:border-foreground/10 transition-colors"
              >
                <CardHeader className="p-6 pb-4">
                  <div className="flex items-center justify-between gap-4">
                    <CardTitle className="text-xl font-medium tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-3 text-muted-foreground shrink-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors"
                      >
                        <BsGithub className="h-5 w-5" />
                      </a>
                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-foreground transition-colors"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground text-base mt-2.5 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 pt-0 space-y-6">
                  <ul className="space-y-3 text-sm text-muted-foreground font-normal">
                    {project.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="leading-relaxed flex items-start gap-3"
                      >
                        <span className="mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full bg-primary/60" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="rounded-lg bg-muted text-muted-foreground font-mono text-xs border border-border/60 px-2.5 py-0.5 hover:bg-muted/80"
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
      </div>
    </section>
  );
}
