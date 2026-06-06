import CTA from "../components/CTA/CTA";
import Header from "../components/header/Header";
import Services from "../components/services/Services";
import WhyUs from "../components/whyus/WhyUs";

function HomePage({ t }) {
  return (
    <>
      <Header t={t} />
      <WhyUs t={t} />
      <Services t={t} />
      <CTA t={t} />
    </>
  );
}

export default HomePage;