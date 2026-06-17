import { Metadata } from "next";
import { HelpCircle } from "lucide-react";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";
import { SectionTitle } from "@/components/common/SectionTitle";
import { JsonLdScript } from "@/components/common/JsonLdScript";

export const metadata: Metadata = {
  title: "FAQ — Questions sur Matoub Lounès, le Chanteur Rebelle Kabyle",
  description:
    "Réponses aux questions les plus fréquentes sur Matoub Lounès : qui était-il, quand est-il né, comment est-il mort, quelles sont ses chansons les plus connues.",
  alternates: {
    canonical: "https://matoub-rebelle.com/divers/faq",
  },
  keywords: [
    "Matoub Lounès questions",
    "Qui est Matoub Lounès",
    "Matoub Lounès mort",
    "Matoub Lounès né",
    "Père de Matoub Lounès",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://matoub-rebelle.com/divers/faq",
    title: "FAQ — Questions sur Matoub Lounès",
    description: "Réponses aux questions les plus fréquentes sur Matoub Lounès.",
    images: [
      {
        url: "https://matoub-rebelle.com/images/photos/studio/213.jpg",
        width: 1200,
        height: 630,
        alt: "FAQ Matoub Lounès",
      },
    ],
  },
};

const FAQ_ITEMS = [
  {
    question: "Qui était Matoub Lounès ?",
    answer:
      "Matoub Lounès (1956–1998) était un chanteur-auteur-compositeur et poète kabyle, symbole de la culture amazigh. Surnommé « Le Rebelle », il a consacré sa vie à défendre la langue tamazight et l'identité berbère face à l'arabisation imposée en Algérie. Il a enregistré 28 albums et plus de 224 chansons.",
  },
  {
    question: "Quand est né Matoub Lounès ?",
    answer:
      "Matoub Lounès est né le 24 janvier 1956 à Taourirt Moussa Ouamar, un village de montagne en Grande Kabylie, en Algérie, pendant la guerre d'Algérie.",
  },
  {
    question: "Comment est mort Matoub Lounès ?",
    answer:
      "Matoub Lounès a été assassiné le 25 juin 1998 dans une embuscade sur la route reliant Tizi Ouzou à Aïn El Hammam, en Kabylie. Il a été criblé de balles alors qu'il était en voiture avec sa femme Nadia et ses deux belles-sœurs. L'assassinat est officiellement attribué au GIA (Groupe Islamique Armé), mais sa famille et la majorité des Kabyles accusent le pouvoir algérien d'en être responsable.",
  },
  {
    question: "Quel était le père de Matoub Lounès ?",
    answer:
      "Le père de Matoub Lounès s'appelait Amar Matoub. Il était parti en France dès 1946 pour travailler et subvenir aux besoins de sa famille restée au village. Lounès a été élevé principalement par sa mère Aldjia et sa grand-mère à Taourirt Moussa.",
  },
  {
    question: "Où est enterré Matoub Lounès ?",
    answer:
      "Matoub Lounès repose dans son village natal de Taourirt Moussa Ouamar, en Kabylie. Sa tombe est devenue un lieu de pèlerinage pour les Kabyles du monde entier.",
  },
  {
    question: "Quelles sont les chansons les plus connues de Matoub Lounès ?",
    answer:
      "Parmi ses chansons les plus emblématiques : « A Yizem » (Ô Lion), son premier grand succès, « Africa », « Ya Rayah », « Allah Wakber », « Kenza », « L'Ironie du Sort », « Ay Gma », et « A Madame Servi Latay », le premier air qu'il a joué à 9 ans.",
  },
  {
    question: "Combien d'albums Matoub Lounès a-t-il enregistrés ?",
    answer:
      "Matoub Lounès a enregistré 28 albums (comptabilisés en 34 volumes) contenant plus de 224 chansons. Sa carrière s'étend de 1978 à 1998, année de son assassinat.",
  },
  {
    question: "Matoub Lounès a-t-il été enlevé ?",
    answer:
      "Oui, le 25 septembre 1994, Matoub Lounès a été enlevé par un groupe d'une vingtaine de terroristes du GIA dans un café en Kabylie. Il a été séquestré pendant 15 jours dans les maquis, jugé par un « tribunal islamique » et condamné à mort. Il a été libéré le 10 octobre 1994 grâce à la mobilisation populaire massive de toute la Kabylie.",
  },
  {
    question: "Pourquoi Matoub Lounès était-il surnommé « Le Rebelle » ?",
    answer:
      "Matoub Lounès était surnommé « Le Rebelle » en raison de son attitude anticonformiste et de son combat permanent contre le pouvoir algérien, l'arabisation et l'intégrisme islamiste. Il disait tout haut ce que le peuple kabyle pensait tout bas, au péril de sa vie.",
  },
  {
    question: "Quel prix Matoub Lounès a-t-il reçu ?",
    answer:
      "Matoub Lounès a reçu le Prix de la Liberté d'Expression au Canada en 1995 et le Prix de la Mémoire de la Fondation France Libertés en 1994, en reconnaissance de son engagement pour la liberté et les droits humains.",
  },
  {
    question: "Quelle est la chanson « Allah Wakber » de Matoub Lounès ?",
    answer:
      "« Allah Wakber » est l'une des chansons les plus controversées et emblématiques de Matoub Lounès. Dans cette chanson, il dénonce la fatalité islamique, l'aliénation religieuse et désacralise la langue arabe. Il prône le retour à Tamazight et à la culture berbère authentique.",
  },
  {
    question: "Matoub Lounès parle-t-il tamazight ?",
    answer:
      "Oui, Matoub Lounès chantait principalement en tamazight (kabyle). Il était un défenseur acharné de cette langue et militait pour sa reconnaissance comme langue nationale et officielle de l'Algérie. Tamazight est devenue langue nationale en 2002 puis officielle en 2016.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <JsonLdScript data={faqJsonLd} id="faq-jsonld" />
      <div className="max-w-2xl">
        <BreadcrumbNav
          items={[
            { label: "Divers", href: "/divers/bibliographie" },
            { label: "FAQ" },
          ]}
        />
        <SectionTitle tifinagh="ⴰⵙ.UseText">Questions Fréquentes sur Matoub Lounès</SectionTitle>

        <p className="text-sm mb-8" style={{ color: "var(--color-silver)" }}>
          Réponses aux questions les plus fréquentes sur Matoub Lounès, sa vie, son œuvre et son
          combat.
        </p>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <details
              key={i}
              className="kabyle-card group"
              style={{ cursor: "pointer" }}
            >
              <summary
                className="flex items-center gap-3 p-5 font-semibold text-sm list-none"
                style={{ color: "var(--color-text)", fontFamily: "var(--font-serif)" }}
              >
                <HelpCircle
                  size={18}
                  strokeWidth={1.75}
                  style={{ color: "var(--color-gold)", flexShrink: 0 }}
                />
                {item.question}
              </summary>
              <div
                className="px-5 pb-5 text-sm leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
