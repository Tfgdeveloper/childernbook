import { motion } from "framer-motion";
import PrimaryButton from "../ui/PrimaryButton";

const ease = [0.22, 1, 0.36, 1];
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};
const viewport = { once: true, amount: 0.2 };

// Edit these — they were all the same placeholder before
const reasons = [
  {
    title: "Publishing Support:",
    text: "Navigate the self-publishing landscape with ease, from ISBN registration to distribution.",
  },
  {
    title: "Publishing Support:",
    text: "Navigate the self-publishing landscape with ease, from ISBN registration to distribution.",
  },
  {
    title: "Publishing Support:",
    text: "Navigate the self-publishing landscape with ease, from ISBN registration to distribution.",
  },
  {
    title: "Publishing Support:",
    text: "Navigate the self-publishing landscape with ease, from ISBN registration to distribution.",
  },
];

function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-x-clip py-14 sm:py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1600px] items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-16">
        {/* Image — shows below the text on mobile, on the left on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewport}
          transition={{ duration: 0.9, ease }}
          className="order-2 mx-auto w-full max-w-xl lg:order-1 lg:max-w-none"
        >
          <img
            src="images/bookreading.png"
            alt="Child reading a picture book"
            className="h-auto w-full"
            loading="lazy"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="order-1 text-center lg:order-2 lg:text-left"
        >
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl font-medium leading-[1.1] sm:text-4xl xl:text-5xl"
          >
            Why should you <span className="font-bold italic">choose us</span> for your book?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl font-body text-base leading-7 text-neutral-600 sm:mt-6 md:text-lg lg:mx-0"
          >
            We help aspiring authors and storytellers turn their ideas into
            beautifully written and professionally published children’s books
            that inspire young readers.
          </motion.p>

          <ul className="mx-auto mt-6 max-w-xl space-y-3 text-left font-body text-sm text-black md:text-base lg:mx-0">
            {reasons.map((r, i) => (
              <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
                <img src="images/tick.png" alt="" aria-hidden="true" className="mt-0.5 h-6 w-6 shrink-0" />
                <p className="leading-7">
                  <span className="font-bold">{r.title}</span> {r.text}
                </p>
              </motion.li>
            ))}
          </ul>

          <motion.div variants={fadeUp} className="mt-8 flex justify-center lg:justify-start">
            <PrimaryButton className="px-[32px] py-[16px]">Get Started</PrimaryButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;