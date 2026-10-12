import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router";

import { ServicesMenu } from "./ServicesMegaMenu";

const ease = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------ */
/*  Mobile drawer version — "Services" expands, then each category     */
/*  expands to show its links. Uses the same servicesMenu data.        */
/* ------------------------------------------------------------------ */
export default function ServicesMobileMenu({
  label = "Services",
  categories = ServicesMenu,
  allServicesHref = "/services",
  onNavigate,
}) {
  const [open, setOpen] = useState(false);
  const [openCat, setOpenCat] = useState(null);
  const reduce = useReducedMotion();
  const uid = useId();
  const { pathname } = useLocation();
  const isActive = pathname === allServicesHref || pathname.startsWith(`${allServicesHref}/`);

  const collapse = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: { duration: reduce ? 0 : 0.3, ease },
  };

  return (
    <div className="border-b border-black/10">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`${uid}-services`}
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between py-5 text-left font-body text-lg font-medium transition-colors focus:outline-none focus-visible:underline ${
          isActive ? "italic font-semibold text-[#00415A]" : "text-black hover:text-[#00415A]"
        }`}
      >
        {label}
        <ChevronDown size={20} aria-hidden="true" className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div id={`${uid}-services`} {...collapse} className="overflow-hidden">
            <div className="pb-4">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const expanded = openCat === cat.id;
                return (
                  <div key={cat.id} className="rounded-2xl">
                    <button
                      type="button"
                      aria-expanded={expanded}
                      aria-controls={`${uid}-${cat.id}`}
                      onClick={() => setOpenCat(expanded ? null : cat.id)}
                      className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left font-body text-base font-medium transition-colors ${
                        expanded ? "bg-white text-[#00415A]" : "text-[#1a1a1a] hover:bg-white/60"
                      }`}
                    >
                      {Icon && (
                        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-[#C46F00]">
                          <Icon size={18} aria-hidden="true" />
                        </span>
                      )}
                      <span className="flex-1">{cat.label}</span>
                      <ChevronDown size={18} aria-hidden="true" className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence initial={false}>
                      {expanded && (
                        <motion.ul id={`${uid}-${cat.id}`} {...collapse} className="overflow-hidden">
                          {cat.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                to={link.href}
                                onClick={onNavigate}
                                className={`ml-[3.75rem] block border-l-2 py-2.5 pl-4 font-body text-[15px] transition-colors ${
                                  pathname === link.href
                                    ? "border-[#F29013] font-semibold text-[#00415A]"
                                    : "border-black/10 text-neutral-700 hover:border-[#F29013] hover:text-[#00415A]"
                                }`}
                              >
                                {link.title}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <Link
                to={allServicesHref}
                onClick={onNavigate}
                className="mt-2 inline-flex items-center gap-1 px-3 py-2 font-body text-sm font-semibold text-[#00415A] underline-offset-4 hover:underline"
              >
                View all services
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}