import { useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Brush,
  ChevronDown,
  ClipboardList,
  Crown,
  Feather,
  FileText,
  Film,
  GraduationCap,
  Library,
  Mail,
  Megaphone,
  Palette,
  PenLine,
  Printer,
  Rocket,
  Share2,
  Shirt,
  Smartphone,
  Smile,
  Sparkles,
  SpellCheck,
  Star,
  Store,
  Video,
} from "lucide-react";

import { Link, useLocation } from "react-router";

import PrimaryButton from "../ui/PrimaryButton";

/* ------------------------------------------------------------------ */
/*  Shared look — same tokens as Hero.jsx                              */
/* ------------------------------------------------------------------ */
const ease = [0.22, 1, 0.36, 1];

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
/*  Menu data                                                          */
/*  - `grid`  : the layout of that category's panel                    */
/*  - `area`  : where each link sits inside that grid                  */
/*  - `featured: true` : the full-height card with a background image  */
/*  Swap titles, hrefs and images freely; keep the class strings whole */
/*  so Tailwind can see them.                                          */
/* ------------------------------------------------------------------ */
export const ServicesMenu = [
  {
    id: "creation",
    label: "Creation & Publishing",
    icon: PenLine,
    // 2x2 links on the left, tall image card on the right
    grid: "grid-cols-3 grid-rows-2",
    links: [
      { title: "Writing & Storytelling", desc: "Your idea shaped into a story kids love, written by children’s authors.", href: "/services/writing-storytelling", icon: Feather, area: "col-start-1 row-start-1" },
      { title: "Editing & Proofreading", desc: "Clear, age-right language with every typo caught before print.", href: "/services/editing-proofreading", icon: SpellCheck, area: "col-start-2 row-start-1" },
      { title: "Formatting & eBooks", desc: "Print-ready layouts and eBook files for Kindle, Apple Books and more.", href: "/services/formatting-ebooks", icon: FileText, area: "col-start-1 row-start-2" },
      { title: "Publishing & ISBN", desc: "ISBN, copyright and Amazon KDP setup handled for you.", href: "/services/publishing-isbn", icon: Library, area: "col-start-2 row-start-2" },
      { title: "Distribution & Global Reach", desc: "Get your book into online stores, bookshops and libraries around the world.", href: "/services/distribution", image: "/images/distribution.jpg", tag: "Sell worldwide", featured: true, area: "col-start-3 row-start-1 row-span-2" },
    ],
  },
  {
    id: "illustration",
    label: "Illustration & Design",
    icon: Palette,
    // wide image card on the left, three slim links stacked on the right
    grid: "grid-cols-[1.35fr_1fr] grid-rows-3",
    links: [
      { title: "Book Illustration", desc: "Hand-painted or digital artwork for every page, in the style your story needs.", href: "/services/book-illustration", image: "/images/illustration.jpg", tag: "Pick your art style", featured: true, area: "col-start-1 row-start-1 row-span-3" },
      { title: "Character Design", desc: "Lovable characters that look the same on every page.", href: "/services/character-design", icon: Smile, area: "col-start-2 row-start-1", compact: true },
      { title: "Cover & Interior Design", desc: "A cover that stands out, with pages laid out to match.", href: "/services/cover-interior-design", icon: Brush, area: "col-start-2 row-start-2", compact: true },
      { title: "Print & eBook Design", desc: "Files set up for hardcover, paperback and every eBook format.", href: "/services/print-ebook-design", icon: Printer, area: "col-start-2 row-start-3", compact: true },
    ],
  },
  {
    id: "animation",
    label: "Animation",
    icon: Film,
    // two links left, image card in the middle, one tall link on the right
    grid: "grid-cols-3 grid-rows-2",
    links: [
      { title: "2D & 3D Animation", desc: "Your characters brought to life in smooth, colorful motion.", href: "/services/animation", icon: Sparkles, area: "col-start-1 row-start-1" },
      { title: "Book Trailers", desc: "Short videos that tease your story on social media and Amazon.", href: "/services/book-trailers", icon: Video, area: "col-start-1 row-start-2" },
      { title: "Audiobooks & Voiceovers", desc: "Professional narrators and character voices that make your story sound as good as it reads.", href: "/services/audiobooks", image: "/images/audiobook.jpg", tag: "Kid-friendly voices", featured: true, area: "col-start-2 row-start-1 row-span-2" },
      { title: "Interactive eBooks", desc: "Tap-to-play pages with sound, animation and read-along highlighting that keep young readers turning pages.", href: "/services/interactive-ebooks", icon: Smartphone, area: "col-start-3 row-start-1 row-span-2", solid: true },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: Megaphone,
    // image card on the left, 3 links on top, a wide + a small link below
    grid: "grid-cols-4 grid-rows-2",
    links: [
      { title: "Amazon Book Marketing", desc: "Optimized listings, keywords and ads that help parents find your book on Amazon.", href: "/services/amazon-marketing", image: "/images/marketing.jpg", tag: "Rank higher on Amazon", featured: true, area: "col-start-1 row-start-1 row-span-2" },
      { title: "Book Launch & Promotion", desc: "Pre-orders, early reviews and launch-week buzz.", href: "/services/book-launch", icon: Rocket, area: "col-start-2 row-start-1" },
      { title: "Social Media Marketing", desc: "Posts and reels that grow your reader community.", href: "/services/social-media-marketing", icon: Share2, area: "col-start-3 row-start-1" },
      { title: "Website & Email Marketing", desc: "An author site and newsletter that keep readers coming back.", href: "/services/website-email-marketing", icon: Mail, area: "col-start-4 row-start-1" },
      { title: "Bookstore & Library Promotion", desc: "We pitch your book to independent bookstores, school libraries and public library catalogs so it lands on real shelves.", href: "/services/bookstore-library-promotion", icon: Store, area: "col-start-2 col-span-2 row-start-2" },
      { title: "Educational Book Marketing", desc: "Reach teachers and schools with classroom-ready outreach.", href: "/services/educational-marketing", icon: GraduationCap, area: "col-start-4 row-start-2" },
    ],
  },
  {
    id: "character",
    label: "Character Branding",
    icon: Crown,
    // one tall link, two stacked links, wide image card on the right
    grid: "grid-cols-4 grid-rows-2",
    links: [
      { title: "Author & Character Branding", desc: "A consistent look, voice and personality for you and your characters across books, your website and social media.", href: "/services/author-character-branding", icon: Star, area: "col-start-1 row-start-1 row-span-2", solid: true },
      { title: "Merchandise & Design", desc: "Plush toys, apparel and stickers featuring your characters.", href: "/services/merchandise", icon: Shirt, area: "col-start-2 row-start-1" },
      { title: "Educational Materials", desc: "Worksheets, activity books and lesson plans built around your story.", href: "/services/educational-materials", icon: ClipboardList, area: "col-start-2 row-start-2" },
      { title: "Character Licensing", desc: "Turn your characters into a brand with licensing deals for toys, media and products.", href: "/services/character-licensing", image: "/images/authorbranding.jpg", tag: "Grow beyond the book", featured: true, area: "col-start-3 col-span-2 row-start-1 row-span-2" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Cards                                                              */
/* ------------------------------------------------------------------ */
function FeaturedCard({ link, onNavigate }) {
  return (
    <Link
      to={link.href}
      onClick={onNavigate}
      className={`group relative isolate flex h-full min-h-0 flex-col justify-end overflow-hidden rounded-[20px] bg-[#00415A] p-5 text-white outline-none focus-visible:ring-2 focus-visible:ring-[#F29013] focus-visible:ring-offset-2 ${link.area}`}
    >
      {link.image && (
        <img
          src={link.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          onError={(e) => (e.currentTarget.style.display = "none")}
          className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#00415A] via-[#00415A]/55 to-[#00415A]/0" />

      {link.tag && (
        <span className="mb-auto self-start rounded-[10px] bg-[#F29013] px-2.5 py-1 font-body text-[11px] font-semibold text-black">
          {link.tag}
        </span>
      )}

      <h3 className="mt-3 font-heading text-xl font-medium leading-tight">{link.title}</h3>
      <p className="mt-1.5 max-w-sm font-body text-[13px] leading-5 text-white/85">{link.desc}</p>
      <span className="mt-3 inline-flex items-center gap-1.5 font-body text-[13px] font-semibold text-[#FFD9A6]">
        Explore service
        <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

function LinkCard({ link, onNavigate }) {
  const Icon = link.icon;

  // Tall link cards: solid brand-orange card so the extra height doesn't read as empty white
  if (link.solid) {
    return (
      <Link
        to={link.href}
        onClick={onNavigate}
        className={`group relative isolate flex h-full min-h-0 flex-col justify-between gap-3 overflow-hidden rounded-[16px] bg-[#F29013] p-5 text-[#1a1a1a] outline-none transition-colors hover:bg-[#E5850C] focus-visible:ring-2 focus-visible:ring-[#00415A] focus-visible:ring-offset-2 ${link.area}`}
      >
        {/* soft decorative circle, bottom right */}
        <span aria-hidden="true" className="absolute -bottom-12 -right-12 -z-10 size-40 rounded-full bg-white/15 transition-transform duration-500 group-hover:scale-110" />

        <span className="flex items-start justify-between">
          {Icon && (
            <span className="grid size-11 place-items-center rounded-full bg-white text-[#C46F00]">
              <Icon size={20} />
            </span>
          )}
          <ArrowUpRight size={20} className="text-[#1a1a1a]/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>

        <span>
          <span className="block font-heading text-xl font-medium leading-tight">{link.title}</span>
          <span className="mt-2 block font-body text-[13px] leading-5 text-[#1a1a1a]/80">{link.desc}</span>
        </span>
      </Link>
    );
  }

  if (link.compact) {
    return (
      <Link
        to={link.href}
        onClick={onNavigate}
        className={`group flex h-full min-h-0 items-center gap-4 rounded-[18px] border border-black/[0.06] bg-white px-4 outline-none transition-colors hover:border-[#F29013]/60 hover:bg-[#FFF8EE] focus-visible:ring-2 focus-visible:ring-[#F29013] ${link.area}`}
      >
        {Icon && (
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#FAEDDD] text-[#C46F00] transition-colors group-hover:bg-[#F29013] group-hover:text-black">
            <Icon size={17} />
          </span>
        )}
        <span className="min-w-0">
          <span className="block font-body text-sm font-semibold text-[#1a1a1a]">{link.title}</span>
          <span className="mt-0.5 block font-body text-xs leading-[1.1rem] text-neutral-600 line-clamp-2">{link.desc}</span>
        </span>
      </Link>
    );
  }

  return (
    <Link
      to={link.href}
      onClick={onNavigate}
      className={`group flex h-full min-h-0 flex-col justify-between gap-2 rounded-[16px] border border-black/[0.06] bg-white p-4 outline-none transition-colors hover:border-[#F29013]/60 hover:bg-[#FFF8EE] focus-visible:ring-2 focus-visible:ring-[#F29013] ${link.area}`}
    >
      <span className="flex items-start justify-between">
        {Icon && (
          <span className="grid size-9 place-items-center rounded-full bg-[#FAEDDD] text-[#C46F00] transition-colors group-hover:bg-[#F29013] group-hover:text-black">
            <Icon size={17} />
          </span>
        )}
        <ArrowUpRight size={18} className="text-neutral-400 transition-colors group-hover:text-[#00415A]" />
      </span>
      <span>
        <span className="block font-body text-sm font-semibold text-[#1a1a1a]">{link.title}</span>
        <span className="mt-0.5 block font-body text-xs leading-[1.1rem] text-neutral-600">{link.desc}</span>
      </span>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Mega menu                                                          */
/*  Put it inside your desktop nav. The panel spans the header width,  */
/*  so give your <header> `relative` and no overflow-hidden.           */
/* ------------------------------------------------------------------ */
export default function ServicesMegaMenu({
  label = "Services",
  categories = ServicesMenu,
  allServicesHref = "/services",
  triggerClassName = "",
}) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(categories[0]?.id);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const tabRefs = useRef([]);
  const closeTimer = useRef();
  const reduce = useReducedMotion();
  const uid = useId();
  const panelId = `${uid}-panel`;

  const current = categories.find((c) => c.id === activeId) ?? categories[0];

  // Highlight "Services" like an active NavLink when on /services or any service page
  const { pathname } = useLocation();
  const isActive = pathname === allServicesHref || pathname.startsWith(`${allServicesHref}/`);

  // Close the panel after navigating
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const openNow = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 160);
  };
  const closeNow = () => {
    clearTimeout(closeTimer.current);
    setOpen(false);
  };

  // Escape closes, click outside closes
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        closeNow();
        triggerRef.current?.focus();
      }
    };
    const onPointer = (e) => {
      if (!rootRef.current?.contains(e.target)) closeNow();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [open]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  // Arrow keys move between category tabs
  const onTabKeyDown = (e, index) => {
    const last = categories.length - 1;
    let next = null;
    if (e.key === "ArrowRight") next = index === last ? 0 : index + 1;
    if (e.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    setActiveId(categories[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <div
      ref={rootRef}
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
      onBlur={(e) => {
        if (!rootRef.current?.contains(e.relatedTarget)) closeSoon();
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => (open ? closeNow() : openNow())}
        className={`inline-flex items-center gap-1 font-body text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:underline ${
          isActive
            ? "italic font-semibold text-[#00415A]"
            : open
            ? "text-[#00415A]"
            : "text-black hover:text-[#00415A]"
        } ${triggerClassName}`}
      >
        {label}
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* The panel stays mounted and is only hidden when closed. If it were
          removed from the page, the "Get a Free Consultation" button (and the
          popup it opens) would be removed with it as soon as the cursor left. */}
      <motion.div
            id={panelId}
            aria-hidden={!open}
            initial={false}
            animate={open ? "open" : "closed"}
            variants={{
              open: { opacity: 1, y: 0, visibility: "visible" },
              closed: { opacity: 0, y: reduce ? 0 : -10, transitionEnd: { visibility: "hidden" } },
            }}
            transition={{ duration: 0.25, ease }}
            // pt-3 is an invisible bridge so the menu doesn't close on the way down
            className={`absolute inset-x-0 top-full z-50 hidden pt-3 lg:block ${
              open ? "" : "pointer-events-none"
            }`}
          >
            <div className="mx-auto w-full max-w-[1080px] px-6">
              <div
                className="overflow-hidden rounded-[28px] border-[0.8px] border-black/10 bg-[#FAEDDD]"
                style={{ boxShadow: layeredShadow }}
              >
                {/* Category tabs */}
                <div className="flex items-end justify-between gap-6 border-b border-black/[0.06] px-4 pt-3">
                  <div role="tablist" aria-label="Service categories" className="flex flex-wrap gap-1">
                    {categories.map((cat, i) => {
                      const Icon = cat.icon;
                      const selected = cat.id === current.id;
                      return (
                        <button
                          key={cat.id}
                          ref={(el) => (tabRefs.current[i] = el)}
                          type="button"
                          role="tab"
                          id={`${uid}-tab-${cat.id}`}
                          aria-selected={selected}
                          aria-controls={`${uid}-tabpanel`}
                          tabIndex={selected ? 0 : -1}
                          onMouseEnter={() => setActiveId(cat.id)}
                          onClick={() => setActiveId(cat.id)}
                          onKeyDown={(e) => onTabKeyDown(e, i)}
                          className={`relative flex items-center gap-2 rounded-t-2xl px-3 pb-3 pt-2.5 font-body text-[13px] font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#F29013] ${
                            selected ? "text-[#00415A]" : "text-neutral-600 hover:text-[#1a1a1a]"
                          }`}
                        >
                          {Icon && <Icon size={15} aria-hidden="true" className={selected ? "text-[#F29013]" : ""} />}
                          {cat.label}
                          {selected && (
                            <motion.span
                              layoutId={`${uid}-tab-indicator`}
                              transition={{ type: "spring", stiffness: 420, damping: 34 }}
                              className="absolute inset-x-3 bottom-0 h-[3px] rounded-full bg-[#F29013]"
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <Link
                    to={allServicesHref}
                    onClick={closeNow}
                    className="mb-3 inline-flex shrink-0 items-center gap-1 font-body text-sm font-semibold text-[#00415A] underline-offset-4 hover:underline"
                  >
                    All services
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </div>

                {/* Active category grid — re-mounts per tab for a quick fade */}
                <div
                  role="tabpanel"
                  id={`${uid}-tabpanel`}
                  aria-labelledby={`${uid}-tab-${current.id}`}
                  className="p-4"
                >
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: reduce ? 0 : 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22, ease }}
                    className={`grid h-[290px] gap-2.5 ${current.grid}`}
                  >
                    {current.links.map((link) =>
                      link.featured ? (
                        <FeaturedCard key={link.href} link={link} onNavigate={closeNow} />
                      ) : (
                        <LinkCard key={link.href} link={link} onNavigate={closeNow} />
                      )
                    )}
                  </motion.div>
                </div>

                {/* Footer strip */}
                <div className="flex items-center justify-between gap-6 bg-[#FAEDDD] px-6 py-3">
                  <p className="font-body text-[13px] text-[#1a1a1a]">
                    Not sure which service you need? Tell us about your book and we’ll suggest a plan.
                  </p>
                  <div onClick={closeNow} className="shrink-0">
                    <PrimaryButton openModal className="px-5 py-2 text-sm">
                      Get a Free Consultation
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
    </div>
  );
}