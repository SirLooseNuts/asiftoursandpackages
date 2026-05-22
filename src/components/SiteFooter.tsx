import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-3xl text-foreground">Asif Adhil Group of Concern</div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Fifteen years of crafting journeys across South India. Two trusted names —
              <span className="text-foreground"> Asif Holidays</span> and
              <span className="text-foreground"> BigBro Travel Hub</span> — one promise of
              comfort, safety and quiet luxury.
            </p>
            <div className="hairline mt-8 max-w-xs" />
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent">Explore</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
              <li><Link to="/packages" className="text-muted-foreground hover:text-foreground">Packages</Link></li>
              <li><Link to="/fleet" className="text-muted-foreground hover:text-foreground">Fleet</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent">Contact</div>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin size={14} className="mt-1 text-accent" /> Kadakkal, Chithara, Kollam — Trivandrum, Kerala</li>
              <li className="flex items-center gap-2"><Phone size={14} className="text-accent" /> +91 89210 62797</li>
              <li className="flex items-center gap-2"><Phone size={14} className="text-accent" /> +91 96451 15695</li>
              <li className="flex items-center gap-2">
                <Instagram size={14} className="text-accent" />
                <a href="https://www.instagram.com/asif_holidays_official/" target="_blank" rel="noreferrer" className="hover:text-foreground">@asif_holidays_official</a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={14} className="text-accent" />
                <a href="https://www.instagram.com/bigbro_travelhub_official/" target="_blank" rel="noreferrer" className="hover:text-foreground">@bigbro_travelhub_official</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Asif Adhil Group of Concern. All rights reserved.</div>
          <div className="tracking-[0.2em] uppercase">Asif Always King · A team with high potential</div>
        </div>
      </div>
    </footer>
  );
}