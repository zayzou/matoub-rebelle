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
    "Site entièrement consacré à la vie et à l'œuvre de Matoub Lounès, le célèbre chanteur/poète Kabyle et porte-parole d'un peuple.",
  keywords: ["Matoub Lounès", "Kabylie", "Rebelle", "Kabyle", "Tamazight", "Imazighen"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Matoub Lounès — Le Rebelle",
    title: "Matoub Lounès — Le Rebelle",
    description: "La vie et l'œuvre de Matoub Lounès, poète et chanteur kabyle (1956–1998).",
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
