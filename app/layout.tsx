import type { Metadata } from "next";
import {
  Amiri,
  Inter,
  Playfair_Display,
  Noto_Sans_Tifinagh,
} from "next/font/google";
import "./globals.css";
import { VercelMonitoring } from "@/components/common/VercelAnalytics";

const fontSerif = Amiri({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["arabic", "latin"],
  variable: "--font-serif",
  display: "swap",
});

const fontSans = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontDisplay = Playfair_Display({
  weight: ["400", "700"],
  style: ["italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const fontTifinagh = Noto_Sans_Tifinagh({
  weight: "400",
  subsets: ["tifinagh"],
  variable: "--font-tifinagh",
  display: "swap",
});

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
    <html
      lang="fr"
      className={`${fontSerif.variable} ${fontSans.variable} ${fontDisplay.variable} ${fontTifinagh.variable}`}
    >
      <body>
        {children}
        <VercelMonitoring />
      </body>
    </html>
  );
}
