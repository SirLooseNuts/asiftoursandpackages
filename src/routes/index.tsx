import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Compass, Shield, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroMunnar from "@/assets/hero-munnar.jpg";
import destBackwaters from "@/assets/dest-backwaters.jpg";
import destOoty from "@/assets/dest-ooty.jpg";
import destCoorg from "@/assets/dest-coorg.jpg";
import destKanyakumari from "@/assets/dest-kanyakumari.jpg";
import destGoa from "@/assets/dest-goa.jpg";
import aboutTravelers from "@/assets/about-travelers.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Asif Tours & Travels — Curated Journeys across South India" },
      { name: "description", content: "Bespoke tours, luxury coaches and pilgrimage packages from Kollam & Trivandrum. 15+ years of cherished travel memories." },
      { property: "og:image", content: heroMunnar },
      { name: "twitter:image", content: heroMunnar },
    ],
  }),
  component: Index,
});

const destinations = [
  { name: "Munnar", img: heroMunnar, note: "Tea hills & Eravikulam" },
  { name: "Backwaters", img: destBackwaters, note: "Houseboat sunsets" },
  { name: "Ooty", img: destOoty, note: "Nilgiri pine country" },
  { name: "Coorg", img: destCoorg, note: "Coffee at first light" },
  { name: "Kanyakumari", img: destKanyakumari, note: "Where three seas meet" },
  { name: "Goa", img: destGoa, note: "Palms & quiet shores" },
];

const pillars = [
  { icon: Compass, title: "Tailored Itineraries", body: "Every journey is built around your group — pace, palate, prayer stops and all." },
  { icon: Shield, title: "Safety First", body: "Seasoned drivers, GPS-tracked coaches and CCTV-monitored stays." },
  { icon: Sparkles, title: "Quiet Luxury", body: "Spacious rooms, modern fleet, and the calm of a well-run trip." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <video
            src="/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />
        </div>
        <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent">
              <span className="h-px w-10 bg-accent" /> Est. 2010 · Kollam, Kerala
            </div>
            <h1 className="text-balance font-display text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              It&apos;s time<br />
              <em className="font-normal italic text-accent">for travel.</em>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              Asif Tours &amp; Travels craft slow, well-considered journeys across
              Kerala, Karnataka and Tamil Nadu — from misty hills to coastal sunsets.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/packages"
                className="group inline-flex items-center gap-2 bg-primary px-7 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-all hover:bg-primary/90"
              >
                View Packages
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <a
                href={`https://wa.me/918921062797?text=${encodeURIComponent("Hi Asif Tours & Travels, I'd like to plan a custom trip. Please help me design an itinerary.")}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-[0.25em] text-foreground underline-offset-8 hover:underline"
              >
                Plan a custom trip
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-accent">About</div>
            <h2 className="mt-6 font-display text-4xl leading-tight text-foreground md:text-5xl">
              Fifteen years of turning journeys into memory.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Asif Adhil Group of Concern brings together trusted travel expertise under
              <span className="text-foreground"> Asif Holidays</span>. From stunning
              landscapes to vibrant cultures, we design trips that pay attention to every
              detail. Our customer-first approach has made satisfaction our quiet trademark.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-8">
              <Stat k="15+" v="Years of journeys" />
              <Stat k="50k+" v="Happy travellers" />
              <Stat k="40+" v="Destinations" />
            </div>
          </div>
        </div>

        <div className="mt-20 overflow-hidden bg-card">
          <img src={aboutTravelers} alt="ASIF coaches animation" width={320} height={320} loading="lazy" className="w-full h-auto" />
        </div>
      </section>

      {/* Pillars */}
      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto grid max-w-7xl gap-px bg-border/60 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="bg-card p-10 lg:p-14">
              <p.icon className="text-accent" size={26} strokeWidth={1.25} />
              <h3 className="mt-8 font-display text-2xl text-foreground">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Destinations */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <div className="flex items-end justify-between gap-8">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent">Destinations</div>
            <h2 className="mt-6 font-display text-4xl leading-tight text-foreground md:text-5xl">
              A short list of long-loved places.
            </h2>
          </div>
          <Link to="/packages" className="hidden text-xs uppercase tracking-[0.25em] text-foreground underline-offset-8 hover:underline md:inline-block">
            All packages →
          </Link>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <article key={d.name} className={`group relative overflow-hidden flex flex-col ${i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""}`}>
              <div className={`relative overflow-hidden w-full flex-1 ${i === 0 ? "aspect-[16/12] lg:aspect-auto lg:h-full" : "aspect-[4/5]"}`}>
                <img src={d.img} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <div>
                    <h3 className="font-display text-3xl text-white">{d.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/80">{d.note}</p>
                  </div>
                  <ArrowUpRight className="text-white/80 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={20} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative isolate overflow-hidden bg-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 text-background lg:flex-row lg:items-center lg:px-10">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent">Begin</div>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-background md:text-5xl">
              Tell us where you&apos;d like to wake up tomorrow.
            </h2>
          </div>
          <a
            href={`https://wa.me/918921062797?text=${encodeURIComponent("Hi Asif Tours & Travels, I'd like to plan my journey. Please help me with an itinerary.")}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border border-background/30 px-7 py-4 text-xs uppercase tracking-[0.25em] text-background transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent"
          >
            Plan my journey <ArrowUpRight size={14} />
          </a>
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
