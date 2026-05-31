import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Music, BookOpen, Camera, Play, Quote } from "lucide-react";
import albumsData from "@/content/albums.json";
import quotesData from "@/content/quotes.json";
import { matoubJsonLd, organizationJsonLd } from "@/app/(site)/structured-data";

export const metadata: Metadata = {
  title: "Matoub Lounès — Le Rebelle Kabyle | Chanteur, Poète, Symbole de Liberté",
  description: "Découvrez la vie et l'œuvre de Matoub Lounès (1956–1998), le chanteur-poète kabyle qui a marqué la culture amazigh. Albums, chansons, biographie, vidéos et hommages.",
  keywords: [
    "Matoub Lounès",
    "Chanteur kabyle",
    "Poète amazigh",
    "Liberté",
    "Kabylie",
    "Tamazight",
    "Musique kabyle",
    "Hommage",
  ],
  alternates: {
    canonical: "https://matoub-rebelle.com",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://matoub-rebelle.com",
    siteName: "Matoub Lounès — Le Rebelle",
    title: "Matoub Lounès — Le Rebelle Kabyle",
    description: "Chanteur-poète kabyle (1956–1998), symbole de liberté et d'identité culturelle amazigh.",
    images: [
      {
        url: "https://matoub-rebelle.com/images/photos/studio/213.jpg",
        width: 1200,
        height: 630,
        alt: "Matoub Lounès",
      },
      {
        url: "https://matoub-rebelle.com/images/photos/studio/220.jpg",
        width: 800,
        height: 800,
        alt: "Portrait de Matoub Lounès",
      },
    ],
  },
};

const STATS = [
  { value: "28", label: "Albums" },
  { value: "300+", label: "Chansons" },
  { value: "42", label: "Ans de vie" },
  { value: "1998", label: "Assassiné" },
];

