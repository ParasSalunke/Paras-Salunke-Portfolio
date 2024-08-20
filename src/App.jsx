import About from "./components/AboutSection/About"
import BackToTopButton from "./components/BackToTopButton/BackToTop"
import Contact from "./components/ContactSection/Contact"
import Footer from "./components/FooterSection/Footer"
import Hero from "./components/HeroSection/Hero"
import Navbar from "./components/NavbarSection/Navbar"
import Portfolio from "./components/PortfolioSection/Portfolio"
import Work from "./components/WorkSection/Work"



const App = () => {
  return (
    <div>
      <BackToTopButton />
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
