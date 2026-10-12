import { Fragment, useEffect } from "react";
import { Navigate, useParams } from "react-router";

import { servicePages } from "../data/servicePages";
import { ServicesMenu } from "../components/sections/ServicesMegaMenu";

// ⬇ Your predefined sections. Change the names/paths to match your files.
import Hero from "../components/sections/Hero";
import About from "../components/innerservices/About";
import Portfolio from "../components/innerservices/Portfolio";
import FaqSection from "../components/innerservices/Faqsection";

/* ------------------------------------------------------------------ */
/*  Turns "Stories *Kids Love*" into Stories <span>Kids Love</span>     */
/*  so titles in the content file can have the bold-italic accent.     */
/* ------------------------------------------------------------------ */
function formatTitle(text) {
  if (typeof text !== "string") return text;
  return text.split(/\*(.+?)\*/g).map((part, i) =>
    i % 2 ? (
      <span key={i} className="font-bold italic">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

// Dev-only check: warns about menu links that have no content yet
if (import.meta.env.DEV) {
  const missing = ServicesMenu
    .flatMap((c) => c.links.map((l) => l.href.replace("/services/", "")))
    .filter((slug) => !servicePages[slug]);
  if (missing.length) console.warn("[ServiceDetail] No content in servicePages.js for:", missing);
}

/* ------------------------------------------------------------------ */
/*  One page for every service: /services/:slug                        */
/* ------------------------------------------------------------------ */
export default function ServiceDetail() {
  const { slug } = useParams();
  const page = servicePages[slug];

  // Start at the top when moving from one service to another
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Page title and description for search engines and browser tabs
  useEffect(() => {
    if (!page) return;
    document.title = `${page.seo?.title ?? page.name} | Brand.`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = page.seo?.description ?? page.hero.description;
  }, [page]);

  // Unknown service → back to the services page
  if (!page) return <Navigate to="/services" replace />;

  const { hero, about, portfolio, faq } = page;

  return (
    // key={slug} replays the entrance animations when switching services
    <Fragment key={slug}>
      <Hero
        variant="page"
        badge={hero.badge}
        title={formatTitle(hero.title)}
        description={hero.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: page.name },
        ]}
        formTitle={hero.formTitle ?? "Get a Free Consultation"}
        formDescription={hero.formDescription ?? `Tell us about your book and we’ll plan your ${page.name.toLowerCase()} project.`}
      />

      {about && (
        <About
          {...about}
          title={formatTitle(about.title)}
          imageAlt={about.imageAlt ?? `${page.name} example from our portfolio`}
        />
      )}

      {portfolio && <Portfolio {...portfolio} title={formatTitle(portfolio.title)} />}

      {faq && <FaqSection {...faq} title={formatTitle(faq.title)} />}
    </Fragment>
  );
}