export default function HomePage() {
  const quote = quotesData?.[0];
  const recentAlbums = albumsData.slice(0, 6);

  return (
    <main>

      {/* ════════════════════════════════════════
          HERO — image plein fond + texte superposé
      ════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">

        {/* Photo de fond — studio/213.jpg (portrait pro) */}
        <div className="absolute inset-0">
          <Image
            src="/images/photos/studio/213.jpg"
            alt="Matoub Lounès"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          {/* Dégradé : transparent en haut-droite → opaque vers le bas-gauche */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(26,18,8,0.15) 0%, rgba(26,18,8,0.05) 40%, rgba(26,18,8,0.0) 60%), " +
                "linear-gradient(to top, rgba(253,248,241,1) 0%, rgba(253,248,241,0.85) 25%, rgba(253,248,241,0.3) 55%, transparent 80%)",
            }}
          />
        </div>

        {/* Contenu texte */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full grid lg:grid-cols-2 gap-8 items-end">
          <div>
            {/* Eyebrow */}
            <p className="section-eyebrow mb-4 tracking-widest">
              ⵣ Amawal n Tmazight • 1956 – 1998
            </p>

            {/* Title */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
            >
              Matoub
              <br />
              <span className="text-gold-gradient">Lounès</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg sm:text-xl max-w-lg leading-relaxed mb-8"
              style={{ color: "var(--color-muted)" }}
            >
              Poète, chanteur, rebelle. Voix immortelle du peuple kabyle,
              défenseur de la culture amazighe, martyr de la liberté.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <Link href="/le-rebelle/biographie" className="btn-primary">
                Sa biographie
                <ArrowRight size={15} />
              </Link>
              <Link href="/audio/extraits" className="btn-outline">
                <Play size={15} />
                Écouter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          STATS BAR
      ════════════════════════════════════════ */}
      <section
        className="py-6"
        style={{ background: "var(--color-surface-2)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}
      >
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-gold-gradient" style={{ fontFamily: "var(--font-serif)" }}>
                {s.value}
              </p>
              <p className="text-xs uppercase tracking-widest mt-0.5" style={{ color: "var(--color-muted)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          CITATION MARQUANTE
      ════════════════════════════════════════ */}
      {quote && (
        <section
          className="py-16 px-6"
          style={{ background: "var(--color-bg)" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <Quote size={32} className="mx-auto mb-6 opacity-30" style={{ color: "var(--color-gold)" }} />
            <blockquote
              className="text-2xl sm:text-3xl font-serif italic leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
            >
              &laquo;&nbsp;{quote.quote}&nbsp;&raquo;
            </blockquote>
            {quote.source && (
              <p className="text-sm font-semibold tracking-wide uppercase" style={{ color: "var(--color-gold)" }}>
                — {quote.source}
              </p>
            )}
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════
          BIOGRAPHIE — split image + texte
      ════════════════════════════════════════ */}
      <section className="py-20" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Photo */}
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--color-border)", boxShadow: "0 20px 60px rgba(180,120,30,0.12)" }}
            >
              <Image
                src="/images/photos/studio/220.jpg"
                alt="Matoub Lounès — Portrait"
                width={580}
                height={796}
                className="w-full object-cover"
                style={{ maxHeight: "520px", objectPosition: "center top" }}
              />
            </div>
            {/* Badge flottant */}
            <div
              className="absolute -bottom-4 -right-4 px-4 py-3 rounded-xl text-center"
              style={{ background: "var(--color-gold)", color: "#FFFFFF", boxShadow: "0 8px 24px rgba(200,134,10,0.4)" }}
            >
              <p className="text-2xl font-bold" style={{ fontFamily: "var(--font-serif)" }}>42</p>
              <p className="text-xs font-semibold uppercase tracking-wider">Ans de vie</p>
            </div>
          </div>

          {/* Texte */}
          <div>
            <p className="section-eyebrow mb-3">Le Rebelle</p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
            >
              Une vie dédiée à<br />
              <span className="text-gold-gradient">la liberté et à Tamazight</span>
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
              <p>
                Né le <strong style={{ color: "var(--color-text)" }}>24 janvier 1956</strong> à Taourirt Moussa, en Kabylie,
                Lounès Matoub est l'un des artistes les plus emblématiques de la culture amazighe.
                Sa voix, sa guitare et ses mots ont transcendé les frontières.
              </p>
              <p>
                Chanteur engagé, poète et militant, il a consacré sa vie à défendre la
                <strong style={{ color: "var(--color-text)" }}> langue et la culture berbères</strong> face à l'arabisation
                imposée. Survivant d'un enlèvement par le GIA en 1994, il a continué à chanter et à résister.
              </p>
              <p>
                Assassiné le <strong style={{ color: "var(--color-text)" }}>25 juin 1998</strong> sur la route de Tala Bounane,
                il laisse derrière lui une œuvre immense et un combat qui continue d'inspirer des millions de Kabyles.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/le-rebelle/biographie" className="btn-primary">
                Lire la biographie complète
                <ArrowRight size={15} />
              </Link>
              <Link href="/le-rebelle/son-combat" className="btn-outline">
                Son combat
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          DISCOGRAPHIE — grille albums
      ════════════════════════════════════════ */}
      <section className="py-20" style={{ background: "var(--color-bg)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="section-eyebrow mb-2">Discographie</p>
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
              >
                28 albums, une vie de musique
              </h2>
            </div>
            <Link
              href="/discographie"
              className="hidden sm:flex items-center gap-2 text-sm font-medium"
              style={{ color: "var(--color-gold)" }}
            >
              Toute la discographie <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {recentAlbums.map((album) => (
              <Link
                key={album.id}
                href="/discographie"
                className="group text-center"
              >
                <div
                  className="relative rounded-xl overflow-hidden mb-3 aspect-square"
                  style={{ border: "1px solid var(--color-border)", background: "var(--color-surface-2)" }}
                >
                  {album.cover ? (
                    <Image
                      src={album.cover}
                      alt={album.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Music size={28} style={{ color: "var(--color-subtle)" }} />
                    </div>
                  )}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: "rgba(200,134,10,0.15)" }} />
                </div>
                <p className="text-xs font-semibold truncate leading-tight" style={{ color: "var(--color-text)" }}>
                  {album.title}
                </p>
                {album.year && (
                  <p className="text-xs mt-0.5" style={{ color: "var(--color-subtle)" }}>{album.year}</p>
                )}
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/discographie" className="btn-outline">
              Toute la discographie <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          NAVIGATION RAPIDE — 3 sections clés
      ════════════════════════════════════════ */}
      <section className="py-20" style={{ background: "var(--color-surface)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-2">Explorer</p>
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
            >
              Découvrir l&apos;œuvre de Matoub
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                href: "/paroles",
                icon: BookOpen,
                label: "Paroles & Poésie",
                desc: "Les textes kabyles de Matoub, dans leur langue originale",
                color: "var(--color-gold)",
                bg: "rgba(200,134,10,0.07)",
              },
              {
                href: "/photos/personnelles",
                icon: Camera,
                label: "Galerie Photos",
                desc: "242 photos — sa vie, ses concerts, ses portraits",
                color: "var(--color-terra)",
                bg: "rgba(201,72,32,0.07)",
              },
              {
                href: "/videos/matoub-chante",
                icon: Play,
                label: "Vidéos",
                desc: "Concerts, interviews et chansons sous-titrées",
                color: "var(--color-emerald)",
                bg: "rgba(46,125,107,0.07)",
              },
            ].map(({ href, icon: Icon, label, desc, color, bg }) => (
              <Link
                key={href}
                href={href}
                className="group kabyle-card p-6 hover:shadow-lg transition-all"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: bg }}
                >
                  <Icon size={22} style={{ color }} />
                </div>
                <h3 className="font-bold mb-2" style={{ color: "var(--color-text)", fontFamily: "var(--font-serif)" }}>
                  {label}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {desc}
                </p>
                <div className="flex items-center gap-1 mt-4 text-sm font-medium"
                  style={{ color }}>
                  Découvrir
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          BANNIÈRE FINALE — citation + CTA
      ════════════════════════════════════════ */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "var(--color-surface-2)" }}
      >
        <p
          className="absolute inset-0 flex items-center justify-center text-9xl font-bold select-none pointer-events-none opacity-[0.04]"
          style={{ fontFamily: "var(--font-tifinagh)", color: "var(--color-gold)" }}
          aria-hidden
        >
          ⵣ ⵣ ⵣ
        </p>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="section-eyebrow mb-4">Son message</p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
          >
            &laquo;&nbsp;Je suis kabyle avant d&apos;être algérien&nbsp;&raquo;
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "var(--color-muted)" }}>
            Matoub Lounès a consacré sa vie à un seul combat : que son peuple
            ne renonce jamais à sa langue, sa mémoire, ni sa dignité.
          </p>
          <Link href="/le-rebelle/son-combat" className="btn-primary">
            Son combat pour Tamazight
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

    </main>
  );
}
