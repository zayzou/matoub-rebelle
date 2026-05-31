import { Metadata } from "next";
import { Radio } from "lucide-react";
import { BreadcrumbNav } from "@/components/common/BreadcrumbNav";
import { SectionTitle } from "@/components/common/SectionTitle";

export const metadata: Metadata = { title: "Émissions de radio" };

const EMISSIONS = [
  {
    title: "Émission radio avec Matoub — Paris 1993",
    station: "Radio Beur FM, Paris",
    date: "1993",
    description:
      "Longue émission de radio enregistrée à Paris en 1993, dans laquelle Matoub parle de sa vie, de son art et de la situation politique en Algérie. Un document audio rare.",
    pages: 2,
  },
  {
    title: "Regard sur l'histoire d'un pays damné",
    station: "Radio Kabylie",
    date: "1995",
    description:
      "Émission dans laquelle Matoub commente l'histoire de l'Algérie et la situation des Kabyles, après son enlèvement par le GIA.",
    pages: 1,
  },
  {
    title: "Émissions consacrées à Matoub après sa mort",
    station: "Diverses stations",
    date: "1998-2000",
    description:
      "Collection d'émissions de radio consacrées à Matoub Lounès après son assassinat en 1998, réunissant témoignages et hommages.",
    pages: 3,
  },
];

export default function EmissionsRadioPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
    <div>
      <BreadcrumbNav items={[{ label: "Audio", href: "/audio" }, { label: "Émissions de radio" }]} />
      <SectionTitle tifinagh="ⵜⵉⵔⴰⴷⵢⵓ">Émissions de radio</SectionTitle>

      <div className="space-y-4">
        {EMISSIONS.map((e, i) => (
          <div key={i} className="kabyle-card p-5">
            <div className="flex items-start gap-3">
              <Radio size={22} strokeWidth={1.5} style={{ color: "var(--color-sky)", flexShrink: 0 }} />
              <div>
                <h3
                  className="font-serif font-bold text-base mb-1"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--color-parchment)" }}
                >
                  {e.title}
                </h3>
                <div
                  className="flex items-center gap-2 text-xs mb-2"
                  style={{ color: "var(--color-silver)" }}
                >
                  <span>{e.station}</span>
                  <span style={{ color: "var(--color-gold)", fontSize: "0.5rem" }}>◆</span>
                  <span>{e.date}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-silver)" }}>
                  {e.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
