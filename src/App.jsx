import Footer from "./components/sections/Footer";
import Navbar from "./components/sections/Navbar";
import Home from "./pages/Home";




function App() {
  
  return (
    <div className="min-h-screen bg-[#FAEDDD] text-neutral-900">
      {/* Navbar */}
      <Navbar logo="Logo Here"
        links={[
          { label: "Home", href: "#home" },
          { label: "Services", href: "#services" },
          { label: "About Us", href: "#about" },
          { label: "Portfolio", href: "#faq" },
          { label: "Reviews", href: "#faq" },
          { label: "FAQ's", href: "#contact" },
        ]}
        buttonText="Get Started"
        buttonHref="#contact"
      />
      <Home/>

      
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;