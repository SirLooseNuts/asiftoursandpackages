import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoUrl from "@/assets/logo.webp";

const nav = [
  { to: "/", label: "Home" },
  { to: "/packages", label: "Packages" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Fleet" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <img src={logoUrl} alt="ASIF Logo" className="h-12 w-auto object-contain rounded-sm" />
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold tracking-tight text-foreground leading-none">ASIF</span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-accent mt-1 leading-none">tours and packages</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:+918921062797"
          className="hidden rounded-sm border border-accent/50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent hover:text-accent-foreground md:inline-block"
        >
          +91 89210 62797
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-base text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:+918921062797" className="text-sm text-accent">
              Call +91 89210 62797
            </a>
          </div>
        </div>
      )}
    </header>
  );
}