import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const projects = [
  {
    title: "WanderLust",
    description:
      "An Airbnb-inspired full-stack MERN application for listing, exploring, and reviewing travel destinations. Features user authentication, image uploads, and interactive maps.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/varish2001",
    demo: null,
    color: "oklch(0.62 0.19 250)",
  },
  {
    title: "Know Your Roots",
    description:
      "A cultural heritage platform designed to help users discover and connect with their cultural roots. Built with modern web technologies for an engaging user experience.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js"],
    github: "https://github.com/varish2001",
    demo: null,
    color: "oklch(0.7 0.2 280)",
  },
  {
    title: "To-Do List App",
    description:
      "A desktop task management application built with Java Swing. Features task creation, editing, deletion, and completion tracking with a clean GUI.",
    tech: ["Java", "Swing", "AWT"],
    github: "https://github.com/varish2001",
    demo: null,
    color: "oklch(0.6 0.18 160)",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
    card.addEventListener("mousemove", onMove);
    return () => card.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={cardRef}
      className="spotlight glow-card group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-3"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Colored accent line */}
      <div
        className="mb-4 h-1 w-12 rounded-full transition-all duration-500 group-hover:w-full"
        style={{ backgroundColor: project.color }}
      />
      <div className="mb-3 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
      </div>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <div className="mb-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <Button size="sm" variant="outline" className="magnetic-btn" asChild>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github size={16} /> GitHub
          </a>
        </Button>
        {project.demo && (
          <Button size="sm" className="magnetic-btn" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} /> Demo
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl font-bold text-center mb-2">
          My <span className="gradient-text">Projects</span>
        </h2>
        <div className="mx-auto mb-12 h-1 w-16 rounded-full bg-primary" />

        <div className={`grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ${isVisible ? "stagger-children" : ""}`}>
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
