import { BookOpen, PenTool, Sparkles } from "lucide-react";
import Card from "../ui/Card";
import { motion } from "framer-motion";
import Container from "../ui/Container";



function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };


  return (
   <>
        
        <section
            id="services"
            className="bg-[#FFE6C7]"
        >
            <img src="images/vector.png" className="w-full"/>
            <Container className="py-10">
            {/* Section Heading */}
            {/* Heading */}
            <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
                amount: 0.2,
            }}
            className="mx-auto mb-12 max-w-3xl text-center"
            >
            <motion.h2
                variants={itemVariants}
                className="font-heading text-4xl text-[#000] md:text-5xl lg:text-6xl"
            >
                Three headline 
                
                <span className="font-black italic"> services. </span>
            </motion.h2>

            <motion.p
                variants={itemVariants}
                className="mx-auto mt-5 max-w-2xl font-body text-base leading-7 text-neutral-700 md:text-lg"
            >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley.
            </motion.p>
            </motion.div>

            {/* Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card
                icon={<img src="images/icon.png" className=""/>}
                title="Book Design"
                description="Beautiful professional designs created to make your book stand out and leave a lasting impression."
                
                />

                <Card
                className=""
                icon={<img src="images/icon.png" className=""/>}
                title="Professional Editing"
                description="Refine your manuscript with professional editing and proofreading that brings clarity to your story."
                
                />

                <Card
                icon={<img src="images/icon.png" className=""/>}
                title="Publishing"
                description="Get everything you need to take your book from manuscript to a professionally published book."
                
                />
            </div>
            </Container>
            <img src="images/vector.png" className="w-full rotate-180"/>
        </section>
    </>
  );
}

export default Services;