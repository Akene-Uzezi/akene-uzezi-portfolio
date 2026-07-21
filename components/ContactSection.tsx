"use client";
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export default function ContactSection() {
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
      id="contact"
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
              04 — Contact
            </Badge>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-[1.1]">
              Get in<br />touch
            </h2>
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Have a project in mind or want to discuss scalable backend system
            architectures? Drop a line below.
          </p>

          <Card className="scroll-reveal opacity-0 translate-y-4 transition-all duration-700 ease-out bg-card border-border/80 rounded-2xl shadow-sm">
            <CardContent className="p-6 md:p-8">
              <form
                action="https://formspree.io/f/mgoqdgvz"
                method="POST"
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="rounded-xl border-border/80 bg-background focus-visible:ring-primary/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Email Address
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="_replyto"
                      required
                      placeholder="name@example.com"
                      className="rounded-xl border-border/80 bg-background focus-visible:ring-primary/30"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or architecture needs..."
                    className="rounded-xl border-border/80 bg-background focus-visible:ring-primary/30 resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <Button
                    type="submit"
                    className="rounded-full px-6 py-2.5 font-medium tracking-wide shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
