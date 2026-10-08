
import { MotionConfig } from "framer-motion";
import Layout from "./components/layout/Layout";
import { Route, Router, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Service from "./pages/Service";
import ReviewsPage from "./pages/Reviews";



function App() {
  return (
      <MotionConfig reducedMotion="user">
        <Routes>
          {/* Every page inside Layout gets the Navbar + Footer */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </MotionConfig>
    
  );
}

export default App;