import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <div id="top">
      <Navigation />
      <main id="main" className="not-found container">
        <span className="eyebrow">404 / A SMALL DETOUR</span>
        <h1>
          This page is
          <br /> <em>off the canvas.</em>
        </h1>
        <p>Let’s get you back to the work.</p>
        <Link href="/#work" className="text-link">
          <ArrowLeft size={18} /> Explore the work
        </Link>
      </main>
      <Footer />
    </div>
  );
}
