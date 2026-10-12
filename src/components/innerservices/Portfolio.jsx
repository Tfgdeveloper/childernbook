import ImageGridSection from "../sections/ImageGridSection";


//images import
import img1 from "../../assets/book/01.png";
import img2 from "../../assets/book/02.png";
import img3 from "../../assets/book/03.png";
import img4 from "../../assets/book/04.png";
import img5 from "../../assets/book/05.png";
import img6 from "../../assets/book/06.png";
import img7 from "../../assets/book/07.png";
import img8 from "../../assets/book/08.png";
import img9 from "../../assets/book/09.png";
import img10 from "../../assets/book/10.png";
import img11 from "../../assets/book/11.png";
import img12 from "../../assets/book/12.png";


function Portfolio(){
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
    return(
        <section className="bg-[#FFE6C7]">
            <img src="/images/vector.png" className="w-full"/>
            <ImageGridSection title="Interior" highlightedtext="Illustrations" description="Explore our latest book designs and illustrations." images={galleryImages}/>
            <img src="/images/vector.png" className="w-full rotate-180"/>
        </section>
    );
}
export default Portfolio