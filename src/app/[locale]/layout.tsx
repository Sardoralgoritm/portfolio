import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "@/components/ThemeProvider";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Sardorbek Saminov — Software Engineer",
  description: "Sardorbek Saminov — Software Engineer from Tashkent, Uzbekistan. Building backend systems with C# and .NET.",
  keywords: ["Sardorbek Saminov", "Sardorbek", "Saminov", "Software Engineer", "Backend Developer", "Uzbekistan", "C#", ".NET"],
  authors: [{ name: "Sardorbek Saminov" }],
  verification: { google: "HC0EWIG71jQ2I7nnFjzHFhF7dNszbJkxWb3U1eWstVw" },
  openGraph: {
    title: "Sardorbek Saminov — Software Engineer",
    description: "Software Engineer from Tashkent, Uzbekistan.",
    url: "https://ssardor.uz",
    siteName: "Sardorbek Saminov",
    type: "website",
  },
  metadataBase: new URL("https://ssardor.uz"),
  alternates: {
    canonical: "https://ssardor.uz",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sardorbek Saminov",
    url: "https://ssardor.uz",
    jobTitle: "Software Engineer",
    worksFor: { "@type": "Organization", name: "National Agency for Social Protection" },
    address: { "@type": "PostalAddress", addressLocality: "Tashkent", addressCountry: "UZ" },
    sameAs: [
      "https://github.com/Sardoralgoritm",
      "https://linkedin.com/in/sardorbekk",
      "https://leetcode.com/u/ilxamovic",
    ],
  };

  return (
    <html lang={locale} suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
