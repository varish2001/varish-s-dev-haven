import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const categories = [
  { title: "Languages", skills: ["Java", "JavaScript"], icon: "💻" },
  { title: "Frontend", skills: ["HTML", "CSS", "JavaScript"], icon: "🎨" },
  { title: "Backend", skills: ["Node.js", "Express.js"], icon: "⚙️" },
  { title: "Database", skills: ["MongoDB"], icon: "🗄️" },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code"], icon: "🛠️" },
  { title: "Cloud", skills: ["AWS", "Azure"], icon: "☁️" },
];

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl font-bold text-center mb-2">
          My <span className="gradient-text">Skills</span>
        </h2>
        <div className="mx-auto mb-12 h-1 w-16 rounded-full bg-primary" />

        <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ${isVisible ? "stagger-children" : ""}`}>
          {categories.map((cat, i) => (
            <div
              key={i}
              className="glow-card group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              <div className="mb-3 text-2xl">{cat.icon}</div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
