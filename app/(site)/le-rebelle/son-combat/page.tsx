import { Metadata } from "next";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";
import { SectionTitle } from "@/components/common/SectionTitle";

export const metadata: Metadata = {
  title: "Son combat — Matoub Lounès",
  description:
    "Matoub Lounès militait pour la reconnaissance de Tamazight, la démocratie, la laïcité et contre le régime algérien et l'intégrisme islamiste.",
};

export default function SonCombatPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
    <div className="max-w-2xl">
      <BreadcrumbNav items={[{ label: "Le Rebelle" }, { label: "Son combat" }]} />
      <SectionTitle tifinagh="ⵜⴰⵍⴰⵍⵉⵜ-ⵉⵙ">Son combat</SectionTitle>

      <div className="prose-kabyle space-y-4">
        <p>
          Lounès Matoub disait que sa seule arme était ses chansons. Il disait tout haut ce que le
          peuple pensait tout bas. Ses textes sont d&apos;ailleurs clairement revendicatifs, et la
          défense de la langue et de la culture berbère y tient une place prépondérante.
        </p>

        <h2>Pour la langue et la culture amazighe</h2>
        <p>
          Il militait pour la reconnaissance de Tamazight comme langue nationale et officielle de
          l&apos;Algérie et pour que celle-ci soit utilisée dans tous les domaines : école,
          administration, sciences, médias...
        </p>

        <h2>Contre le pouvoir et l&apos;intégrisme</h2>
        <p>
          Matoub était opposé à une hydre à deux têtes : le pouvoir et l&apos;intégrisme islamiste
          qu&apos;il a engendré. Ainsi, il chantait contre le régime, caractérisé par la corruption
          et la criminalité. Dans ses chansons, il n&apos;hésitait pas à s&apos;attaquer de front
          aux présidents algériens (Chadli, Boumediène, Ben Bella), aux ministres du gouvernement,
          à la sécurité militaire et même à l&apos;opposition se disant démocrate (FFS, RCD).
        </p>
        <p>
          Il s&apos;oppose à la politique d&apos;arabo-islamisation menée par ce pouvoir depuis
          l&apos;indépendance. Face à la loi d&apos;arabisation du 5 juillet 1998, il déclare :
        </p>
        <blockquote>
          &laquo;&nbsp;À partir du 5 juillet, je serai la seule opposition en Algérie. Je serai le
          seul opposant. Cette fois, soit ils me jetteront en prison, soit ils me
          tueront.&nbsp;&raquo;
        </blockquote>
        <p>
          Matoub critiquait également l&apos;école algérienne, falsificatrice d&apos;histoire, qui
          n&apos;avait pour seul but selon lui que d&apos;<em>&laquo;&nbsp;arabêtiser&nbsp;&raquo;</em>{" "}
          le peuple.
        </p>

        <h2>Pour la démocratie et la laïcité</h2>
        <p>
          Il militait pour l&apos;instauration d&apos;une véritable démocratie et était un fervent
          partisan de la laïcité. Il dénoncait la place faite aux femmes dans la société, leurs
          droits étant bafoués par un code de la famille incluant des éléments de la charia.
        </p>
        <p>
          Opposé à l&apos;islamisme et au terrorisme islamiste, il condamna l&apos;assassinat
          d&apos;intellectuels. Il composa en juin 1993, quelques semaines après le meurtre de
          Tahar Djaout, la chanson <em>&laquo;&nbsp;Kenza&nbsp;&raquo;</em>, du prénom de la fille
          de la victime, en guise d&apos;hommage.
        </p>

        <h2>Allah Wakber : une chanson emblématique</h2>
        <p>
          Dans sa chanson <em>&laquo;&nbsp;Allah Wakber&nbsp;&raquo;</em>, il dénonce la fatalité
          qui fait accepter tout et n&apos;importe quoi aux musulmans, l&apos;aliénation issue de
          cette religion qui pousse les gens à ne rien entreprendre car tout est écrit. Il
          désacralise la langue arabe, symbole de l&apos;oppression pour lui, et prône le retour à
          Tamazight.
        </p>

        <h2>La mobilisation pour sa libération (1994)</h2>
        <p>
          La mobilisation du peuple kabyle lors de son enlèvement par le GIA en 1994 illustre à
          quel point Matoub incarnait les aspirations d&apos;un peuple entier. Des centaines de
          milliers de personnes descendirent dans les rues de Kabylie pour exiger sa libération. Ce
          mouvement populaire sans précédent força les terroristes à le libérer après quinze jours
          de captivité.
        </p>

        <h2>Un combat payé du prix ultime</h2>
        <p>
          Matoub paiera son engagement de sa vie, assassiné le 25 juin 1998. Mais son combat ne
          mourra pas avec lui. La reconnaissance de Tamazight comme langue nationale en 2002, puis
          comme langue officielle en 2016 dans la Constitution algérienne, est, en partie, le
          résultat des décennies de lutte dont il fut l&apos;un des principaux porte-paroles.
        </p>

        <blockquote>
          &laquo;&nbsp;Je suis le porte-parole d&apos;un peuple qui a besoin qu&apos;on parle en
          son nom.&nbsp;&raquo;
          <footer>— Matoub Lounès</footer>
        </blockquote>
      </div>
    </div>
    </div>
  );
}
