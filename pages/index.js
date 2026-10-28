import { useState } from "react";
import Feature from "../components/Feature";
import Services from "../components/Services";

import WhyChoose from "../components/WhyChoose";

import DigitalSkills from "../components/DigitalSkills";
import About from "../components/About";
import Values from "../components/Values";
import FinalCta from "../components/FinalCta";
import Enroll from "../components/Enroll";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

const siteUrl = "https://tria-Online.dz";
const siteDescription =
  "دروس دعم مدرسي أونلاين في الجزائر، تعلّم اللغات والبرمجة والمهارات الرقمية مع أكاديمية TRIA.";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
      name: "أكاديمية TRIA",
      alternateName: "TRIA Online",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/assets/Logo.svg`,
      },
      description: siteDescription,
      areaServed: {
        "@type": "Country",
        name: "الجزائر",
      },
      knowsAbout: [
        "الدعم المدرسي",
        "الرياضيات",
        "اللغات",
        "البرمجة",
        "المهارات الرقمية",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "أكاديمية TRIA",
      inLanguage: "ar-DZ",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedCourseId, setSelectedCourseId] = useState("");

  return (
    <>
      <SeoHead
        title="أكاديمية TRIA | دروس دعم وبرامج تعليمية أونلاين"
        description={siteDescription}
        keywords="أكاديمية TRIA, دروس دعم مدرسي الجزائر, دروس أونلاين, دعم مدرسي, تعلم البرمجة, تعلم اللغات, مهارات رقمية"
        structuredData={structuredData}
      />

      <Layout>
        <Feature />
        
        <Services
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onSelectCourse={setSelectedCourseId}
        />
        <WhyChoose />
    
        <DigitalSkills onSelectCategory={setActiveCategory} />
        <About />
        <Values />
        <FinalCta />
        <Enroll selectedCourseId={selectedCourseId} />
       
      </Layout>
    </>
  );
}
