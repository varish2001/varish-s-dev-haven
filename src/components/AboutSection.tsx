import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { GraduationCap, Code2, Briefcase, Trophy } from "lucide-react";

const highlights = [
  { icon: GraduationCap, text: "B.Tech CSE (AI) — Final Year" },
  { icon: Code2, text: "200+ LeetCode Problems Solved" },
  { icon: Briefcase, text: "Internships at Microsoft, SAP & AWS" },
  { icon: Trophy, text: "Java & MERN Stack Developer" },
];

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl font-bold text-center mb-2">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="mx-auto mb-10 h-1 w-16 rounded-full bg-primary" />

        <p className="text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed">
          I'm a final-year B.Tech Computer Science (AI) student passionate about building efficient,
          scalable web applications. Skilled in Java and the MERN stack, I've completed internships
          with Microsoft (AICTE), SAP, and AWS Academy. I enjoy solving algorithmic challenges and
          exploring backend systems.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {highlights.map(({ icon: Icon, text }, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon size={20} />
              </div>
              <span className="text-sm text-foreground">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
