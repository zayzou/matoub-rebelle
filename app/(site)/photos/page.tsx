import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Camera, ArrowRight } from "lucide-react";
import photosData from "@/content/photos.json";

export const metadata: Metadata = { title: "Galerie Photos" };

const CATEGORIES = [
  {
    slug: "personnelles",
    title: "Photos personnelles",
    tifinagh: "ⵜⵉⵎⴻⴷⴷⵓⴽⴰⵍ",
    description: "Sa vie, ses proches, ses voyages",
  },
  {
    slug: "sur-scene",
    title: "Sur scène",
    tifinagh: "ⴷⴻⴳ ⵜⴻⵎⵔⴰⵡⵜ",
    description: "Concerts et performances en direct",
  },
  {
    slug: "studio",
    title: "En studio",
    tifinagh: "ⴷⴻⴳ ⵓⵙⵜⵓⴷⵢⵓ",
    description: "Séances d'enregistrement et portraits",
  },
  {
    slug: "chez-matoub",
    title: "Chez Matoub",
    tifinagh: "ⵎⴰⵟⵓⴱ ⵎⵙⴰⵙⵓⵏ",
    description: "Son village, sa maison natale",
  },
  {
    slug: "oeuvres",
    title: "Œuvres artistiques",
    tifinagh: "ⵉⵙⴻⴼⴽⴰ",
    description: "Peintures et illustrations inspirées",
  },
  {
    slug: "pochettes-albums",
    title: "Pochettes d'albums",
    tifinagh: "ⵜⴻⵔⵔⴰⵙⵉⵏ",
    description: "Les couvertures originales de sa discographie",
  },
];

const pd = photosData as Record<string, { src: string; caption: string }[]>;

export default function PhotosPage() {
  const total = Object.values(pd).reduce((s, arr) => s + arr.length, 0);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <BreadcrumbNav items={[{ label: "Photos" }]} />
      <SectionTitle tifinagh="ⵜⵉⵡⵡⵓⵔⵉⵡⵉⵏ" eyebrow="Galerie">
        Photos de Matoub Lounès
      </SectionTitle>
      <p className="mb-10 text-sm" style={{ color: "var(--color-silver)" }}>
        Une collection de{" "}
        <strong style={{ color: "var(--color-gold)" }}>{total} photos</strong> organisées en{" "}
        {CATEGORIES.length} catégories — de sa vie personnelle à ses performances sur scène.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CATEGORIES.map((cat) => {
          const catPhotos = pd[cat.slug] ?? [];
          const preview = catPhotos.slice(0, 4);
          return (
            <Link
              key={cat.slug}
              href={`/photos/${cat.slug}`}
              className="group kabyle-card overflow-hidden hover:border-[var(--color-gold)] transition-colors"
            >
              {/* Preview grid (2x2) */}
              <div className="grid grid-cols-2 gap-0.5 h-36 overflow-hidden rounded-t">
                {preview.length > 0 ? (
                  preview.map((p, i) => (
                    <div key={i} className="relative overflow-hidden bg-[var(--color-card)]">
                      <Image
                        src={p.src}
                        alt={p.caption || cat.title}
                        fill
                        sizes="120px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 flex items-center justify-center" style={{ background: "var(--color-card)" }}>
                    <Camera size={32} style={{ color: "var(--color-muted)" }} />
                  </div>
                )}
              </div>
              {/* Info */}
              <div className="p-4">
                <p className="text-xs mb-1 font-mono" style={{ color: "var(--color-gold)", opacity: 0.7 }}>
                  {cat.tifinagh}
                </p>
                <h3 className="font-semibold mb-1" style={{ color: "var(--color-parchment)" }}>
                  {cat.title}
                </h3>
                <p className="text-xs mb-3" style={{ color: "var(--color-silver)" }}>
                  {cat.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(255,179,0,0.1)", color: "var(--color-gold)" }}>
                    {catPhotos.length} photos
                  </span>
                  <ArrowRight size={15} className="opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "var(--color-gold)" }} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
