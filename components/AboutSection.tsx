import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full max-w-5xl mx-auto px-6 py-16 md:py-28"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-start">
        <div className="md:col-span-1">
          <div className="md:sticky md:top-28">
            <Badge
              variant="outline"
              className="rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border-border/60 text-muted-foreground mb-4"
            >
              01 — About Me
            </Badge>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-[1.1]">
              About me
            </h2>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground font-normal">
          <p>
            I am a Full-Stack Software Engineer focused on building scalable
            backend architectures, optimized APIs, and seamless user
            experiences. I bridge the gap between complex server-side logic and
            clean, high-performance client interfaces.
          </p>
          <p>
            My development approach is deeply rooted in engineering craft: I
            build with statically typed precision, rely heavily on containerized
            and cloud-native workflows, and believe that a great system is
            defined by its resilience, security, and speed.
          </p>
          <p>
            When I&apos;m not writing code, I&apos;m usually sharpening my
            technical skills, studying system design, or diving into complex
            interactive web experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
