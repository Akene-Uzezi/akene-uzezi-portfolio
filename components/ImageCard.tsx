import { Card, CardFooter } from "@/components/ui/card";
import { motion } from "motion/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
interface ImageCardProp {
  src: string;
  alt: string;
}

export function ImageCard({ src, alt }: ImageCardProp) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-full lg:w-100 shrink-0"
    >
      <Card className="max-w-87.5 overflow-hidden">
        <div className="relative aspect-video w-full overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover transition-all hover:scale-105"
          />
        </div>
        <CardFooter className="gap-3">
          <a href="https://github.com/Akene-Uzezi" target="blank">
            <BsGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/uzezi-akene-7023a8374"
            target="blank"
          >
            <BsLinkedin size={24} />
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
