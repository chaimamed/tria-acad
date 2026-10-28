import Head from "next/head";
import { useRouter } from "next/router";

const defaultMeta = {
  title: "أكاديمية TRIA | دروس دعم وبرامج تعليمية أونلاين",
  siteName: "أكاديمية TRIA",
  description:
    "دروس دعم مدرسي أونلاين في الجزائر، تعلّم اللغات والبرمجة والمهارات الرقمية مع أكاديمية TRIA.",
  url: "https://tria-Online.dz",
  type: "website",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  image: "/assets/tria-hero.png",
  author: "أكاديمية TRIA",
};

const SeoHead = (props) => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };

  meta.title = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  const pathname = router.asPath.split(/[?#]/, 1)[0] || "/";
  const canonicalPath =
    pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const canonicalUrl = new URL(canonicalPath, meta.url).toString();
  const imageUrl = new URL(meta.image, meta.url).toString();

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta name="description" content={meta.description} />
      <meta name="author" content={meta.author} />
      {meta.keywords && <meta name="keywords" content={meta.keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:locale" content={meta.locale || "ar_DZ"} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={meta.imageAlt || meta.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={imageUrl} />
      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta name="publish_date" property="og:publish_date" content={meta.date} />
          <meta name="author" property="article:author" content={meta.author} />
        </>
      )}
      <meta name="theme-color" content="#14285C" />
      {meta.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(meta.structuredData).replace(/</g, "\\u003c"),
          }}
        />
      )}
    </Head>
  );
};

export default SeoHead;
