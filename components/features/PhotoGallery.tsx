"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface Photo {
  src: string;
  alt: string;
  caption?: string;
  w?: number;
  h?: number;
}

interface PhotoGalleryProps {
  photos: Photo[];
  columns?: 2 | 3 | 4;
}

export function PhotoGallery({ photos, columns = 3 }: PhotoGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (lightboxIndex === null) return;
    if (e.key === "ArrowLeft" && lightboxIndex > 0) setLightboxIndex(lightboxIndex - 1);
    if (e.key === "ArrowRight" && lightboxIndex < photos.length - 1) setLightboxIndex(lightboxIndex + 1);
    if (e.key === "Escape") setLightboxIndex(null);
  }, [lightboxIndex, photos.length]);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  // Lock scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  }[columns];

  return (
    <>
      <div className={`grid ${gridCols} gap-3`}>
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className="group relative overflow-hidden rounded bg-[var(--color-card)]"
            style={{ border: "1px solid var(--color-border)", aspectRatio: "4/3" }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
              style={{ backgroundColor: "rgba(6,9,26,0.5)" }}
            >
              <ZoomIn size={22} style={{ color: "var(--color-gold)" }} />
            </div>
            {/* Caption on hover */}
            {photo.caption && (
              <div
                className="absolute bottom-0 left-0 right-0 py-1 px-2 text-xs truncate opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: "rgba(6,9,26,0.85)", color: "var(--color-parchment)" }}
              >
                {photo.caption}
              </div>
            )}
          </button>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: "rgba(4,6,18,0.96)" }}
          onClick={() => setLightboxIndex(null)}
        >
          {/* Image container — fills as much screen as possible */}
          <div
            className="flex flex-col items-center"
            style={{ maxWidth: "92vw", maxHeight: "92vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].alt}
              style={{
                maxWidth: "88vw",
                maxHeight: "82vh",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                borderRadius: "6px",
                boxShadow: "0 30px 80px rgba(0,0,0,0.8)",
                display: "block",
              }}
            />
            {/* Caption */}
            {photos[lightboxIndex].caption && (
              <p
                className="mt-3 text-sm text-center px-6 max-w-xl"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {photos[lightboxIndex].caption}
              </p>
            )}
          </div>

          {/* ← Prev */}
          {lightboxIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex - 1); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-colors"
              style={{ backgroundColor: "rgba(255,179,0,0.15)", color: "var(--color-gold)" }}
              aria-label="Photo précédente"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* → Next */}
          {lightboxIndex < photos.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex + 1); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-colors"
              style={{ backgroundColor: "rgba(255,179,0,0.15)", color: "var(--color-gold)" }}
              aria-label="Photo suivante"
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* Counter */}
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs px-4 py-1.5 rounded-full font-mono"
            style={{ backgroundColor: "rgba(255,179,0,0.12)", color: "var(--color-gold)" }}
          >
            {lightboxIndex + 1} / {photos.length}
          </div>

          {/* ✕ Close */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{ backgroundColor: "rgba(255,179,0,0.15)", color: "var(--color-gold)" }}
            aria-label="Fermer"
          >
            <X size={18} />
          </button>
        </div>
      )}
    </>
  );
}
