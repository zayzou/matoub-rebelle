import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";
import { SectionTitle } from "@/components/common/SectionTitle";

export const metadata: Metadata = {
  title: "Lounès a dit… — Déclarations et discours",
  description: "Discours, déclarations et interviews de Matoub Lounès : congrès italien 1996, Prix de la liberté d'expression 1995, Prix de la mémoire 1994.",
};

const DECLARATIONS = [
  {
    slug: "declaration-italie",
    title: "Déclaration devant le congrès italien pour l'abrogation de la peine de mort",
    date: "Rome, 1996",
    excerpt: "Permettez-moi de dire quelques mots dans ma langue maternelle, le berbère, à la mémoire de Jugurtha, roi de Numidie, mort dans une cellule ici à Rome il y a plus de deux mille ans : « Anerrez wala an-neknu » (Plutôt rompre que plier). J'ai été condamné à mort par le GIA. Ils m'ont condamné car pour eux, je suis synonyme de dépravation dans mon pays. Pendant les seize nuits qu'a duré ma séquestration, l'ombre de la mort ne m'a pas quitté un instant. [...]",
  },
  {
    slug: "prix-liberte",
    title: "Déclaration lors de la remise du Prix de la liberté d'expression",
    date: "22 mars 1995 — S.C.I.J., Canada",
    excerpt: "Mon engagement pour la liberté d'expression, contre l'intolérance, remonte à la fin des années 70. À l'époque, nous étions un certain nombre d'hommes et de femmes engagés pour la reconnaissance de la dimension berbère en Algérie. Le combat pour la liberté d'expression, contre l'intégrisme a commencé là : le droit pour un enfant kabyle de parler, d'apprendre sa langue maternelle. [...]",
  },
  {
    slug: "prix-memoire",
    title: "Déclaration lors de la remise du Prix de la mémoire",
    date: "6 décembre 1994 — Fondation France Libertés (Danielle Mitterrand)",
    excerpt: "Ce qu'ils m'ont reproché, c'est d'être libre penseur ; de rejeter la dictature arabo-islamique. Ce qu'ils m'ont reproché aussi, c'est de chanter l'antique esprit de résistance, celui de la reine Kahina. La langue tamazight, chassée des plaines, retranchée sur les crêtes, refoulée dans le désert, est la preuve vivante que le peuple algérien est d'abord berbère. [...]",
  },
];

export default function LounesADitPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <BreadcrumbNav items={[{ label: "Le Rebelle" }, { label: "Lounès a dit…" }]} />
      <SectionTitle tifinagh="ⵢⴻⵏⵏⴰ-ⴷ ⵍⵓⵏⵙ">Lounès a dit…</SectionTitle>

      <p className="text-sm mb-10 leading-relaxed" style={{ color: "var(--color-muted)" }}>
        Interviews, discours et déclarations de Matoub Lounès — ses mots qui continuent de résonner.
      </p>

      <div className="space-y-0">
        {DECLARATIONS.map((decl, i) => (
          <article
            key={decl.slug}
            className="py-8"
            style={{
              borderBottom: i < DECLARATIONS.length - 1
                ? "1px solid var(--color-border)"
                : "none",
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="mt-1 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "rgba(200,134,10,0.10)" }}
              >
                <Quote size={16} style={{ color: "var(--color-gold)" }} />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest mb-1"
                  style={{ color: "var(--color-gold)" }}>
                  {decl.date}
                </p>
                <h2
                  className="text-xl font-bold mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
                >
                  {decl.title}
                </h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-muted)" }}>
                  {decl.excerpt}
                </p>
                <Link
                  href={`/le-rebelle/lounes-a-dit/${decl.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold group"
                  style={{ color: "var(--color-gold)" }}
                >
                  Lire la suite
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
