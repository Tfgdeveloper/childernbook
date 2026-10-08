import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessagesSquare, Phone, MapPin } from "lucide-react";
import { Link } from "react-router"

const ease = [0.22, 1, 0.36, 1];
const viewport = { once: true, amount: 0.15 };
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

const services = [
  "Book Writing",
  "Book Marketing",
  "Amazon Publishing",
  "Book Editing & Proofreading",
  "Book Cover Design",
  "Book Illustrations",
  "Book Publishing",
  "Book Printing",
  "Author Website",
];

function SubscribeBanner() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | error | success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      return;
    }
    // TODO: send `email` to your newsletter API here
    setStatus("success");
    setEmail("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={viewport}
      transition={{ duration: 0.7, ease }}
      className="relative z-10 mx-auto max-w-5xl px-4"
    >
      <div className="flex flex-col gap-6 rounded-xl bg-[#F29013] px-5 py-7 shadow-lg sm:px-6 sm:py-8 md:flex-row md:items-center md:justify-between md:px-10">
        <h2 className="text-center text-2xl leading-tight text-black sm:text-3xl md:text-left lg:text-4xl">
          Subscribe For The
          <br />
          <span className="font-bold italic">Daily Updates</span>
        </h2>

        <div className="w-full md:max-w-md">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-2 rounded-lg bg-white p-2 sm:flex-row sm:items-center"
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== "idle") setStatus("idle");
              }}
              placeholder="Enter your email"
              aria-invalid={status === "error"}
              aria-describedby="footer-email-msg"
              className="min-w-0 flex-1 rounded-md px-3 py-2.5 font-serif text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F29013]/50"
            />
            <button
              type="submit"
              className="shrink-0 rounded-md bg-[#f9d06b] px-6 py-2.5 font-serif text-sm text-gray-900 transition-colors hover:bg-[#f5c143] focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/40"
            >
              Subscribe
            </button>
          </form>

          <AnimatePresence mode="wait">
            {status !== "idle" && (
              <motion.p
                key={status}
                id="footer-email-msg"
                role="status"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-2 text-center text-sm font-medium text-gray-900 md:text-left"
              >
                {status === "error"
                  ? "Enter a valid email address, like name@example.com."
                  : "You're subscribed. Watch your inbox for updates."}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

function ColumnHeading({ children }) {
  return <h3 className="mb-4 text-base font-semibold text-white">{children}</h3>;
}

const linkClass =
  "text-sm text-gray-300 transition-colors hover:text-[#F29013] focus:outline-none focus-visible:text-[#F29013] focus-visible:underline";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#FAEDDD]">
      {/* Two-tone background behind the banner only */}
      <div className="relative py-6">
        
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-black" aria-hidden="true" />
        <SubscribeBanner />
      </div>

      <div className="bg-black text-white">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto grid max-w-6xl gap-10 px-6 pb-10 pt-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.1fr] lg:gap-12"
        >
          {/* Brand */}
          <motion.div variants={fadeUp}>
            <Link
              to="/"
              className="font-serif text-3xl font-bold italic text-[#F29013] focus:outline-none focus-visible:underline sm:text-4xl"
            >
              Logo Here
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since 1966.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.nav variants={fadeUp} aria-label="Quick links">
            <ColumnHeading>Quick Links</ColumnHeading>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Services */}
          <motion.nav variants={fadeUp} aria-label="Our services">
            <ColumnHeading>Our Services</ColumnHeading>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  {/* All services point to the Services page for now */}
                  <Link to="/services" className={linkClass}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Contact */}
          <motion.div variants={fadeUp}>
            <ColumnHeading>Contact Us</ColumnHeading>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                <a href="#live-chat" className={`flex items-center gap-3 ${linkClass}`}>
                  <MessagesSquare size={18} className="shrink-0 text-white" aria-hidden="true" />
                  Live chat
                </a>
              </li>
              <li>
                <a href="tel:+12175550113" className={`flex items-center gap-3 ${linkClass}`}>
                  <Phone size={18} className="shrink-0 text-white" aria-hidden="true" />
                  (217) 555-0113
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-white" aria-hidden="true" />
                <address className="not-italic leading-relaxed">
                  1901 Thornridge Cir. Shiloh, Hawaii 81063
                </address>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-dashed border-gray-600">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-6xl px-6 py-6"
          >
            <p className="text-xs font-semibold">© Copyright {year} All Rights Reserved</p>
            <p className="mt-3 text-xs leading-relaxed text-gray-400">
              Disclaimer: We operate as an independent entity that specializes in
              book writing and publishing services. We want to make it clear that
              we have no affiliation, endorsement, or connection with the brand
              Amazon or any of its affiliated companies or subsidiaries. Despite
              our name bearing a resemblance to the well-known online marketplace,
              we are a separate and distinct entity in the publishing industry.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}