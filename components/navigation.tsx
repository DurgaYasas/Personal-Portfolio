"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Navigation({
  home = false,
  workCount,
}: {
  home?: boolean;
  workCount?: number;
}) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const base = home ? "" : "/";

  useEffect(() => {
    if (!open) return;
    function dismiss(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    }
    function outside(event: PointerEvent) {
      if (
        !menu.current?.contains(event.target as Node) &&
        !button.current?.contains(event.target as Node)
      )
        setOpen(false);
    }
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);

  return (
    <header className="site-header container">
      <Link href="/" className="brand" aria-label="Durga Yasas, home">
        dy<span>.</span>
      </Link>
      <span className="header-caption">
        Independent thinking.
        <br />
        Intentional design.
      </span>
      <nav aria-label="Main navigation" className="desktop-nav">
        <Link href={`${base}#work`}>
          Works{" "}
          {workCount !== undefined && (
            <span>{String(workCount).padStart(2, "0")}</span>
          )}
        </Link>
        <Link href={`${base}#about`}>About</Link>
        <Link href={`${base}#contact`} className="nav-contact">
          Let’s talk <ArrowUpRight size={16} />
        </Link>
      </nav>
      <button
        ref={button}
        type="button"
        className="menu-toggle"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={23} /> : <Menu size={23} />}
      </button>
      {open && (
        <div id="mobile-navigation" className="mobile-menu" ref={menu}>
          <nav aria-label="Mobile navigation">
            <Link href={`${base}#work`} onClick={() => setOpen(false)}>
              Works <ArrowUpRight size={20} />
            </Link>
            <Link href={`${base}#about`} onClick={() => setOpen(false)}>
              About <ArrowUpRight size={20} />
            </Link>
            <Link href={`${base}#contact`} onClick={() => setOpen(false)}>
              Let’s talk <ArrowUpRight size={20} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
