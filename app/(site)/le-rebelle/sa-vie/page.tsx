import { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";
import { SectionTitle } from "@/components/common/SectionTitle";

export const metadata: Metadata = {
  title: "Sa vie — Matoub Lounès",
  description:
    "Aperçu de la vie de Matoub Lounès, chanteur-poète kabyle né le 24 janvier 1956 à Taourirt Moussa, assassiné le 25 juin 1998.",
};

export default function SaViePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
    <div className="max-w-2xl">
      <BreadcrumbNav items={[{ label: "Le Rebelle" }, { label: "Sa vie" }]} />
      <SectionTitle tifinagh="ⵜⵓⴷⴻⵔⵜ-ⵉⵙ">Sa vie</SectionTitle>

      <div className="prose-kabyle space-y-4">
        <p>
          Lounès Matoub, plus communément appelé Matoub Lounès, est un chanteur-auteur-compositeur
          et poète kabyle, connu pour son engagement dans la revendication identitaire amazigh. Il
          fut assassiné le 25 juin 1998 en Kabylie. Officiellement, cet assassinat est attribué au
          GIA mais sa famille et l&apos;ensemble des kabyles accusent le pouvoir algérien de
          l&apos;avoir assassiné.
        </p>
        <p>
          Sa mort lui donne un statut de martyr pour les nationalistes et militants kabyles qui
          estiment que les droits qui leur sont accordés sont insuffisants. De nombreux faux-mythes
          tournent et sont toujours d&apos;actualité autour du culte de la personnalité qui lui est
          voué.
        </p>

        <Link
          href="/le-rebelle/biographie"
          className="inline-block px-5 py-2.5 rounded text-sm font-semibold transition-colors"
          style={{
            backgroundColor: "var(--color-gold)",
            color: "var(--color-earth)",
          }}
        >
          Lire la biographie complète →
        </Link>

        {/* Satellite view card */}
        <div
          className="mt-6 p-4 rounded-lg border"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "rgba(201,168,76,0.04)",
          }}
        >
          <h2 className="text-base font-semibold mb-2" style={{ color: "var(--color-saffron)" }}>
            Vue satellite de sa maison, de sa tombe et de son village
          </h2>
          <p className="text-sm mb-3" style={{ color: "var(--color-silver)" }}>
            Taourirt Moussa Ouamar, le village natal de Matoub Lounès, perché dans les montagnes de
            Grande Kabylie, à quelques kilomètres de Tizi Ouzou.
          </p>
          <a
            href="https://maps.google.com/?q=36.5553,4.1622"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm underline"
            style={{ color: "var(--color-gold)" }}
          >
            📍 Voir sur Google Maps — Taourirt Moussa, Kabylie
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
