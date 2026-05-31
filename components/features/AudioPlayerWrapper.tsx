"use client";

import dynamic from "next/dynamic";
import { Music, Headphones } from "lucide-react";
import "react-h5-audio-player/lib/styles.css";

const AudioPlayer = dynamic(() => import("react-h5-audio-player"), { ssr: false });

interface Track {
  title: string;
  src?: string;
  artist?: string;
  album?: string;
}

interface AudioPlayerWrapperProps {
  tracks: Track[];
  albumTitle?: string;
  albumCover?: string | null;
}

export function AudioPlayerWrapper({ tracks, albumTitle, albumCover }: AudioPlayerWrapperProps) {
  return (
    <div className="kabyle-card p-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-12 h-12 rounded flex items-center justify-center text-xl shrink-0"
          style={{ backgroundColor: "rgba(201,168,76,0.1)", border: "1px solid var(--color-border)" }}
        >
          {albumCover ? (
            <img src={albumCover} alt={albumTitle} className="w-full h-full object-cover rounded" />
          ) : (
            <Music size={20} strokeWidth={1.5} style={{ color: "var(--color-muted)" }} />
          )}
        </div>
        <div>
          <p
            className="font-serif font-bold text-sm"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-gold)" }}
          >
            {albumTitle ?? "Lecteur Matoub Lounès"}
          </p>
          <p className="text-xs" style={{ color: "var(--color-silver)" }}>
            {tracks.length} piste{tracks.length > 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Player */}
      <div className="flex items-center gap-2 text-xs text-center mb-3 justify-center" style={{ color: "var(--color-muted)" }}>
        <Headphones size={14} strokeWidth={1.75} />
        Lecteur audio HTML5 — connectez vos fichiers MP3
      </div>

      {/* Tracklist */}
      <ul className="space-y-1">
        {tracks.map((track, i) => (
          <li
            key={i}
            className="flex items-center gap-2 px-3 py-1.5 rounded text-sm hover:bg-gold/5 transition-colors cursor-pointer"
            style={{ color: "var(--color-parchment)" }}
          >
            <span className="w-5 text-center text-xs" style={{ color: "var(--color-gold)" }}>
              {i + 1}
            </span>
            <span className="flex-1">{track.title}</span>
            {track.src && (
              <span className="text-xs" style={{ color: "var(--color-turquoise)" }}>
                ▶
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
