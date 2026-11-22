import type { Metadata } from "next";
import Script from "next/script";
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
        <Script id="homepage-initial-scroll" strategy="beforeInteractive">
          {`(() => {
            const navigation = performance.getEntriesByType("navigation")[0];
            if (location.pathname !== "/" || location.hash || navigation?.type === "back_forward") return;

            // Fresh homepage visits and reloads start at the hero. Explicit
            // section links and back/forward navigation retain their position.
            const previous = history.scrollRestoration;
            history.scrollRestoration = "manual";
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });

            const finish = () => requestAnimationFrame(() => {
              if (location.pathname === "/" && !location.hash) {
                window.scrollTo({ top: 0, left: 0, behavior: "instant" });
              }
              history.scrollRestoration = previous;
            });
            if (document.readyState === "complete") finish();
            else window.addEventListener("pageshow", finish, { once: true });
          })();`}
        </Script>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
