import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingSymbols = ["{ }", "< />", "( )", "=>", "[ ]", "//", "&&", "||"];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Floating code symbols */}
      <div className="pointer-events-none absolute inset-0">
        {floatingSymbols.map((s, i) => (
          <span
            key={i}
            className="absolute font-mono text-primary/10 text-lg animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              fontSize: `${1 + (i % 3) * 0.5}rem`,
            }}
          >
            {s}
          </span>
        ))}
      </div>

      {/* Gradient orb */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 text-center max-w-3xl animate-fade-up">
        <p className="mb-4 font-mono text-sm text-primary tracking-wider">Hi, my name is</p>
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          Mohd <span className="text-primary">Varish</span>
        </h1>
        <p className="mt-4 text-xl text-muted-foreground sm:text-2xl">
          Aspiring Full Stack Developer
        </p>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          Building scalable and practical web applications
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
        <a
          href="#about"
          className="mt-16 inline-block animate-bounce text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
