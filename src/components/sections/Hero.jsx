import { motion } from "framer-motion";

import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const viewport = { once: true, amount: 0.2 };

function Hero() {
  return (
    <div className="relative overflow-x-clip">
      <section id="home" className="relative z-10 flex items-center pt-10 sm:pt-14 lg:pt-6">
        {/* Decorative dots */}
        <motion.img
          src="images/dotted.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -top-6 left-0 w-[50px] sm:-top-10 sm:w-[82px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 1, delay: 0.4 }}
        />

        <div className="mx-auto grid w-full max-w-[1600px] items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-16">
          {/* Content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center lg:text-left"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block rounded-[10px] bg-[#F29013] px-3 py-2 font-['Montaga'] text-[10px] font-semibold uppercase tracking-[0.12em] text-black sm:text-[12px] sm:tracking-[0.2em]"
            >
              Children’s Book Writing & Publishing
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-5 font-heading text-[2.25rem] font-medium leading-[1.1] sm:text-5xl lg:text-[3.25rem] xl:text-5xl"
            >
              <span className="block font-bold italic">Children’s Publishers</span>
              Bring You Professional Book Writing Services
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start"
            >
              <PrimaryButton className="px-[32px] py-[16px]">Get Started</PrimaryButton>
              <SecondaryButton>Explore Services</SecondaryButton>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex justify-center lg:justify-start">
              <img
                src="images/reviewslogo.png"
                alt="Rated by our clients on review platforms"
                className="h-auto max-w-full"
              />
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="relative mx-auto flex w-full max-w-xl items-center justify-center lg:max-w-none"
          >
            <img
              src="images/hero.gif"
              alt="Illustrated children's books"
              className="h-auto w-full"
            />
            <img
              src="images/flower.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 w-[40px] sm:w-[62px] lg:-right-10"
            />
            <img
              src="images/ele1.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-6 top-6 w-[40px] sm:left-20 sm:top-10 sm:w-[62px]"
            />
          </motion.div>
        </div>
      </section>

      {/*
        Background wave. The negative margin is a % of the width, so the
        overlap scales with the image instead of a fixed -380px.
        Tweak -mt-[...] if the overlap looks off with your herobg.png.
      */}
      <img
        src="images/herobg.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none relative z-0 -mt-[12%] block w-full lg:-mt-[30%]"
      />
    </div>
  );
}

export default Hero;