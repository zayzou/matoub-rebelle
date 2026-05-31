import { Metadata } from "next";
import { Award } from "lucide-react";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";
import { SectionTitle } from "@/components/common/SectionTitle";
import { JsonLdScript } from "@/components/common/JsonLdScript";
import { articleJsonLd, breadcrumbJsonLd } from "@/app/(site)/structured-data";

export const metadata: Metadata = {
  title: "Biographie de Matoub Lounès — Le Rebelle Kabyle",
  description:
    "Biographie complète de Matoub Lounès (1956–1998). Découvrez son enfance à Taourirt Moussa, sa carrière musicale, son engagement politique pour la culture amazigh et les circonstances de son assassinat.",
  alternates: {
    canonical: "https://matoub-rebelle.com/le-rebelle/biographie",
  },
  keywords: [
    "Matoub Lounès",
    "Biographie",
    "Chanteur kabyle",
    "1956",
    "1998",
    "Assassinat",
    "Kabylie",
  ],
  openGraph: {
    type: "article",
    locale: "fr_FR",
    url: "https://matoub-rebelle.com/le-rebelle/biographie",
    title: "Biographie de Matoub Lounès",
    description: "La vie complète de Matoub Lounès, de sa naissance en 1956 à son assassinat en 1998.",
    images: [
      {
        url: "https://matoub-rebelle.com/images/photos/studio/220.jpg",
        width: 800,
        height: 800,
        alt: "Matoub Lounès",
      },
    ],
  },
};

