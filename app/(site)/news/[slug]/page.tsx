import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";
import { formatDate } from "@/lib/utils";
import newsData from "@/content/news.json";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsData.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = newsData.find((n) => n.slug === slug);
  return { title: item?.title ?? "Article" };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const item = newsData.find((n) => n.slug === slug);
  if (!item) notFound();

  return (
    <article className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <BreadcrumbNav items={[{ label: "News", href: "/news" }, { label: item.title }]} />

      {item.category && (
        <span
          className="inline-block text-xs px-2 py-0.5 rounded-full font-medium mb-3"
          style={{
            backgroundColor: "rgba(201,168,76,0.12)",
            color: "var(--color-gold)",
            border: "1px solid rgba(201,168,76,0.3)",
          }}
        >
          {item.category}
        </span>
      )}

      <h1
        className="font-serif text-2xl font-bold leading-tight mb-3"
        style={{ fontFamily: "var(--font-serif)", color: "var(--color-gold)" }}
      >
        {item.title}
      </h1>

      <time
        className="text-xs block mb-6"
        style={{ color: "var(--color-silver)" }}
        dateTime={item.date}
      >
        {formatDate(item.date)}
      </time>

      <div
        className="h-0.5 mb-6"
        style={{
          background: "linear-gradient(to right, var(--color-gold), transparent)",
        }}
      />

      <div className="prose-kabyle">
        {item.content.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </article>
  );
}
