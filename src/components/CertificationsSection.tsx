import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Award, Trophy, BookOpen, Rocket } from "lucide-react";

const certifications = [
  { title: "Java Full Stack", issuer: "Certification", icon: Award },
  { title: "Foundations of AI", issuer: "Microsoft × AICTE", icon: Award },
  { title: "Data Analytics", issuer: "Certification", icon: Award },
  { title: "Citi — Software Development Job Simulation", issuer: "Citi / Forage", icon: Award },
  { title: "Building LLM Applications with Prompt Engineering", issuer: "Certification", icon: Award },
  { title: "AWS Academy Cloud Foundations", issuer: "EduSkills × AWS", icon: Award },
];

const achievements = [
  { icon: Trophy, title: "200+ LeetCode Problems", description: "Sharpening DSA and problem-solving consistency." },
  { icon: BookOpen, title: "DSA with Java", description: "Completed an in-depth DSA course in Java." },
  { icon: Rocket, title: "Hackathon Builder", description: "Built and shipped projects under tight deadlines." },
];

export function CertificationsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certifications" className="py-24 px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl font-bold text-center mb-2">
          Certifications & <span className="gradient-text">Achievements</span>
        </h2>
        <div className="mx-auto mb-12 h-1 w-16 rounded-full bg-primary" />

        <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ${isVisible ? "stagger-children" : ""}`}>
          {certifications.map(({ icon: Icon, title, issuer }, i) => (
            <div
              key={i}
              className="glow-card flex items-start gap-3 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground leading-snug">{title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{issuer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {achievements.map(({ icon: Icon, title, description }, i) => (
            <div
              key={i}
              className="group flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <Icon size={20} />
              </div>
              <h3 className="text-sm font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}