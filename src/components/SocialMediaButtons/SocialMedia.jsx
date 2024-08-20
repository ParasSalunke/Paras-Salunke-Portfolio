import { FaInstagram, FaLinkedin, FaGithub, FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import './SocialMedia.css';

const SocialMedia = () => {
    return (
        <div className="card">
            <a className="socialContainer" href="https://www.instagram.com/paras_salunke" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="socialSvg" />
            </a>

            <a className="socialContainer" href="https://x.com/Paras__Salunke" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="socialSvg" />
            </a>

            <a className="socialContainer" href="https://www.linkedin.com/in/salunkeparasofficial" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="socialSvg" />
            </a>

            <a className="socialContainer" href="https://github.com/ParasSalunke" target="_blank" rel="noopener noreferrer">
                <FaGithub className="socialSvg" />
            </a>

            <a className="socialContainer" href="https://www.facebook.com/ParasSalunkeOfficial" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="socialSvg" />
            </a>

            <a className="socialContainer" href="https://www.youtube.com/@ParasSalunke" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="socialSvg" />
            </a>
        </div>
    );
};

export default SocialMedia;
