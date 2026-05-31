import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Prix de la mémoire — Matoub Lounès",
  description: "Discours de Matoub Lounès lors de la remise du Prix de la mémoire par la Fondation France Libertés, 6 décembre 1994.",
};

export default function PrixMemoirePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <BreadcrumbNav items={[
        { label: "Le Rebelle" },
        { label: "Lounès a dit…", href: "/le-rebelle/lounes-a-dit" },
        { label: "Prix de la mémoire" },
      ]} />

      <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-gold)" }}>
        6 décembre 1994 — Fondation France Libertés
      </p>
      <h1
        className="text-3xl font-bold mb-2 leading-snug"
        style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
      >
        Déclaration lors de la remise du<br />
        Prix de la mémoire
      </h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted)" }}>
        Décerné le 6 décembre 1994 par la Fondation France Libertés (Danielle Mitterrand).
      </p>

      <div className="mb-8 rounded-xl overflow-hidden" style={{ maxWidth: 300 }}>
        <Image
          src="/images/photos/chez-matoub/500.jpg"
          alt="Matoub Lounès"
          width={300}
          height={240}
          className="w-full object-cover"
        />
      </div>

      <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-text)" }}>
        <p>Personne, et surtout pas les plus humbles, n&apos;est épargné par la violence qui secoue l&apos;Algérie. Dans mon pays aujourd&apos;hui, on est tué pour ce que l&apos;on fait.</p>
        <p>J&apos;ai été arrêté, mitraillé par le pouvoir comme chanteur berbère. Et lorsque, récemment j&apos;ai été enlevé par des éléments des GIA, ils ne m&apos;ont pas reproché une quelconque collusion avec le pouvoir.</p>
        <p>D&apos;ailleurs, ils savaient que j&apos;avais subi la prison, que j&apos;avais été criblé de balles par les gendarmes à l&apos;époque où l&apos;intégrisme poussait à l&apos;ombre de l&apos;institution de l&apos;État.</p>
        <p>Non, ce qu&apos;ils m&apos;ont reproché, c&apos;est d&apos;être libre penseur ; de rejeter la dictature arabo-islamique. Ce qu&apos;ils m&apos;ont reproché aussi, c&apos;est de chanter l&apos;antique esprit de résistance, celui de la reine Kahina qui s&apos;est opposée à la première invasion arabe.</p>
        <p>Kahina, Massinissa, Jugurtha sont autant de noms qui sont aujourd&apos;hui bannis de l&apos;histoire officielle comme de celle des intégristes. Car tous les dictateurs qui veulent s&apos;approprier l&apos;Algérie commencent par la façonner pour la dominer. Et le premier acte, c&apos;est d&apos;effacer la mémoire du pays, c&apos;est-à-dire, son histoire.</p>
        <p>Les figures emblématiques de notre antiquité résonnent comme autant de dénonciations de cette imposture. La langue tamazight, c&apos;est-à-dire berbère, chassée des plaines, retranchée sur les crêtes, refoulée dans le désert, est la preuve vivante que le peuple algérien est d&apos;abord berbère, même si une grande partie a perdu l&apos;usage de la langue ancestrale.</p>
        <p>Cette négation de l&apos;identité, cette mémoire traquée, c&apos;est une constante de notre histoire. On nous a dit Romains, Byzantins, Arabes, Turcs, Gaulois et aujourd&apos;hui encore dans cette Afrique du Nord libérée de toute tutelle coloniale, nous ne sommes toujours pas Imazighen. Pourquoi ?</p>
        <p>Comme disait Jean Amrouche : <em>« On peut affamer les corps, on peut battre les volontés, mâter la fierté la plus dure sur l&apos;enclume du mépris. On ne peut assécher les sources profondes où l&apos;âme orpheline par mille radicelles invisibles suce le lait de la liberté. »</em></p>
        <p>C&apos;est ce lait de la liberté qui est sucé à travers les racines, qui rend indomptables les régions berbérophones. Aujourd&apos;hui, c&apos;est le Mouvement Culturel Berbère qui est le noyau identitaire et le fer de lance de la résistance.</p>
        <p>La culture berbère, à mes yeux, c&apos;est l&apos;attachement indéfectible à l&apos;esprit de liberté. D&apos;avoir subi des siècles d&apos;oppression nous rapproche des peuples qui ont connu la même destinée. Le Berbère que je suis est frère du Juif qui a vécu la Shoah, de l&apos;Arménien qui a vécu le terrible génocide de 1915, de Taslima Nasreen et de toutes les femmes qui se battent de par le monde ; frère du Tibétain acculé par-delà les glaciers, frère du Kurde qui lutte sur les tirs croisés de multiples dictatures, et frère de l&apos;Africain déraciné…</p>
        <p>Nous avons en commun la mémoire de nos sacrifices. Je vous demande aujourd&apos;hui de tisser les liens de la solidarité.</p>
        <p className="font-bold mt-6" style={{ color: "var(--color-gold)", fontFamily: "var(--font-serif)" }}>
          Lounès Matoub
        </p>
      </div>

      <div className="mt-10 pt-6" style={{ borderTop: "1px solid var(--color-border)" }}>
        <Link
          href="/le-rebelle/lounes-a-dit"
          className="inline-flex items-center gap-1.5 text-sm font-medium"
          style={{ color: "var(--color-gold)" }}
        >
          <ArrowLeft size={14} /> Retour à « Lounès a dit… »
        </Link>
      </div>
    </div>
  );
}
