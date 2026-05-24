import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  ArrowUpRight,
  BusFront,
  Hotel,
  TrainFront,
  Plane,
  FileCheck2,
  Car,
  Users,
  MapPinned,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Asif Tours & Travels" },
      {
        name: "description",
        content:
          "Bus booking, hotel booking, train booking, airplane tickets, bus permit applications, rental and group travel services across South India.",
      },
      { property: "og:title", content: "Services — Asif Tours & Travels" },
      {
        property: "og:description",
        content:
          "Everything for your journey — bookings, permits, rentals and curated travel under one roof.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: BusFront,
    title: "Bus Booking",
    body: "Reserved seats on private and luxury coaches across Kerala, Karnataka and Tamil Nadu.",
  },
  {
    icon: Hotel,
    title: "Hotel Booking",
    body: "Hand-picked stays — from budget to boutique — at every stop on your itinerary.",
  },
  {
    icon: TrainFront,
    title: "Train Booking",
    body: "Tatkal, confirmed and group rail bookings for student and family tours across India.",
  },
  {
    icon: Plane,
    title: "Air Ticket Booking",
    body: "Domestic and international flights with the best fares and quiet, attentive support.",
  },
  {
    icon: FileCheck2,
    title: "Bus Permit Service",
    body: "End-to-end assistance for inter-state and tourist bus permit applications.",
  },
  {
    icon: Car,
    title: "Rental Service",
    body: "Sedan, SUV, tempo traveller and luxury coaches — with or without chauffeur.",
  },
  {
    icon: Users,
    title: "Group & Corporate Travel",
    body: "School, college, pilgrimage and corporate group movements, end-to-end.",
  },
  {
    icon: MapPinned,
    title: "Custom Itinerary Design",
    body: "Tell us the dream — we plan stays, transfers, guides and the small details.",
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 pt-32 pb-16 lg:px-10">
        <div className="text-xs uppercase tracking-[0.3em] text-accent">Services</div>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
          Every part of the journey, taken care of.
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Bookings, permits, rentals and bespoke planning — handled by a team that has spent
          fifteen years on the road.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group bg-card p-8 transition-colors hover:bg-background">
              <s.icon className="text-accent" size={26} strokeWidth={1.25} />
              <h3 className="mt-8 font-display text-2xl text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-accent"
              >
                Enquire <ArrowUpRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 lg:flex-row lg:items-center lg:px-10">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent">One window</div>
            <h2 className="mt-4 max-w-2xl font-display text-4xl text-foreground md:text-5xl">
              Tell us what you need — we&apos;ll handle the rest.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-primary px-7 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground hover:bg-primary/90"
          >
            Start an enquiry <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}