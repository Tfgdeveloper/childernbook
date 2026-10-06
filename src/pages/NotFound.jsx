
import { motion } from "framer-motion";
import { Link } from "react-router";

function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-5 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-heading text-7xl font-bold italic text-[#F29013] sm:text-8xl">404</p>
        <h1 className="mt-4 font-heading text-3xl sm:text-4xl">This page is missing from the story</h1>
        <p className="mx-auto mt-3 max-w-md font-body text-neutral-600">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-[#F29013] px-8 py-3 font-body font-semibold text-black transition-colors hover:bg-[#d97a0c]"
        >
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
}

export default NotFound;
