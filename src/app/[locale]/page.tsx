import { useTranslations } from "next-intl";
import { Header } from "@/components/Header";
import { ContactSection } from "@/components/ContactSection";
import { HeroSocials } from "@/components/HeroSocials";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-10 tracking-tight">
      {children}
    </h2>
  );
}

function Hero() {
  const t = useTranslations("hero");
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--foreground)] mb-4 leading-none">
          {t("name")}
        </h1>
        <p className="text-xl md:text-2xl text-[var(--foreground-secondary)] font-light mb-6">
          {t("role")}
        </p>
        <p className="text-base text-[var(--muted-foreground)] max-w-lg leading-relaxed mb-12">
          {t("tagline")}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] text-sm font-medium rounded-lg hover:opacity-85 transition-opacity duration-200"
          >
            {t("cta_contact")}
          </a>
          <a
            href="#experience"
            className="px-5 py-2.5 border border-[var(--border)] text-[var(--foreground-secondary)] text-sm font-medium rounded-lg hover:border-[var(--accent)] hover:text-[var(--foreground)] transition-colors duration-200"
          >
            {t("cta_experience")}
          </a>
        </div>
        <HeroSocials />
      </div>
    </section>
  );
}

function About() {
  const t = useTranslations("about");
  return (
    <section id="about" className="border-t border-[var(--border)] py-20">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle>{t("title")}</SectionTitle>
        <div className="max-w-xl space-y-4">
          <p className="text-base leading-relaxed text-[var(--foreground)]">{t("p1")}</p>
          <p className="text-base leading-relaxed text-[var(--foreground-secondary)]">{t("p2")}</p>
          <p className="text-base leading-relaxed text-[var(--muted-foreground)]">{t("p3")}</p>
        </div>
      </div>
    </section>
  );
}

const skillGroups = [
  { label: "Core", skills: ["C#", ".NET Core", "ASP.NET Core", "Entity Framework"] },
  { label: "Database", skills: ["PostgreSQL", "MongoDB", "SQL"] },
  { label: "Tools", skills: ["Docker", "Git", "CI/CD", "xUnit"] },
  { label: "Other", skills: ["SignalR", "WPF", "REST API", "JWT", "Python"] },
];

function Skills() {
  const t = useTranslations("skills");
  return (
    <section id="skills" className="border-t border-[var(--border)] py-20">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle>{t("title")}</SectionTitle>
        <div className="space-y-5">
          {skillGroups.map((group) => (
            <div key={group.label} className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-[var(--muted-foreground)] w-16 shrink-0">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-[var(--border)] rounded-md px-3 py-1 text-sm text-[var(--foreground-secondary)] hover:border-[var(--accent)] hover:text-[var(--foreground)] transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const t = useTranslations("experience");
  const items = t.raw("items") as Array<{
    company: string;
    role: string;
    period: string;
    location: string;
    description: string;
  }>;

  return (
    <section id="experience" className="border-t border-[var(--border)] py-20">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle>{t("title")}</SectionTitle>
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.company}
              className="border border-[var(--border)] rounded-xl p-6 hover:border-[var(--accent)] transition-colors duration-200"
            >
              <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                <h3 className="text-base font-semibold text-[var(--foreground)]">{item.company}</h3>
                <span className="font-mono text-xs text-[var(--muted-foreground)] whitespace-nowrap">
                  {item.period}
                </span>
              </div>
              <p className="font-mono text-xs text-[var(--muted-foreground)] mb-3">
                {item.role} · {item.location}
              </p>
              <p className="text-sm text-[var(--foreground-secondary)] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="border-t border-[var(--border)] py-8 mt-10">
      <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
        <span className="font-mono text-xs text-[var(--muted-foreground)]">
          © 2026 Sardorbek Saminov
        </span>
        <span className="font-mono text-xs text-[var(--muted-foreground)]">{t("built")}</span>
      </div>
    </footer>
  );
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      <Header locale={locale} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
