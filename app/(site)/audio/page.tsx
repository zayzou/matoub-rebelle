import { Metadata } from "next";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";
import { SectionTitle } from "@/components/common/SectionTitle";
import { AudioPlayerWrapper } from "@/components/features/AudioPlayerWrapper";
import albumsData from "@/content/albums.json";

export const metadata: Metadata = { title: "Lecteur de chansons" };

const ALL_TRACKS = albumsData.flatMap((a) =>
  a.tracks.map((t) => ({ title: `${t.title} — ${a.title} (${a.year})`, src: undefined }))
);

export default function AudioPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
    <div>
      <BreadcrumbNav items={[{ label: "Audio" }]} />
      <SectionTitle tifinagh="ⵓⵙⵍⵉⴷ">Lecteur de chansons</SectionTitle>

      <p className="text-sm mb-6" style={{ color: "var(--color-silver)" }}>
        Lecteur audio HTML5 — connectez vos fichiers MP3 pour écouter les chansons de Matoub Lounès.
      </p>

      <AudioPlayerWrapper
        tracks={ALL_TRACKS.slice(0, 20)}
        albumTitle="Matoub Lounès — Sélection"
      />
    </div>
    </div>
  );
}
