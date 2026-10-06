import { motion } from "framer-motion";

/*
  Shared layout for Terms and Privacy text.
  sections = [{ heading: "...", body: ["paragraph", "paragraph"] }]
*/
function LegalContent({ sections = [] }) {
  return (
    <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl space-y-10">
        {sections.map((s) => (
          <motion.div
            key={s.heading}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-heading text-2xl font-semibold text-black sm:text-3xl">{s.heading}</h2>
            {s.body.map((p, i) => (
              <p key={i} className="mt-4 font-body text-base leading-7 text-neutral-700">
                {p}
              </p>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default LegalContent;
