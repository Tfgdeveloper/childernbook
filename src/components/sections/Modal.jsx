import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import ContactForm from "./ContactForm";

const ease = [0.22, 1, 0.36, 1];

/* ---------------- Little hand-drawn doodles ---------------- */
const Star = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      d="M12 2.5l2.6 6.1 6.6.5-5 4.4 1.5 6.5L12 16.6 6.3 20l1.5-6.5-5-4.4 6.6-.5z"
      fill="currentColor"
      stroke="#1a1a1a"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

const Moon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      d="M19 15.5A8 8 0 0 1 8.5 5a8 8 0 1 0 10.5 10.5z"
      fill="currentColor"
      stroke="#1a1a1a"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

const Squiggle = ({ className = "" }) => (
  <svg viewBox="0 0 60 16" className={className} aria-hidden="true">
    <path
      d="M2 10c6-8 10 4 16-2s10 6 16 0 10 4 16-2 6 2 8 0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const PaperPlane = ({ className = "" }) => (
  <svg viewBox="0 0 48 40" className={className} aria-hidden="true">
    <path d="M2 18L46 2 34 38 22 24z" fill="#fff" stroke="#1a1a1a" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M46 2L22 24l-2 12 6-9" fill="#ffe3bf" stroke="#1a1a1a" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const OpenBook = ({ className = "" }) => (
  <svg viewBox="0 0 120 80" className={className} aria-hidden="true">
    {/* cover */}
    <path d="M6 18c18-6 36-4 54 6 18-10 36-12 54-6v54c-18-6-36-4-54 6-18-10-36-12-54-6z" fill="#00415A" />
    {/* pages */}
    <path d="M10 14c16-5 32-3 50 6v52C42 63 26 61 10 66z" fill="#fffaf3" stroke="#1a1a1a" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M110 14c-16-5-32-3-50 6v52c18-9 34-11 50-6z" fill="#fffaf3" stroke="#1a1a1a" strokeWidth="1.5" strokeLinejoin="round" />
    {/* lines of "text" */}
    <g stroke="#e6c9a6" strokeWidth="2" strokeLinecap="round">
      <path d="M18 28c10-3 22-2 34 3M18 38c10-3 22-2 34 3M18 48c10-3 22-2 34 3" />
      <path d="M68 31c12-5 24-6 34-3M68 41c12-5 24-6 34-3M68 51c12-5 24-6 34-3" />
    </g>
    {/* bookmark */}
    <path d="M86 12v18l5-4 5 4V12" fill="#F29013" stroke="#1a1a1a" strokeWidth="1.2" strokeLinejoin="round" />
  </svg>
);

