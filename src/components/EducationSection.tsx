import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "Galgotias University, Greater Noida",
    degree: "B.Tech — Computer Science Engineering (AI)",
    period: "Sep 2022 – Oct 2026",
  },
  {
    school: "Balwantrai Mehta Vidhya Bhawan, Lajpat Nagar",
    degree: "Senior Secondary — Science",
    period: "Mar 2021 – May 2022",
  },
  {
    school: "Balwant Rai Mehta Vidhya Bhawan, Lajpat Nagar",
    degree: "Secondary School",
    period: "Mar 2019 – Feb 2020",
  },
];

export function EducationSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-24 px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl font-bold text-center mb-2">
          My <span className="gradient-text">Education</span>
        </h2>
        <div className="mx-auto mb-12 h-1 w-16 rounded-full bg-primary" />

        <div className={`grid grid-cols-1 gap-5 md:grid-cols-3 ${isVisible ? "stagger-children" : ""}`}>
          {education.map((e, i) => (
            <div
              key={i}
              className="glow-card group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-sm font-semibold text-foreground leading-snug">{e.school}</h3>
              <p className="mt-2 text-sm text-primary">{e.degree}</p>
              <p className="mt-2 font-mono text-xs text-muted-foreground">{e.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}