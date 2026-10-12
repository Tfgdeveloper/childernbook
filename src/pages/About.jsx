import MissionSection from "../components/about/MissionSection";
import AboutSection from "../components/about/AboutSection";
import Hero from "../components/sections/Hero";
import Testimonials from "../components/sections/Testimonials";
import WhyChooseUs from "../components/sections/WhyChooseUs";


function About() {
  return (
    <>
      <Hero
        variant="page"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        badge="Children’s Book Writing & Publishing"
        title={<>We Bring Children’s <span className="font-bold italic">Stories</span> to Life</>}
        description="We help aspiring authors and storytellers turn their ideas into beautifully written and professionally published children’s books."
        formTitle = "Send us a message"
        formDescription = ""
      />
      <AboutSection/>
      <MissionSection/>

      <WhyChooseUs />
     
    </>
  );
}

export default About;
