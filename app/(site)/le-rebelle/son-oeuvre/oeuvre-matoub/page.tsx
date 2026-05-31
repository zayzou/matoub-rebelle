import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Matoub Lounès et son œuvre",
};

export default function OeuvreMaToubPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <BreadcrumbNav items={[
        { label: "Le Rebelle" },
        { label: "Son œuvre", href: "/le-rebelle/son-oeuvre" },
        { label: "Matoub et son œuvre" },
      ]} />

      <h1 className="text-3xl font-bold mb-8 leading-snug" style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}>
        Matoub Lounès et son œuvre
      </h1>

      <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-text)" }}>
        <p>Si les dimensions politique et revendicative de l&apos;œuvre de Matoub Lounès ont été bien rapportées, sa base musicale et sa poésie restent souvent méconnues, notamment par les médias occidentaux. Matoub était un baroudeur du verbe qui avait atteint un niveau artistique auquel très peu pourrait prétendre.</p>
        <p>Sa voix était envoûtante et sa musique s&apos;appuyait aussi bien sur l&apos;usage d&apos;instruments traditionnels comme le mandole — dont il était un véritable virtuose —, le derbouka, le qanoun ou le banjo, que sur l&apos;usage d&apos;instruments modernes tels la basse ou les synthétiseurs.</p>
        <p>Sa musique était basée sur la musique kabyle des montagnes, le chaâbi et la musique moderne. Ses chansons couvraient un large éventail de sujets : Tamazight, la démocratie, la liberté, la religion, l&apos;islamisme, l&apos;amour, l&apos;exil, la mémoire, l&apos;histoire, la paix et les droits de l&apos;homme.</p>
        <p>Il voulait que ses textes soient accessibles à tous et non réservés à une élite intellectuelle. Ainsi, dans ses chansons, il utilisait les mots de tous les jours. À ses débuts, le style de Matoub a été influencé par les plus grands chanteurs-poètes, tels Slimane Azem, Cheikh El Hasnaoui, Dahmane El Harrachi ou encore Hadj Mhamed El Anka.</p>
        <p>Mais à la différence des poètes Amazighs qui l&apos;ont précédé, il n&apos;utilise que très peu les métaphores et son style est direct et sans complaisance. Il ne se gênait pas pour aborder les sujets tabous de la société algérienne.</p>

        <h2 className="text-xl font-bold mt-6" style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}>Un chroniqueur de son époque</h2>
        <p>Lounès Matoub était également un chroniqueur de son époque. Son œuvre s&apos;inscrit dans le temps. Avec sa poésie, on pourrait retracer l&apos;histoire de l&apos;Algérie depuis son indépendance : la résistance puis l&apos;indépendance de 1962, la révolte kabyle de 1963, le Printemps Berbère 1980, les émeutes d&apos;octobre 1988, l&apos;assassinat de Boudiaf, l&apos;avènement du terrorisme islamiste en 1992.</p>
        <p>Matoub chantait de très belles chansons d&apos;amour dont il tirait l&apos;inspiration de sa première épouse, Djamila, qu&apos;il a évoquée dans ses chansons de nombreuses fois.</p>

        <h2 className="text-xl font-bold mt-6" style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}>Innovateur sans limites</h2>
        <p>Lounès Matoub n&apos;hésitait pas à innover et à sortir des sentiers battus. Ainsi en 1991, il sort un nouvel album <em>Regard sur l&apos;histoire d&apos;un pays damné</em> contenant une chanson longue de 45 minutes, chose qu&apos;aucun autre chanteur kabyle n&apos;avait réalisée avant lui. En 1998, il n&apos;hésite pas à parodier l&apos;hymne national algérien malgré les risques.</p>
        <p>Matoub Lounès estimait que son inspiration lui venait du peuple kabyle, de l&apos;homme de la rue. Ainsi, ses concerts en Algérie étaient soit gratuits, soit destinés à des œuvres humanitaires.</p>
        <p>Bien qu&apos;il était interdit à la radio et à la télévision algérienne pendant toute sa carrière, Lounès Matoub est devenu, et reste, le chanteur kabyle le plus populaire et le plus connu dans le monde.</p>
      </div>

      <div className="mt-10 pt-6" style={{ borderTop: "1px solid var(--color-border)" }}>
        <Link href="/le-rebelle/son-oeuvre" className="inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: "var(--color-gold)" }}>
          <ArrowLeft size={14} /> Retour à « Son œuvre »
        </Link>
      </div>
    </div>
  );
}
