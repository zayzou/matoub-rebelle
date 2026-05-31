import Script from "next/script";

interface JsonLdScriptProps {
  data: any;
  id?: string;
}

export function JsonLdScript({ data, id }: JsonLdScriptProps) {
  return (
    <Script
      id={id || "json-ld"}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
      strategy="afterInteractive"
    />
  );
}
