import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="contact-section">
      <div className="container">
        <div className="contact-top">
          <span className="eyebrow">
            <span className="status-dot" /> GOOD THINGS START WITH A
            CONVERSATION
          </span>
          <span className="contact-index">LET’S MAKE SOMETHING MATTER.</span>
        </div>
        <div className="contact-main">
          <h2>
            A complex challenge?
            <br />
            <span>Let’s talk.</span>
          </h2>
          <a
            className="contact-arrow"
            href="https://github.com/DurgaYasas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Durga Yasas on GitHub (opens in a new tab)"
          >
            <ArrowUpRight strokeWidth={1.1} />
          </a>
        </div>
        <div className="contact-links">
          <p>Thoughtful products start with thoughtful conversations.</p>
          <a
            href="https://github.com/DurgaYasas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on GitHub <ArrowUpRight size={16} />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <div className="footer-bottom">
          <Link href="/" className="footer-name">
            Durga Yasas<span>Senior Product Designer</span>
          </Link>
          <span>© {new Date().getFullYear()} Durga Yasas</span>
          <a href="#top" className="back-top">
            Back to top <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
