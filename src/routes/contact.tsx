import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Phone, MapPin, Instagram, Mail, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Asif Tours & Travels, Kollam Kerala" },
      { name: "description", content: "Call +91 89210 62797 or visit us at Kadakkal, Chithara, Kollam, Kerala. Plan your next journey with Asif Tours & Travels." },
      { property: "og:title", content: "Contact Asif Tours & Travels" },
      { property: "og:description", content: "Plan a custom tour or bus rental. Kadakkal, Chithara, Kollam — Kerala." },
    ],
  }),
  component: ContactPage,
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 pt-32 pb-16 lg:px-10">
        <div className="text-xs uppercase tracking-[0.3em] text-accent">Get in touch</div>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
          Let&apos;s plan a journey worth remembering.
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Tell us the dates, the dream and the number of travellers — we&apos;ll send back a
          tailored itinerary, fleet recommendation and quiet, honest pricing.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="space-y-8">
              <ContactRow icon={Phone} label="Call" lines={["+91 89210 62797", "+91 96451 15695"]} href="tel:+918921062797" />
              <ContactRow icon={MapPin} label="Visit" lines={["Kadakkal, Chithara", "Kollam — Trivandrum, Kerala"]} href="https://www.google.com/maps/place/Asif+Tours+And+Travels/@8.8271237,76.9206295,17z" />
              <ContactRow icon={Instagram} label="Asif Holidays" lines={["@asif_holidays_official"]} href="https://www.instagram.com/asif_holidays_official/" />
              
              <ContactRow icon={Mail} label="Email" lines={["bookings@asiftravels.in"]} href="mailto:bookings@asiftravels.in" />
            </div>
          </div>

          <form
            className="bg-card p-8 lg:col-span-7 lg:p-12"
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget);
              const text = [
                `Name: ${f.get("name")}`,
                `Phone / WhatsApp: ${f.get("phone")}`,
                `Pickup Location: ${f.get("pickup")}`,
                `Date: ${f.get("date")}`,
                `Package / Route: ${f.get("route")}`,
                `Group Size: ${f.get("group")}`,
                `Message: ${f.get("message")}`,
              ].join("\n");
              window.location.href = `https://wa.me/918921062797?text=${encodeURIComponent(text)}`;
            }}
          >
            <div className="text-xs uppercase tracking-[0.25em] text-accent">Plan your trip</div>
            <h2 className="mt-4 font-display text-3xl text-foreground">A few quick details</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Field name="name" label="Your name" />
              <Field name="phone" label="Phone / WhatsApp" type="tel" />
              <Field name="pickup" label="Pickup location" />
              <Field name="date" label="Travel date" type="date" />
              <Field name="route" label="Package / Travel route" />
              <Field name="group" label="Group size" type="number" />
            </div>
            <div className="mt-6">
              <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">Tell us more</label>
              <textarea
                name="message"
                rows={5}
                className="mt-3 w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none focus:border-accent"
              />
            </div>
            <button
              type="submit"
              className="mt-10 inline-flex items-center gap-3 bg-primary px-7 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground hover:bg-primary/90"
            >
              Send via WhatsApp <ArrowUpRight size={14} />
            </button>
          </form>
        </div>
      </section>

      <section className="border-t border-border/60">
        <iframe
          title="Asif Tours location"
          src="https://www.google.com/maps?q=Asif+Tours+And+Travels+Kadakkal&output=embed"
          className="h-[420px] w-full grayscale"
          loading="lazy"
        />
      </section>

      <SiteFooter />
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  lines,
  href,
}: {
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  label: string;
  lines: string[];
  href: string;
}) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group flex items-start gap-5 border-b border-border pb-6">
      <Icon size={20} strokeWidth={1.25} className="mt-1 text-accent" />
      <div className="flex-1">
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</div>
        {lines.map((l) => (
          <div key={l} className="mt-1 font-display text-xl text-foreground transition-colors group-hover:text-accent">{l}</div>
        ))}
      </div>
      <ArrowUpRight size={16} className="mt-2 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

function Field({ name, label, type = "text" }: { name: string; label: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        className="mt-3 w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none focus:border-accent"
      />
    </div>
  );
}