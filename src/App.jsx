import About from "./components/AboutSection/About"
import BackToTopButton from "./components/BackToTopButton/BackToTop"
import Certificate from "./components/CertificateSection/Certificate"
import Contact from "./components/ContactSection/Contact"
import Footer from "./components/FooterSection/Footer"
import Hero from "./components/HeroSection/Hero"
import Navbar from "./components/NavbarSection/Navbar"
import Portfolio from "./components/PortfolioSection/Portfolio"
import Work from "./components/WorkSection/Work"

const App = () => {
  return (

    <div>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Certificate />
      <Work />
      <Contact />
      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default App