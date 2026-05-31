import { Metadata } from "next";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";
import { SectionTitle } from "@/components/common/SectionTitle";
import { AlbumCard } from "@/components/features/AlbumCard";
import albumsData from "@/content/albums.json";

export const metadata: Metadata = {
  title: "Discographie de Matoub Lounès — 28 Albums et 300+ Chansons",
  description:
    "Découvrez l'intégralité de la discographie de Matoub Lounès. 28 albums, plus de 300 chansons de musique kabyle traditionnelle et moderne. Listes des pistes, dates de sortie et labels.",
  alternates: {
    canonical: "https://matoub-rebelle.com/discographie",
  },
  keywords: [
    "Discographie Matoub Lounès",
    "Albums kabyles",
    "Chansons kabyles",
    "Tamazight",
    "Musique amazigh",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://matoub-rebelle.com/discographie",
    title: "Discographie de Matoub Lounès",
    description: "28 albums et plus de 300 chansons — la discographie complète du poète-chanteur kabyle.",
    images: [
      {
        url: "https://matoub-rebelle.com/images/photos/pochettes-albums/01.jpg",
        width: 500,
        height: 500,
        alt: "Pochettes d'albums",
      },
    ],
  },
};

export default function DiscographiePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
    <div>
      <BreadcrumbNav items={[{ label: "Discographie" }]} />
      <SectionTitle tifinagh="ⴰⵙⵏⴼⴰⵔ ⵏ ⵜⵖⵏⴰⵏⵉⵏ">Discographie</SectionTitle>

      <p className="text-sm mb-6" style={{ color: "var(--color-silver)" }}>
        L&apos;œuvre de Lounès Matoub se compose de <strong>{albumsData.length} albums</strong>{" "}
        (34 volumes, 224 chansons référencées). Cliquez sur un titre pour afficher la liste des pistes.
      </p>

      <div className="space-y-3">
        {albumsData.map((album) => (
          <AlbumCard
            key={album.id}
            id={album.id}
            title={album.title}
            year={album.year}
            label={album.label}
            description={album.description}
            tracks={album.tracks}
            cover={album.cover}
          />
        ))}
      </div>
    </div>
    </div>
  );
}
