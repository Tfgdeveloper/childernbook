import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

const DEFAULT_LOGOS = [
  { name: "Apple Books", src: "/images/logos/ibooks.png" },
  { name: "Amazon", src: "/images/logos/amazon.png" },
  { name: "IngramSpark", src: "/images/logos/ingramspark.png" },
  { name: "Penguin Random House", src: "/images/logos/penguin-random-house.png" },
  { name: "Kobo", src: "/images/logos/kobo.png" },
];

const LogoSlider = ({
  logos = DEFAULT_LOGOS,
  speed = 40,
  reverse = false,
  pauseOnHover = true,
  className = "",
  logoClassName = "",
}) => {
  const trackRef = useRef(null);
  const x = useMotionValue(0);
  const [half, setHalf] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => setHalf(el.scrollWidth / 2);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [logos]);

  useAnimationFrame((_, delta) => {
    if (paused || !half) return;
    const step = (speed * delta) / 1000;
    let next = x.get() + (reverse ? step : -step);
    if (next <= -half) next += half;
    if (next > 0) next -= half;
    x.set(next);
  });

  const repeat = Math.max(2, Math.ceil(10 / logos.length));
  const set = Array.from({ length: repeat }, () => logos).flat();
  const items = [...set, ...set];

  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.ul
        ref={trackRef}
        style={{ x }}
        className="flex w-max items-center gap-14 pr-14 sm:gap-20 sm:pr-20"
      >
        {items.map((logo, i) => (
          <li key={i} aria-hidden={i >= logos.length || undefined} className="shrink-0">
            <img
              src={logo.src}
              alt={i >= logos.length ? "" : logo.name}
              draggable={false}
              loading="lazy"
              className={`h-8 w-auto select-none object-contain sm:h-10 ${logoClassName}`}
            />
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default LogoSlider;