import { Github, Link2, Linkedin, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";

const contacts = [
  {
    label: "GitHub",
    value: profile.contact.github,
    href: profile.contact.github,
    icon: Github,
  },
  {
    label: "Email",
    value: profile.contact.email,
    href: `mailto:${profile.contact.email}`,
    icon: Mail,
  },
  {
    label: "Portfolio",
    value: profile.contact.portfolio,
    href: profile.contact.portfolio,
    icon: Link2,
  },
  {
    label: "X",
    value: profile.contact.x || "後から追加",
    href: profile.contact.x,
    icon: MessageCircle,
  },
  {
    label: "LinkedIn",
    value: profile.contact.linkedIn || "後から追加",
    href: profile.contact.linkedIn,
    icon: Linkedin,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-block bg-navy text-white">
      <div className="section-shell">
        <SectionHeading
          label="Contact"
          title="連絡先"
          lead="GitHub、メール、ポートフォリオURLは data/profile.ts から差し替えできます。XやLinkedInも後から追加できます。"
          tone="dark"
        />
        <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            const hasLink = contact.href.trim().length > 0;
            const content = (
              <>
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-white/10 text-white">
                  <Icon size={21} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">
                    {contact.label}
                  </p>
                  <p className="mt-1 break-words text-sm font-bold leading-6 text-white">
                    {contact.value}
                  </p>
                </div>
              </>
            );

            return hasLink ? (
              <a
                key={contact.label}
                href={contact.href}
                className="flex items-center gap-4 rounded-lg border border-white/15 bg-white/[0.08] p-5 transition hover:bg-white/[0.14]"
              >
                {content}
              </a>
            ) : (
              <div
                key={contact.label}
                className="flex items-center gap-4 rounded-lg border border-white/15 bg-white/[0.08] p-5"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
