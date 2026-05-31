"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface VideoEmbedProps {
  youtubeId?: string;
  dailymotionId?: string;
  title: string;
  date?: string;
  description?: string;
}

export function VideoEmbed({ youtubeId, dailymotionId, title, date, description }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);

  const isDailymotion = !!dailymotionId && !youtubeId;
  const thumbnailUrl = isDailymotion
    ? `https://www.dailymotion.com/thumbnail/video/${dailymotionId}`
    : youtubeId
    ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
    : null;

  const embedUrl = isDailymotion
    ? `https://www.dailymotion.com/embed/video/${dailymotionId}?autoplay=1`
    : youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1`
    : null;

  if (!embedUrl) return null;

  return (
    <div className="kabyle-card overflow-hidden">
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <div className="absolute inset-0">
          {playing ? (
            <iframe
              src={embedUrl}
              className="w-full h-full"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title={title}
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="w-full h-full relative group"
              aria-label={`Lire : ${title}`}
            >
              {thumbnailUrl && (
                <div
                  className="absolute inset-0 bg-cover bg-center bg-gray-200"
                  style={{ backgroundImage: `url(${thumbnailUrl})` }}
                />
              )}
              {!thumbnailUrl && (
                <div className="absolute inset-0" style={{ background: "var(--color-surface-2)" }} />
              )}
              <div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-200"
                style={{ backgroundColor: "rgba(20,10,5,0.45)" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: "rgba(200,134,10,0.9)" }}
                >
                  <Play size={28} fill="white" color="white" style={{ marginLeft: 3 }} />
                </div>
              </div>
              {isDailymotion && (
                <span
                  className="absolute bottom-2 right-2 text-xs px-1.5 py-0.5 rounded font-semibold"
                  style={{ background: "rgba(0,0,0,0.6)", color: "#fff" }}
                >
                  Dailymotion
                </span>
              )}
            </button>
          )}
        </div>
      </div>

      <div className="p-3">
        <h4
          className="font-serif text-sm font-semibold leading-snug"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
        >
          {title}
        </h4>
        {date && (
          <p className="text-xs mt-0.5" style={{ color: "var(--color-muted)" }}>{date}</p>
        )}
        {description && (
          <p className="text-xs mt-1 leading-relaxed" style={{ color: "var(--color-muted)" }}>{description}</p>
        )}
      </div>
    </div>
  );
}
