import { Metadata } from "next";
import { ExternalLink, Rss, Calendar, Newspaper } from "lucide-react";
import { NewsCard } from "@/components/features/NewsCard";
import { SectionTitle } from "@/components/common/SectionTitle";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";
import { fetchGoogleNews, type NewsArticle } from "@/lib/google-news";
import newsData from "@/content/news.json";

export const metadata: Metadata = { title: "Les Actualités" };

// Revalidate every hour — fresh news automatically
export const revalidate = 3600;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric", month: "long", year: "numeric",
  });
}

function GoogleNewsCard({ article }: { article: NewsArticle }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group kabyle-card flex gap-4 hover:border-[var(--color-gold)] transition-colors"
      style={{ textDecoration: "none" }}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full shrink-0"
            style={{ background: "rgba(0,137,123,0.15)", color: "var(--color-emerald)" }}>
            {article.source || "Presse"}
          </span>
          <span className="flex items-center gap-1 text-xs" style={{ color: "var(--color-muted)" }}>
            <Calendar size={11} />
            {formatDate(article.date)}
          </span>
        </div>
        <h3 className="text-sm font-semibold leading-snug mb-1.5 group-hover:text-[var(--color-gold)] transition-colors"
          style={{ color: "var(--color-parchment)" }}>
          {article.title}
        </h3>
        {article.excerpt && (
          <p className="text-xs leading-relaxed line-clamp-2"
            style={{ color: "var(--color-silver)" }}>
            {article.excerpt}
          </p>
        )}
        <div className="flex items-center gap-1 mt-2 text-xs font-medium"
          style={{ color: "var(--color-gold)" }}>
          Lire l&apos;article
          <ExternalLink size={11} />
        </div>
      </div>
    </a>
  );
}

export default async function NewsPage() {
  const articles = await fetchGoogleNews("Matoub Lounès", 12);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <BreadcrumbNav items={[{ label: "Actualités" }]} />
      <SectionTitle tifinagh="ⵜⵉⵏⴻⵡⵙ">Les Actualités</SectionTitle>

      {/* ── Live Google News ── */}
      {articles.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-5">
            <Rss size={16} style={{ color: "var(--color-emerald)" }} />
            <h2 className="font-semibold text-base" style={{ color: "var(--color-parchment)" }}>
              Dans la presse — récent
            </h2>
            <span className="ml-auto text-xs px-2 py-0.5 rounded-full"
              style={{ background: "rgba(0,137,123,0.1)", color: "var(--color-emerald)" }}>
              Mis à jour automatiquement
            </span>
          </div>
          <div className="space-y-3">
            {articles.map((a, i) => (
              <GoogleNewsCard key={i} article={a} />
            ))}
          </div>
        </section>
      )}

      {/* ── Archived local news ── */}
      <section>
        <h2 className="font-semibold text-base mb-5 flex items-center gap-2"
          style={{ color: "var(--color-parchment)" }}>
          <Newspaper size={16} style={{ color: "var(--color-gold)" }} />
          Archives
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {newsData.map((item) => (
            <NewsCard
              key={item.id}
              slug={item.slug}
              title={item.title}
              date={item.date}
              excerpt={item.excerpt}
              category={item.category}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
