"use client";

import { Instrument_Serif } from "next/font/google";
import { motion } from "motion/react";
import { ImageCard } from "@/components/ImageCard";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export type AvatarList = {
  image: string;
};

type HeroSectionProps = {
  avatarList: AvatarList[];
};

function HeroSection({ avatarList }: HeroSectionProps) {
  return (
    <section>
      <div className="w-full h-full relative">
        <div className="relative w-full pt-0 md:pt-20 pb-6 md:pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-sky-100 before:via-white before:to-amber-100 before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-slate-800 dark:before:via-black dark:before:to-stone-700 dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10">
          <div className="container mx-auto relative z-10 px-4">
            <div className="flex flex-col lg:flex-row max-w-6xl mx-auto gap-8 lg:gap-12 items-center justify-between">
              <ImageCard src="/Placeholder.png" alt="Placeholder" />
              <div className="relative flex flex-col text-center lg:text-left items-center lg:items-start sm:gap-6 gap-4 max-w-2xl">
                <motion.h1
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="lg:text-7xl md:text-6xl text-5xl font-medium leading-tight md:leading-tight lg:leading-tight"
                >
                  Thoughtful design meets{" "}
                  <span
                    className={`${instrumentSerif.className} tracking-tight block lg:inline`}
                  >
                    robust engineering.
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                  className="text-base font-normal text-muted-foreground"
                >
                  Full-stack engineer dedicated to building fast, cloud-ready
                  architectures and immersive web experiences. Focused on
                  precision, performance, and clean execution from server to
                  screen.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
