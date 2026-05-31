export const matoubJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://matoub-rebelle.vercel.app/#person",
  name: "Matoub Lounès",
  alternateName: ["Lounès Matoub", "Lounes Matoub"],
  birthDate: "1956-01-24",
  birthPlace: {
    "@type": "Place",
    name: "Taourirt Moussa, Kabylie, Algérie",
  },
  deathDate: "1998-06-25",
  deathPlace: {
    "@type": "Place",
    name: "Kabylie, Algérie",
  },
  image: "https://matoub-rebelle.vercel.app/images/studio/220.jpg",
  description: "Chanteur, poète et défenseur de la culture amazigh kabyle (1956–1998)",
  jobTitle: "Chanteur, Poète, Militant politique",
  nationality: {
    "@type": "Country",
    name: "Algérie",
  },
  url: "https://matoub-rebelle.vercel.app",
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Site Hommage à Matoub Lounès",
  url: "https://matoub-rebelle.vercel.app",
  logo: "https://matoub-rebelle.vercel.app/favicon.ico",
  description: "Site entièrement consacré à la vie et à l'œuvre de Matoub Lounès",
  sameAs: [
    "https://www.facebook.com/FondationLounesMatoub98/",
  ],
};

export const breadcrumbJsonLd = (items: Array<{ name: string; url?: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    ...(item.url && { item: item.url }),
  })),
});

export const articleJsonLd = (params: {
  title: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: params.title,
  description: params.description,
  ...(params.image && { image: params.image }),
  datePublished: params.datePublished || new Date().toISOString(),
  dateModified: params.dateModified || new Date().toISOString(),
  author: {
    "@type": "Person",
    name: params.author || "Matoub Lounès",
  },
  url: params.url,
});

export const musicRecordingJsonLd = (params: {
  name: string;
  artist: string;
  album: string;
  duration?: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "MusicRecording",
  name: params.name,
  byArtist: {
    "@type": "MusicGroup",
    name: params.artist,
  },
  inAlbum: {
    "@type": "MusicAlbum",
    name: params.album,
  },
  ...(params.duration && { duration: params.duration }),
  url: params.url,
});

export const musicAlbumJsonLd = (params: {
  name: string;
  artist: string;
  releaseDate?: string;
  image?: string;
  url: string;
  tracks?: Array<{ name: string; duration?: string }>;
}) => ({
  "@context": "https://schema.org",
  "@type": "MusicAlbum",
  name: params.name,
  byArtist: {
    "@type": "MusicGroup",
    name: params.artist,
  },
  ...(params.releaseDate && { releaseDate: params.releaseDate }),
  ...(params.image && { image: params.image }),
  url: params.url,
  ...(params.tracks && {
    track: {
      "@type": "ItemList",
      itemListElement: params.tracks.map((track, index) => ({
        "@type": "MusicRecording",
        position: index + 1,
        name: track.name,
        ...(track.duration && { duration: track.duration }),
      })),
    },
  }),
});

export const videoObjectJsonLd = (params: {
  name: string;
  description: string;
  thumbnailUrl?: string;
  uploadDate?: string;
  duration: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: params.name,
  description: params.description,
  ...(params.thumbnailUrl && { thumbnailUrl: params.thumbnailUrl }),
  uploadDate: params.uploadDate || new Date().toISOString(),
  duration: params.duration,
  url: params.url,
});
