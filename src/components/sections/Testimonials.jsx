import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];
const viewport = { once: true, amount: 0.2 };
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

/* ------------------------------------------------------------------ */
/*  Data — swap in your real reviews and photos                        */
/* ------------------------------------------------------------------ */
const testimonials = [
  {
    id: 1,
    name: "Christiana Eve",
    role: "Author",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    text: "They have always had my confidence and I sincerely attribute them to a large part of my writing success on various platforms. Their marketing experts are always up-to-date with the ongoing practices in publishing industry and I have always found their advice to yield the best results.",
  },
  {
    id: 2,
    name: "Marcus Lee",
    role: "Founder, Northwind",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    text: "From the first call to launch day, the team was clear, fast and genuinely invested in our growth. Our sign-ups doubled within two months of working together.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Marketing Lead",
    avatar: "https://i.pravatar.cc/150?img=45",
    rating: 5,
    text: "Every campaign came with a clear plan and honest reporting. I always knew what was working, what wasn't, and what we were changing next.",
  },
  {
    id: 4,
    name: "Daniel Brooks",
    role: "Independent Publisher",
    avatar: "https://i.pravatar.cc/150?img=33",
    rating: 5,
    text: "They took a book nobody had heard of and put it in front of exactly the right readers. Thoughtful, reliable and a pleasure to work with.",
  },
  {
    id: 5,
    name: "Sofia Martins",
    role: "Product Designer",
    avatar: "https://i.pravatar.cc/150?img=44",
    rating: 5,
    text: "Responsive, creative and detail-oriented. They turned rough ideas into a launch strategy we could actually execute.",
  },
];

/*
  Decorative floating avatars (position in %, size in px).
  `xl` ones only appear on wide screens, where there's room beside the cards.
*/
const floatingAvatars = [
  { src: "https://i.pravatar.cc/100?img=15", top: "22%", left: "3%", size: 53 },
  { src: "https://i.pravatar.cc/100?img=8", top: "48%", left: "8%", size: 92, xl: true },
  { src: "https://i.pravatar.cc/100?img=9", top: "74%", left: "4%", size: 53 },
  { src: "https://i.pravatar.cc/100?img=13", top: "14%", left: "86%", size: 90 },
  { src: "https://i.pravatar.cc/100?img=20", top: "35%", left: "93%", size: 60 },
  { src: "https://i.pravatar.cc/100?img=32", top: "52%", left: "84%", size: 72, xl: true },
  { src: "https://i.pravatar.cc/100?img=52", top: "74%", left: "91%", size: 80 },
];

/* ------------------------------------------------------------------ */
/*  Small pieces                                                       */
/* ------------------------------------------------------------------ */
function Stars({ count = 5 }) {
  return (
    <div className="flex justify-center gap-[3px]" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`grid h-5 w-5 place-items-center ${i < count ? "bg-[#00b67a]" : "bg-gray-300"}`}
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-white" aria-hidden="true">
            <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7.3L12 17.8 5.7 21.5l1.7-7.3L2 9.5l7.1-.6z" />
          </svg>
        </span>
      ))}
    </div>
  );
}

