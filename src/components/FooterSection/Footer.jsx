// import { FaUser } from "react-icons/fa6";
import logo from '../../assets/images/logo/logo.png';
import './Footer.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Footer = () => {
    return (
        <section className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <a href={"/"}><img src={logo} className="footer-logo" alt="Paras Salunke" /></a>
                    <p>I am a Full Stack Developer from Pune, Maharashtra. I specialize in creating beautiful, responsive, and fast websites.</p>
                </div>
                {/* <div className="footer-top-right">
                    <div className="footer-email-input">
                        <FaUser className="email-user-icon"/>
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div> */}
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2024<a href="https://www.linkedin.com/in/salunkeparasofficial" target="_blank">Paras Salunke</a>. All rights reserved.</p>
                   
                    <div className="footer-bottom-right">
                            <p>
                                <AnchorLink offset={50} className='anchor-link' href="#home">Home</AnchorLink>
                            </p>
                            <p>
                                <AnchorLink offset={50} className='anchor-link' href="#about">About</AnchorLink>
                            </p>
                            <p>
                                <AnchorLink offset={50} className='anchor-link' href="#portfolio">Portfolio</AnchorLink>
                            </p>
                            <p>
                                <AnchorLink offset={50} className='anchor-link' href="#certificate">Certificates</AnchorLink>
                            </p>
                            <p>
                                <AnchorLink offset={50} className='anchor-link' href="#work">Projects</AnchorLink>
                            </p>
                            <p>
                                <AnchorLink offset={50} className='anchor-link' href="#contact">Contact</AnchorLink>
                            </p>
                    </div>
                </div>
        </section>
    )
}

export default Footer;
