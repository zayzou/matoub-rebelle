import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Déclaration devant le congrès italien — Matoub Lounès",
  description: "Discours de Matoub Lounès devant le congrès italien pour l'abrogation de la peine de mort, Rome 1996.",
};

export default function DeclarationItaliePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <BreadcrumbNav items={[
        { label: "Le Rebelle" },
        { label: "Lounès a dit…", href: "/le-rebelle/lounes-a-dit" },
        { label: "Congrès italien 1996" },
      ]} />

      <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-gold)" }}>
        Rome, 1996
      </p>
      <h1
        className="text-3xl font-bold mb-8 leading-snug"
        style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
      >
        Déclaration devant le congrès italien<br />
        pour l&apos;abrogation de la peine de mort
      </h1>

      <div className="prose-content space-y-4 text-base leading-relaxed" style={{ color: "var(--color-text)" }}>
        <p>Mesdames et messieurs,</p>
        <p>Je suis ici pour la Marche des Rameaux sur invitation de la campagne pour l&apos;abolition de la peine de mort « ne touchez pas à Caen » et du parti radical.</p>
        <p>Permettez-moi de dire quelques mots dans ma langue maternelle, le berbère, à la mémoire de Jugurtha, roi de Numidie, mort dans une cellule ici à Rome il y a plus de deux mille ans : <strong>« Anerrez wala an-neknu »</strong> (Plutôt rompre que plier).</p>
        <p>Chers amis,</p>
        <p>J&apos;ai été condamné à mort par le GIA (Groupe Islamique Armé). Ils m&apos;ont condamné car pour eux, je suis synonyme de dépravation dans mon pays. Chanter veut dire pour eux s&apos;écarter du chemin, celui de Dieu.</p>
        <p>Pendant les seize nuits qu&apos;a duré ma séquestration, l&apos;ombre de la mort ne m&apos;a pas quitté un instant. J&apos;avais peur, j&apos;avais très peur. J&apos;ai été confronté à la mort plusieurs fois dans ma vie, mais cette fois-ci cela a été le paroxysme de l&apos;horreur.</p>
        <p>J&apos;en ai échappé miraculeusement grâce à un énorme élan de solidarité. La Kabylie s&apos;est soulevée comme un seul homme pour exiger ma libération sans condition.</p>
        <p>Malheureusement, beaucoup — et parmi les meilleurs d&apos;entre nous — n&apos;ont pas eu cette chance. Je ne voudrais pas vous remémorer cette expérience douloureuse. J&apos;ai hâte de l&apos;oublier comme j&apos;aimerais aussi toujours me rappeler pour pouvoir interpeller la société devant ce danger mortel.</p>
        <p>Ce que je voudrais dire ici, c&apos;est qu&apos;il n&apos;y a pas que les intellectuels ou les artistes qui sont condamnés à mort, assassinés. Aujourd&apos;hui, on peut être condamné à mort sans le savoir. Comme ces jeunes filles qui rejettent le voile ou qui refusent le « zaouadj el moutâa », ce fameux mariage de jouissance, ainsi que celles qu&apos;on assassine sur le chemin de l&apos;école. Comme ces jeunes gens « coupables » d&apos;avoir effectué le service national. Comme tant d&apos;autres, « coupables » d&apos;être parents d&apos;un agent de police ou d&apos;un magistrat ou simplement « coupables » d&apos;avoir pris le bus.</p>
        <p>Seigneur Dieu, pourquoi ?</p>
        <p>Aujourd&apos;hui, tout Algérien qui se lève le matin est un condamné à mort potentiel. La mort, ou plutôt le crime est revendiqué, assumé comme moyen pour instaurer un régime qui est fondé sur l&apos;assassinat. La mort est au cœur du système intégriste, au plus profond de son âme.</p>
        <p>Mais nous condamnons toutes les morts, y compris celles des États. Merci pour votre action qui est aussi notre combat à tous : mettre fin à toute peine de mort officielle ou sauvage, « civilisée » ou barbare.</p>
        <p>Non ! Non à l&apos;intolérance ! Tissons ensemble les liens de la solidarité.</p>
        <p>Je remercie le parti radical et vous tous ici présents pour m&apos;avoir aidé et permis de m&apos;exprimer. Demain, je serai présent pour apporter mon soutien à la campagne pour l&apos;abolition de la peine de mort avant l&apos;an 2000, à l&apos;occasion de la Marche des Rameaux.</p>
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
