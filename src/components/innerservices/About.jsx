import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];
const viewport = { once: true, amount: 0.2 };
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

/* ------------------------------------------------------------------ */
/*  About section — centered title, wide rounded image, text below     */
/*                                                                     */
/*  Props match `about` in servicePages.js:                            */
/*    title        string or node                                      */
/*    description  string or array of paragraphs                       */
/*    image        image path                                          */
/*    imageAlt     what the image shows (for screen readers)           */
/*    points       optional list, shown as pills under the image       */
/*                 only when showPoints is true                        */
/* ------------------------------------------------------------------ */
export default function About({
  title,
  description,
  image,
  imageAlt = "",
  points = [],
  showPoints = false,
  className = "",
}) {
  const paragraphs = Array.isArray(description) ? description : description ? [description] : [];

  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="mx-auto w-full max-w-[1600px] px-5 sm:px-6 lg:px-16"
      >
        {title && (
          <motion.h2
            variants={fadeUp}
            className="text-center font-heading text-[2rem] font-medium leading-[1.1] sm:text-5xl lg:text-[3.25rem]"
          >
            {title}
          </motion.h2>
        )}

        {image && (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.97 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease } },
            }}
            className="mx-auto mt-8 max-w-6xl overflow-hidden rounded-[20px] bg-[#FAEDDD] sm:mt-10 sm:rounded-[28px]"
          >
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/9]"
            />
          </motion.div>
        )}

        {showPoints && points.length > 0 && (
          <motion.ul variants={fadeUp} className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-2">
            {points.map((point) => (
              <li
                key={point}
                className="rounded-full border border-[#F29013]/40 bg-white px-4 py-1.5 font-body text-xs font-medium text-[#1a1a1a] sm:text-sm"
              >
                {point}
              </li>
            ))}
          </motion.ul>
        )}

        {paragraphs.length > 0 && (
          <motion.div variants={fadeUp} className="mx-auto mt-8 max-w-5xl space-y-5 sm:mt-10">
            {paragraphs.map((text, i) => (
              <p key={i} className="text-center font-body text-sm leading-7 text-neutral-700 sm:text-base sm:leading-8">
                {text}
              </p>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}