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

const layeredShadow = [
    "inset 0 -2.39px 0 0 #DEEEFB",
    "inset 0 0.8px 0 0 #FFFFFF",
    "0 2.2px 1.76px 0 rgba(0, 88, 108, 0.0197)",
    "0 5.29px 4.23px 0 rgba(0, 88, 108, 0.0283)",
    "0 9.96px 7.96px 0 rgba(0, 88, 108, 0.0350)",
    "0 17.78px 14.21px 0 rgba(0, 88, 108, 0.0417)",
    "0 33.22px 26.57px 0 rgba(0, 88, 108, 0.0503)",
    "0 79.51px 63.61px 0 rgba(0, 88, 108, 0.05)",
    "0 2.39px 2.39px 0 rgba(0, 0, 0, 0.04)",
].join(", ");

/* ------------------------------------------------------------------ */
/*  Shared bits                                                        */
/* ------------------------------------------------------------------ */
function Badge({ children }) {
  return (
    <motion.span
      variants={fadeUp}
      className="inline-block rounded-[10px] bg-[#F29013] px-3 py-2 font-['Montaga'] text-[10px] font-semibold tracking-[0.12em] text-black sm:text-[12px] sm:tracking-[0.2em]"
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
              <PrimaryButton openModal className="px-[32px] py-[16px]">Get Started</PrimaryButton>
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
          className="relative text-center lg:text-left"
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
          <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start"
            >
              <PrimaryButton openModal className="px-[32px] py-[16px]">Get Started</PrimaryButton>
              <SecondaryButton>Explore Services</SecondaryButton>
            </motion.div>

          <motion.div variants={fadeUp} className="mt-4 flex justify-center lg:justify-start">
            <img
              src="images/reviewslogo.png"
              alt="Rated by our clients on review platforms"
              className="h-auto max-w-full"
            />
          </motion.div>
          <img
              src="images/flower.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 w-[40px] sm:w-[62px] lg:right-20"
            />
           
        </motion.div>

        {/* Form card — same storybook style as the modal */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -1.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={viewport}
          transition={{ type: "spring", stiffness: 180, damping: 20, delay: 0.15 }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="overflow-hidden rounded-[28px] border-[0.80px] border-[#000]/10 bg-[#F3F3FE99] " style={{ boxShadow: layeredShadow }}>
            <div className="px-6 py-8 sm:px-8 sm:py-8">
              <span className="relative font-body text-2xl font-semibold leading-tight text-[#1a1a1a] sm:text-[1.75rem]">
                {formTitle}
              </span>
              <p className="relative mt-1 font-body text-sm text-[#1a1a1a]/80 mb-6">{formDescription}</p>
              <ContactForm
              showLabels
              showConsent
              termsUrl="/terms-and-conditions"
              privacyUrl="/privacy-policy"
              formClassName="rounded-2xl [&_textarea]:h-[113px] [&_textarea]:resize-none [&_textarea]:rounded-3xl [&_textarea]:border-[0.8px] [&_textarea]:border-[#F29013] [&_textarea]:bg-white [&_textarea]:shadow-[inset_0_-2.39px_0_0_#E4EA23,inset_0_0.8px_0_0_#FFFFFF,0_2.2px_1.76px_0_#F29013,0_2.2px_1.76px_0_rgba(26,0,108,0.0197)] [&_textarea]:outline-none [&_textarea]:ring-0 [&_textarea:focus]:outline-none [&_textarea:focus]:ring-0 [&_textarea:focus]:border-[#F29013]"
              inputClassName="[&_input]:h-[45px] [&_input]:rounded-full [&_input]:border-[0.8px] [&_input]:border-[#F29013] [&_input]:bg-white [&_input]:shadow-[inset_0_-2.39px_0_0_#E4EA23,inset_0_0.8px_0_0_#FFFFFF,0_2.2px_1.76px_0_#F29013,0_2.2px_1.76px_0_rgba(26,0,108,0.0197)] [&_input]:outline-none [&_input]:ring-0 [&_input:focus]:outline-none [&_input:focus]:ring-0 [&_input:focus]:border-[#F29013]"
              buttonClassName="mt-2 w-full bg-[#F29013] h-14"
/>
            </div>
          </div>
           <img
              src="images/ele1.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-18 top-6 w-[40px] sm:top-10 sm:w-[62px]"
            />
        </motion.div>
      </div>
    </section>
    <img
        src="images/herobg.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none relative z-0 -mt-[12%] block w-full lg:-mt-[28%]"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  3. LEGAL — Terms, Privacy. Centered content only                   */
/* ------------------------------------------------------------------ */
function LegalHero({ badge, title, description, breadcrumbs, lastUpdated }) {
  return (
    <>
     <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-[#FAEDDD] pb-[16%] pt-12 sm:min-h-[calc(100svh-5rem)] sm:pt-16 lg:pb-[18%]">
      <img
        src="images/dotted.png"
        alt=""
        aria-hidden="true"
        decoding="async"
        className="pointer-events-none absolute left-0 top-0 -z-10 w-[50px] sm:w-[82px]"
      />
      <img
        src="images/dotted.png"
        alt=""
        aria-hidden="true"
        decoding="async"
        className="pointer-events-none absolute right-0 top-1/3 -z-10 hidden w-[82px] rotate-180 sm:block"
      />
 
      {/* Wave sits inside the section, behind the text, no negative margins */}
      <img
        src="images/herobg.png"
        alt=""
        aria-hidden="true"
        decoding="async"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 block w-full select-none"
      />
 
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mx-auto w-full max-w-[1600px] px-5 text-left sm:px-6 md:px-12 lg:px-16"
      >
        <Breadcrumbs items={breadcrumbs} align="start" />
        {badge && <Badge>{badge}</Badge>}
 
        <motion.h1
          variants={fadeUp}
          className="mt-5 max-w-4xl text-balance font-heading text-[2.25rem] font-medium leading-[1.1] sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
 
        {description && (
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl font-body text-base leading-7 text-neutral-700 md:text-lg"
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
    </>
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