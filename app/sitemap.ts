import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://matoub-rebelle.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "/",
    "/le-rebelle/biographie",
    "/le-rebelle/sa-vie",
    "/le-rebelle/son-combat",
    "/le-rebelle/son-oeuvre",
    "/le-rebelle/son-oeuvre/un-poete-pour-l-eternite",
    "/le-rebelle/son-oeuvre/regard-sur-la-poesie",
    "/le-rebelle/son-oeuvre/oeuvre-matoub",
    "/le-rebelle/dossier-assassinat",
    "/le-rebelle/dossier-assassinat/enquete-liberation",
    "/le-rebelle/lounes-a-dit",
    "/le-rebelle/lounes-a-dit/declaration-italie",
    "/le-rebelle/lounes-a-dit/prix-liberte",
    "/le-rebelle/lounes-a-dit/prix-memoire",
    "/discographie",
    "/paroles",
    "/photos",
    "/photos/personnelles",
    "/photos/studio",
    "/photos/sur-scene",
    "/photos/chez-matoub",
    "/photos/pochettes-albums",
    "/photos/oeuvres",
    "/videos/interviews",
    "/videos/matoub-chante",
    "/videos/chansons-sous-titrees",
    "/videos/ils-parlent-de-matoub",
    "/audio",
    "/audio/extraits",
    "/audio/emissions-radio",
    "/news",
    "/divers/bibliographie",
    "/divers/liens",
    "/livre-dor",
    "/contact",
    "/plan-du-site",
  ];

  return staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1.0 : route.startsWith("/le-rebelle") ? 0.9 : 0.7,
  }));
}
