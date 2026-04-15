import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "AI Intern",
    company: "Microsoft (AICTE)",
    description: "Worked on AI/ML projects as part of the AICTE-Microsoft virtual internship program. Gained hands-on experience with machine learning concepts and tools.",
  },
  {
    role: "NLP Intern",
    company: "Microsoft & SAP",
    description: "Explored Natural Language Processing techniques and applications. Collaborated on projects involving text analysis and language understanding.",
  },
  {
    role: "Cloud Computing Intern",
    company: "AWS Academy",
    description: "Learned cloud architecture fundamentals, including compute, storage, and networking services on AWS. Completed hands-on labs and projects.",
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
          My <span className="text-primary">Experience</span>
        </h2>
        <div className="mx-auto mb-12 h-1 w-16 rounded-full bg-primary" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border md:left-1/2" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div key={i} className={`relative flex items-start gap-6 md:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Dot */}
                <div className="absolute left-5 -translate-x-1/2 md:left-1/2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background">
                    <Briefcase size={16} className="text-primary" />
                  </div>
                </div>

                {/* Card */}
                <div className={`ml-14 w-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 md:ml-0 md:w-[calc(50%-3rem)] ${i % 2 === 0 ? "" : ""}`}>
                  <h3 className="font-semibold text-foreground">{exp.role}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{exp.company}</p>
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
