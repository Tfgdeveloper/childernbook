import Hero from "../components/sections/Hero";
import Testimonials from "../components/sections/Testimonials";
import WhyChooseUs from "../components/sections/WhyChooseUs";


function About() {
  return (
    <>
      <Hero
        variant="page"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        badge="About Us"
        title={<>We Bring Children’s <span className="font-bold italic">Stories</span> to Life</>}
        description="We help aspiring authors and storytellers turn their ideas into beautifully written and professionally published children’s books."
      />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}

export default About;
