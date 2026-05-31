import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Prix de la liberté d'expression — Matoub Lounès",
  description: "Discours de Matoub Lounès lors de la remise du Prix de la liberté d'expression, S.C.I.J. Canada, 22 mars 1995.",
};

export default function PrixLibertePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <BreadcrumbNav items={[
        { label: "Le Rebelle" },
        { label: "Lounès a dit…", href: "/le-rebelle/lounes-a-dit" },
        { label: "Prix de la liberté d'expression" },
      ]} />

      <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-gold)" }}>
        22 mars 1995 — S.C.I.J., Canada
      </p>
      <h1
        className="text-3xl font-bold mb-2 leading-snug"
        style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
      >
        Déclaration lors de la remise du<br />
        Prix de la liberté d&apos;expression
      </h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted)" }}>
        Décerné le 22 mars 1995 par le S.C.I.J. (Syndicat de la Critique et des Journalistes), Canada.
      </p>

      <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-text)" }}>
        <p>Mes amis,</p>
        <p>Je tiens tout d&apos;abord à remercier le S.C.I.J. pour tout ce qu&apos;il entreprend pour réunir et non pour diviser. Je remercie aussi tous les journalistes ici présents, notamment les Français et les Canadiens, qui ont œuvré pour que j&apos;obtienne ce premier prix de la liberté d&apos;expression.</p>
        <p>Enfin qu&apos;il me soit permis de rappeler que mon engagement pour la liberté d&apos;expression, contre l&apos;intolérance, remonte à la fin des années 70.</p>
        <p>À l&apos;époque et tout au long des années 80, nous étions un certain nombre d&apos;hommes et de femmes engagés pour la reconnaissance de la dimension berbère en Algérie.</p>
        <p>Le combat pour la liberté d&apos;expression, contre l&apos;intégrisme a commencé là : le droit pour un enfant kabyle de parler, d&apos;apprendre sa langue maternelle, le droit pour tout Algérien, sans exclusive, de connaître son histoire, ses origines riches et diverses.</p>
        <p>Berbérophone, arabophone ou francophone, l&apos;Algérie — l&apos;Algérie officielle — a privé ses enfants de leur personnalité.</p>
        <p>Cette dépersonnalisation, pour reprendre le mot juste de Kateb Yacine, est aussi, peut-être largement, à l&apos;origine du drame algérien.</p>
        <p>Aujourd&apos;hui, nous sommes engagés dans un combat tout aussi décisif, mais je crois que les atrocités, la sauvagerie ne doivent pas nous aveugler : il s&apos;agit encore et toujours du même engagement, celui pour la liberté d&apos;expression et la démocratie, contre l&apos;esprit d&apos;inquisition et le fanatisme, contre l&apos;exclusion à commencer par celle des femmes et enfin, celle pour la reconnaissance pleine et entière de cette personnalité algérienne.</p>
        <p>Toutes les souffrances algériennes sont miennes, parce que c&apos;est sur le pays entier que s&apos;est abattu l&apos;ombre de la mort. Si demain la lumière de nouveau renaît, cela sera l&apos;œuvre de tous les Algériens enfin réunis contre le mensonge et les divisions savamment entretenues.</p>
        <p>C&apos;est l&apos;Algérie toute entière qui est menacée, mais cette Algérie meurtrie, affaiblie du nord au sud, d&apos;est en ouest, continue pourtant à brandir le drapeau de l&apos;honneur et de la dignité.</p>
        <p>L&apos;histoire saura rendre hommage au courage et à l&apos;incroyable abnégation de ces Algériens face à la mort. Ces journalistes, ces femmes, ces enfants, ces artistes, ces écrivains sont l&apos;honneur de l&apos;Algérie. Ils sont la conscience demain retrouvée de notre pays.</p>
        <p>Grâce à vous, grâce à ce prix, le combat des Algériens pour la liberté d&apos;expression, contre l&apos;intégrisme, bénéficie une fois de plus de la nécessaire reconnaissance internationale. Ainsi, exposés à la plus sauvage barbarie, ces Algériens sont aux côtés de tous ceux qui de par le monde refusent l&apos;intégrisme. Il ne faut jamais l&apos;oublier.</p>
        <p>Ce prix n&apos;est pas pour moi, mais pour eux à jamais.</p>
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
