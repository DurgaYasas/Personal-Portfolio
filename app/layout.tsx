import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Durga Yasas — Senior Product Designer",
    template: "%s — Durga Yasas",
  },
  description:
    "Durga Yasas is a Senior Product Designer working across complex digital products, mobile applications, super apps, and SaaS experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/* Extensions such as Grammarly add body attributes before React hydrates. */}
      <body suppressHydrationWarning>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
