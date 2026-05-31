import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Un poète pour l'éternité — Matoub Lounès",
};

export default function UnPoetePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <BreadcrumbNav items={[
        { label: "Le Rebelle" },
        { label: "Son œuvre", href: "/le-rebelle/son-oeuvre" },
        { label: "Un poète pour l'éternité" },
      ]} />

      <h1 className="text-3xl font-bold mb-8 leading-snug" style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}>
        Un poète pour l&apos;éternité
      </h1>

      <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-text)" }}>
        <p>Lounès Matoub est sublime dans l&apos;éternité de son temps et la singularité de notre humanité. Il est né le 24 janvier 1956 en Grande Kabylie. Il y a été assassiné le 25 juin 1998, victime d&apos;un probable complot politique. Pour les Algériens de Kabylie, le « contrat » de son exécution a été sous-traité à des complices locaux par certains clans de la nébuleuse appelée, de manière fort imprécise, « le pouvoir ».</p>
        <p>Mais ce n&apos;est pas parce qu&apos;il a été assassiné qu&apos;il est considéré comme l&apos;un des personnages importants de l&apos;histoire de l&apos;Algérie contemporaine et comme l&apos;un de ses plus grands artistes. Son statut, il l&apos;a arraché de son vivant même, et c&apos;est d&apos;ailleurs pourquoi il pouvait être utile de le liquider.</p>
        <p>Comparer Matoub à des poètes comme Anna Akhmatova, Marina Tsvetaïeva ou son contemporain arabe Mahmoud Darwish peut rendre compte de la dimension universelle de son œuvre et de sa place dans la culture amazigh. Mais il est difficile, si l&apos;on n&apos;y est pas soi-même immergé, de saisir l&apos;ampleur et la qualité de la communication qui a vibré entre le poète chanteur et un si grand nombre de Kabyles.</p>
        <p>Il fait partie de ces rares personnes qui, par la pensée poétique et artistique, ont influé sur l&apos;histoire d&apos;un peuple dans un sens de progrès authentique, en dehors des conspirations pseudo-subversives de l&apos;industrie du divertissement et autres impostures.</p>
        <p>C&apos;est que, bien avant qu&apos;il soit entré dans la légende des héros martyrs, il est allé seul au brasier, se mêlant de sa liberté et de la nôtre :</p>
        <blockquote className="pl-4 italic my-4" style={{ borderLeft: "3px solid var(--color-gold)", color: "var(--color-muted)" }}>
          La liberté fut égorgée !<br />
          Au lieu où elle a sombré,<br />
          Peuple, son hurlement est ta langue.
          <footer className="mt-2 text-xs not-italic font-semibold" style={{ color: "var(--color-gold)" }}>— Poème 2</footer>
        </blockquote>
        <p>Et en dépit de certaines maladresses, de certains compagnonnages politiques qui apparaissent aujourd&apos;hui en contradiction avec ce qu&apos;il défendait et ce qu&apos;il était, Matoub n&apos;a jamais monnayé son intégrité.</p>
        <p>Si, déjà de son vivant, Matoub était estimé à ce point, c&apos;est parce que, dans des circonstances caractérisées par la tyrannie militaro-économique, affermie par l&apos;idéologie arabo-islamique, par l&apos;ignorance, la misère, le mensonge, la manipulation, la falsification, la superstition religieuse et la confiscation de l&apos;histoire, il est allé aussi loin que possible, tant sur le plan artistique que sur les plans politique et social.</p>
        <p>Un passage de <em>« Regard sur l&apos;histoire d&apos;un pays damné »</em> résume bien le sort fait à l&apos;Algérie :</p>
        <blockquote className="pl-4 italic my-4" style={{ borderLeft: "3px solid var(--color-gold)", color: "var(--color-muted)" }}>
          Au fer des souffrances tu fus tatouée<br />
          À tes pans d&apos;habit l&apos;abjection s&apos;essuie.<br />
          Tu fus témoin aux massacres des lions<br />
          Qui te voulaient comme un phare, splendide.<br />
          Tu es l&apos;antre creusé d&apos;un essaim de vers,<br />
          Qui ardemment dévore ta dignité.
          <footer className="mt-2 text-xs not-italic font-semibold" style={{ color: "var(--color-gold)" }}>— Poème 65</footer>
        </blockquote>
        <p>Dans ce contexte, Matoub a élevé son expression à un niveau de raffinement musical et poétique rare. Et cet effort, aucun intellectuel, aucun journaliste, aucun militant ne pouvait le faire à sa place — cela exigeait un artiste.</p>
      </div>

      <div className="mt-10 pt-6" style={{ borderTop: "1px solid var(--color-border)" }}>
        <Link href="/le-rebelle/son-oeuvre" className="inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: "var(--color-gold)" }}>
          <ArrowLeft size={14} /> Retour à « Son œuvre »
        </Link>
      </div>
    </div>
  );
}