export default function BiographiePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
    <div className="max-w-2xl">
      <BreadcrumbNav
        items={[
          { label: "Le Rebelle", href: "/le-rebelle/sa-vie" },
          { label: "Biographie" },
        ]}
      />
      <SectionTitle tifinagh="ⵜⴰⵍⴰⵍⵉⵜ-ⵉⵙ">Biographie de Matoub Lounès</SectionTitle>

      <div className="prose-kabyle space-y-5">
        <p>
          Lounès Matoub, plus communément appelé Matoub Lounès, est un chanteur-auteur-compositeur
          et poète kabyle, connu pour son engagement dans la revendication identitaire amazigh. Il
          fut assassiné le 25 juin 1998 en Kabylie. Officiellement, cet assassinat est attribué au
          GIA mais sa famille et l&apos;ensemble des kabyles accusent le pouvoir algérien de
          l&apos;avoir assassiné.
        </p>
        <p>
          Sa mort lui donne un statut de martyr pour les nationalistes et militants kabyles qui
          estiment que les droits qui leur sont accordés sont insuffisants.
        </p>

        <h2>Enfance</h2>
        <p>
          C&apos;est en pleine guerre d&apos;Algérie que naît le 24 janvier 1956, Lounès Matoub,
          au sein d&apos;une famille très modeste du village Taourirt Moussa Ouamar, en Kabylie.
          Son père était parti dès 1946 en France afin de subvenir aux besoins de sa famille.
          Ainsi, Lounès est élevé par sa grand-mère et par sa mère Aldjia pour qui il éprouve un
          grand attachement, son père étant absent.
        </p>
        <p>
          C&apos;est en écoutant sa mère fredonner des chants traditionnels aussi bien lors de
          veillées d&apos;hiver que lors du travail dans les champs qu&apos;il devine sa vocation.
          À l&apos;âge de 9 ans, il fabrique sa première guitare à partir d&apos;un bidon
          d&apos;huile de moteur vide et de fils de pêche, et réussit à jouer un air très populaire
          à l&apos;époque en Kabylie : <em>&laquo;&nbsp;A madame servi latay&nbsp;&raquo;</em>.
        </p>
        <p>
          Il rentre à l&apos;école de son village en 1961. Mais Lounès était un enfant bavard et
          turbulent. Il avait également fait de l&apos;école buissonnière un art de vivre. Matoub
          sera notamment très marqué par un livre dans lequel on parlait de Jugurtha, enchaîné puis
          emmené de force à Rome. Il dira à ce propos :
        </p>
        <blockquote>
          &laquo;&nbsp;Pourquoi ce roi berbère, dont nous sommes les descendants, avait-il pu ainsi
          être humilié ? J&apos;ai ressenti à ce moment un profond sentiment d&apos;injustice, une
          blessure presque personnelle. Ces émotions, je les dois aux pères blancs. Aujourd&apos;hui,
          je suis persuadé qu&apos;ils ont joué un rôle actif dans ma prise de conscience
          identitaire.&nbsp;&raquo;
        </blockquote>
        <p>
          Après l&apos;indépendance, Matoub vit comme une trahison l&apos;arabisation de
          l&apos;enseignement. Il éprouve dès lors un rejet catégorique de la langue arabe et
          quitte l&apos;école pour devenir autodidacte.
        </p>

        <h2>Les débuts dans la chanson</h2>
        <p>
          Lounès a appris la musique par lui-même. Il disait :
        </p>
        <blockquote>
          &laquo;&nbsp;Je n&apos;ai jamais étudié ni la musique ni l&apos;harmonie. Même lors des
          galas, je n&apos;ai ni partition, ni pupitre, rien. J&apos;ai toujours travaillé à
          l&apos;oreille. Même en matière de musique, je suis anticonformiste, rebelle au carcan
          des règles et des lois.&nbsp;&raquo;
        </blockquote>
        <p>
          En 1972, son père rentre en Algérie et lui offre un mandole acheté à Paris. En 1975,
          Lounès Matoub est appelé sous les drapeaux à Oran. En 1978, il débarque en France, anime
          des soirées dans des cafés de la communauté kabyle et rencontre le chanteur{" "}
          <strong>Idir</strong> qui l&apos;aide à enregistrer, à 22 ans, son premier album{" "}
          <em>&laquo;&nbsp;Ay izem (Ô lion)&nbsp;&raquo;</em>, qui remporte un succès phénoménal.
        </p>
        <p>
          Son répertoire se politise en 1980 avec les évènements de Tafsut Imazighen (Printemps
          berbère). En guise de solidarité, Matoub monte sur la scène de l&apos;Olympia habillé
          d&apos;un treillis militaire, considérant que la Kabylie était en &laquo;&nbsp;guerre&nbsp;&raquo;.
          Il sera interdit d&apos;antenne et ne passera jamais dans les médias algériens.
        </p>

        <h2>La tentative d&apos;assassinat</h2>
        <p>
          Lors des émeutes d&apos;octobre 1988, alors que Matoub accompagne des étudiants
          distribuant des tracts, il est intercepté par des gendarmes. L&apos;un d&apos;eux ouvre
          le feu. Matoub s&apos;écroule, criblé de <strong>5 balles de kalachnikov</strong> tirées
          à bout portant. Il en réchappe miraculeusement au prix de{" "}
          <strong>17 interventions chirurgicales</strong>, 2 années d&apos;hospitalisation et un
          handicap à vie.
        </p>
        <p>
          Évacué vers la France le 29 mars 1989, il y reçoit les meilleurs soins. Il décrit dans
          son album <em>&laquo;&nbsp;L&apos;ironie du sort&nbsp;&raquo;</em> (1989) sa longue
          convalescence.
        </p>

        <h2>L&apos;enlèvement par le GIA</h2>
        <p>
          Le 25 septembre 1994, un groupe d&apos;une vingtaine de terroristes armés du GIA
          l&apos;enlèvent dans un café en Kabylie. Il est séquestré pendant{" "}
          <strong>15 jours</strong> dans les maquis, jugé par un &laquo;&nbsp;tribunal islamique&nbsp;&raquo;
          et condamné à mort. Il est libéré le 10 octobre 1994, grâce à la mobilisation populaire
          sans précédent de toute la Kabylie.
        </p>
        <p>
          De retour, il dira :
        </p>
        <blockquote>
          &laquo;&nbsp;Je n&apos;ai pas eu peur, car j&apos;ai grandi dans la peur. Ce que je
          refuse, c&apos;est de laisser ces gens s&apos;imaginer qu&apos;ils m&apos;ont
          eu.&nbsp;&raquo;
        </blockquote>

        <h2>Les dernières années et l&apos;assassinat</h2>
        <p>
          Malgré les menaces permanentes, Matoub continue de chanter et de militer. Face à la loi
          d&apos;arabisation du 5 juillet 1998, il déclare :
        </p>
        <blockquote>
          &laquo;&nbsp;À partir du 5 juillet, je serai la seule opposition en Algérie. Cette fois,
          soit ils me jetteront en prison, soit ils me tueront.&nbsp;&raquo;
        </blockquote>
        <p>
          Le <strong>25 juin 1998</strong>, Matoub Lounès est assassiné dans une embuscade sur la
          route reliant Tizi Ouzou à Aïn El Hammam, en compagnie de sa femme Nadia et de ses deux
          belles-sœurs. Il est criblé de balles. L&apos;assassinat est attribué officiellement au
          GIA, mais sa famille, comme la majorité du peuple kabyle, n&apos;y croit pas et tient le
          pouvoir algérien pour responsable.
        </p>
        <p>
          Ses obsèques, le 27 juin 1998 à Taourirt Moussa, rassemblent une foule immense venue de
          toute la Kabylie et d&apos;Algérie pour rendre un dernier hommage au &laquo;&nbsp;Rebelle&nbsp;&raquo;.
          Il repose dans son village natal, devenu lieu de pèlerinage pour les Kabyles du monde
          entier.
        </p>

        <div
          className="mt-8 p-4 rounded-lg border"
          style={{
            borderColor: "var(--color-gold)",
            backgroundColor: "rgba(201,168,76,0.06)",
          }}
        >
          <p className="text-sm font-semibold mb-1" style={{ color: "var(--color-gold)" }}>
            Matoub Lounès en chiffres
          </p>
          <ul className="text-sm space-y-1" style={{ color: "var(--color-silver)" }}>
            <li>🎂 Né le <strong>24 janvier 1956</strong> à Taourirt Moussa, Kabylie</li>
            <li>🎸 <strong>28 albums</strong> / 34 volumes / plus de 224 chansons</li>
            <li className="flex items-center gap-2"><Award size={14} strokeWidth={1.75} style={{ color: "var(--color-gold)", flexShrink: 0 }} /> Prix de la liberté d&apos;expression (Canada, 1995)</li>
            <li className="flex items-center gap-2"><Award size={14} strokeWidth={1.75} style={{ color: "var(--color-gold)", flexShrink: 0 }} /> Prix de la mémoire – Fondation France Libertés (1994)</li>
            <li>💔 Assassiné le <strong>25 juin 1998</strong> à Aïn El Hammam</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}
