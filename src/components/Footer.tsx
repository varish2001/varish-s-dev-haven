import { Mail, Linkedin, Github } from "lucide-react";

const links = [
  { icon: Mail, href: "mailto:varishwork20@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mohd-varish-9190b2317/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/varish2001", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="font-mono text-sm text-muted-foreground">
          &lt;MV /&gt; © {new Date().getFullYear()}
        </p>
        <div className="flex gap-4">
          {links.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
