"use client";

import { Instrument_Serif } from "next/font/google";
import { motion } from "motion/react";
import { ImageCard } from "@/components/ImageCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dot } from "lucide-react";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export type AvatarList = {
  image: string;
};

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/80 via-white to-amber-100/60 dark:from-slate-900 dark:via-slate-950 dark:to-stone-900" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full pt-0 md:pt-20 pb-6 md:pb-10">
        <div className="container mx-auto relative z-10 px-4">
          <div className="flex flex-col lg:flex-row max-w-6xl mx-auto gap-10 lg:gap-16 items-center justify-between">
            <ImageCard src="/Placeholder.png" alt="Akene Uzezi" />
            <div className="relative flex flex-col text-center lg:text-left items-center lg:items-start sm:gap-6 gap-5 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Badge
                  variant="secondary"
                  className="rounded-full px-4 py-1.5 text-xs font-medium tracking-wide mb-4 border border-border/60"
                >
                  <Dot className="h-3 w-3 fill-primary text-primary mr-1.5" />
                  Available for new opportunities
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="lg:text-7xl md:text-6xl text-5xl font-medium leading-[1.1] md:leading-[1.1] lg:leading-[1.1] tracking-tight"
              >
                Thoughtful design meets{" "}
                <span
                  className={`${instrumentSerif.className} tracking-tight block lg:inline text-primary`}
                >
                  robust engineering.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                className="text-base md:text-lg font-normal text-muted-foreground leading-relaxed max-w-lg"
              >
                Full-stack engineer dedicated to building fast, cloud-ready
                architectures and immersive web experiences. Focused on
                precision, performance, and clean execution from server to
                screen.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="flex items-center gap-4 mt-2"
              >
                <a href="#projects">
                  <Button className="rounded-full px-6 py-2.5 font-medium tracking-wide shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                    View Projects
                  </Button>
                </a>
                <a href="#contact">
                  <Button
                    variant="outline"
                    className="rounded-full px-6 py-2.5 font-medium tracking-wide border-border/80 hover:border-foreground/30"
                  >
                    Get in Touch
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
