import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PenLine } from "lucide-react";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";
import { SectionTitle } from "@/components/common/SectionTitle";

export const metadata: Metadata = {
  title: "Son œuvre — Matoub Lounès",
  description: "Analyses et regards sur l'œuvre poétique et musicale de Matoub Lounès.",
};

const ARTICLES = [
  {
    slug: "un-poete-pour-l-eternite",
    title: "Un poète pour l'éternité",
    source: "Analyse littéraire",
    excerpt: "Lounès Matoub est sublime dans l'éternité de son temps et la singularité de notre humanité. Son statut, il l'a arraché de son vivant même. Comparer Matoub à des poètes comme Anna Akhmatova, Marina Tsvetaïeva ou son contemporain arabe Mahmoud Darwish peut rendre compte de la dimension universelle de son œuvre. [...]",
  },
  {
    slug: "regard-sur-la-poesie",
    title: "Regard sur la poésie de Matoub Lounès",
    source: "Critique littéraire",
    excerpt: "La poésie de Lounès Matoub représente un bel exemple du renouvellement de la poésie kabyle, tant sur le plan thématique que stylistique. Le poète est devenu un chroniqueur de son temps. On peut relire l'histoire de l'Algérie depuis la guerre de l'indépendance rien qu'en décortiquant sa poésie. [...]",
  },
  {
    slug: "oeuvre-matoub",
    title: "Matoub Lounès et son œuvre",
    source: "Présentation générale",
    excerpt: "Si les dimensions politique et revendicative de l'œuvre de Matoub Lounès ont été bien rapportées, sa base musicale et sa poésie restent souvent méconnues. Matoub était un baroudeur du verbe qui avait atteint un niveau artistique auquel très peu pourrait prétendre. [...]",
  },
];

export default function SonOeuvrePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <div className="max-w-2xl">
        <BreadcrumbNav items={[{ label: "Le Rebelle" }, { label: "Son œuvre" }]} />
        <SectionTitle tifinagh="ⴰⵙⵏⴼⴰⵔ-ⵉⵙ">Son œuvre</SectionTitle>

        <p className="text-sm mb-10 leading-relaxed" style={{ color: "var(--color-muted)" }}>
          Analyses, regards critiques et présentations de l&apos;œuvre musicale et poétique de
          Matoub Lounès.
        </p>

        <div className="space-y-0">
          {ARTICLES.map((article, i) => (
            <article
              key={article.slug}
              className="py-8"
              style={{
                borderBottom:
                  i < ARTICLES.length - 1 ? "1px solid var(--color-border)" : "none",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="mt-1 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(200,134,10,0.10)" }}
                >
                  <PenLine size={16} style={{ color: "var(--color-gold)" }} />
                </div>
                <div className="flex-1">
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: "var(--color-gold)" }}
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
                    href={`/le-rebelle/son-oeuvre/${article.slug}`}
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
