import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "WanderLust",
    description:
      "An Airbnb-inspired full-stack MERN application for listing, exploring, and reviewing travel destinations. Features user authentication, image uploads, and interactive maps.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/varish2001",
    demo: null,
  },
  {
    title: "Know Your Roots",
    description:
      "A cultural heritage platform designed to help users discover and connect with their cultural roots. Built with modern web technologies for an engaging user experience.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js"],
    github: "https://github.com/varish2001",
    demo: null,
  },
  {
    title: "To-Do List App",
    description:
      "A desktop task management application built with Java Swing. Features task creation, editing, deletion, and completion tracking with a clean GUI.",
    tech: ["Java", "Swing", "AWT"],
    github: "https://github.com/varish2001",
    demo: null,
  },
];

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl font-bold text-center mb-2">
          My <span className="text-primary">Projects</span>
        </h2>
        <div className="mx-auto mb-12 h-1 w-16 rounded-full bg-primary" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              <div className="mb-3 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
                <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              </div>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="mb-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <Button size="sm" variant="outline" asChild>
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} /> GitHub
                  </a>
                </Button>
                {p.demo && (
                  <Button size="sm" asChild>
                    <a href={p.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} /> Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
