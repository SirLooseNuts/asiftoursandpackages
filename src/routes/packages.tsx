import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowUpRight, MapPin } from "lucide-react";
import { groups, services } from "@/lib/packages";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

/* ── helpers ── */
const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=400&h=300&q=80`;

/* ── destination data with verified Unsplash photo IDs ── */
const destinationList = [
  {
    state: "Kerala",
    items: [
      {
        name: "Wagamon",
        img: u("photo-1500382017468-9049fed747ef"),
        attractions: [
          "Valanjanganam Waterfall",
          "Kuttikanam",
          "Paruthumpara",
          "Wagon Meadows",
          "Pine Forest",
          "Thangal Para",
          "Glass Bridge",
          "Adventure Park",
          "Palozhukumpara Waterfalls"
        ]
      },
      {
        name: "Munnar",
        img: u("photo-1593693397690-362cb9666fc2"),
        attractions: [
          "Iravikulam National Park",
          "Cheeyapara Waterfalls",
          "Photopoint",
          "Rose Garden",
          "Mattupetty Dam",
          "Tea Museum",
          "Boating",
          "Eco Point",
          "Kundala Dam",
          "Top Station"
        ]
      },
      {
        name: "Wayanad",
        img: u("photo-1602216056096-3b40cc0c9944"),
        attractions: [
          "Muthanga Wildlife Sanctuary",
          "Meenmutty Waterfalls",
          "Soochipara Waterfalls",
          "Edakkal Cave",
          "Kuruva Island",
          "Pookode Lake",
          "Banasura Sagar Dam",
          "Chembra Peak"
        ]
      }
    ]
  },
  {
    state: "Tamil Nadu",
    items: [
      {
        name: "Kodaikanal",
        img: u("photo-1439066615861-d1af74d74000"),
        attractions: [
          "View Point",
          "Pine Forest",
          "Guna Cave",
          "Pillar Rocks",
          "Suicide Point",
          "Golf Park",
          "Kodai Lake",
          "Highrange Waterfall"
        ]
      },
      {
        name: "Ooty",
        img: u("photo-1585409677983-0f6c41ca9c3b"),
        attractions: [
          "Tea Factory",
          "Botanical Garden",
          "Rose Garden",
          "Pine Forest",
          "Ooty Lake"
        ]
      }
    ]
  },
  {
    state: "Karnataka",
    items: [
      {
        name: "Coorg",
        img: u("photo-1511920170033-f8396924c348"),
        attractions: [
          "Dubare Forest",
          "River Rafting",
          "Bamboo Forest",
          "Golden Temple",
          "Abbey Falls"
        ]
      },
      {
        name: "Mysore",
        img: u("photo-1570168007204-dfb528c6958f"),
        attractions: [
          "Chamundi Hills",
          "Nandi Hills",
          "St. Philomena Church",
          "Mysore Palace",
          "Brindavan Garden"
        ]
      },
      {
        name: "Chikmagalur",
        img: u("photo-1495474472287-4d71bcdd2085"),
        attractions: [
          "360° View Point",
          "Hebbe Waterfalls",
          "Jerry Waterfalls",
          "Shooting Point",
          "Mullayanagiri"
        ]
      },
      {
        name: "Udupi",
        img: u("photo-1507525428034-b723cf961d3e"),
        attractions: [
          "Udupi Temple",
          "Malpe Beach",
          "St. Mary's Island"
        ]
      }
    ]
  },
  {
    state: "Goa",
    items: [
      {
        name: "Goa",
        img: u("photo-1507525428034-b723cf961d3e"),
        attractions: [
          "Old Goa Church",
          "Boat Cruise",
          "Baga Beach",
          "Aguada Fort",
          "St. Francis Xavier Church",
          "Belur Water Activities",
          "Banana Ride",
          "Rafting",
          "Kayaking",
          "Bumper Ride",
          "Speedboat Ride",
          "Cruise Boating"
        ]
      }
    ]
  }
];

/* ── route ── */
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

/* ── page ── */
export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-12 lg:px-10">
        <div className="text-xs uppercase tracking-[0.3em] text-accent">Tours &amp; Packages</div>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
          A trip for every kind of traveller.
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
          From a single-day escape to a week across South India — every itinerary is
          tailored, with experienced guides, comfortable coaches and curated stays.
        </p>

        {/* ── Two Options ── */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          {/* Option 1: View Packages – scrolls to routes grid */}
          <a
            href="#routes"
            className="group inline-flex items-center gap-2 bg-primary px-7 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-all hover:bg-primary/90"
          >
            View Packages
            <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          {/* Option 2: Explore Destinations – opens dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="group inline-flex items-center gap-2 border border-border px-7 py-4 text-xs uppercase tracking-[0.25em] text-foreground transition-all hover:bg-accent hover:text-accent-foreground hover:border-accent cursor-pointer">
                <MapPin size={14} />
                Explore Destinations
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </DialogTrigger>

            <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto p-6 md:p-10">
              <DialogHeader className="border-b border-border/60 pb-6">
                <DialogTitle className="font-display text-3xl text-foreground sm:text-4xl">
                  Tour Destinations
                </DialogTitle>
                <DialogDescription className="mt-2 text-sm text-muted-foreground">
                  Every place we journey to — from backwaters to snow-capped peaks.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-10 pt-6">
                {destinationList.map((d) => (
                  <div key={d.state}>
                    {/* State header */}
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-px flex-1 bg-border/60" />
                      <h3 className="font-display text-lg text-accent uppercase tracking-[0.2em]">
                        {d.state}
                      </h3>
                      <span className="h-px flex-1 bg-border/60" />
                    </div>

                    {/* Destination cards grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {d.items.map((item) => (
                        <div
                          key={item.name}
                          className="group flex flex-col overflow-hidden bg-card border border-border/80 hover:border-accent/40 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          {/* Image container */}
                          <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                            <img
                              src={item.img}
                              alt={item.name}
                              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                            <div className="absolute bottom-3 left-4">
                              <h4 className="font-display text-2xl text-white font-semibold leading-tight drop-shadow-sm">
                                {item.name}
                              </h4>
                            </div>
                          </div>

                          {/* Attractions list container */}
                          <div className="flex-1 p-5 flex flex-col justify-between">
                            <div>
                              <div className="text-[10px] uppercase tracking-wider text-accent font-semibold mb-3">
                                Attractions & Landmarks
                              </div>
                              <ul className="grid grid-cols-1 gap-1.5">
                                {item.attractions.map((attr) => (
                                  <li key={attr} className="flex items-center gap-2 text-xs text-muted-foreground font-sans">
                                    <span className="h-1.5 w-1.5 rounded-full bg-accent/60 shrink-0" />
                                    <span className="leading-normal">{attr}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Service tags */}
      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-10">
        <div className="flex flex-wrap gap-3">
          {services.map((s) => (
            <span key={s} className="border border-border bg-card px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Route groups */}
      <section id="routes" className="mx-auto max-w-7xl px-6 py-16 lg:px-10 scroll-mt-24">
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
                    <span className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                    <Link
                      to="/contact"
                      search={{ route: it }}
                      className="transition-all hover:text-accent hover:translate-x-1 duration-200 cursor-pointer"
                    >
                      {it}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
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