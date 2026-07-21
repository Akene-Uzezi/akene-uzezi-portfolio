import { Card, CardFooter } from "@/components/ui/card";
import { motion } from "motion/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ImageCardProp {
  src: string;
  alt: string;
  className?: string;
}

export function ImageCard({ src, alt, className }: ImageCardProp) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={cn("w-full lg:w-100 shrink-0", className)}
    >
      <Card className="max-w-87.5 overflow-hidden rounded-2xl border-border/80 shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative aspect-video w-full overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardFooter className="gap-3 p-4">
          <a
            href="https://github.com/Akene-Uzezi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-muted"
            >
              <BsGithub className="h-5 w-5" />
            </Button>
          </a>
          <a
            href="https://linkedin.com/in/uzezi-akene-7023a8374"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-muted"
            >
              <BsLinkedin className="h-5 w-5" />
            </Button>
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
