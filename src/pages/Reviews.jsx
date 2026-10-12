import { motion } from "framer-motion";
import { PenLine, Star } from "lucide-react";
import Hero from "../components/sections/Hero";

const EASE = [0.22, 1, 0.36, 1];

const PURPLE = "#1A006C";

const REVIEWS = [
  {
    name: "Sarah Mitchell",
    role: "Author, The Lantern Keeper",
    rating: 5,
    date: "Aug 2026",
    text: "The illustrations brought my characters to life exactly the way I imagined them. Every revision was handled quickly and with real care. My readers keep asking who did the artwork.",
  },
  {
    name: "David Okafor",
    role: "Children's Book Author",
    rating: 5,
    date: "Jul 2026",
    text: "From formatting to getting the book live on every major store, the whole publishing process was smooth. I always knew what was happening next and never felt lost.",
  },
  {
    name: "Emily Carter",
    role: "First-time Author",
    rating: 4,
    date: "Jul 2026",
    text: "I received three cover concepts and every one of them was strong. The final cover stands out on the shelf and matches the mood of the story perfectly.",
  },
  {
    name: "James Whitaker",
    role: "Author, Moonlight Meadows",
    rating: 5,
    date: "Jun 2026",
    text: "Warm, colourful and full of personality. The team understood the age group I was writing for and kept every page consistent from start to finish. I could not be happier with the result.",
  },
  {
    name: "Aisha Rahman",
    role: "Educator & Author",
    rating: 5,
    date: "Jun 2026",
    text: "The editing was thoughtful and respectful of my voice. They tightened the story without losing what made it mine.",
  },
  {
    name: "Michael Turner",
    role: "Self-published Author",
    rating: 4,
    date: "May 2026",
    text: "Clear communication and fair pricing. The print copies arrived looking professional, and the ebook version was ready the same week.",
  },
  {
    name: "Laura Benson",
    role: "Author, Tiny Giants",
    rating: 5,
    date: "May 2026",
    text: "The cover sold the book before anyone read a word. Sales jumped after the redesign and I have had so many compliments on it.",
  },
  {
    name: "Carlos Mendes",
    role: "Picture Book Author",
    rating: 5,
    date: "Apr 2026",
    text: "Professional from the first call. The sketches came in on time and the final colour pages were even better than the sketches promised.",
  },
  {
    name: "Hannah Lee",
    role: "Author & Parent",
    rating: 5,
    date: "Mar 2026",
    text: "I wrote this book for my daughter and the team treated it like it was their own. The care they put into every detail shows on every page.",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

const TrustStars = ({ value }) => (
  <div className="flex gap-[3px]" aria-label={`${value} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, scale: 0.4, rotate: -30 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.25 + i * 0.07 }}
        className={`flex h-[25px] w-[25px] items-center justify-center ${i <= value ? "bg-[#00B67A]" : "bg-[#DCDCE6]"}`}
      >
        <Star className="h-[15px] w-[15px] text-white" fill="currentColor" strokeWidth={0} />
      </motion.span>
    ))}
  </div>
);

const ReviewCard = ({ review, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 40, scale: 0.96 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: EASE, delay: (index % 2) * 0.1 }}
    whileHover={{ y: -6 }}
    className="group relative mb-5 break-inside-avoid overflow-hidden rounded-[28px] bg-white/50 hover:bg-[#F29013] px-6 pb-8 pt-7 text-center shadow-[0_18px_36px_-22px_rgba(242,144,19,0.9)] transition-shadow duration-500 hover:shadow-[0_28px_48px_-22px_rgba(242,144,19,1)] sm:px-8"
  >
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/20 blur-md transition-transform duration-[1200ms] ease-out group-hover:translate-x-[480%]"
    />

    <div className="relative flex items-center justify-center gap-3">
      {review.avatar ? (
        
        <img
          src={review.avatar}
          alt={review.name}
          loading="lazy"
          className="h-[48px] w-[48px] shrink-0 rounded-full border-[3px] border-white object-cover shadow-[0_6px_14px_-6px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <span className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border-[3px] border-white bg-[#1A006C] font-body text-[20px] font-bold text-white transition-transform duration-500 group-hover:scale-105">
          {initials(review.name)}
        </span>
      )}
      <div className="text-left">
        <p className="font-body text-[16px] font-semibold leading-tight text-black sm:text-[18px]">{review.name}</p>
        <p className="font-body text-[14px] font-medium text-black/55 sm:text-[14px]">{review.role}</p>
      </div>
    </div>

    <p className="relative mt-6 font-body text-[13px] leading-[1.6] text-black sm:text-[15px]">“{review.text}”</p>

    <div className="relative mt-7 flex justify-center">
      <TrustStars value={review.rating} />
    </div>
  </motion.article>
);

const ReviewsPage = () => {
  return (
    <div className="">
        <Hero
            variant="legal"
            breadcrumbs={[{ label: "Home", href: "/" }, { label: "Reviews" }]}
            badge="Reviews"
            title={<>Reviews <span className="font-bold italic"></span></>}
            description="How we collect, use and protect your information."
            
            />

      <section className="mx-auto max-w-[1140px] px-4 pb-20 pt-14 sm:px-5 sm:pt-16">
        <div className="columns-1 gap-5 lg:columns-3">
          {REVIEWS.map((review, i) => (
            <ReviewCard key={review.name} review={review} index={i} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default ReviewsPage;