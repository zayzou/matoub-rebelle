import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Matoub Lounès — Le Rebelle",
    template: "%s | Matoub Lounès",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  description:
    "Site entièrement consacré à la vie et à l'œuvre de Matoub Lounès, le célèbre chanteur-poète Kabyle (1956–1998), symbole de liberté et d'identité amazigh.",
  keywords: [
    "Matoub Lounès",
    "Chanteur kabyle",
    "Poète amazigh",
    "Kabylie",
    "Tamazight",
    "Imazighen",
    "Musique kabyle",
    "Liberté",
    "Identité culturelle",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Matoub Lounès — Le Rebelle",
    title: "Matoub Lounès — Le Rebelle",
    description: "La vie et l'œuvre de Matoub Lounès, poète et chanteur kabyle (1956–1998), symbole de liberté.",
    url: "https://matoub-rebelle.com",
    images: [
      {
        url: "https://matoub-rebelle.com/images/studio/213.jpg",
        width: 1200,
        height: 630,
        alt: "Matoub Lounès — Le Rebelle",
        type: "image/jpeg",
      },
    ],
  },
  alternates: {
    canonical: "https://matoub-rebelle.com",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@1,400;1,700&family=Noto+Sans+Tifinagh&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
