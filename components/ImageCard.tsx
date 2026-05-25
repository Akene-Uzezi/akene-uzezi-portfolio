import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "motion/react";

interface ImageCardProp {
  src: string;
}

export function ImageCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-full lg:w-100 shrink-0"
    >
      <Card className="max-w-87.5 overflow-hidden">
        {/* 1. Image container at the top */}
        <div className="relative aspect-video w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            alt="Project Preview"
            className="h-full w-full object-cover transition-all hover:scale-105"
          />
        </div>

        {/* 2. Text and actions underneath */}
        <CardHeader>
          <CardTitle>Portfolio Project</CardTitle>
          <CardDescription>
            Built with Next.js, Go, and Tailwind.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground">
            A sleek, high-performance web application designed to showcase
            responsive layouts.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
