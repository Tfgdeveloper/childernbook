import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";


import PrimaryButton from "../ui/PrimaryButton";
import { Link, NavLink } from "react-router";

const ease = [0.22, 1, 0.36, 1];

const Navbar = ({
  logo = "Brand.",
  logoHref = "/",
  links = [],
  buttonText = "Get Started",
  showButton = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  // Lock page scroll while the drawer is open, and close it with Escape
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && closeMenu();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  // Close the drawer if the screen is resized to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => e.matches && closeMenu();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const linkClass = (isActive) =>
    `font-body font-medium transition-colors duration-200 focus:outline-none focus-visible:underline ${
      isActive ? "italic font-semibold text-[#00415A]" : "text-black hover:text-[#00415A]"
    }`;

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="w-full bg-[#FAEDDD]"
      >
        <nav className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 sm:h-20 sm:px-6 lg:px-16">
          <Link
            to={logoHref}
            onClick={closeMenu}
            className="font-heading text-xl font-bold text-black sm:text-2xl"
          >
            {logo}
          </Link>

          {/* Desktop (lg and up — 6+ links get cramped on tablets) */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-10">
            {links.map((link, index) => (
              <NavLink
                key={link.id || index}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) => `text-sm ${linkClass(isActive)}`}
              >
                {link.label}
              </NavLink>
            ))}

            {showButton && (
              <PrimaryButton
                openModal
                modalTitle="Get Started"
                modalDescription="Tell us about your project and we'll get back to you."
                className="ml-2 px-[30px] py-[10px] xl:ml-6"
              >
                {buttonText}
              </PrimaryButton>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-black transition-colors hover:bg-black/5 lg:hidden"
          >
            <Menu size={25} strokeWidth={1.8} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              onClick={closeMenu}
              className="absolute inset-0 bg-black/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />

            <motion.aside
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col overflow-y-auto bg-[#FAEDDD] px-6 pb-8 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease }}
            >
              {/* Drawer top bar — has its own close button so it works at any scroll position */}
              <div className="flex h-16 shrink-0 items-center justify-between sm:h-20">
                <Link
                  to={logoHref}
                  onClick={closeMenu}
                  className="font-heading text-xl font-bold text-black sm:text-2xl"
                >
                  {logo}
                </Link>
                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  autoFocus
                  className="flex h-10 w-10 items-center justify-center rounded-full text-black transition-colors hover:bg-black/5"
                >
                  <X size={25} strokeWidth={1.8} />
                </button>
              </div>

              <motion.div
                className="mt-6 flex flex-col"
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } } }}
              >
                {links.map((link, index) => (
                  <motion.div
                    key={link.id || index}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease } },
                    }}
                  >
                    <NavLink
                      to={link.href}
                      end={link.href === "/"}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `block border-b border-black/10 py-5 text-lg ${linkClass(isActive)}`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>

              {showButton && (
                <div className="mt-8">
                  <PrimaryButton
                    openModal
                    modalTitle="Get Started"
                    modalDescription="Tell us about your project and we'll get back to you."
                    className="w-full"
                  >
                    {buttonText}
                  </PrimaryButton>
                </div>
              )}
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;