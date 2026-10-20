import Head from "next/head";
import { useRouter } from "next/router";

const defaultMeta = {
  title: "أكاديمية TRIA | دروس الدعم والمهارات الرقمية",
  siteName: "TRIA Academy",
  description:
    "اكتشف دروس الدعم أونلاين، وتعلّم البرمجة واللغات والمهارات الرقمية مع أكاديمية TRIA.",
  url: "https://tria-academy.dz",
  type: "website",
  robots: "index, follow",
  image: "/assets/tria-hero.png",
  author: "TRIA Academy",
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

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta name="description" content={meta.description} />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta name="publish_date" property="og:publish_date" content={meta.date} />
          <meta name="author" property="article:author" content={meta.author} />
        </>
      )}
      <meta name="theme-color" content="#14285C" />
    </Head>
  );
};

export default SeoHead;
