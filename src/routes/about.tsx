import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowUpRight, Compass, Shield, Sparkles, Heart } from "lucide-react";
import aboutTravelers from "@/assets/about-travelers.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Asif Tours & Travels" },
      {
        name: "description",
        content:
          "Founded in 2010 in Kollam, Kerala, Asif Holidays brings over 15 years of trusted group travel, pilgrimage packages, and luxury coach bookings.",
      },
      { property: "og:title", content: "About Us — Asif Tours & Travels" },
      {
        property: "og:description",
        content:
          "The story of Asif Holidays — 15+ years of comfort, safety, and curated travel experiences across South India.",
      },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: Compass,
    title: "Tailored Itineraries",
    body: "Every journey is customized around your group — matching your desired pace, dietary preferences, prayer stops, and sightseeing goals.",
  },
  {
    icon: Shield,
    title: "Safety First",
    body: "Our modern fleet features experienced drivers, real-time GPS tracking, and safety protocols to ensure complete peace of mind.",
  },
  {
    icon: Sparkles,
    title: "Quiet Luxury",
    body: "From premium stays to spacious and well-ventilated coaches, we focus on delivering comfort and relaxation at every mile.",
  },
  {
    icon: Heart,
    title: "Genuine Care",
    body: "We treat every traveller like family. Our local guides and support staff are dedicated to making you feel welcome and cared for.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-16 lg:px-10">
        <div className="text-xs uppercase tracking-[0.3em] text-accent">About Us</div>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
          We believe travel should be a slow, quiet luxury.
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Asif Adhil Group of Concern brings together trusted travel expertise under{" "}
          <span className="text-foreground">Asif Holidays</span>. From our base in
          Kadakkal, Kollam, we design journeys that pay attention to every detail.
        </p>
      </section>

      {/* Story & Image Section */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl">
                Our Story
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Since our founding in 2010, we have stayed true to one core philosophy: travel
                is not just about visiting new places, it is about how those places make you
                feel. What started as a single coach service in Kollam has grown into a
                comprehensive travel solution across Kerala, Karnataka, and Tamil Nadu.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Today, Asif Holidays is synonym with reliable pilgrimage routes, corporate team
                outings, custom family packages, and luxury group travels. Our satisfaction is
                built on the small details — clean rooms, timely stopovers, and pleasant journeys.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-8 border-t border-border/60 pt-8">
              <Stat k="15+" v="Years of journeys" />
              <Stat k="50k+" v="Happy travellers" />
              <Stat k="40+" v="Destinations" />
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="overflow-hidden bg-card">
              <img
                src={aboutTravelers}
                alt="ASIF coaches animation"
                width={320}
                height={320}
                className="w-full h-auto transition-transform duration-700 hover:scale-102"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="border-t border-border/60 bg-card mt-20">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-accent">Our Values</div>
            <h2 className="mt-6 font-display text-4xl leading-tight text-foreground md:text-5xl">
              The foundation of every single trip we plan.
            </h2>
          </div>
          
          <div className="mt-16 grid gap-px bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title} className="bg-card p-8 transition-colors hover:bg-background">
                <p.icon className="text-accent" size={26} strokeWidth={1.25} />
                <h3 className="mt-8 font-display text-2xl text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="border-y border-border/60 bg-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 text-background lg:flex-row lg:items-center lg:px-10">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent">Begin</div>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-background md:text-5xl">
              Let's create a journey tailored to you.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/packages"
              className="inline-flex items-center gap-3 bg-primary px-7 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View Packages <ArrowUpRight size={14} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-background/30 px-7 py-4 text-xs uppercase tracking-[0.25em] text-background hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
            >
              Contact Us <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-display text-4xl text-foreground md:text-5xl">{k}</div>
      <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{v}</div>
    </div>
  );
}
