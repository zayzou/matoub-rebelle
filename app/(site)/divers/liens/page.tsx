import { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";
import { SectionTitle } from "@/components/common/SectionTitle";

export const metadata: Metadata = { title: "Liens" };

const LINKS = [
  {
    category: "Officiel & Famille",
    items: [
      { label: "Site officiel Malika Matoub", url: "#", desc: "Site de la sœur de Matoub Lounès" },
      { label: "Association des fans de Matoub", url: "#", desc: "Association officielle" },
    ],
  },
  {
    category: "Culture Amazighe",
    items: [
      { label: "Académie Berbère (Agraw Imazighen)", url: "#", desc: "Académie culturelle amazighe" },
      { label: "HCA — Haut Commissariat à l'Amazighité", url: "#", desc: "Institution officielle algérienne" },
      { label: "Tamazgha.fr", url: "#", desc: "Portail de la culture amazighe" },
    ],
  },
  {
    category: "Ressources musicales",
    items: [
      { label: "Kabylie.com", url: "#", desc: "Portail kabyle" },
      { label: "Tiddukla — Musique Amazighe", url: "#", desc: "Ressources musicales berbères" },
    ],
  },
];

export default function LiensPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
    <div>
      <BreadcrumbNav items={[{ label: "Divers" }, { label: "Liens" }]} />
      <SectionTitle tifinagh="ⵉⵙⴻⵍⴽⵉⵎⴻⵏ">Liens</SectionTitle>

      <div className="space-y-6">
        {LINKS.map((group) => (
          <div key={group.category}>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-gold)" }}
            >
              {group.category}
            </h3>
            <div className="space-y-2">
              {group.items.map((item) => (
                <div key={item.label} className="kabyle-card p-3 flex items-center gap-3">
                  <span style={{ color: "var(--color-gold)" }}>→</span>
                  <div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:text-saffron transition-colors"
                      style={{ color: "var(--color-parchment)" }}
                    >
                      {item.label}
                    </a>
                    <p className="text-xs" style={{ color: "var(--color-silver)" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
