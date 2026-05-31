import { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";
import { SectionTitle } from "@/components/common/SectionTitle";

export const metadata: Metadata = { title: "Plan du site" };

const SITE_MAP = [
  {
    title: "Le Rebelle",
    links: [
      { label: "Sa vie", href: "/le-rebelle/sa-vie" },
      { label: "Son combat", href: "/le-rebelle/son-combat" },
      { label: "Son œuvre", href: "/le-rebelle/son-oeuvre" },
      { label: "Lounès a dit...", href: "/le-rebelle/lounes-a-dit" },
      { label: "Dossier assassinat", href: "/le-rebelle/dossier-assassinat" },
    ],
  },
  {
    title: "Musique",
    links: [
      { label: "Discographie complète", href: "/discographie" },
      { label: "Paroles des chansons", href: "/paroles" },
      { label: "Lecteur de chansons", href: "/audio" },
      { label: "Extraits d'albums", href: "/audio/extraits" },
      { label: "Émissions de radio", href: "/audio/emissions-radio" },
    ],
  },
  {
    title: "Photos",
    links: [
      { label: "Pochettes d'albums", href: "/photos/pochettes" },
      { label: "Photos personnelles", href: "/photos/personnelles" },
      { label: "Sur scène", href: "/photos/sur-scene" },
      { label: "Photos professionnelles", href: "/photos/studio" },
      { label: "Chez Matoub", href: "/photos/chez-matoub" },
      { label: "Œuvres", href: "/photos/oeuvres" },
    ],
  },
  {
    title: "Vidéos",
    links: [
      { label: "Interviews", href: "/videos/interviews" },
      { label: "Matoub chante", href: "/videos/matoub-chante" },
      { label: "Chansons sous-titrées", href: "/videos/chansons-sous-titrees" },
      { label: "Ils parlent de Matoub", href: "/videos/ils-parlent-de-matoub" },
    ],
  },
  {
    title: "Divers",
    links: [
      { label: "Actualités", href: "/news" },
      { label: "Bibliographie", href: "/divers/bibliographie" },
      { label: "Liens", href: "/divers/liens" },
      { label: "Livre d'or", href: "/livre-dor" },
      { label: "Jeux / Quiz", href: "/jeux" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function PlanDuSitePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
    <div>
      <BreadcrumbNav items={[{ label: "Plan du site" }]} />
      <SectionTitle>Plan du site</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SITE_MAP.map((section) => (
          <div key={section.title}>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-3 pb-1"
              style={{
                color: "var(--color-gold)",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              {section.title}
            </h3>
            <ul className="space-y-1.5">
              {section.links.map((link) => (
                <li key={link.href} className="flex items-center gap-2">
                  <span className="text-xs" style={{ color: "var(--color-gold)" }}>→</span>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-cream transition-colors"
                    style={{ color: "var(--color-silver)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
