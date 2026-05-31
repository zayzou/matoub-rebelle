import { Metadata } from "next";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";
import { SectionTitle } from "@/components/common/SectionTitle";
import { AlbumCard } from "@/components/features/AlbumCard";
import albumsData from "@/content/albums.json";

export const metadata: Metadata = { title: "Extraits d'albums" };

export default function ExtraitsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
    <div>
      <BreadcrumbNav items={[{ label: "Audio", href: "/audio" }, { label: "Extraits d'albums" }]} />
      <SectionTitle tifinagh="ⵉⴼⵔⵉⵔⴻⵏ ⵏ ⵢⵉⵍⵙⴰⵡⴻⵏ">Extraits d'albums</SectionTitle>

      <p className="text-sm mb-6" style={{ color: "var(--color-silver)" }}>
        Extraits audio de tous les albums de Matoub Lounès. Cliquez sur un album pour voir sa liste
        de pistes.
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
