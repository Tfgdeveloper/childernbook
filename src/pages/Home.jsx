
import Hero from "../components/sections/Hero";
import ImageGridSection from "../components/sections/ImageGridSection";
import Services from "../components/sections/Services";
import VideoSection from "../components/sections/VideoSection";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Testimonials from "../components/sections/Testimonials";
import FaqSection from "../components/sections/FaqSection";

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

import image1 from "../assets/book/01.png";
import image2 from "../assets/book/02.png";
import image3 from "../assets/book/03.png";
import image4 from "../assets/book/04.png";
import image5 from "../assets/book/05.png";
import image6 from "../assets/book/06.png";
import image7 from "../assets/book/07.png";
import image8 from "../assets/book/08.png";
import image9 from "../assets/book/09.png";
import image10 from "../assets/book/10.png";
import image11 from "../assets/book/11.png";
import image12 from "../assets/book/12.png";




function Home() {
  

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

  const bookcoverImages = [
    { src: image1, alt: "Book design 1" },
    { src: image2, alt: "Book design 2" },
    { src: image3, alt: "Book design 3" },
    { src: image4, alt: "Book design 4" },
    { src: image5, alt: "Book design 5" },
    { src: image6, alt: "Book design 6" },
    { src: image7, alt: "Book design 7" },
    { src: image8, alt: "Book design 8" },
    { src: image9, alt: "Book design 9" },
    { src: image10, alt: "Book design 10" },
    { src: image11, alt: "Book design 11" },
    { src: image12, alt: "Book design 12" },
  ];

  return (
    <div className="min-h-screen bg-[#FAEDDD] text-neutral-900">
      <Hero/>
      <ImageGridSection title="Interior" highlightedtext="Illustrations" description="Explore our latest book designs and illustrations." images={galleryImages}/>
      <Services/>
      <VideoSection/>
      <section className="bg-[#FFE6C7]">
        <img src="images/vector.png" className="w-full"/>
        <ImageGridSection title="Interior" highlightedtext="Illustrations" description="Explore our latest book designs and illustrations." images={bookcoverImages}/>
        <img src="images/vector.png" className="w-full rotate-180"/>
      </section>
      <WhyChooseUs/>
      <Testimonials/>
      <FaqSection/>
    
     
    </div>
  );
}

export default Home;