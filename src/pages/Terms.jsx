import Hero from "../components/sections/Hero";
import LegalContent from "../components/sections/LegalContent";


// Placeholder text — replace with your real terms
const sections = [
  { heading: "Acceptance of Terms", body: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ante vitae purus tempus egestas."] },
  { heading: "Our Services", body: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod purus sed elit faucibus."] },
  { heading: "Payments and Refunds", body: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."] },
];

function Terms() {
  return (
    <>
      <Hero
        variant="legal"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]}
        title={<>Terms & <span className="font-bold italic">Conditions</span></>}
        description="Please read these terms carefully before using our services."
        lastUpdated="October 6, 2026"
      />
      <LegalContent sections={sections} />
    </>
  );
}

export default Terms;
