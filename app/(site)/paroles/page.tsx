import { Metadata } from "next";
import Link from "next/link";
import { Music2 } from "lucide-react";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";
import { SectionTitle } from "@/components/common/SectionTitle";
import parolesData from "@/content/paroles.json";

export const metadata: Metadata = {
  title: "Paroles des Chansons de Matoub Lounès — Textes en Kabyle et Français",
  description:
    "Retrouvez les paroles complètes des chansons de Matoub Lounès. Textes kabyles et traductions françaises de ses plus grands succès : A Yizem, Africa, Ya Rayah et bien d'autres.",
  alternates: {
    canonical: "https://matoub-rebelle.com/paroles",
  },
  keywords: [
    "Paroles Matoub Lounès",
    "Paroles chansons kabyles",
    "Textes Matoub Lounès",
    "Lyrics Matoub Lounès",
    "Kabyle paroles",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://matoub-rebelle.com/paroles",
    title: "Paroles des Chansons de Matoub Lounès",
    description: "Les paroles complètes des chansons de Matoub Lounès en kabyle et en français.",
    images: [
      {
        url: "https://matoub-rebelle.com/images/photos/studio/213.jpg",
        width: 1200,
        height: 630,
        alt: "Paroles de Matoub Lounès",
      },
    ],
  },
};

export default function ParolesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
    <div>
      <BreadcrumbNav items={[{ label: "Paroles" }]} />
      <SectionTitle tifinagh="ⵉⵣⵍⴰⵡⴻⵏ">Paroles des chansons</SectionTitle>

      <p className="text-sm mb-6" style={{ color: "var(--color-silver)" }}>
        Index des paroles de chansons de Matoub Lounès en kabyle et en français.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {parolesData.map((song) => (
          <Link
            key={song.id}
            href={`/paroles/${song.slug}`}
            className="kabyle-card p-4 hover:border-gold transition-all group"
          >
            <div className="flex items-center gap-2 mb-1">
              <Music2 size={15} strokeWidth={1.75} style={{ color: "var(--color-gold)", flexShrink: 0 }} />
              <h3
                className="font-serif font-semibold text-sm group-hover:text-saffron transition-colors"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-parchment)" }}
              >
                {song.title}
              </h3>
            </div>
            {song.titleTifinagh && (
              <p
                className="text-xs mb-1"
                style={{ fontFamily: "var(--font-tifinagh)", color: "var(--color-silver)" }}
              >
                {song.titleTifinagh}
              </p>
            )}
            <div className="flex items-center gap-2 text-xs" style={{ color: "var(--color-silver)" }}>
              <span>{song.album}</span>
              <span style={{ color: "var(--color-gold)", fontSize: "0.5rem" }}>◆</span>
              <span>{song.year}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
}
