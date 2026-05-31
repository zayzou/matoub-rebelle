import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface NewsCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category?: string;
  image?: string;
}

export function NewsCard({ slug, title, date, excerpt, category, image }: NewsCardProps) {
  return (
    <article className="kabyle-card group overflow-hidden">
      {/* Header visual */}
      <div className="h-36 relative overflow-hidden" style={{ borderBottom: "1px solid var(--color-border)" }}>
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt="" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
        ) : (
          <div
            className="w-full h-full"
            style={{ background: "linear-gradient(135deg, rgba(21,101,192,0.3), rgba(0,137,123,0.2))" }}
          />
        )}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 40%, var(--color-surface))" }}
        />
        {category && (
          <div className="absolute top-3 left-3">
            <span className="badge-blue">{category}</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <time className="text-xs mb-2 block" style={{ color: "var(--color-muted)" }}>
          {formatDate(date)}
        </time>
        <h3
          className="font-serif font-bold text-sm mb-2 leading-snug group-hover:text-gold-gradient"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
        >
          <Link href={`/news/${slug}`}>{title}</Link>
        </h3>
        <p className="text-xs leading-relaxed line-clamp-2 mb-3" style={{ color: "var(--color-muted)" }}>
          {excerpt}
        </p>
        <Link
          href={`/news/${slug}`}
          className="text-xs font-semibold inline-flex items-center gap-1 transition-opacity hover:opacity-80"
          style={{ color: "var(--color-gold)" }}
        >
          Lire la suite →
        </Link>
      </div>
    </article>
  );
}
