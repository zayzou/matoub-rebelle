import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";
import { SectionTitle } from "@/components/common/SectionTitle";
import { PhotoGallery } from "@/components/features/PhotoGallery";
import photosData from "@/content/photos.json";

const CATEGORIES: Record<string, { title: string; tifinagh: string; description: string }> = {
  personnelles: {
    title: "Photos personnelles",
    tifinagh: "ⵜⵉⵡⵡⵓⵔⵉⵡⵉⵏ ⵜⵉⵎⴻⴷⴷⵓⴽⴰⵍ",
    description: "Photos personnelles de Matoub Lounès au fil des années.",
  },
  "sur-scene": {
    title: "Sur scène",
    tifinagh: "ⴷⴻⴳ ⵜⴻⵎⵔⴰⵡⵜ",
    description: "Matoub Lounès en concert et sur scène.",
  },
  studio: {
    title: "En studio",
    tifinagh: "ⴷⴻⴳ ⵓⵙⵜⵓⴷⵢⵓ",
    description: "Séances photos en studio et portraits professionnels.",
  },
  "chez-matoub": {
    title: "Chez Matoub",
    tifinagh: "ⴷⴻⴳ ⵡⴻⵅⵅⴰⵎ ⵏ ⵎⴰⵟⵓⴱ",
    description: "Photos prises au village natal et à la maison de Matoub.",
  },
  oeuvres: {
    title: "Œuvres artistiques",
    tifinagh: "ⵉⵙⴻⴼⴽⴰ",
    description: "Peintures, dessins et œuvres artistiques inspirées par Matoub Lounès.",
  },
  "pochettes-albums": {
    title: "Pochettes d'albums",
    tifinagh: "ⵜⴻⵔⵔⴰⵙⵉⵏ ⵏ ⵢⵉⵍⵙⴰⵡⴻⵏ",
    description: "Les couvertures originales de tous les albums de Matoub Lounès.",
  },
};

interface Props { params: Promise<{ category: string }> }

export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map((c) => ({ category: c }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORIES[category];
  return { title: cat ? `Photos — ${cat.title}` : "Photos" };
}

export default async function PhotoCategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = CATEGORIES[category];
  if (!cat) notFound();

  const rawPhotos = (photosData as Record<string, { src: string; alt: string; caption: string; w: number; h: number }[]>)[category] ?? [];
  const photos = rawPhotos.map((p) => ({
    src: p.src,
    alt: p.caption || cat.title,
    caption: p.caption || undefined,
    w: p.w,
    h: p.h,
  }));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <BreadcrumbNav items={[{ label: "Photos", href: "/photos" }, { label: cat.title }]} />
      <SectionTitle tifinagh={cat.tifinagh}>{cat.title}</SectionTitle>
      <p className="text-sm mb-8" style={{ color: "var(--color-silver)" }}>
        {cat.description} — <strong style={{ color: "var(--color-gold)" }}>{photos.length} photos</strong>.
      </p>
      <PhotoGallery photos={photos} columns={3} />
    </div>
  );
}
