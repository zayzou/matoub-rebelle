import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Regard sur la poésie de Matoub Lounès",
};

export default function RegardPoesiePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <BreadcrumbNav items={[
        { label: "Le Rebelle" },
        { label: "Son œuvre", href: "/le-rebelle/son-oeuvre" },
        { label: "Regard sur la poésie" },
      ]} />

      <h1 className="text-3xl font-bold mb-8 leading-snug" style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}>
        Regard sur la poésie de Matoub Lounès
      </h1>

      <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-text)" }}>
        <p>Il y a quelques années, la critique saluait le renouvellement qui s&apos;est produit en poésie kabyle. Cette dernière, pour reprendre la thèse de M. Mammeri, est entrée dans une phase de stagnation liée à la rigidité des structures socio-économiques. Le renouvellement est, lui aussi, lié à l&apos;évolution de ses structures et surtout aux grands bouleversements qu&apos;a connu la société kabyle dans cette dernière moitié du XXème siècle.</p>
        <p>La poésie de Lounès Matoub, tout comme celle de Ben Mohamed et Aït Menguellet, représente un bel exemple de ce renouvellement tant sur le plan thématique que stylistique.</p>

        <h2 className="text-xl font-bold mt-6" style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}>Chronique du présent</h2>
        <p>L&apos;une des caractéristiques de la poésie de Matoub est d&apos;être inscrite dans le temps. Le poète est devenu un chroniqueur de son temps. Matoub situe les événements dans le temps et dans l&apos;espace. On peut relire l&apos;histoire de l&apos;Algérie depuis la guerre de l&apos;indépendance rien qu&apos;en décortiquant la poésie de Matoub.</p>
        <p>Les événements politiques comme la situation économique sont décrits avec précision : le Printemps Berbère (1980), les accords de Londres (1985), les événements d&apos;octobre 1988, l&apos;assassinat de Boudiaf (1991), le terrorisme islamiste (1992-1997)… sont autant d&apos;exemples figurants dans l&apos;œuvre de Matoub.</p>

        <h2 className="text-xl font-bold mt-6" style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}>Réécriture de l&apos;Histoire</h2>
        <p>L&apos;Histoire des Berbères, des Algériens, des Kabyles est écrite par d&apos;autres, dont les pouvoirs en place qui ne servent pas les intérêts des Berbères. Elle est donc travestie. Matoub s&apos;est fixé comme but de la dépouiller des habits qui ne sont pas les siens, de la réécrire.</p>
        <p>Ainsi, il ne se gênera pas pour dénoncer l&apos;assassinat de Abane Ramdane au Maroc en 1957. Il dénoncera aussi l&apos;assassinat de Krim Belkacem à Francfort en 1970. Il contera comment Ben Bella a utilisé l&apos;armée pour écraser la révolte kabyle de 1963.</p>

        <h2 className="text-xl font-bold mt-6" style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}>La revendication berbère</h2>
        <p>Un des thèmes les plus récurrents dans la poésie de Matoub demeure la défense de la langue et de la culture berbères. En partant du constat de l&apos;éternelle blessure de cette langue dans <em>Ay adrar n At Yiraten</em> (1981), Matoub espère qu&apos;elle bénéficiera d&apos;une reconnaissance officielle dans <em>Asirem</em> (1989).</p>
        <p>Cette défense de la langue maternelle s&apos;accompagne de la dénonciation de la politique d&apos;arabisation, des agents de celle-ci, et de la démystification du caractère sacré de l&apos;arabe dans <em>Allah wakbeṛ</em> (1993).</p>
      </div>

      <div className="mt-10 pt-6" style={{ borderTop: "1px solid var(--color-border)" }}>
        <Link href="/le-rebelle/son-oeuvre" className="inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: "var(--color-gold)" }}>
          <ArrowLeft size={14} /> Retour à « Son œuvre »
        </Link>
      </div>
    </div>
  );
}
