import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowUpRight } from "lucide-react";
import { groups, services } from "@/lib/packages";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const destinationList = [
  {
    state: "Kerala",
    img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80",
    items: [
      "Thenmala",
      "Palaruvi Falls",
      "Kochi",
      "Wonderla Kochi",
      "Lulu Mall",
      "Athirappilly Falls",
      "Vazhachal Falls",
      "Dream World Water Park",
      "Silver Storm Water Theme Park",
      "Ponmudi",
      "Mankayam",
      "Peppara Dam",
      "Munnar",
      "Thekkady",
      "Vagamon",
      "Wayanad",
      "Guruvayoor",
    ],
  },
  {
    state: "Tamil Nadu",
    img: "https://images.unsplash.com/photo-1580541631971-e40df2133a34?auto=format&fit=crop&w=600&q=80",
    items: [
      "Courtallam Falls",
      "Thirparappu Falls",
      "Vattakottai Fort",
      "Kanyakumari",
      "Kodaikanal",
      "Ooty",
      "Black Thunder Theme Park",
      "Madurai",
      "Palani",
      "Hogenakkal Falls",
      "Rameswaram",
      "Velankanni",
      "Chennai",
    ],
  },
  {
    state: "Karnataka",
    img: "https://images.unsplash.com/photo-1590050752117-238cb0612b1b?auto=format&fit=crop&w=600&q=80",
    items: [
      "Coorg",
      "Mysore",
      "Belur",
      "Bangalore",
      "Wonderla Bangalore",
      "Malpe Beach",
      "Chikmagalur",
      "Mookambika",
      "Dandeli",
    ],
  },
  {
    state: "Telangana",
    img: "https://images.unsplash.com/photo-1608958415714-36a5a22bbd72?auto=format&fit=crop&w=600&q=80",
    items: ["Hyderabad"],
  },
  {
    state: "Puducherry",
    img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
    items: ["Pondicherry"],
  },
  {
    state: "Goa",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    items: ["Goa"],
  },
  {
    state: "Delhi",
    img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80",
    items: ["Delhi"],
  },
  {
    state: "Uttar Pradesh",
    img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80",
    items: ["Agra"],
  },
  {
    state: "Uttarakhand",
    img: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=600&q=80",
    items: ["Nainital"],
  },
  {
    state: "Himachal Pradesh",
    img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80",
    items: ["Shimla", "Kullu", "Manali"],
  },
  {
    state: "Chandigarh",
    img: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=600&q=80",
    items: ["Chandigarh"],
  },
  {
    state: "West Bengal",
    img: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=600&q=80",
    items: ["Kolkata", "Darjeeling"],
  },
  {
    state: "Sikkim",
    img: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=600&q=80",
    items: ["Gangtok", "Sikkim"],
  },
];

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

        <div className="mt-8">
          <Dialog>
            <DialogTrigger asChild>
              <button className="group inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-all hover:bg-primary/90 cursor-pointer">
                Explore Destinations
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto p-6 md:p-10">
              <DialogHeader className="border-b border-border/60 pb-6">
                <DialogTitle className="font-display text-3xl text-foreground sm:text-4xl">
                  Complete List of Tour Destinations
                </DialogTitle>
                <DialogDescription className="mt-2 text-sm text-muted-foreground">
                  Explore the states and cities we travel to.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-6 pt-6 sm:grid-cols-2 md:grid-cols-3">
                {destinationList.map((d) => (
                  <div
                    key={d.state}
                    className="group flex flex-col overflow-hidden border border-border bg-card transition-all duration-300 hover:border-accent/40 hover:shadow-sm"
                  >
                    <div className="relative h-32 overflow-hidden bg-muted">
                      <img
                        src={d.img}
                        alt={`${d.state} scenery`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
                      <h3 className="absolute bottom-3 left-4 font-display text-xl text-foreground">
                        {d.state}
                      </h3>
                    </div>
                    <div className="flex-1 p-5">
                      <ul className="space-y-2">
                        {d.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-xs text-muted-foreground transition-colors duration-150 hover:text-foreground"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
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