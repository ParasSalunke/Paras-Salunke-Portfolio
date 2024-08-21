import { useState, useEffect, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { TbMenuDeep } from "react-icons/tb";
import { RiCloseLargeLine } from "react-icons/ri";
import './Navbar.css';
import logo from '../../assets/images/logo/logo.png';
import Connect from '../ConnectButton/Connect';
import ModeButton from '../Dark&LightModeButton/ModeButton';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveMenu(entry.target.id);
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero');
      if (window.scrollY > heroSection.offsetHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <a href={"/"}>
        <img src={logo} className='logo' alt='Paras Salunke logo' />
      </a>
      <TbMenuDeep onClick={openMenu} className='nav-mob-open' size={50} />

      <ul ref={menuRef} className="nav-menu">
        <RiCloseLargeLine onClick={closeMenu} className='nav-mob-close' size={50} />

        <li onClick={() => handleMenuClick("home")} className={activeMenu === "home" ? "active" : ""}>
          <AnchorLink className='anchor-link' href="#home"><p>Home</p></AnchorLink>
        </li>
        <li onClick={() => handleMenuClick("about")} className={activeMenu === "about" ? "active" : ""}>
          <AnchorLink className='anchor-link' offset={50} href="#about"><p>About Me</p></AnchorLink>
        </li>
        <li onClick={() => handleMenuClick("portfolio")} className={activeMenu === "portfolio" ? "active" : ""}>
          <AnchorLink className='anchor-link' offset={50} href="#portfolio"><p>Portfolio</p></AnchorLink>
        </li>
        <li onClick={() => handleMenuClick("certificate")} className={activeMenu === "certificate" ? "active" : ""}>
          <AnchorLink className='anchor-link' offset={50} href="#certificate"><p>Certificates</p></AnchorLink>
        </li>
        <li onClick={() => handleMenuClick("work")} className={activeMenu === "work" ? "active" : ""}>
          <AnchorLink className='anchor-link' offset={50} href="#work"><p>Projects</p></AnchorLink>
        </li>
        <li onClick={() => handleMenuClick("contact")} className={activeMenu === "contact" ? "active" : ""}>
          <AnchorLink className='anchor-link' offset={50} href="#contact"><p>Contact</p></AnchorLink>
        </li>
      </ul>
      <div className="mode-button"><ModeButton /></div>
      <AnchorLink className='anchor-link nav-connect' offset={50} href="#contact">
        <Connect />
      </AnchorLink>
      
    </div>
  );
}

export default Navbar;