
import Hero from "../components/sections/Hero";
import ImageGridSection from "../components/sections/ImageGridSection"; 
import IntroSection from "../components/Service/IntroSection";
import ServicesSection from "../components/Service/ServicesSection";

//images import
import img1 from "../assets/illustration/1.png";
import img2 from "../assets/illustration/2.png";
import img3 from "../assets/illustration/3.png";
import img4 from "../assets/illustration/4.png";
import img5 from "../assets/illustration/5.png";
import img6 from "../assets/illustration/6.png";
import img7 from "../assets/illustration/7.png";
import img8 from "../assets/illustration/8.png";
import img9 from "../assets/illustration/9.png";
import img10 from "../assets/illustration/10.png";
import img11 from "../assets/illustration/11.png";
import img12 from "../assets/illustration/12.png";




function Service() {
  

  const galleryImages = [
    { src: img1, alt: "Book design 1" },
    { src: img2, alt: "Book design 2" },
    { src: img3, alt: "Book design 3" },
    { src: img4, alt: "Book design 4" },
    { src: img5, alt: "Book design 5" },
    { src: img6, alt: "Book design 6" },
    { src: img7, alt: "Book design 7" },
    { src: img8, alt: "Book design 8" },
    { src: img9, alt: "Book design 9" },
    { src: img10, alt: "Book design 10" },
    { src: img11, alt: "Book design 11" },
    { src: img12, alt: "Book design 12" },
  ];


  return (
    <div className="min-h-screen bg-[#FAEDDD] text-neutral-900">
      {/* Navbar */}
      
      <Hero
        variant="page"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        badge="About Us"
        title={<>We Bring <span className="font-bold italic">Stories</span> to Life</>}
        description="We help aspiring authors turn their ideas into beautifully published children's books."
        formTitle="Get a Free Consultation"
        formDescription="Share a few details and we'll get back to you."
      />
      <IntroSection/>
      <ServicesSection/>
      <ImageGridSection title="Interior" highlightedtext="Illustrations" description="Explore our latest book designs and illustrations." images={galleryImages}/>
    
     
    </div>
  );
}

export default Service;