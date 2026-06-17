import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://matoub-rebelle.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: Array<{ path: string; priority: number; changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" }> = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/le-rebelle/biographie", priority: 0.9, changeFrequency: "monthly" },
    { path: "/le-rebelle/sa-vie", priority: 0.8, changeFrequency: "monthly" },
    { path: "/le-rebelle/son-combat", priority: 0.8, changeFrequency: "monthly" },
    { path: "/le-rebelle/son-oeuvre", priority: 0.7, changeFrequency: "monthly" },
    { path: "/le-rebelle/son-oeuvre/un-poete-pour-l-eternite", priority: 0.6, changeFrequency: "monthly" },
    { path: "/le-rebelle/son-oeuvre/regard-sur-la-poesie", priority: 0.6, changeFrequency: "monthly" },
    { path: "/le-rebelle/son-oeuvre/oeuvre-matoub", priority: 0.6, changeFrequency: "monthly" },
    { path: "/le-rebelle/dossier-assassinat", priority: 0.8, changeFrequency: "monthly" },
    { path: "/le-rebelle/dossier-assassinat/enquete-liberation", priority: 0.7, changeFrequency: "monthly" },
    { path: "/le-rebelle/lounes-a-dit", priority: 0.6, changeFrequency: "monthly" },
    { path: "/le-rebelle/lounes-a-dit/declaration-italie", priority: 0.5, changeFrequency: "monthly" },
    { path: "/le-rebelle/lounes-a-dit/prix-liberte", priority: 0.5, changeFrequency: "monthly" },
    { path: "/le-rebelle/lounes-a-dit/prix-memoire", priority: 0.5, changeFrequency: "monthly" },
    { path: "/discographie", priority: 0.9, changeFrequency: "monthly" },
    { path: "/paroles", priority: 0.9, changeFrequency: "weekly" },
    { path: "/photos", priority: 0.8, changeFrequency: "monthly" },
    { path: "/photos/personnelles", priority: 0.7, changeFrequency: "monthly" },
    { path: "/photos/studio", priority: 0.7, changeFrequency: "monthly" },
    { path: "/photos/sur-scene", priority: 0.7, changeFrequency: "monthly" },
    { path: "/photos/chez-matoub", priority: 0.7, changeFrequency: "monthly" },
    { path: "/photos/pochettes-albums", priority: 0.6, changeFrequency: "monthly" },
    { path: "/photos/oeuvres", priority: 0.6, changeFrequency: "monthly" },
    { path: "/videos/interviews", priority: 0.7, changeFrequency: "monthly" },
    { path: "/videos/matoub-chante", priority: 0.7, changeFrequency: "monthly" },
    { path: "/videos/chansons-sous-titrees", priority: 0.8, changeFrequency: "monthly" },
    { path: "/videos/ils-parlent-de-matoub", priority: 0.6, changeFrequency: "monthly" },
    { path: "/audio", priority: 0.6, changeFrequency: "monthly" },
    { path: "/audio/extraits", priority: 0.7, changeFrequency: "monthly" },
    { path: "/audio/emissions-radio", priority: 0.5, changeFrequency: "monthly" },
    { path: "/news", priority: 0.7, changeFrequency: "weekly" },
    { path: "/divers/bibliographie", priority: 0.7, changeFrequency: "monthly" },
    { path: "/divers/faq", priority: 0.8, changeFrequency: "monthly" },
    { path: "/divers/liens", priority: 0.4, changeFrequency: "monthly" },
    { path: "/livre-dor", priority: 0.5, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.3, changeFrequency: "yearly" },
    { path: "/plan-du-site", priority: 0.2, changeFrequency: "yearly" },
  ];

  return staticRoutes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
