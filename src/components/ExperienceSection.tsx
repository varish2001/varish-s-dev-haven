import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "AI Intern",
    company: "Microsoft — Foundations of AI",
    period: "Apr 2025 – May 2025 · New Delhi",
    description:
      "Completed a 4-week Foundations of AI internship under Microsoft's AI initiative (supported by Edunet × AICTE). Built a mini Image Detection project inspired by Copilot, working hands-on with Azure services and Python.",
  },
  {
    role: "AI Intern",
    company: "Edunet Foundation × AICTE",
    period: "Dec 2024 – Jan 2025 · Remote",
    description:
      "Built an SMS Spam Detection project using Machine Learning — implemented text preprocessing and a Naive Bayes classifier. Strengthened skills in data handling, model evaluation, and ML accuracy tuning in a remote collaborative environment.",
  },
  {
    role: "Cloud Virtual Intern",
    company: "EduSkills Foundation × AWS Academy",
    period: "Oct 2024 – Dec 2024 · Remote",
    description:
      "AWS Academy cloud internship covering core AWS services, cloud architecture, deployment models, and security fundamentals. Completed guided labs on IaaS, storage, networking, and cloud-based project deployment.",
  },
];

export function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl font-bold text-center mb-2">
          My <span className="gradient-text">Experience</span>
        </h2>
        <div className="mx-auto mb-12 h-1 w-16 rounded-full bg-primary" />

        <div className="relative">
          {/* Animated timeline line */}
          <div
            className="absolute left-5 top-0 w-px md:left-1/2 transition-all duration-1000"
            style={{
              height: isVisible ? "100%" : "0%",
              background: "linear-gradient(to bottom, var(--primary), transparent)",
            }}
          />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-6 md:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.6s ease ${0.3 + i * 0.2}s`,
                }}
              >
                {/* Dot */}
                <div className="absolute left-5 -translate-x-1/2 md:left-1/2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30">
                    <Briefcase size={16} className="text-primary" />
                  </div>
                </div>

                {/* Card */}
                <div className={`glow-card ml-14 w-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 md:ml-0 md:w-[calc(50%-3rem)]`}>
                  <h3 className="font-semibold text-foreground">{exp.role}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{exp.company}</p>
                  <p className="mt-1 text-xs font-mono text-muted-foreground">{exp.period}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
