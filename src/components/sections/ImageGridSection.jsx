import { motion } from "framer-motion";

const ImageGridSection = ({
  title = "Our Work",
  highlightedtext="Creative",
  description = "Explore some of our latest work and creative projects.",
  images = [],
}) => {
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
    <section className=" px-6 py-20 md:px-16 lg:py-28">
      <div className="mx-auto max-w-[1600px]">

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
            
            {title}
            <span className="font-black italic"> {highlightedtext}</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-5 max-w-2xl font-body text-base leading-7 text-neutral-700 md:text-lg"
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            amount: 0.1,
          }}
          className="grid grid-cols-2 gap-[5px] md:grid-cols-4"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative aspect-square overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt || `Gallery image ${index + 1}`}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.19,1,0.22,1)]
                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute inset-0
                  bg-black/0
                  transition-all duration-500
                  group-hover:bg-black/10
                "
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ImageGridSection;