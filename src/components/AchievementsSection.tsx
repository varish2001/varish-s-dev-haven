import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Trophy, BookOpen, Rocket } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "200+ LeetCode Problems",
    description: "Solved over 200 problems on LeetCode, strengthening algorithmic thinking and problem-solving skills.",
  },
  {
    icon: BookOpen,
    title: "DSA with Java",
    description: "Completed comprehensive Data Structures & Algorithms course with Java by Apna College.",
  },
  {
    icon: Rocket,
    title: "Hackathon Participant",
    description: "Actively participated in hackathons, building innovative solutions under time constraints.",
  },
];

export function AchievementsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="achievements" className="py-24 px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl font-bold text-center mb-2">
          <span className="text-primary">Achievements</span>
        </h2>
        <div className="mx-auto mb-12 h-1 w-16 rounded-full bg-primary" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {achievements.map(({ icon: Icon, title, description }, i) => (
            <div
              key={i}
              className="group flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <Icon size={24} />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
