"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const SECTIONS = [
  {
    title: "Le Rebelle",
    tifinagh: "ⴰⵏⴰⵣⴱⴰⵢ",
    links: [
      { label: "Sa vie", href: "/le-rebelle/sa-vie" },
      { label: "Biographie complète", href: "/le-rebelle/biographie" },
      { label: "Son combat", href: "/le-rebelle/son-combat" },
      { label: "Son œuvre", href: "/le-rebelle/son-oeuvre" },
      { label: "Discographie", href: "/discographie" },
      { label: "Paroles chansons", href: "/paroles" },
      { label: "Lounès a dit...", href: "/le-rebelle/lounes-a-dit" },
      { label: "Dossier assassinat", href: "/le-rebelle/dossier-assassinat" },
    ],
  },
  {
    title: "Audio",
    tifinagh: "ⵓⵙⵍⵉⴷ",
    links: [
      { label: "Lecteur de chansons", href: "/audio" },
      { label: "Extraits d'albums", href: "/audio/extraits" },
      { label: "Émissions de radio", href: "/audio/emissions-radio" },
    ],
  },
  {
    title: "Photos",
    tifinagh: "ⵜⵉⵡⵡⵓⵔⵉⵡⵉⵏ",
    links: [
      { label: "Pochettes d'album", href: "/photos/pochettes" },
      { label: "Photos personnelles", href: "/photos/personnelles" },
      { label: "Sur scène", href: "/photos/sur-scene" },
      { label: "Photos pro", href: "/photos/studio" },
      { label: "Chez Matoub", href: "/photos/chez-matoub" },
      { label: "Œuvres", href: "/photos/oeuvres" },
    ],
  },
  {
    title: "Vidéos",
    tifinagh: "ⵜⵉⵡⵡⵓⵔⵉⵡⵉⵏ",
    links: [
      { label: "Interviews", href: "/videos/interviews" },
      { label: "Matoub chante", href: "/videos/matoub-chante" },
      { label: "Chansons (sous-titrées)", href: "/videos/chansons-sous-titrees" },
      { label: "Ils parlent de Matoub", href: "/videos/ils-parlent-de-matoub" },
    ],
  },
  {
    title: "Divers",
    tifinagh: "ⵜⵉⴳⴳⵉ",
    links: [
      { label: "Bibliographie", href: "/divers/bibliographie" },
      { label: "Liens", href: "/divers/liens" },
      { label: "Plan du site", href: "/plan-du-site" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="w-56 shrink-0 hidden lg:block"
      style={{ color: "var(--color-parchment)" }}
    >
      {/* News link */}
      <Link
        href="/news"
        className={cn(
          "block px-4 py-2 rounded mb-1 text-sm font-semibold transition-colors",
          pathname.startsWith("/news") ? "text-gold" : "hover:text-saffron"
        )}
        style={{
          backgroundColor:
            pathname.startsWith("/news") ? "rgba(201,168,76,0.12)" : "transparent",
          color: pathname.startsWith("/news") ? "var(--color-gold)" : "var(--color-parchment)",
        }}
      >
        Les News
      </Link>

      {SECTIONS.map((section) => (
        <div key={section.title} className="mb-4">
          {/* Section header */}
          <div
            className="px-3 py-1.5 rounded-t text-xs font-bold uppercase tracking-wider flex items-center gap-2"
            style={{
              backgroundColor: "rgba(201,168,76,0.08)",
              borderBottom: "1px solid var(--color-border)",
              color: "var(--color-gold)",
            }}
          >
            <span>{section.title}</span>
          </div>
          {/* Section links */}
          <div
            className="rounded-b overflow-hidden"
            style={{ border: "1px solid var(--color-border)", borderTop: "none" }}
          >
            {section.links.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block px-3 py-1.5 text-xs transition-colors border-b last:border-b-0",
                    isActive ? "font-semibold" : "hover:text-cream"
                  )}
                  style={{
                    borderColor: "var(--color-border)",
                    backgroundColor: isActive
                      ? "rgba(201,168,76,0.1)"
                      : "var(--color-sidebar)",
                    color: isActive ? "var(--color-saffron)" : "var(--color-silver)",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </aside>
  );
}
