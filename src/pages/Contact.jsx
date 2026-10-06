import FaqSection from "../components/sections/FaqSection";
import Hero from "../components/sections/Hero";

function Contact() {
  return (
    <>
      <Hero
        variant="page"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        badge="Contact Us"
        title={<>Let’s Talk About <span className="font-bold italic">Your Book</span></>}
        description="Tell us about your idea and our team will get back to you with the next steps."
        formTitle="Send Us a Message"
      />
      <FaqSection />
    </>
  );
}

export default Contact;
