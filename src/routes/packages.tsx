import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowUpRight, Grid, List, Clock, Globe } from "lucide-react";
import { groups } from "@/lib/packages";
import { destinationList } from "@/components/ExplorePackagesModal";

/* ── helper: map route to image ── */
const getImageForRoute = (routeStr: string) => {
  for (const state of destinationList) {
    for (const item of state.items) {
      if (routeStr.toLowerCase().includes(item.name.toLowerCase())) {
        return item.img;
      }
    }
  }
  // Fallback to a scenic Munnar picture
  return "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80";
};

/* ── precompute global indices for list view ── */
let globalIdx = 1;
const groupsWithIndices = groups.map((g) => {
  return {
    ...g,
    items: g.items.map((item) => ({ item, index: globalIdx++ })),
  };
});

/* ── route ── */
export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Tour Packages — Asif Tours & Travels" },
      { name: "description", content: "One to seven day packages and train tours across Kerala, Karnataka, Tamil Nadu and beyond." },
    ],
  }),
  component: PackagesPage,
});

/* ── page ── */
export default function PackagesPage() {
  const [mainTab, setMainTab] = useState<"detailed" | "list">("detailed");
  const [subTab, setSubTab] = useState<"span" | "destination">("span");
  const [spanTab, setSpanTab] = useState<string>(groups[0].days);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* 
        We pass a prop or wrap SiteHeader in a dark theme container.
        Since SiteHeader uses fixed colors, we keep it as is, 
        but the page content below it will be dark.
      */}
      <div className="bg-background text-foreground">
        <SiteHeader />
      </div>

      <div className="text-white font-sans pt-12 pb-24">
        {/* Main Tabs */}
        <div className="border-b border-white/10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex gap-10 py-4">
            <button
              onClick={() => setMainTab("detailed")}
              className={`flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase transition-colors ${
                mainTab === "detailed" ? "text-[#FFC107]" : "text-white/40 hover:text-white"
              }`}
            >
              <Grid size={16} /> Explore Detailed
            </button>
            <button
              onClick={() => setMainTab("list")}
              className={`flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase transition-colors ${
                mainTab === "list" ? "text-[#FFC107]" : "text-white/40 hover:text-white"
              }`}
            >
              <List size={16} /> Packages List
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
          {mainTab === "detailed" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Secondary Tabs */}
              <div className="flex gap-8 mb-12">
                <button
                  onClick={() => setSubTab("span")}
                  className={`flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${
                    subTab === "span" ? "text-[#FFC107]" : "text-white/40 hover:text-white"
                  }`}
                >
                  <Clock size={14} /> Explore By Span
                </button>
                <button
                  onClick={() => setSubTab("destination")}
                  className={`flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${
                    subTab === "destination" ? "text-[#FFC107]" : "text-white/40 hover:text-white"
                  }`}
                >
                  <Globe size={14} /> Explore By Destination
                </button>
              </div>

              {subTab === "span" && (
                <div>
                  {/* Span Tabs */}
                  <div className="flex flex-wrap gap-8 border-b border-white/10 pb-4 mb-10">
                    {groups.map((g) => (
                      <button
                        key={g.days}
                        onClick={() => setSpanTab(g.days)}
                        className={`flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase pb-4 -mb-[17px] border-b-2 transition-all ${
                          spanTab === g.days
                            ? "border-[#FFC107] text-[#FFC107]"
                            : "border-transparent text-white/40 hover:text-white"
                        }`}
                      >
                        <Clock size={12} /> {g.days}
                      </button>
                    ))}
                  </div>

                  {/* Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {groups
                      .find((g) => g.days === spanTab)
                      ?.items.map((route, idx) => (
                        <div
                          key={idx}
                          className="relative aspect-[3/4] bg-neutral-900 group overflow-hidden cursor-pointer"
                        >
                          <img
                            src={getImageForRoute(route)}
                            alt={route}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                          
                          {/* Badge */}
                          <div className="absolute top-4 left-4 bg-[#FFC107] text-black text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-1">
                            {spanTab} Trip
                          </div>

                          {/* Info Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                            <div className="pr-4">
                              <div className="text-[#FFC107] text-[9px] font-bold tracking-[0.2em] mb-2 uppercase">
                                {spanTab}
                              </div>
                              <h3 className="text-white font-display text-2xl leading-tight uppercase truncate max-w-[220px]">
                                {route.split("·")[0].trim()}
                              </h3>
                              <p className="text-white/60 text-xs mt-2 truncate uppercase tracking-widest max-w-[220px]">
                                {route.replace(/·/g, " & ")}
                              </p>
                            </div>
                            <button className="shrink-0 bg-[#FFC107] text-black p-2.5 rounded-full hover:bg-yellow-400 transition-transform hover:scale-110">
                              <ArrowUpRight size={18} />
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {subTab === "destination" && (
                <div className="flex items-center justify-center py-20 text-white/40 text-sm tracking-widest uppercase">
                  Destination grouping coming soon
                </div>
              )}
            </div>
          )}

          {mainTab === "list" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl">
              {groupsWithIndices.map((g) => (
                <div key={g.days} className="mb-14">
                  <h2 className="text-[#FFC107] text-lg font-display uppercase tracking-[0.15em] mb-6 border-b border-white/10 pb-4">
                    {g.days} Trips
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5">
                    {g.items.map(({ item, index }) => (
                      <div key={index} className="flex gap-6 items-start group">
                        <span className="text-[#FFC107] text-sm font-mono shrink-0 w-6">
                          {index}.
                        </span>
                        <span className="text-white/70 text-sm transition-colors group-hover:text-white">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bg-background">
        <SiteFooter />
      </div>
    </div>
  );
}