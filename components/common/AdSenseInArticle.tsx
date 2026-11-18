export function AdSenseInArticle() {
  return (
    <>
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        {...{
          "data-ad-layout": "in-article",
          "data-ad-format": "fluid",
          "data-ad-client": "ca-pub-5982962673144760",
          "data-ad-slot": "7086018523",
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: "(adsbygoogle = window.adsbygoogle || []).push({});",
        }}
      />
    </>
  );
}
