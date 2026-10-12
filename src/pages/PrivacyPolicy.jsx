import Hero from "../components/sections/Hero";
import LegalContent from "../components/sections/LegalContent";


// Placeholder text — replace with your real privacy policy
const sections = [
  { heading: "Information We Collect", body: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ante vitae purus tempus egestas."] },
  { heading: "How We Use Your Information", body: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod purus sed elit faucibus."] },
  { heading: "Contact Us", body: ["If you have questions about this policy, please reach out through our contact page."] },
];

function PrivacyPolicy() {
  return (
    <>
      <Hero
        variant="legal"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        title={<>Privacy <span className="font-bold italic">Policy</span></>}
        description="How we collect, use and protect your information."
        lastUpdated="October 6, 2026"
      />
      <LegalContent sections={sections} />
    </>
  );
}

export default PrivacyPolicy;
