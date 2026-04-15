import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { GraduationCap, Code2, Briefcase, Trophy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const highlights = [
  { icon: GraduationCap, text: "B.Tech CSE (AI) — Final Year" },
  { icon: Code2, text: "200+ LeetCode Problems Solved" },
  { icon: Briefcase, text: "Internships at Microsoft, SAP & AWS" },
  { icon: Trophy, text: "Java & MERN Stack Developer" },
];

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1500;
        const steps = 40;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-3xl font-bold text-primary">
      {count}{suffix}
    </span>
  );
}

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl font-bold text-center mb-2">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="mx-auto mb-10 h-1 w-16 rounded-full bg-primary" />

        <p className="text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed">
          I'm a final-year B.Tech Computer Science (AI) student passionate about building efficient,
          scalable web applications. Skilled in Java and the MERN stack, I've completed internships
          with Microsoft (AICTE), SAP, and AWS Academy. I enjoy solving algorithmic challenges and
          exploring backend systems.
        </p>

        {/* Stats counters */}
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center">
            <Counter target={200} suffix="+" />
            <span className="mt-1 text-xs text-muted-foreground">LeetCode Problems</span>
          </div>
          <div className="flex flex-col items-center">
            <Counter target={3} />
            <span className="mt-1 text-xs text-muted-foreground">Internships</span>
          </div>
          <div className="flex flex-col items-center">
            <Counter target={3} />
            <span className="mt-1 text-xs text-muted-foreground">Projects</span>
          </div>
        </div>

        <div className={`mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 ${isVisible ? "stagger-children" : ""}`}>
          {highlights.map(({ icon: Icon, text }, i) => (
            <div
              key={i}
              className="glow-card flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20">
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
