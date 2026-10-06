import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import PrimaryButton from "../ui/PrimaryButton";
import SecondaryButton from "../ui/SecondaryButton";
import ContactForm from "./ContactForm";
import HeroAnimation from "./HeroAnimation";

/* ------------------------------------------------------------------ */
/*  Shared animation settings — every entrance runs once, in view      */
/* ------------------------------------------------------------------ */
const ease = [0.22, 1, 0.36, 1];
const viewport = { once: true, amount: 0.2 };
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

/* ------------------------------------------------------------------ */
/*  Shared bits                                                        */
/* ------------------------------------------------------------------ */
function Badge({ children }) {
  return (
    <motion.span
      variants={fadeUp}
      className="inline-block rounded-[10px] bg-[#F29013] px-3 py-2 font-['Montaga'] text-[10px] font-semibold uppercase tracking-[0.12em] text-black sm:text-[12px] sm:tracking-[0.2em]"
    >
      {children}
    </motion.span>
  );
}

function Breadcrumbs({ items = [], center = false }) {
  if (!items.length) return null;
  return (
    <motion.nav
      variants={fadeUp}
      aria-label="Breadcrumb"
      className={`mb-5 flex ${center ? "justify-center" : "justify-center lg:justify-start"}`}
    >
      <ol className="flex flex-wrap items-center gap-1 font-body text-sm text-neutral-600">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1">
              {last || !item.href ? (
                <span aria-current={last ? "page" : undefined} className="font-semibold text-black">
                  {item.label}
                </span>
              ) : (
                <a href={item.href} className="transition-colors hover:text-[#00415A]">
                  {item.label}
                </a>
              )}
              {!last && <ChevronRight size={14} aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </motion.nav>
  );
}

/* ------------------------------------------------------------------ */
/*  1. HOME — your original hero                                       */
/* ------------------------------------------------------------------ */
function HomeHero() {
  return (
    <div className="relative overflow-x-clip">
      <section id="home" className="relative z-10 flex items-center pt-10 sm:pt-14 lg:pt-6">
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
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center lg:text-left"
          >
            <Badge>Children’s Book Writing & Publishing</Badge>

            <motion.h1
              variants={fadeUp}
              className="mt-5 font-heading  font-medium leading-[1.1] text-[32px] md:text-[56px] "
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

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="relative mx-auto flex w-full max-w-xl items-center justify-center lg:max-w-none"
          >
            {/*
            <img src="images/hero.gif" alt="Illustrated children's books" className="h-auto w-full" />
            */}
            <HeroAnimation speed={5} direction="left" />
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

      {/* Tweak -mt-[...] if the wave overlap looks off */}
      <img
        src="images/herobg.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none relative z-0 -mt-[30%] block w-full lg:-mt-[28%]"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  2. PAGE — About, Services, etc. Content left, form right           */
/* ------------------------------------------------------------------ */
function PageHero({
  badge,
  title,
  description,
  breadcrumbs,
  formTitle = "Get a Free Consultation",
  formDescription = "Share a few details and we'll get back to you.",
}) {
  return (
    <div className="relative overflow-x-clip">
    <section className="relative z-10 flex items-center pt-10 sm:pt-14 lg:pt-6">
      <img
        src="images/dotted.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 w-[50px] sm:w-[82px]"
      />

      <div className="relative mx-auto grid w-full max-w-[1600px] items-center gap-10 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-16">
        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center lg:text-left"
        >
          <Breadcrumbs items={breadcrumbs} />
          {badge && <Badge>{badge}</Badge>}

          <motion.h1
            variants={fadeUp}
            className="mt-5 font-heading text-[2.25rem] font-medium leading-[1.1] sm:text-5xl lg:text-[3.25rem] xl:text-6xl"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-xl font-body text-base leading-7 text-neutral-700 md:text-lg lg:mx-0"
            >
              {description}
            </motion.p>
          )}

          <motion.div variants={fadeUp} className="mt-8 flex justify-center lg:justify-start">
            <img
              src="images/reviewslogo.png"
              alt="Rated by our clients on review platforms"
              className="h-auto max-w-full"
            />
          </motion.div>
        </motion.div>

        {/* Form card — same storybook style as the modal */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -1.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={viewport}
          transition={{ type: "spring", stiffness: 180, damping: 20, delay: 0.15 }}
          className="mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="overflow-hidden rounded-[28px] border-2 border-[#1a1a1a] bg-[#FFF8EF] shadow-[8px_8px_0_#1a1a1a]">
            <div className="relative bg-[#F29013] px-6 pb-9 pt-6 sm:px-8">
              <div
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(#fff 1.5px, transparent 1.5px)",
                  backgroundSize: "18px 18px",
                }}
                aria-hidden="true"
              />
              <h2 className="relative font-heading text-2xl font-semibold leading-tight text-[#1a1a1a] sm:text-[1.75rem]">
                {formTitle}
              </h2>
              <p className="relative mt-1 font-body text-sm text-[#1a1a1a]/80">{formDescription}</p>
              <svg
                viewBox="0 0 500 40"
                preserveAspectRatio="none"
                className="absolute -bottom-px left-0 h-6 w-full"
                aria-hidden="true"
              >
                <path
                  d="M0 22 C 60 4, 120 38, 190 20 S 320 2, 380 20 S 470 34, 500 18 L500 40 L0 40 Z"
                  fill="#FFF8EF"
                />
              </svg>
            </div>

            <div className="px-6 pb-6 pt-3 sm:px-8 sm:pb-8">
              <ContactForm
                formClassName="rounded-2xl"
                inputClassName="[&_input]:h-11 [&_input]:rounded-xl [&_input]:border-2 [&_input]:border-[#1a1a1a]/15 [&_input]:bg-white [&_input:focus]:border-[#F29013] [&_textarea]:h-24 [&_textarea]:resize-none [&_textarea]:rounded-xl [&_textarea]:border-2 [&_textarea]:border-[#1a1a1a]/15 [&_textarea]:bg-white [&_textarea:focus]:border-[#F29013]"
                buttonClassName="mt-2"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    <img
        src="images/herobg.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none relative z-0 -mt-[12%] block w-full lg:-mt-[22%]"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  3. LEGAL — Terms, Privacy. Centered content only                   */
/* ------------------------------------------------------------------ */
function LegalHero({ badge, title, description, breadcrumbs, lastUpdated }) {
  return (
    <section className="relative overflow-x-clip bg-[#FAEDDD] px-5 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:pb-20">
      <img
        src="images/dotted.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 w-[50px] sm:w-[82px]"
      />
      <img
        src="images/dotted.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 hidden w-[82px] rotate-180 sm:block"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="relative mx-auto max-w-3xl text-center"
      >
        <Breadcrumbs items={breadcrumbs} center />
        {badge && <Badge>{badge}</Badge>}

        <motion.h1
          variants={fadeUp}
          className="mt-5 font-heading text-[2.25rem] font-medium leading-[1.1] sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl font-body text-base leading-7 text-neutral-700 md:text-lg"
          >
            {description}
          </motion.p>
        )}

        {lastUpdated && (
          <motion.p
            variants={fadeUp}
            className="mt-6 inline-block rounded-full border border-black/10 bg-white/60 px-4 py-1.5 font-body text-xs font-medium text-neutral-600 sm:text-sm"
          >
            Last updated: {lastUpdated}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Public component                                                   */
/* ------------------------------------------------------------------ */
function Hero({ variant = "home", ...props }) {
  if (variant === "page") return <PageHero {...props} />;
  if (variant === "legal") return <LegalHero {...props} />;
  return <HomeHero {...props} />;
}

export default Hero;