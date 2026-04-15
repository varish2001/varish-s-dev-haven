import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = links.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Gradient scroll progress bar */}
      <div
        className="fixed top-0 left-0 z-[60] h-0.5 transition-all"
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, var(--primary), oklch(0.7 0.2 280))",
        }}
      />
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/50" : ""
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-mono text-lg font-bold gradient-text">
            &lt;MV /&gt;
          </a>
          <div className="hidden gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative text-sm transition-colors duration-300 ${
                  activeSection === l.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {l.label}
                {activeSection === l.href.slice(1) && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary transition-all" />
                )}
              </a>
            ))}
          </div>
          <button
            className="text-foreground md:hidden transition-transform duration-200 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div
          className={`flex flex-col gap-4 border-t border-border bg-background/95 px-6 backdrop-blur-xl md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-64 py-4" : "max-h-0 py-0 border-t-0"
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setIsOpen(false)}
              className={`text-sm transition-colors ${
                activeSection === l.href.slice(1) ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
