export interface NewsArticle {
  title: string;
  url: string;
  source: string;
  date: string;
  excerpt: string;
}

function stripHtml(s: string) {
  return s.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").trim();
}

function parseRSSItem(item: string): NewsArticle | null {
  const tag = (t: string) => new RegExp(`<${t}[^>]*>([\\s\\S]*?)<\\/${t}>`).exec(item)?.[1] ?? "";
  const title = stripHtml(tag("title"));
  const link = (/<link>([\s\S]*?)<\/link>/.exec(item) ?? /<link[^>]+href="([^"]+)"/.exec(item))?.[1]?.trim() ?? "";
  const source = stripHtml(tag("source"));
  const pubDate = tag("pubDate");
  const desc = stripHtml(tag("description"));

  if (!title || !link) return null;

  // Google News wraps links — extract the real URL from the href in <link>
  const realUrl = /<a[^>]+href="([^"]+)"/.exec(tag("link"))?.[1] ?? link;

  return {
    title,
    url: realUrl || link,
    source,
    date: pubDate ? new Date(pubDate).toISOString() : new Date().toISOString(),
    excerpt: desc.slice(0, 180) + (desc.length > 180 ? "…" : ""),
  };
}

export async function fetchGoogleNews(query = "Matoub Lounès", limit = 12): Promise<NewsArticle[]> {
  const encoded = encodeURIComponent(query);
  const url = `https://news.google.com/rss/search?q=${encoded}&hl=fr&gl=FR&ceid=FR:fr`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 }, // Cache 1h
      headers: { "User-Agent": "Mozilla/5.0 (compatible; RSS reader)" },
    });
    if (!res.ok) return [];

    const xml = await res.text();
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);
    return items
      .map(parseRSSItem)
      .filter((a): a is NewsArticle => a !== null)
      .slice(0, limit);
  } catch {
    return [];
  }
}
