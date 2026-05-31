import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Enquête de Libération sur l'assassinat de Matoub Lounès",
  description: "Libération a enquêté sur l'assassinat du chanteur kabyle Matoub Lounès en 1998. Le dossier d'instruction est presque vide et des secteurs proches du pouvoir semblent impliqués.",
};

export default function EnqueteLibePageeration() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <BreadcrumbNav items={[
        { label: "Le Rebelle" },
        { label: "Dossier assassinat", href: "/le-rebelle/dossier-assassinat" },
        { label: "Enquête Libération" },
      ]} />

      <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-terra)" }}>
        Libération, 1998
      </p>
      <h1
        className="text-3xl font-bold mb-2 leading-snug"
        style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
      >
        Assassinat du rebelle Lounès Matoub
      </h1>
      <p className="text-base italic mb-8" style={{ color: "var(--color-muted)" }}>
        Enquête sur une instruction fantôme : Énigme à l&apos;algérienne
      </p>

      <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-text)" }}>
        <p>
          Qui a commandité, qui a manipulé les assassins de Lounès Matoub, héros kabyle disparu
          le 25 juin 1998 ? Qui sont ces « coupables » qu&apos;on exhibe à la télévision, ou qui
          disparaissent sans laisser de traces ? « Libération » a enquêté : le dossier
          d&apos;instruction est presque vide, et des secteurs proches du pouvoir semblent
          impliqués.
        </p>
        <p>
          Les ongles manucurés, le jeune homme en tee-shirt Chevignon se présente poliment à
          l&apos;écran comme un « membre du GIA » et raconte sans façons comment son commando
          tendit l&apos;embuscade mortelle contre le chanteur Matoub Lounès, le 25 juin 1998.
          « On a décidé le matin cette action quand on a vu qu&apos;il descendait en voiture à
          Tizi Ouzou. » Se revendiquant de la même équipe, surgit ensuite un dénommé Saïd qui
          explique, lui, que « l&apos;embuscade était préparée depuis une semaine ».
        </p>
        <p>
          Libres, bien nourris, ils énumèrent une liste de sept personnes qui seraient « dans le
          coup ». C&apos;est en regardant ce documentaire à la télévision nationale algérienne,
          où même la météo ne se prévoit pas sans l&apos;aval du pouvoir, que des magistrats en
          charge du dossier Matoub Lounès ont appris l&apos;existence de ces « coupables ».
        </p>
        <p>
          Depuis la mort du chanteur chéri de Kabylie, qui mit la région au bord de l&apos;émeute,
          au moins une dizaine d&apos;« islamistes », morts ou vifs, ont ainsi été présentés comme
          ses assassins. Il y a quelques semaines encore, aucune enquête, aucun interrogatoire de
          ces hommes ne figurait au dossier d&apos;instruction. Il n&apos;y a pas de rapport
          d&apos;autopsie, ni d&apos;analyse balistique. Ni de reconstitution.
        </p>
        <p>
          En Algérie, ce déferlement de coupables n&apos;a pas surpris. En neuf ans de violences,
          on s&apos;est habitué à l&apos;opacité. L&apos;assassinat de Lounès ne fait pas
          exception. Mais cette fois, il y a un grain de sable. Il s&apos;appelle Malika Matoub
          et personne ne l&apos;avait vu venir.
        </p>
        <p>
          Juste après le meurtre de son frère, elle déclarait, catégorique : « Matoub est victime
          de l&apos;islam baathiste et de sa version armée : le terrorisme islamiste. »
          Aujourd&apos;hui, avec sa mère, elle anime une fondation qui s&apos;est fixé pour but
          de « connaître la vérité ». Dans son appartement parisien, Malika s&apos;énerve :
          « Cessons de trouver de faux assassins. Nous n&apos;accepterons pas un simulacre de
          procès destiné à tromper l&apos;opinion et à clore le dossier. Nous exigeons une
          véritable enquête. »
        </p>
        <p>
          Depuis l&apos;Algérie, un message lui est parvenu en décembre, transmis à un proche par
          des inconnus masqués : « Ne t&apos;en mêle plus. » En vain. L&apos;affaire Matoub est
          en train de devenir l&apos;histoire d&apos;un impossible enterrement.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-2" style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}>
          Années 80 : un révolté kabyle
        </h2>
        <p>
          C&apos;était en juin 1998. Matoub est à Paris. Il vient de terminer l&apos;enregistrement
          de son dernier disque. Il rentre à Taourirt-Moussa, son village près de Tizi Ouzou, dans
          cette maison de montagnard kabyle dont il a fait la plus belle du village. « Sa porte
          était toujours ouverte. Il trimballait tous les fous du village dans sa Mercedes. Il
          aimait avoir du monde autour de lui », raconte Fodil, son ami d&apos;enfance.
        </p>
        <p>
          Il se souvient de chaque date : 1979, le premier disque de Matoub et, tout de suite, le
          succès. Dans sa région, Lounès devient beaucoup plus qu&apos;un chanteur, le symbole
          d&apos;une forme très algérienne de révolte contre le système, plus viscérale que
          politique. « Dans la rue, des gens l&apos;imitaient, raconte Mohamed, un de ses copains
          de Taourirt-Moussa. Ses sorties provoquaient de petites émeutes. Avant chaque
          manifestation d&apos;envergure, la police venait lui chercher des histoires pour
          qu&apos;il la ferme. »
        </p>
        <p>
          Avec l&apos;émergence du MCB (Mouvement Culturel Berbère) au début des années 80,
          Matoub chante, défile, défie le pouvoir du parti unique qui impose la monoculture
          arabo-musulmane. Au-delà de la contestation du régime, Lounès est consumé par une cause :
          la reconnaissance de la langue et de la culture kabyles.
        </p>
      </div>

      <div className="mt-10 pt-6" style={{ borderTop: "1px solid var(--color-border)" }}>
        <Link
          href="/le-rebelle/dossier-assassinat"
          className="inline-flex items-center gap-1.5 text-sm font-medium"
          style={{ color: "var(--color-gold)" }}
        >
          <ArrowLeft size={14} /> Retour au dossier assassinat
        </Link>
      </div>
    </div>
  );
}
