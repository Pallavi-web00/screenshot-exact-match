import { useState } from "react";
import { MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { globalPresence } from "@/content/home";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const project = (latitude: number, longitude: number) => ({
  x: ((longitude + 180) / 360) * 100,
  y: ((250 - latitude * 2.2) / 500) * 100,
});

export function GlobalPresence() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.12 });
  const [selectedId, setSelectedId] = useState<string>(globalPresence.locations[0].id);
  const selected = globalPresence.locations.find((location) => location.id === selectedId) ?? globalPresence.locations[0];

  return (
    <section
      id="global-presence"
      ref={ref}
      className={cn("section-pad relative overflow-hidden", inView && "is-in")}
      aria-labelledby="global-presence-heading"
    >
      <div className="container-site">
        <SectionHeading
          align="center"
          stacked
          headingId="global-presence-heading"
          className="mx-auto max-w-4xl"
          eyebrow={globalPresence.eyebrow}
          lead={globalPresence.heading.lead}
          highlight={globalPresence.heading.highlight}
          body={globalPresence.body}
        />

        <div
          className="presence-map reveal reveal--scale mt-12"
          style={{ "--d": "260ms" } as React.CSSProperties}
          aria-label="Illustrative world map showing Dubai, Mangalore, Bangalore, and planned California expansion"
        >
          <svg viewBox="0 0 1000 500" className="presence-map__svg" role="img" aria-hidden="true">
            <defs>
              <linearGradient id="presence-network" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--brand-blue)" />
                <stop offset="52%" stopColor="var(--brand-purple)" />
                <stop offset="100%" stopColor="var(--brand-red)" />
              </linearGradient>
            </defs>
            <g className="presence-map__graticule" aria-hidden="true">
              {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((x) => (
                <line key={`v${x}`} x1={x} y1="32" x2={x} y2="468" />
              ))}
              {[80, 150, 220, 290, 360, 430].map((y) => (
                <line key={`h${y}`} x1="24" y1={y} x2="976" y2={y} />
              ))}
            </g>
            <g className="presence-map__land">
              <path d="M65 91 105 65 155 58 179 42 222 51 244 71 281 79 308 104 298 132 278 145 270 170 243 181 229 204 207 200 190 183 170 178 159 158 135 150 124 130 94 121 81 106Z" />
              <path d="m259 201 24 7 20 18 14 27-8 26 14 27-4 30-17 25-10 34-17 30-15-14-5-30-17-29-3-30-17-26 4-35 18-27 5-28Z" />
              <path d="m443 104 20-15 20 4 11 17-14 15-24-2Z" />
              <path d="m475 137 27-18 35 8 15 22-15 19-33-2-27-13Z" />
              <path d="m494 186 35-19 44 11 25 31 12 37-16 43-16 50-28 42-25-20-13-39-20-28-7-40-15-35Z" />
              <path d="m506 104 22-24 34-8 16-20 56-7 34 15 43-4 38 13 41-2 34 20 47 7 34 20 34 16-12 21-34 7-22 22-37-4-24 17-34-4-18 20-27 6-13-18-25 5-10-18-32 3-11-20-31-2-15-20-35 3-20-18-32 1-13-19-35 2-18-16-31 2-18-19-32 4Z" />
              <path d="m725 223 29-8 31 13 19 23-13 21-27 5-29-15-18-18Z" />
              <path d="m850 285 28-16 34 9 13 20-21 17-33-5Z" />
              <path d="m621 326 15 8 9 21-11 20-12-12-7-19Z" />
              <path d="m330 75 6-12 13 2 5 10-9 9Z" />
            </g>
            <g className="presence-map__network" aria-hidden="true">
              <path d="M168 169 Q382 35 654 194" pathLength="1" className="draw-line" style={{ "--d": "560ms" } as React.CSSProperties} />
              <path d="M654 194 Q678 183 707 222" pathLength="1" className="draw-line" style={{ "--d": "690ms" } as React.CSSProperties} />
              <path d="M654 194 Q694 187 715 222" pathLength="1" className="draw-line" style={{ "--d": "810ms" } as React.CSSProperties} />
            </g>
            <g className="presence-map__dots" aria-hidden="true">
              <circle cx="168" cy="169" r="3" />
              <circle cx="654" cy="194" r="3" />
              <circle cx="707" cy="222" r="3" />
              <circle cx="715" cy="222" r="3" />
            </g>
          </svg>

          {globalPresence.locations.map((location, index) => {
            const point = project(location.latitude, location.longitude);
            const active = location.id === selected.id;
            const offset = location.markerOffset;
            return (
              <div
                key={location.id}
                className={cn("presence-marker", active && "is-active", `presence-marker--${location.tone}`)}
                data-muted={!active}
                style={{
                  left: `${point.x}%`,
                  top: `${point.y}%`,
                  "--marker-x": `${offset.x}px`,
                  "--marker-y": `${offset.y}px`,
                  "--d": `${560 + index * 110}ms`,
                } as React.CSSProperties}
              >
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="presence-marker__button"
                  aria-label={`${location.city}, ${location.country} — ${location.status}`}
                  aria-pressed={active}
                  onClick={() => setSelectedId(location.id)}
                  onMouseEnter={() => setSelectedId(location.id)}
                  onFocus={() => setSelectedId(location.id)}
                >
                  <span className="presence-marker__dot" aria-hidden="true" />
                </Button>
                <span className="presence-marker__label" aria-hidden="true">{location.city}</span>
              </div>
            );
          })}
          <p className="presence-map__caption">
            <MapPin aria-hidden="true" /> Illustrative location markers · not office-address coordinates
          </p>
        </div>

        <div className="presence-selected reveal mt-6 flex flex-wrap items-center justify-between gap-3" style={{ "--d": "480ms" } as React.CSSProperties} aria-live="polite">
          <div className="flex items-center gap-3">
            <span className={cn("presence-selected__dot", `presence-selected__dot--${selected.tone}`)} aria-hidden="true" />
            <p className="font-display text-sm font-semibold text-foreground">{selected.city}, {selected.country}</p>
          </div>
          <span className={cn("presence-status", selected.status === "Coming Soon" && "presence-status--future")}>
            {selected.status}
          </span>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {globalPresence.locations.map((location, index) => {
            const active = selected.id === location.id;
            return (
              <Button
                key={location.id}
                type="button"
                variant="ghost"
                aria-pressed={active}
                onClick={() => setSelectedId(location.id)}
                onMouseEnter={() => setSelectedId(location.id)}
                onFocus={() => setSelectedId(location.id)}
                className={cn(
                  "presence-location reveal h-auto w-full justify-start whitespace-normal rounded-lg border border-border bg-background px-4 py-4 text-left shadow-soft transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-background",
                  active && "presence-location--active",
                )}
                style={{ "--d": `${640 + index * 100}ms` } as React.CSSProperties}
              >
                <span className={cn("presence-location__icon", `presence-location__icon--${location.tone}`)} aria-hidden="true">
                  <MapPin />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-base font-semibold text-foreground">{location.city}</span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">{location.country}</span>
                  <span className={cn("presence-location__status", location.status === "Coming Soon" && "presence-location__status--future")}>
                    <span className="presence-location__status-dot" aria-hidden="true" />
                    {location.status}
                  </span>
                </span>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}