function ArrowIcon({ direction = "left" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 ${direction === "right" ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 12H5M11 18l-6-6 6-6" />
    </svg>
  );
}

/* Position presets for each slot relative to the active card */
const slotStyles = {
  "-1": { x: "-62%", scale: 0.85, opacity: 1, zIndex: 10 },
  0: { x: "0%", scale: 1, opacity: 1, zIndex: 20 },
  1: { x: "62%", scale: 0.85, opacity: 1, zIndex: 10 },
  hiddenLeft: { x: "-110%", scale: 0.7, opacity: 0, zIndex: 0 },
  hiddenRight: { x: "110%", scale: 0.7, opacity: 0, zIndex: 0 },
};

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const total = testimonials.length;

  const next = () => setActive((i) => (i + 1) % total);
  const prev = () => setActive((i) => (i - 1 + total) % total);

  // Autoplay, paused on hover/focus
  useEffect(() => {
    if (paused || reduceMotion) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [paused, reduceMotion, active]);

  // Shortest signed distance from the active card (handles wrap-around)
  const getOffset = (index) => {
    let diff = index - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  const transition = reduceMotion
    ? { duration: 0 }
    : { type: "spring", stiffness: 260, damping: 30 };

  return (
    <section
      id="testimonials"
      className="relative mt-12 overflow-hidden bg-[#F7DFC5] sm:mt-20"
    >
      <img src="images/vector.png" alt="" aria-hidden="true" className="block w-full" />

      {/* Floating avatars: hidden on phones/tablets, fade in once, then float */}
      {floatingAvatars.map((a, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          className={`pointer-events-none absolute hidden ${a.xl ? "xl:block" : "lg:block"}`}
          style={{ top: a.top, left: a.left, width: a.size, height: a.size }}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease }}
        >
          <motion.img
            src={a.src}
            alt=""
            className="h-full w-full rounded-full border-2 border-white object-cover shadow-md"
            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          />
        </motion.div>
      ))}

      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className="relative z-30 mx-auto max-w-2xl px-5 pt-10 text-center sm:pt-16"
      >
        <motion.h2
          variants={fadeUp}
          className="font-heading text-3xl text-black sm:text-4xl md:text-5xl lg:text-6xl"
        >
          What Our <span className="font-black italic">Clients</span> Say
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-3 text-sm text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </motion.p>
      </motion.div>

      {/* Carousel + controls fade up together */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.8, ease, delay: 0.2 }}
        className="px-4 pb-6"
      >
        <div
          className="relative mx-auto mt-10 h-[370px] max-w-3xl sm:mt-12 sm:h-[340px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          {testimonials.map((t, index) => {
            const offset = getOffset(index);
            const isActive = offset === 0;
            const slot =
              offset < -1 ? slotStyles.hiddenLeft : offset > 1 ? slotStyles.hiddenRight : slotStyles[offset];

            return (
              <motion.article
                key={t.id}
                className={`absolute inset-x-0 top-0 mx-auto flex h-[360px] w-full max-w-sm cursor-pointer flex-col rounded-2xl p-5 text-center shadow-xl sm:h-[330px] sm:w-[380px] sm:p-6 ${
                  isActive ? "cursor-default bg-[#F29013] text-gray-900" : "bg-white/50 text-gray-500"
                } ${Math.abs(offset) === 1 ? "hidden md:flex" : ""}`}
                initial={false}
                animate={slot}
                transition={transition}
                aria-hidden={!isActive}
                onClick={() => !isActive && setActive(index)}
              >
                <div className="flex items-center justify-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-11 w-11 rounded-full border-2 border-white object-cover"
                  />
                  <div className="text-left">
                    <p className="font-semibold leading-tight text-gray-900">{t.name}</p>
                    <p className="text-xs">{t.role}</p>
                  </div>
                </div>

                <motion.blockquote
                  key={`${t.id}-${isActive}`}
                  className="mt-4 flex flex-1 items-center justify-center overflow-hidden text-sm leading-relaxed"
                  initial={isActive && !reduceMotion ? { opacity: 0, y: 8 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  <span className="line-clamp-8">“{t.text}”</span>
                </motion.blockquote>

                <div className="mt-4 shrink-0">
                  <Stars count={t.rating} />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Controls */}
        <div className="relative z-30 mt-6 flex items-center justify-center gap-4">
          <motion.button
            type="button"
            onClick={prev}
            whileTap={{ scale: 0.9 }}
            className="grid h-11 w-11 place-items-center rounded-full bg-[#F29013] text-white shadow-md transition-colors hover:bg-[#d97a0c] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#F29013]/40"
            aria-label="Previous testimonial"
          >
            <ArrowIcon direction="left" />
          </motion.button>
          <motion.button
            type="button"
            onClick={next}
            whileTap={{ scale: 0.9 }}
            className="grid h-11 w-11 place-items-center rounded-full bg-[#F29013] text-white shadow-md transition-colors hover:bg-[#d97a0c] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#F29013]/40"
            aria-label="Next testimonial"
          >
            <ArrowIcon direction="right" />
          </motion.button>
        </div>
      </motion.div>

      <p className="sr-only" aria-live="polite">
        Showing testimonial {active + 1} of {total} from {testimonials[active].name}
      </p>
      <img src="images/vector.png" alt="" aria-hidden="true" className="block w-full rotate-180" />
    </section>
  );
}