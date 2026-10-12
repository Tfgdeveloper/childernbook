import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { Link } from "react-router";

import { ServicesMenu } from "../sections/ServicesMegaMenu";

const ease = [0.22, 1, 0.36, 1];

/* Matches Tailwind's `sm` breakpoint: below 640px we switch to the slider layout */
function useIsMobile(query = "(max-width: 639px)") {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

const Chevron = ({ dir = "right", className = "" }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
    <path d={dir === "right" ? "M9 6l6 6-6 6" : "M15 6l-6 6 6 6"} />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Services tab section                                               */
/*  Uses the same `servicesMenu` data as the mega menu, so a service   */
/*  added there shows up here too.                                     */
/*                                                                     */
/*  Mobile (<640px): tabs become a swipeable slider with arrows and    */
/*  edge fades; service cards become a swipe carousel with a pager.    */
/*  Tablet/desktop: same grid layout as before.                        */
/* ------------------------------------------------------------------ */
export default function ServicesTabs({
  title = (
    <>
      Everything <span className="font-bold italic">A Book Actually</span> Needs.
    </>
  ),
  description = "From the first line of your story to the day it reaches readers, every service you need lives here. Pick a category to see what we can do for your book.",
  categories = ServicesMenu,
  showAll = true,
  defaultTab = showAll ? "all" : categories[0]?.id,
  className = "",
}) {
  const uid = useId();
  const isMobile = useIsMobile();
  const [tab, setTab] = useState(defaultTab);
  const [hovered, setHovered] = useState(0);
  const tabRefs = useRef([]);
  const tabScrollRef = useRef(null);
  const listRef = useRef(null);
  const rafRef = useRef(0);
  const [tabEdges, setTabEdges] = useState({ left: false, right: false });

  const tabs = useMemo(
    () => [...(showAll ? [{ id: "all", label: "All" }] : []), ...categories.map(({ id, label }) => ({ id, label }))],
    [categories, showAll]
  );

  // Flatten links; image cards have no icon of their own, so they borrow the category's
  const services = useMemo(() => {
    const withIcons = (cat) => cat.links.map((link) => ({ ...link, icon: link.icon ?? cat.icon, category: cat.label }));
    if (tab === "all") return categories.flatMap(withIcons);
    const cat = categories.find((c) => c.id === tab);
    return cat ? withIcons(cat) : [];
  }, [tab, categories]);

  /* ---------------- Tab slider ---------------- */
  const updateTabEdges = useCallback(() => {
    const el = tabScrollRef.current;
    if (!el) return;
    setTabEdges({
      left: el.scrollLeft > 4,
      right: el.scrollLeft + el.clientWidth < el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    updateTabEdges();
    window.addEventListener("resize", updateTabEdges);
    return () => window.removeEventListener("resize", updateTabEdges);
  }, [updateTabEdges, tabs.length]);

  // Centre a tab inside the slider without scrolling the page vertically
  const centerTab = (i) => {
    const scroller = tabScrollRef.current;
    const el = tabRefs.current[i];
    if (!scroller || !el) return;
    scroller.scrollTo({
      left: el.offsetLeft - (scroller.clientWidth - el.offsetWidth) / 2,
      behavior: "smooth",
    });
  };

  const nudgeTabs = (dir) => {
    tabScrollRef.current?.scrollBy({ left: dir * 160, behavior: "smooth" });
  };

  const selectTab = (id, i) => {
    setTab(id);
    setHovered(0);
    centerTab(i);
  };

  // Arrow keys move between tabs
  const onTabKeyDown = (e, i) => {
    const last = tabs.length - 1;
    const next =
      e.key === "ArrowRight" ? (i === last ? 0 : i + 1)
      : e.key === "ArrowLeft" ? (i === 0 ? last : i - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    selectTab(tabs[next].id, next);
    tabRefs.current[next]?.focus({ preventScroll: true });
  };

  const tabMask = `linear-gradient(to right, ${tabEdges.left ? "transparent" : "#000"} 0, #000 40px, #000 calc(100% - 40px), ${
    tabEdges.right ? "transparent" : "#000"
  } 100%)`;

  /* ---------------- Card carousel (mobile) ---------------- */
  // Whichever card is in view becomes the highlighted one while swiping
  const onListScroll = () => {
    if (!isMobile) return;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const el = listRef.current;
      if (!el) return;
      const cards = [...el.children];
      let best = 0;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) {
        best = cards.length - 1;
      } else {
        let dist = Infinity;
        cards.forEach((c, i) => {
          const d = Math.abs(c.offsetLeft - 20 - el.scrollLeft);
          if (d < dist) {
            dist = d;
            best = i;
          }
        });
      }
      setHovered((h) => (h === best ? h : best));
    });
  };

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  const scrollToCard = (i) => {
    const el = listRef.current;
    const card = el?.children[i];
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - 20, behavior: "smooth" });
  };

  const total = services.length;
  const current = Math.min(hovered, total - 1);

  return (
    <MotionConfig reducedMotion="user">
      <section className={`py-14 sm:py-20 lg:py-24 ${className}`}>
        <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-6 lg:px-16">
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-[1.75rem] font-medium leading-[1.15] sm:text-5xl sm:leading-[1.1] lg:text-[3.25rem]">
              {title}
            </h2>
            {description && (
              <p className="mx-auto mt-3 max-w-2xl font-body text-sm leading-6 text-neutral-700 sm:mt-4 sm:text-base sm:leading-7">
                {description}
              </p>
            )}
          </div>

          {/* Tabs — swipeable slider with arrows when they overflow */}
          <div className="relative -mx-5 mt-8 sm:mx-0 sm:mt-10">
            <motion.div
              layoutScroll
              ref={tabScrollRef}
              onScroll={updateTabEdges}
              style={{ maskImage: tabMask, WebkitMaskImage: tabMask }}
              className="relative snap-x overflow-x-auto scroll-px-5 px-5 py-1 [scrollbar-width:none] sm:px-0 [&::-webkit-scrollbar]:hidden"
            >
              <div
                role="tablist"
                aria-label="Service categories"
                className="mx-auto flex w-max items-center gap-1.5 sm:gap-2"
              >
                {tabs.map((t, i) => {
                  const selected = t.id === tab;
                  return (
                    <button
                      key={t.id}
                      ref={(el) => (tabRefs.current[i] = el)}
                      type="button"
                      role="tab"
                      id={`${uid}-tab-${t.id}`}
                      aria-selected={selected}
                      aria-controls={`${uid}-panel`}
                      tabIndex={selected ? 0 : -1}
                      onClick={() => selectTab(t.id, i)}
                      onKeyDown={(e) => onTabKeyDown(e, i)}
                      className={`relative isolate snap-start whitespace-nowrap rounded-lg px-4 py-2.5 font-body text-[13px] font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#00415A] sm:text-sm ${
                        selected
                          ? "text-black"
                          : "border border-black/10 text-neutral-700 hover:text-[#00415A] sm:border-transparent"
                      }`}
                    >
                      {selected && (
                        <motion.span
                          layoutId={`${uid}-tab-pill`}
                          transition={{ type: "spring", stiffness: 420, damping: 36 }}
                          className="absolute inset-0 -z-10 rounded-lg bg-[#F29013] shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.12)]"
                        />
                      )}
                      <span className="relative">{t.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Arrow buttons only appear when there's more to scroll */}
            {tabEdges.left && (
              <button
                type="button"
                tabIndex={-1}
                aria-label="Scroll categories left"
                onClick={() => nudgeTabs(-1)}
                className="absolute left-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1a1a1a] shadow-md ring-1 ring-black/5 sm:-left-2"
              >
                <Chevron dir="left" />
              </button>
            )}
            {tabEdges.right && (
              <button
                type="button"
                tabIndex={-1}
                aria-label="Scroll categories right"
                onClick={() => nudgeTabs(1)}
                className="absolute right-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1a1a1a] shadow-md ring-1 ring-black/5 sm:-right-2"
              >
                <Chevron dir="right" />
              </button>
            )}
          </div>

          {/* Service cards: swipe carousel on mobile, grid from `sm` up */}
          <div
            role="tabpanel"
            id={`${uid}-panel`}
            aria-labelledby={`${uid}-tab-${tab}`}
            className="mt-6 sm:mt-10 sm:overflow-hidden"
          >
            <motion.ul
              key={tab}
              ref={listRef}
              layoutScroll
              onScroll={onListScroll}
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
              onMouseLeave={() => !isMobile && setHovered(0)}
              // Desktop: -ml-px + overflow-hidden hides the divider on the first card of every row
              className="relative -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-5 px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:-ml-px sm:grid sm:snap-none sm:grid-cols-2 sm:gap-x-0 sm:gap-y-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4"
            >
              {services.map((service, i) => {
                const Icon = service.icon;
                const active = i === hovered;
                return (
                  <motion.li
                    key={service.href}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
                    }}
                    className="w-[82%] max-w-[340px] shrink-0 snap-start rounded-2xl border border-black/10 sm:w-auto sm:max-w-none sm:rounded-none sm:border-0 sm:border-l sm:px-3"
                  >
                    <Link
                      to={service.href}
                      onMouseEnter={() => !isMobile && setHovered(i)}
                      onFocus={() => setHovered(i)}
                      className="relative isolate flex h-full flex-col rounded-2xl p-5 outline-none focus-visible:ring-2 focus-visible:ring-[#00415A] sm:p-6"
                    >
                      {active && (
                        <motion.span
                          layoutId={`${uid}-card-bg`}
                          transition={{ type: "spring", stiffness: 380, damping: 34 }}
                          className="absolute inset-0 -z-10 rounded-2xl bg-[#F29013]"
                        />
                      )}

                      {Icon && <Icon size={30} strokeWidth={1.4} aria-hidden="true" className="text-[#1a1a1a] sm:h-[34px] sm:w-[34px]" />}

                      <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-[#1a1a1a] sm:text-xl">
                        {service.title}
                      </h3>

                      <p
                        className={`mt-2 font-body text-sm leading-6 transition-colors duration-300 ${
                          active ? "text-[#1a1a1a]" : "text-neutral-600"
                        }`}
                      >
                        {service.desc}
                      </p>

                      {tab === "all" && (
                        <span
                          className={`mt-auto pt-4 font-body text-xs font-medium transition-colors duration-300 ${
                            active ? "text-[#1a1a1a]/80" : "text-neutral-500"
                          }`}
                        >
                          {service.category}
                        </span>
                      )}
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>

            {/* Mobile pager: prev / progress / next */}
            {total > 1 && (
              <div className="mt-5 flex items-center gap-3 sm:hidden">
                <button
                  type="button"
                  aria-label="Previous service"
                  disabled={current === 0}
                  onClick={() => scrollToCard(current - 1)}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/15 text-[#1a1a1a] transition disabled:opacity-30"
                >
                  <Chevron dir="left" />
                </button>

                <div className="h-1 flex-1 overflow-hidden rounded-full bg-black/10">
                  <motion.div
                    className="h-full rounded-full bg-[#F29013]"
                    animate={{ width: `${((current + 1) / total) * 100}%` }}
                    transition={{ duration: 0.3, ease }}
                  />
                </div>

                <span className="min-w-[3.25rem] text-center font-body text-xs font-medium tabular-nums text-neutral-600" aria-live="polite">
                  {current + 1} / {total}
                </span>

                <button
                  type="button"
                  aria-label="Next service"
                  disabled={current === total - 1}
                  onClick={() => scrollToCard(current + 1)}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/15 text-[#1a1a1a] transition disabled:opacity-30"
                >
                  <Chevron dir="right" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}