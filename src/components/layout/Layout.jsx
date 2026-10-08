

import { Outlet } from "react-router";
import ScrollToTop from "./ScrollToTop";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAEDDD] text-neutral-900">
      <ScrollToTop />
      <Navbar logo="Brand." links={navLinks} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
