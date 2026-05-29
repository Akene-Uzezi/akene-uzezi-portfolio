"use client";
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
      className="w-full max-w-5xl mx-auto px-6 py-16 md:py-24 text-slate-900 dark:text-slate-50 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left Column: Section Title */}
        <div className="md:col-span-1">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400 md:sticky md:top-24">
            04 / CONTACT
          </h2>
        </div>

        {/* Right Column: Contact Form */}
        <div className="md:col-span-2">
          <Card className="scroll-reveal opacity-0 translate-y-4 transition-all duration-700 ease-out bg-slate-50/40 dark:bg-slate-900/10 border-slate-200 dark:border-slate-800/80 rounded-xl p-6 md:p-8 shadow-sm">
            <CardContent className="p-0">
              <p className="text-base text-slate-600 dark:text-slate-400 mb-6 font-normal">
                Have a project in mind or want to discuss scalable backend
                system architectures? Drop a line below.
              </p>

              {/* Form Configured with Formspree Endpoint */}
              <form
                action="https://formspree.io/f/mgoqdgvz"
                method="POST"
                className="space-y-4 font-normal text-sm"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-slate-400 dark:focus:border-slate-600 rounded-lg px-4 py-2.5 outline-none transition-colors text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="_replyto"
                      required
                      placeholder="name@example.com"
                      className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-slate-400 dark:focus:border-slate-600 rounded-lg px-4 py-2.5 outline-none transition-colors text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or architecture needs..."
                    className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-slate-400 dark:focus:border-slate-600 rounded-lg px-4 py-2.5 outline-none transition-colors text-slate-900 dark:text-slate-100 placeholder:text-slate-400 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex justify-end">
                  <Button
                    type="submit"
                    className="rounded-lg bg-slate-900 dark:bg-slate-50 text-slate-50 dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 px-5 py-2.5 font-medium flex items-center gap-2 tracking-wide transition-all duration-300"
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
