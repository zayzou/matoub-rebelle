import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileSearch } from "lucide-react";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";
import { SectionTitle } from "@/components/common/SectionTitle";

export const metadata: Metadata = {
  title: "Dossier Assassinat — Matoub Lounès",
  description: "Enquêtes et témoignages sur l'assassinat de Matoub Lounès le 25 juin 1998 sur la route de Tala Bounane.",
};

const ARTICLES = [
  {
    slug: "enquete-liberation",
    title: "Enquête de Libération sur l'assassinat de Matoub Lounès",
    source: "Libération, 1998",
    excerpt: "Qui a commandité, qui a manipulé les assassins de Lounès Matoub, héros kabyle disparu le 25 juin 1998 ? Qui sont ces « coupables » qu'on exhibe à la télévision, ou qui disparaissent sans laisser de traces ? « Libération » a enquêté : le dossier d'instruction est presque vide, et des secteurs proches du pouvoir semblent impliqués. [...]",
  },
];

export default function DossierAssassinatPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <div className="max-w-2xl">
        <BreadcrumbNav items={[{ label: "Le Rebelle" }, { label: "Dossier assassinat" }]} />
        <SectionTitle tifinagh="ⴰⵏⴰⵍ ⵏ ⵜⵇⴻⵙⵙⵉⵜ">Dossier Assassinat</SectionTitle>

        <div
          className="p-4 rounded-lg mb-8 text-sm leading-relaxed"
          style={{
            background: "rgba(201,72,32,0.07)",
            border: "1px solid rgba(201,72,32,0.2)",
            color: "var(--color-text)",
          }}
        >
          <strong style={{ color: "var(--color-terra)" }}>25 juin 1998</strong> — Matoub Lounès
          est assassiné sur la route de Tala Bounane, à quelques kilomètres de son village. Sa
          femme Nadia et ses belles-sœurs sont grièvement blessées. À ce jour, la vérité complète
          sur cet assassinat n&apos;a pas été établie.
        </div>

        <div className="space-y-0">
          {ARTICLES.map((article, i) => (
            <article
              key={article.slug}
              className="py-8"
              style={{
                borderBottom: i < ARTICLES.length - 1 ? "1px solid var(--color-border)" : "none",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="mt-1 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(201,72,32,0.08)" }}
                >
                  <FileSearch size={16} style={{ color: "var(--color-terra)" }} />
                </div>
                <div className="flex-1">
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: "var(--color-terra)" }}
                  >
                    {article.source}
                  </p>
                  <h2
                    className="text-xl font-bold mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
                  >
                    {article.title}
                  </h2>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/le-rebelle/dossier-assassinat/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold group"
                    style={{ color: "var(--color-gold)" }}
                  >
                    Lire la suite
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
