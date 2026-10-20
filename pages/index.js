import { useState } from "react";
import Feature from "../components/Feature";
import Services from "../components/Services";
import Categories from "../components/Categories";
import WhyChoose from "../components/WhyChoose";
import Events from "../components/Layout/Events";
import DigitalSkills from "../components/DigitalSkills";
import About from "../components/About";
import Values from "../components/Values";
import FinalCta from "../components/FinalCta";
import Enroll from "../components/Enroll";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Head from "next/head";


export default function Home() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedCourseId, setSelectedCourseId] = useState("");

  return (
    <>
      <Head>
        <title>أكاديمية TRIA | دروس الدعم والمهارات الرقمية</title>
        <meta
          name="description"
          content="اكتشف دروس الدعم أونلاين، وتعلّم البرمجة واللغات والمهارات الرقمية مع أكاديمية TRIA."
        />
        <meta
          name="keywords"
          content="أكاديمية TRIA, دروس أونلاين, دعم مدرسي, برمجة, مهارات رقمية, الجزائر"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="TRIA Academy" />
      </Head>

      <SeoHead
        title="أكاديمية TRIA | دروس الدعم والمهارات الرقمية"
        description="اكتشف دروس الدعم أونلاين، وتعلّم البرمجة واللغات والمهارات الرقمية مع أكاديمية TRIA."
      />

      <Layout>
        <Feature />
        <Categories onSelectCategory={setActiveCategory} />
        <Services
          activeCategory={activeCategory}
          onSelectCourse={setSelectedCourseId}
        />
        <WhyChoose />
        <Events />
        <DigitalSkills />
        <About />
        <Values />
        <FinalCta />
        <Enroll selectedCourseId={selectedCourseId} />
       
      </Layout>
    </>
  );
}
