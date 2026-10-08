import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

import Hero from "../components/sections/Hero";
import ContactForm from "../components/sections/ContactForm";

const ease = [0.22, 1, 0.36, 1];
const viewport = { once: true, amount: 0.2 };
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const contactInfo = [
  { label: "Phone", value: "(000) 123-456789", href: "tel:+000123456789", icon: Phone },
  { label: "Email", value: "info@loremipsum.com", href: "mailto:info@loremipsum.com", icon: Mail },
  { label: "Location", value: "Lorem Ipsum is simply dummy text.", icon: MapPin },
];

function ContactSection() {
  return (
    <>
    <Hero
        variant="legal"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        badge="Contact Us"
        title={<>Let’s Talk About <span className="font-bold italic">Your Book</span></>}
        description="Tell us about your idea and our team will get back to you with the next steps."
        formTitle="Send Us a Message"
      />
    <section id="contact" className="bg-[#FAEDDD] px-5 py-14 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-balance font-heading text-3xl leading-tight text-black sm:text-4xl lg:text-[2.75rem]"
          >
            <span className="font-bold italic">Connect With Us:</span> Get The Assistance You Need
            Right Away
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl font-body text-sm leading-6 text-neutral-700"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since 1966.
          </motion.p>
        </motion.div>

        {/* Info cards */}
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5"
        >
          {contactInfo.map(({ label, value, href, icon: Icon }, i) => {
            const content = (
              <>
                <span className="flex items-center gap-2 font-heading text-base font-bold italic text-black">
                  <Icon size={16} className="text-[#F29013]" aria-hidden="true" />
                  {label}
                </span>
                <span className="mt-2 block break-words font-body text-base text-neutral-800 sm:text-lg">
                  {value}
                </span>
              </>
            );
            return (
              <motion.li
                key={label}
                variants={fadeUp}
                className={i === contactInfo.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                {href ? (
                  <a
                    href={href}
                    className="block h-full rounded-2xl bg-[#F6DCC0] p-5 transition-all hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F29013]"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="h-full rounded-2xl bg-[#F6DCC0] p-5">{content}</div>
                )}
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Your ContactForm — "contact" variant */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="mt-5 rounded-2xl bg-[#F6DCC0] p-4 sm:p-6"
        >
          <ContactForm variant="contact" linkClassName="!text-[#00415A]" />
        </motion.div>
      </div>
    </section>
    </>
  );
}

export default ContactSection;

