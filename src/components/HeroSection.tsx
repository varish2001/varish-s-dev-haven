import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const floatingSymbols = ["{ }", "< />", "( )", "=>", "[ ]", "//", "&&", "||", "$ _", "fn()", "::"];

const codeLines = [
  'const developer = "Mohd Varish";',
  'const stack = ["Java", "MERN"];',
  "function buildApp() {",
  "  return <Amazing />;",
  "}",
];

function Particles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: 2 + Math.random() * 3,
    delay: Math.random() * 8,
    tx: `${(Math.random() - 0.5) * 200}px`,
    ty: `${(Math.random() - 0.5) * 200}px`,
  }));

  return (
    <div className="pointer-events-none absolute inset-0">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-primary animate-particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            "--tx": p.tx,
            "--ty": p.ty,
            opacity: 0,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

function TypewriterCode() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    if (lineIndex >= codeLines.length) {
      const timeout = setTimeout(() => {
        setLineIndex(0);
        setCharIndex(0);
        setDisplayedLines([]);
      }, 3000);
      return () => clearTimeout(timeout);
    }

    const currentLine = codeLines[lineIndex];
    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => setCharIndex(charIndex + 1), 40);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, currentLine]);
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [lineIndex, charIndex]);

  return (
    <div className="mx-auto mt-10 max-w-md rounded-xl border border-border bg-card/50 p-4 font-mono text-xs text-muted-foreground backdrop-blur-sm sm:text-sm">
      <div className="mb-3 flex gap-1.5">
        <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
        <div className="h-2.5 w-2.5 rounded-full bg-chart-4/60" />
        <div className="h-2.5 w-2.5 rounded-full bg-chart-2/60" />
      </div>
      {displayedLines.map((line, i) => (
        <div key={i} className="text-muted-foreground/70">
          <span className="mr-3 text-muted-foreground/30">{i + 1}</span>
          {colorizeCode(line)}
        </div>
      ))}
      {lineIndex < codeLines.length && (
        <div>
          <span className="mr-3 text-muted-foreground/30">{displayedLines.length + 1}</span>
          {colorizeCode(codeLines[lineIndex].slice(0, charIndex))}
          <span className="inline-block w-px h-4 align-middle bg-primary animate-blink" />
        </div>
      )}
    </div>
  );
}

function colorizeCode(code: string) {
  return code.split(/(".*?"|const|function|return)/g).map((part, i) => {
    if (part === "const" || part === "function" || part === "return") {
      return <span key={i} className="text-chart-5">{part}</span>;
    }
    if (part.startsWith('"')) {
      return <span key={i} className="text-chart-2">{part}</span>;
    }
    return <span key={i}>{part}</span>;
  });
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      section.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      section.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };
    section.addEventListener("mousemove", onMove);
    return () => section.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="spotlight relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

      {/* Particles */}
      <Particles />

      {/* Floating code symbols */}
      <div className="pointer-events-none absolute inset-0">
        {floatingSymbols.map((s, i) => (
          <span
            key={i}
            className="absolute font-mono text-primary/10 animate-float select-none"
            style={{
              left: `${5 + i * 9}%`,
              top: `${10 + (i % 4) * 22}%`,
              animationDelay: `${i * 0.7}s`,
              fontSize: `${0.9 + (i % 3) * 0.5}rem`,
            }}
          >
            {s}
          </span>
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[100px] animate-tilt" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-chart-5/5 blur-[80px] animate-float" />

      <div className="relative z-10 text-center max-w-3xl">
        <p className="mb-4 font-mono text-sm text-primary tracking-wider animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Hi, my name is
        </p>
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Mohd <span className="gradient-text">Varish</span>
        </h1>
        <p className="mt-4 text-xl text-muted-foreground sm:text-2xl animate-fade-up" style={{ animationDelay: "0.6s" }}>
          Aspiring Full Stack Developer
        </p>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto animate-fade-up" style={{ animationDelay: "0.8s" }}>
          Building scalable and practical web applications
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "1s" }}>
          <Button size="lg" className="magnetic-btn" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button size="lg" variant="outline" className="magnetic-btn" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        {/* Typewriter code block */}
        <div className="animate-fade-up" style={{ animationDelay: "1.2s" }}>
          <TypewriterCode />
        </div>

        <a
          href="#about"
          className="mt-10 inline-block animate-bounce text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
