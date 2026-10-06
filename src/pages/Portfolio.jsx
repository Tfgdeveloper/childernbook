import Hero from "../components/sections/Hero";
import Testimonials from "../components/sections/Testimonials";


function Portfolio() {
  return (
    <>
      <Hero
        variant="page"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
        badge="Portfolio"
        title={<>Books We’ve Helped <span className="font-bold italic">Bring to Life</span></>}
        description="A look at some of the children’s books our authors have published with us."
      />
      {/* Add your portfolio grid here */}
      <Testimonials />
    </>
  );
}

export default Portfolio;
