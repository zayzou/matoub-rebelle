import { NextResponse } from "next/server";
import newsData from "@/content/news.json";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://matoub-rebelle.vercel.app";

  const items = newsData
    .slice(0, 20)
    .map(
      (item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${baseUrl}/news/${item.slug}</link>
      <description><![CDATA[${item.excerpt}]]></description>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
      <guid>${baseUrl}/news/${item.slug}</guid>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Matoub Lounès — Les dernières news</title>
    <link>${baseUrl}</link>
    <description>Les dernières actualités sur Matoub Lounès, le Rebelle de Kabylie.</description>
    <language>fr</language>
    <atom:link href="${baseUrl}/api/rss" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
