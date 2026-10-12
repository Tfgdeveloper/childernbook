import { motion } from "framer-motion";
import FAQ from "../ui/FAQ";
import Container from "../ui/Container";

const ease = [0.22, 1, 0.36, 1];
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};
const viewport = { once: true, amount: 0.2 };

const faqs = [
  {
    question: "How does the publishing process work?",
    answer:
      "Simply get in touch with us and tell us about your project. Our team will guide you through every step, from the initial concept to the finished book.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines depend on the scope and requirements of your project. We provide a clear timeline before starting.",
  },
  {
    question: "Can I request a custom package?",
    answer:
      "Yes. We can create a custom package specifically tailored to your book and publishing requirements.",
  },
  {
    question: "Do you work with new authors?",
    answer:
      "Absolutely. We work with both new and experienced authors and provide guidance throughout the publishing process.",
  },
];

function FaqSection() {
  return (
    <section id="faq" className="relative overflow-x-clip py-14 sm:py-16 lg:py-20">
      <Container className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center lg:text-left"
        >
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl font-medium leading-[1.1] sm:text-4xl xl:text-5xl"
          >
            Frequently Asked <span className="font-bold italic">Questions</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl font-body text-base leading-7 text-neutral-600 sm:mt-6 md:text-lg lg:mx-0"
          >
            We help aspiring authors and storytellers turn their ideas into
            beautifully written and professionally published children’s books
            that inspire young readers.
          </motion.p>

          {/* Illustration hidden on phones so the questions come sooner */}
          <motion.div variants={fadeUp} className="mt-8 hidden justify-center sm:flex lg:justify-start">
            <img src="images/faq.png" alt="" aria-hidden="true" className="h-auto max-w-full" loading="lazy" />
          </motion.div>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
          className="mx-auto flex w-full max-w-xl justify-center lg:max-w-none"
        >
          <div className="w-full [&>div]:max-w-none">
            <FAQ items={faqs} />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default FaqSection;