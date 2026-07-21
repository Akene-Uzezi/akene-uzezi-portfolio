"use client";
import { Marquee } from "@/components/shadcn-space/animations/marquee";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

export interface BrandList {
  image: string;
  name: string;
  lightimg: string;
}

function BrandSlider({ brandList }: { brandList: BrandList[] }) {
  return (
    <section className="border-t border-border/60">
      <div className="py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
            className="flex flex-col gap-8"
          >
            <div className="flex justify-center">
              <Badge
                variant="outline"
                className="rounded-full px-5 py-2 text-xs font-semibold tracking-widest uppercase border-border/60 text-muted-foreground"
              >
                Core Tech Stack
              </Badge>
            </div>
            {brandList && brandList.length > 0 && (
              <div className="py-4">
                <Marquee pauseOnHover className="[--duration:25s] p-0">
                  {brandList.map((brand, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 mx-8 hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="w-auto h-8 dark:invert dark:brightness-200"
                      />
                      <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                        {brand.name}
                      </span>
                    </div>
                  ))}
                </Marquee>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BrandSlider;
