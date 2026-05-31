"use client";

import { useState } from "react";
import { Disc, ChevronDown } from "lucide-react";

interface Track {
  num: number;
  title: string;
  duration?: string | null;
}

interface AlbumCardProps {
  id: string;
  title: string;
  year: number | string;
  label?: string | null;
  description?: string | null;
  tracks: Track[];
  cover?: string | null;
}

export function AlbumCard({ title, year, description, tracks, cover }: AlbumCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-200"
      style={{
        background: "var(--color-surface)",
        border: `1px solid ${open ? "rgba(255,179,0,0.3)" : "var(--color-border)"}`,
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-4 flex items-center gap-4 group transition-colors hover:bg-white/5"
        aria-expanded={open}
      >
        {/* Cover */}
        <div className="w-14 h-14 shrink-0 rounded-lg overflow-hidden" style={{ border: "1px solid rgba(42,90,200,0.2)" }}>
          {cover ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={cover} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ background: "rgba(21,101,192,0.15)" }}>
              <Disc size={22} strokeWidth={1.5} style={{ color: "var(--color-muted)" }} />
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p className="text-xs mb-0.5" style={{ color: "var(--color-muted)" }}>{year}</p>
          <h3
            className="font-serif font-bold text-sm leading-snug group-hover:text-gold-gradient"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
          >
            {title}
          </h3>
          <p className="text-xs mt-0.5" style={{ color: "var(--color-muted)" }}>
            {tracks.length} titre{tracks.length > 1 ? "s" : ""}
          </p>
        </div>

        {/* Arrow */}
        <ChevronDown
          size={16}
          strokeWidth={1.75}
          style={{
            color: open ? "var(--color-gold)" : "var(--color-muted)",
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 0.2s",
            flexShrink: 0,
          }}
        />
      </button>

      {/* Tracks */}
      {open && (
        <div style={{ borderTop: "1px solid rgba(42,90,200,0.15)" }}>
          {description && (
            <p className="px-4 py-3 text-xs italic" style={{ color: "var(--color-muted)", background: "rgba(21,101,192,0.04)" }}>
              {description}
            </p>
          )}
          <ol className="px-4 py-3 space-y-1.5">
            {tracks.map((t) => (
              <li key={t.num} className="flex items-center gap-3 text-xs">
                <span className="w-5 text-right shrink-0 font-mono" style={{ color: "var(--color-muted)" }}>
                  {t.num}
                </span>
                <span className="h-px flex-1" style={{ background: "rgba(42,90,200,0.1)" }} />
                <span style={{ color: "var(--color-text)" }}>{t.title}</span>
                {t.duration && (
                  <span className="shrink-0 font-mono" style={{ color: "var(--color-muted)" }}>{t.duration}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
