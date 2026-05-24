import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Tour Packages — Asif Tours & Travels" },
      { name: "description", content: "One to seven day packages and train tours across Kerala, Karnataka, Tamil Nadu and beyond. School, family, honeymoon and pilgrimage trips." },
      { property: "og:title", content: "Tour Packages — Asif Tours & Travels" },
      { property: "og:description", content: "Curated multi-day journeys across South India and beyond." },
    ],
  }),
  component: PackagesPage,
});

const groups = [
  {
    days: "One Day",
    items: [
      "Thenmala · Palaruvi · Courtallam Waterfalls",
      "Kochi Wonderla · Lulu Mall",
      "Athirapally · Vazhachal · Dream World / Silver Storm",
      "Ponmudi · Mankayam · Peppara Dam",
      "Tripparappu · Vattakottai · Kanyakumari",
    ],
  },
  {
    days: "Two Days",
    items: [
      "Munnar · Thekkady / Wagamon",
      "Kodaikanal · Munnar",
      "Munnar · Kochi Wonderla",
      "Ooty · Wayanad",
      "Ooty · Back Thunder",
      "Kodaikanal · Madurai · Palani",
    ],
  },
  {
    days: "Three Days",
    items: [
      "Kodaikanal · Munnar · Kochi Wonderla",
      "Ooty · Wayanad · Kochi Wonderla",
      "Wayanad · Coorg · Mysore",
      "Wayanad · Coorg · Belur",
      "Hogenakkal · Mysore · Ooty",
    ],
  },
  {
    days: "Four Days",
    items: [
      "Wayanad · Coorg · Mysore · Bangalore",
      "Coorg · Mysore · Bangalore Wonderla",
      "Malpe Island · Chikmagalur · Coorg · Wayanad",
      "Hogenakkal · Bangalore · Mysore · Wayanad",
      "Wayanad · Coorg · Chikmagalur · Belur",
      "Guruvayoor · Mookambika · Mysore · Ooty",
      "Rameswaram · Velankanni · Madurai · Palani · Kodaikanal",
    ],
  },
  {
    days: "Five Days",
    items: [
      "Wayanad · Coorg · Mysore · Wonderla · Bangalore",
      "Coorg · Goa · Bangalore · Mysore",
      "Hogenakkal · Hyderabad · Chennai · Pondicherry",
      "Hogenakkal · Hyderabad · Bangalore Wonderla",
      "Wayanad · Coorg · Belur · Chikmagalur · Mysore",
    ],
  },
  {
    days: "Six Days",
    items: [
      "Wayanad · Coorg · Goa · Bangalore · Mysore",
      "Hogenakkal · Hyderabad · Bangalore · Wonderla · Mysore",
      "Pondicherry · Hyderabad · Bangalore · Coorg · Wayanad · Wonderla",
      "Rameswaram · Madurai · Velankanni · Bangalore · Mysore · Ooty",
      "Coorg · Belur · Chikmagalur · Goa · Bangalore · Mysore",
    ],
  },
  {
    days: "Seven Days",
    items: [
      "Wayanad · Coorg · Goa · Bangalore · Mysore · Ooty",
      "Pondicherry · Hyderabad · Bangalore Wonderla · Mysore · Coorg",
      "Wayanad · Coorg · Chikmagalur · Dandeli · Bangalore",
      "Coorg · Belur · Chikmagalur · Bangalore · Mysore",
    ],
  },
  {
    days: "Train Tours · Students",
    items: [
      "Goa · Hyderabad",
      "Goa · Bangalore · Mysore",
      "Bangalore · Mysore · Coorg",
      "Delhi · Agra · Nainital",
      "Delhi · Shimla · Kulu · Manali · Goa",
      "Agra · Chandigarh · Delhi · Kolkata · Darjeeling · Gangtok · Sikkim",
    ],
  },
];

const services = [
  "School / College Tours",
  "Family Holidays",
  "Pilgrim Packages",
  "Honeymoon Trips",
  "Business Travel",
  "AC & Non-AC Bus Hire (7 / 12 / 17 / 26 / 34 / 49 seats)",
];

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 pt-32 pb-12 lg:px-10">
        <div className="text-xs uppercase tracking-[0.3em] text-accent">Tours &amp; Packages</div>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
          A trip for every kind of traveller.
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
          From a single-day escape to a week across South India — every itinerary is
          tailored, with experienced guides, comfortable coaches and curated stays.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-10">
        <div className="flex flex-wrap gap-3">
          {services.map((s) => (
            <span key={s} className="border border-border bg-card px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-px bg-border md:grid-cols-2">
          {groups.map((g) => (
            <div key={g.days} className="bg-background p-8 lg:p-10">
              <div className="flex items-baseline justify-between border-b border-border pb-4">
                <h2 className="font-display text-3xl text-foreground">{g.days}</h2>
                <span className="text-xs uppercase tracking-[0.2em] text-accent">{g.items.length} routes</span>
              </div>
              <ul className="mt-6 space-y-3">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="mt-2 h-px w-4 shrink-0 bg-accent" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-card">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 lg:flex-row lg:items-center lg:px-10">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent">Bespoke</div>
            <h2 className="mt-4 max-w-2xl font-display text-4xl text-foreground md:text-5xl">
              Don&apos;t see your dream route? We&apos;ll design it.
            </h2>
          </div>
          <a
            href={`https://wa.me/918921062797?text=${encodeURIComponent("Hi Asif Tours & Travels, I'd like a custom quote for a tour package. Please share details and pricing.")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-primary px-7 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground hover:bg-primary/90"
          >
            Request a quote <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}