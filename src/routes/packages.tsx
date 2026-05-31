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
      { name: "Thenmala", img: u("photo-1440342359743-84fcb8c21f21") },
      { name: "Palaruvi Falls", img: u("photo-1432405972618-c60b0225b8f9") },
      { name: "Kochi", img: u("photo-1569263979104-865ab7cd8d13") },
      { name: "Wonderla Kochi", img: u("photo-1513889961551-628c1e5e2ee9") },
      { name: "Lulu Mall", img: u("photo-1441986300917-64674bd600d8") },
      { name: "Athirappilly Falls", img: u("photo-1433086966358-54859d0ed716") },
      { name: "Vazhachal Falls", img: u("photo-1544735716-ea9ef790f501") },
      { name: "Dream World Water Park", img: u("photo-1560813962-ff3d8fcf59ba") },
      { name: "Silver Storm Water Theme Park", img: u("photo-1527786356703-4b100091cd2c") },
      { name: "Ponmudi", img: u("photo-1418065460487-3e41a6c84dc5") },
      { name: "Mankayam", img: u("photo-1470071459604-3b5ec3a7fe05") },
      { name: "Peppara Dam", img: u("photo-1504618223053-559bdef9dd5a") },
      { name: "Munnar", img: u("photo-1593693397690-362cb9666fc2") },
      { name: "Thekkady", img: u("photo-1553603227-2358aabe821e") },
      { name: "Vagamon", img: u("photo-1500382017468-9049fed747ef") },
      { name: "Wayanad", img: u("photo-1602216056096-3b40cc0c9944") },
      { name: "Guruvayoor", img: u("photo-1548013146-72479768bada") },
    ],
  },
  {
    state: "Tamil Nadu",
    items: [
      { name: "Courtallam Falls", img: u("photo-1494472155656-f34e81b17ddc") },
      { name: "Thirparappu Falls", img: u("photo-1546182990-dffeafbe841d") },
      { name: "Vattakottai Fort", img: u("photo-1552465011-b4e21bf6e79a") },
      { name: "Kanyakumari", img: u("photo-1476514525535-07fb3b4ae5f1") },
      { name: "Kodaikanal", img: u("photo-1439066615861-d1af74d74000") },
      { name: "Ooty", img: u("photo-1585409677983-0f6c41ca9c3b") },
      { name: "Black Thunder Theme Park", img: u("photo-1508614589041-895b88991e3e") },
      { name: "Madurai", img: u("photo-1561361513-2d000a50f0dc") },
      { name: "Palani", img: u("photo-1548013146-72479768bada") },
      { name: "Hogenakkal Falls", img: u("photo-1520962880247-cfaf541c8724") },
      { name: "Rameswaram", img: u("photo-1582510003544-4d00b7f74220") },
      { name: "Velankanni", img: u("photo-1578662996442-48f60103fc96") },
      { name: "Chennai", img: u("photo-1477959858617-67f85cf4f1df") },
    ],
  },
  {
    state: "Karnataka",
    items: [
      { name: "Coorg", img: u("photo-1511920170033-f8396924c348") },
      { name: "Mysore", img: u("photo-1570168007204-dfb528c6958f") },
      { name: "Belur", img: u("photo-1561361513-2d000a50f0dc") },
      { name: "Bangalore", img: u("photo-1477959858617-67f85cf4f1df") },
      { name: "Wonderla Bangalore", img: u("photo-1513889961551-628c1e5e2ee9") },
      { name: "Malpe Beach", img: u("photo-1507525428034-b723cf961d3e") },
      { name: "Chikmagalur", img: u("photo-1495474472287-4d71bcdd2085") },
      { name: "Mookambika", img: u("photo-1548013146-72479768bada") },
      { name: "Dandeli", img: u("photo-1501785888041-af3ef285b470") },
    ],
  },
  {
    state: "Telangana",
    items: [
      { name: "Hyderabad", img: u("photo-1599661046289-e31897846e41") },
    ],
  },
  {
    state: "Puducherry",
    items: [
      { name: "Pondicherry", img: u("photo-1582510003544-4d00b7f74220") },
    ],
  },
  {
    state: "Goa",
    items: [
      { name: "Goa", img: u("photo-1507525428034-b723cf961d3e") },
    ],
  },
  {
    state: "Delhi",
    items: [
      { name: "Delhi", img: u("photo-1587474260584-136574528ed5") },
    ],
  },
  {
    state: "Uttar Pradesh",
    items: [
      { name: "Agra", img: u("photo-1524492412937-b28074a5d7da") },
    ],
  },
  {
    state: "Uttarakhand",
    items: [
      { name: "Nainital", img: u("photo-1439066615861-d1af74d74000") },
    ],
  },
  {
    state: "Himachal Pradesh",
    items: [
      { name: "Shimla", img: u("photo-1589308078059-be1415eab4c3") },
      { name: "Kullu", img: u("photo-1605649487212-47bdab064df7") },
      { name: "Manali", img: u("photo-1454496522488-7a8e488e8606") },
    ],
  },
  {
    state: "Chandigarh",
    items: [
      { name: "Chandigarh", img: u("photo-1581793745862-99fde7fa73d2") },
    ],
  },
  {
    state: "West Bengal",
    items: [
      { name: "Kolkata", img: u("photo-1558431382-27e303142255") },
      { name: "Darjeeling", img: u("photo-1566837945700-30057527ade0") },
    ],
  },
  {
    state: "Sikkim",
    items: [
      { name: "Gangtok", img: u("photo-1571536802807-30451e3955d8") },
      { name: "Sikkim", img: u("photo-1501854140801-50d01698950b") },
    ],
  },
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

                    {/* Destination tiles grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {d.items.map((item) => (
                        <div
                          key={item.name}
                          className="group/tile relative overflow-hidden aspect-[4/3] bg-muted cursor-pointer"
                        >
                          <img
                            src={item.img}
                            alt={item.name}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover/tile:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                          <div className="absolute inset-x-0 bottom-0 p-3">
                            <span className="text-xs font-medium text-white leading-tight">
                              {item.name}
                            </span>
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