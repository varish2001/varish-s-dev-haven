import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const WHATSAPP_NUMBER = "918287329154";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:varishwork20@gmail.com", text: "varishwork20@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mohd-varish-9190b2317/", text: "Mohd Varish" },
  { icon: Github, label: "GitHub", href: "https://github.com/varish2001", text: "varish2001" },
];

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Hi Varish, I'm ${form.name}.\n` +
      (form.subject ? `Subject: ${form.subject}\n` : "") +
      `\n${form.message}\n\n` +
      `Reply to: ${form.email}`;
    const encoded = encodeURIComponent(text);
    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
    // Use WhatsApp Web on desktop (avoids api.whatsapp.com redirect that some
    // networks block) and the native app deep link on mobile.
    const url = isMobile
      ? `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${encoded}`
      : `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl font-bold text-center mb-2">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <div className="mx-auto mb-12 h-1 w-16 rounded-full bg-primary" />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact info */}
          <div>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              I'm always open to new opportunities, collaborations, and conversations. Feel free to reach out!
            </p>
            <div className="flex flex-col gap-4">
              {socials.map(({ icon: Icon, label, href, text }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-sm font-medium text-foreground">{text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              placeholder="Your Name"
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-card"
            />
            <Input
              type="email"
              placeholder="Your Email"
              required
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-card"
            />
            <Input
              placeholder="Subject"
              maxLength={150}
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="bg-card"
            />
            <Textarea
              placeholder="Your Message"
              rows={5}
              required
              maxLength={1000}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-card"
            />
            <Button type="submit" size="lg">
              <MessageCircle size={16} /> Send via WhatsApp
            </Button>
            {submitted && (
              <p className="text-sm text-primary font-medium">
                Opening WhatsApp… if nothing happens, allow popups and try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
