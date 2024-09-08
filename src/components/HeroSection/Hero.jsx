import { useEffect } from 'react';
import Typed from 'typed.js';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile from '../../assets/images/Hero/hero_img_1.png';
import Connect from '../ConnectButton/Connect';
import Resume from '../ResumeButton/Resume';
import SocialMedia from '../SocialMediaButtons/SocialMedia';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hero = () => {

    useEffect(() => {
        const options = {
            strings: ['React JS', 'Next JS', 'Node JS', 'Tailwind'],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        };

        const typed = new Typed('#typed', options);

        return () => {
            typed.destroy();
        };
    }, []);

    const handleResumeClick = () => {
        toast.info('Resume not available now');
    };

    return (
        <section id='home' className='hero'>
            <img src={profile} className='profile-img' alt='Paras Salunke' />
            <h1><span>I&apos;m Paras Salunke,</span> a Full Stack Developer based in Pune. <br /> I Code In <span id="typed"></span></h1>
            <p>I am a Full Stack Developer from Pune, Maharashtra. I specialize in creating beautiful, responsive, and fast websites. With 1 years of experience in web development, I have worked on various projects ranging from small business websites to large-scale web applications.</p>
            <div className="hero-action">
                <AnchorLink className='anchor-link' offset={50} href="#contact">
                    <Connect />
                </AnchorLink>
                <div onClick={handleResumeClick}>
                    <Resume />
                </div>
            </div>
            <SocialMedia />
            <ToastContainer />
        </section>
    );
};

export default Hero;