/* A floating wrapper for doodles */
function Float({ children, className, delay = 0, distance = 6, duration = 4, rotate = 0 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`pointer-events-none absolute ${className}`}
      initial={{ opacity: 0, scale: 0.4, rotate: rotate - 20 }}
      animate={
        reduce
          ? { opacity: 1, scale: 1, rotate }
          : { opacity: 1, scale: 1, rotate, y: [0, -distance, 0] }
      }
      transition={{
        opacity: { duration: 0.4, delay: 0.25 + delay },
        scale: { type: "spring", stiffness: 300, damping: 14, delay: 0.25 + delay },
        rotate: { duration: 0.6, delay: 0.25 + delay },
        y: { duration, repeat: Infinity, ease: "easeInOut", delay: 0.8 + delay },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Modal ---------------- */
const Modal = ({
  open,
  onOpenChange,
  title = "Let’s write your story",
  description = "Tell us a little about your book idea and our team will get back to you.",
}) => {
  const reduce = useReducedMotion();

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[100] bg-[#1a0f05]/55 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            </Dialog.Overlay>

            {/* Centering layer (flex instead of translate so Framer Motion can animate transform) */}
            <div className="pointer-events-none fixed inset-0 z-[101] flex items-center justify-center p-4">
              <Dialog.Content asChild forceMount>
                <motion.div
                  className="pointer-events-auto relative max-h-[94vh] w-full max-w-lg overflow-y-auto overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-[28px] border-2 border-[#1a1a1a] bg-[#FFF8EF] shadow-[8px_8px_0_#1a1a1a] outline-none"
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.9, rotate: -2 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95, rotate: 1 }}
                  transition={reduce ? { duration: 0.15 } : { type: "spring", stiffness: 260, damping: 22 }}
                >
                  {/* ---------- Header ---------- */}
                  <div className="relative overflow-hidden bg-[#F29013] px-6 pb-9 pt-5 sm:px-8 sm:pt-3">
                    {/* polka-dot texture */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: "radial-gradient(#fff 1.5px, transparent 1.5px)",
                        backgroundSize: "18px 18px",
                      }}
                      aria-hidden="true"
                    />

                    {/* doodles */}
                    <Float className="left-[46%] top-3 w-5 text-[#FFE27A]" delay={0.05} rotate={12}>
                      <Star />
                    </Float>
                    <Float className="right-16 top-4 w-7 text-[#FFF6D6]" delay={0.15} rotate={-15}>
                      <Moon />
                    </Float>
                    <Float className="bottom-7 left-5 w-12 text-[#00415A]" delay={0.25} distance={3}>
                      <Squiggle />
                    </Float>

                    <div className="relative flex items-end justify-between gap-4">
                      <div className="pr-6">
                        <motion.span
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15, duration: 0.4 }}
                          className="inline-flex -rotate-2 items-center gap-1.5 rounded-full border-2 border-[#1a1a1a] bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[#1a1a1a]"
                        >
                          <span aria-hidden="true">✏️</span> Chapter One
                        </motion.span>

                        <Dialog.Title className="mt-2 font-heading text-[1.6rem] font-medium leading-[1.1] text-[#1a1a1a] sm:text-[1.85rem]">
                          {title.split(" ").slice(0, -1).join(" ")}{" "}
                          <span className="relative inline-block font-bold italic">
                            {title.split(" ").slice(-1)}
                            {/* crayon underline */}
                            <svg
                              viewBox="0 0 120 12"
                              preserveAspectRatio="none"
                              className="absolute -bottom-1.5 left-0 h-2.5 w-full text-white"
                              aria-hidden="true"
                            >
                              <motion.path
                                d="M2 8c20-6 40-6 58-2s40 2 58-3"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="4"
                                strokeLinecap="round"
                                initial={{ pathLength: reduce ? 1 : 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ delay: 0.45, duration: 0.6, ease }}
                              />
                            </svg>
                          </span>
                        </Dialog.Title>
                      </div>

                      <motion.div
                        className="hidden w-24 shrink-0 sm:block"
                        initial={reduce ? false : { opacity: 0, y: 16, rotate: 8 }}
                        animate={{ opacity: 1, y: 0, rotate: -6 }}
                        transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.2 }}
                      >
                        <OpenBook className="w-full drop-shadow-[3px_3px_0_rgba(26,26,26,0.25)]" />
                      </motion.div>
                    </div>

                    {/* wavy bottom edge into the page */}
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

                  {/* Close button */}
                  <Dialog.Close
                    className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#1a1a1a] bg-white text-[#1a1a1a] shadow-[2px_2px_0_#1a1a1a] transition-all hover:-translate-y-0.5 hover:rotate-90 hover:shadow-[3px_3px_0_#1a1a1a] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
                    aria-label="Close"
                  >
                    <X size={18} strokeWidth={2.5} />
                  </Dialog.Close>

                  {/* ---------- Body ---------- */}
                  <motion.div
                    className="relative px-6 pb-5 sm:px-8 sm:pb-5"
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5, ease }}
                  >
                    <Dialog.Description className="font-body text-sm leading-6 text-neutral-700">
                      {description}
                    </Dialog.Description>

                    <div className="mt-3">
                      <ContactForm
                        className="max-w-xl space-y-10"
                        formClassName="rounded-2xl"
                        inputClassName="[&_input]:h-10 [&_input]:rounded-xl [&_input]:border-2 [&_input]:border-[#1a1a1a]/15 [&_input]:bg-white [&_input:focus]:border-[#F29013] [&_textarea]:h-15 [&_textarea]:min-h-0 [&_textarea]:resize-none [&_textarea]:rounded-xl [&_textarea]:border-4 [&_textarea]:border-[#1a1a1a]/15 [&_textarea]:bg-white [&_textarea:focus]:border-[#F29013]"
                        buttonClassName="mt-0"
                      />
                    </div>

                    <p className="mt-3 flex items-center justify-center gap-2 text-center font-heading text-xs sm:text-sm italic text-neutral-500">
                      <Star className="w-3.5 text-[#F29013]" />
                      Every great book starts with a hello.
                      <Star className="w-3.5 text-[#F29013]" />
                    </p>

                    {/* paper plane flying off the corner */}
                    <motion.div
                      className="pointer-events-none absolute bottom-1 right-3 hidden w-11 sm:block"
                      initial={reduce ? false : { opacity: 0, x: -40, y: 20, rotate: -20 }}
                      animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                      transition={{ delay: 0.6, duration: 0.8, ease }}
                      aria-hidden="true"
                    >
                      <PaperPlane />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </Dialog.Content>
            </div>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default Modal;