import { useEffect } from "react";
import { useLocation } from "react-router";

/*
  - New page → jump to the top (React Router keeps the old scroll position otherwise)
  - URL with a hash, like /#services → scroll to that section
*/
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a frame so the new page has rendered before looking for the element
      requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
      });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
