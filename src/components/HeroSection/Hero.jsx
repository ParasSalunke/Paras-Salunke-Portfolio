import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile from '../../assets/images/Hero/hero.png';
import Connect from '../ConnectButton/Connect';
import Resume from '../ResumeButton/Resume';
import SocialMedia from '../SocialMediaButtons/SocialMedia';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hero = () => {

    const handleResumeClick = () => {
        toast.info('Resume not available now');
    };

    return (
        <section id='home' className='hero'>
            <img src={profile} className='profile-img' alt='Paras Salunke' />
            <h1><span>I&apos;m Paras Salunke,</span> a Full Stack Developer based in Pune.</h1>
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