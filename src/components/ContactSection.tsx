"use client";

import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdOutlineEmail, MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md";
import { useState } from "react";

export function ContactSection() {
  const t = useTranslations("contact");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nReply to: ${form.email}`);
    window.location.href = `mailto:sardorsaminov5@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="border-t border-[var(--border)] py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-3 tracking-tight">
          {t("title")}
        </h2>
        <p className="text-base text-[var(--muted-foreground)] max-w-md mb-10 leading-relaxed">
          {t("subtitle")}
        </p>

        <div className="grid md:grid-cols-2 gap-5 items-stretch">
          {/* Left — form card */}
          <div className="border border-[var(--border)] rounded-xl p-6 h-full">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[var(--foreground)]">{t("form_name")}</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  placeholder={t("form_name_placeholder")}
                  className="bg-[var(--surface)] border border-[var(--border)] rounded-lg px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[var(--foreground)]">{t("form_email")}</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  placeholder={t("form_email_placeholder")}
                  className="bg-[var(--surface)] border border-[var(--border)] rounded-lg px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[var(--foreground)]">{t("form_message")}</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  placeholder={t("form_placeholder")}
                  className="bg-[var(--surface)] border border-[var(--border)] rounded-lg px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 bg-[var(--foreground)] text-[var(--background)] text-sm font-medium rounded-lg hover:opacity-85 transition-opacity duration-200"
              >
                {sent ? t("form_sent") : t("form_send")}
              </button>
            </form>
          </div>

          {/* Right — two cards, equal height to left */}
          <div className="flex flex-col gap-4 h-full">
            {/* Contact Information */}
            <div className="border border-[var(--border)] rounded-xl p-6 flex flex-col gap-4 flex-1">
              <h3 className="text-base font-semibold text-[var(--foreground)]">{t("info_title")}</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:sardorsaminov5@gmail.com"
                  className="flex items-center gap-3 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-200 group"
                >
                  <MdOutlineEmail size={17} className="shrink-0 group-hover:text-[var(--accent)] transition-colors duration-200" />
                  <span className="text-sm">sardorsaminov5@gmail.com</span>
                </a>
                <a
                  href="tel:+998908618018"
                  className="flex items-center gap-3 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-200 group"
                >
                  <MdOutlinePhone size={17} className="shrink-0 group-hover:text-[var(--accent)] transition-colors duration-200" />
                  <span className="text-sm">+998 90 861 80 18</span>
                </a>
                <div className="flex items-center gap-3 text-[var(--muted-foreground)]">
                  <MdOutlineLocationOn size={17} className="shrink-0" />
                  <span className="text-sm">Tashkent, Uzbekistan</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="border border-[var(--border)] rounded-xl p-6 flex flex-col gap-4 flex-1">
              <h3 className="text-base font-semibold text-[var(--foreground)]">{t("social_title")}</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/Sardoralgoritm"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-200 group"
                >
                  <FaGithub size={16} className="shrink-0 group-hover:text-[var(--accent)] transition-colors duration-200" />
                  <span className="text-sm">github.com/Sardoralgoritm</span>
                </a>
                <a
                  href="https://linkedin.com/in/sardorbekk"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-200 group"
                >
                  <FaLinkedin size={16} className="shrink-0 group-hover:text-[var(--accent)] transition-colors duration-200" />
                  <span className="text-sm">linkedin.com/in/sardorbekk</span>
                </a>
                <a
                  href="https://leetcode.com/u/ilxamovic"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-200 group"
                >
                  <SiLeetcode size={16} className="shrink-0 group-hover:text-[var(--accent)] transition-colors duration-200" />
                  <span className="text-sm">leetcode.com/u/ilxamovic</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
