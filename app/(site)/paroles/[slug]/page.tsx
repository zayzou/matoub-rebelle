import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";
import parolesData from "@/content/paroles.json";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return parolesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const song = parolesData.find((s) => s.slug === slug);
  return { title: song ? `Paroles — ${song.title}` : "Paroles" };
}

export default async function ParolesDetailPage({ params }: Props) {
  const { slug } = await params;
  const song = parolesData.find((s) => s.slug === slug);
  if (!song) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
    <div className="max-w-2xl">
      <BreadcrumbNav
        items={[{ label: "Paroles", href: "/paroles" }, { label: song.title }]}
      />

      <div className="mb-6">
        <h1
          className="font-serif text-2xl font-bold"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-gold)" }}
        >
          {song.title}
        </h1>
        {song.titleTifinagh && (
          <p
            className="mt-1 text-base opacity-70"
            style={{ fontFamily: "var(--font-tifinagh)", color: "var(--color-silver)" }}
          >
            {song.titleTifinagh}
          </p>
        )}
        <div
          className="flex items-center gap-2 mt-2 text-xs"
          style={{ color: "var(--color-silver)" }}
        >
          <span>Album : <strong style={{ color: "var(--color-parchment)" }}>{song.album}</strong></span>
          <span style={{ color: "var(--color-gold)", fontSize: "0.5rem" }}>◆</span>
          <span>{song.year}</span>
        </div>
      </div>

      <div
        className="h-0.5 mb-6"
        style={{ background: "linear-gradient(to right, var(--color-gold), transparent)" }}
      />

      {/* Side-by-side lyrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Kabyle */}
        <div>
          <h3
            className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2"
            style={{ color: "var(--color-gold)" }}
          >
            <span
              style={{ fontFamily: "var(--font-tifinagh)" }}
            >
              ⵜⴰⵇⴱⴰⵢⵍⵉⵜ
            </span>
            — Kabyle
          </h3>
          <pre
            className="text-sm leading-8 whitespace-pre-wrap font-serif"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-parchment)" }}
          >
            {song.lyricsKabyle}
          </pre>
        </div>

        {/* French */}
        {song.lyricsFr && (
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-gold)" }}
            >
              Français — Traduction
            </h3>
            <pre
              className="text-sm leading-8 whitespace-pre-wrap italic"
              style={{ color: "var(--color-silver)" }}
            >
              {song.lyricsFr}
            </pre>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
