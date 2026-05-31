import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";
import { SectionTitle } from "@/components/common/SectionTitle";
import { VideoEmbed } from "@/components/features/VideoEmbed";
import videosData from "@/content/videos.json";

interface Props { params: Promise<{ category: string }> }

export async function generateStaticParams() {
  return videosData.map((v) => ({ category: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = videosData.find((v) => v.slug === category);
  return { title: cat ? `Vidéos — ${cat.title}` : "Vidéos" };
}

export default async function VideoCategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = videosData.find((v) => v.slug === category);
  if (!cat) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <BreadcrumbNav items={[{ label: "Vidéos" }, { label: cat.title }]} />
      <SectionTitle>{cat.title}</SectionTitle>

      <p className="text-sm mb-8" style={{ color: "var(--color-muted)" }}>
        {cat.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cat.videos.map((video) => (
          <VideoEmbed
            key={video.id}
            youtubeId={"youtubeId" in video ? (video as { youtubeId?: string }).youtubeId : undefined}
            dailymotionId={"dailymotionId" in video ? (video as { dailymotionId?: string | null }).dailymotionId ?? undefined : undefined}
            title={video.title}
            date={video.date}
            description={video.description}
          />
        ))}
      </div>
    </div>
  );
}
