import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import fleetBus from "@/assets/fleet-bus.webp";
import { ArrowUpRight, BusFront, Car, Plane, Building2 } from "lucide-react";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Fleet & Services — Asif Tours & Travels" },
      { name: "description", content: "Luxury and budget bus rentals, sedans, SUVs and tempo travellers. Outstation, airport pickup, corporate and pilgrimage travel." },
      { property: "og:title", content: "Fleet & Services — Asif Tours" },
      { property: "og:description", content: "AC / Non-AC coaches, premium cars and chauffeur-driven travel across South India." },
      { property: "og:image", content: fleetBus },
    ],
  }),
  component: FleetPage,
});

const fleet = [
  { seats: "7", type: "Tempo Traveller", note: "Compact family trips" },
  { seats: "12", type: "Mini Coach", note: "Day tours & airport runs" },
  { seats: "17", type: "Force Urbania", note: "Group getaways" },
  { seats: "26", type: "Mid-size Coach", note: "School & college groups" },
  { seats: "34", type: "AC Coach", note: "Multi-day comfort" },
  { seats: "49", type: "Volvo / 2x2 Sleeper", note: "Long-haul luxury" },
];

const services = [
  { icon: BusFront, title: "Luxury & Budget Buses", body: "AC and Non-AC coaches, Volvo, 3x2 and 2x2 configurations." },
  { icon: Car, title: "Premium Car Rentals", body: "Sedan, SUV and tempo traveller with chauffeur." },
  { icon: Plane, title: "Airport Transfers", body: "Punctual pickup and drop across Trivandrum, Kochi & beyond." },
  { icon: Building2, title: "Corporate & Group", body: "Curated travel for offices, schools and pilgrimages." },
];

export default function FleetPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={fleetBus} alt="Luxury tour coach on mountain road" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-40 pb-24 lg:px-10 lg:pt-52 lg:pb-32">
          <div className="text-xs uppercase tracking-[0.3em] text-accent">Our Fleet</div>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
            A modern fleet, kept quietly perfect.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Every coach is driven by an experienced hand and finished with the comforts of a
            long, easy road — entertainment, climate control and space to breathe.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {fleet.map((f) => (
            <div key={f.seats} className="bg-card p-10">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-6xl text-accent">{f.seats}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">seater</span>
              </div>
              <h3 className="mt-6 font-display text-2xl text-foreground">{f.type}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-accent">Services</div>
          <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight text-foreground md:text-5xl">
            Everything you need, under one roof.
          </h2>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="bg-card p-8">
                <s.icon className="text-accent" size={26} strokeWidth={1.25} />
                <h3 className="mt-6 font-display text-xl text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent">Stays</div>
            <h3 className="mt-6 font-display text-3xl text-foreground md:text-4xl">Spacious rooms, quietly luxurious.</h3>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Rooms are appointed with the most advanced facilities — designed for relaxation
              and leisure after a long day. We split rooms thoughtfully, and all our partner
              hotels are CCTV-monitored with dedicated security.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent">Guidance</div>
            <h3 className="mt-6 font-display text-3xl text-foreground md:text-4xl">A guide who walks every step with you.</h3>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              The heart of an Asif trip is a trained tour guide — chosen for hospitality,
              local knowledge and an instinct for the unexpected. Your safety and quiet
              enjoyment are the first measure of a good day on the road.
            </p>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-10">
          <p className="font-display text-2xl text-foreground">Ready to ride?</p>
          <a
            href={`https://wa.me/918921062797?text=${encodeURIComponent("Hi Asif Tours & Travels, I'd like to book a coach. Please share availability and pricing.")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-primary px-7 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground hover:bg-primary/90"
          >
            Book a coach <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}