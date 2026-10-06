import { motion } from "framer-motion";
import PrimaryButton from "../ui/PrimaryButton";

const ease = [0.22, 1, 0.36, 1];
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};
const viewport = { once: true, amount: 0.2 };

const points = [
  "Professional children’s book writing and editing",
  "Creative illustrations and engaging book designs",
  "Complete publishing and formatting assistance",
  "Support from your first idea to the finished book",
];

function VideoSection() {
  return (
    <section id="video" className="relative overflow-x-clip py-14 sm:py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1600px] items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-16">
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
            A <span className="font-bold italic">30–60 second</span> video that makes
            readers want to buy <span className="font-bold italic">your book</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl font-body text-base leading-7 text-neutral-600 sm:mt-6 md:text-lg lg:mx-0"
          >
            We help aspiring authors and storytellers turn their ideas into
            beautifully written and professionally published children’s books
            that inspire young readers.
          </motion.p>

          <motion.ul
            variants={fadeUp}
            className="mx-auto mt-6 w-fit space-y-2 text-left font-body text-sm font-semibold text-black md:text-base lg:mx-0"
          >
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-black" aria-hidden="true" />
                {p}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-8 flex justify-center lg:justify-start">
            <PrimaryButton className="px-[32px] py-[16px]">Get Started</PrimaryButton>
          </motion.div>
        </motion.div>

        {/* Media */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewport}
          transition={{ duration: 0.9, ease, delay: 0.15 }}
          className="mx-auto w-full max-w-xl lg:max-w-none"
        >
          <img
            src="images/video.gif"
            alt="Preview of a book trailer video"
            className="h-auto w-full"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default VideoSection;