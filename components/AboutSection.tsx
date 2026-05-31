export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full max-w-5xl mx-auto px-6 py-16 md:py-24 text-slate-900 dark:text-slate-50"
    >
      {/* Grid Layout: Clean, editorial style matching your header design */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left Column: Section Title */}
        <div className="md:col-span-1">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400 md:sticky md:top-24">
            01 / ABOUT ME
          </h2>
        </div>

        {/* Right Column: Bio Content */}
        <div className="md:col-span-2 space-y-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300 font-normal">
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
            When I'm not writing code, I'm usually sharpening my technical
            skills, studying system design, or diving into complex interactive
            web experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
