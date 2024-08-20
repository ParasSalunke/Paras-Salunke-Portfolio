import { useEffect, useState } from 'react';
import { FaAngleDoubleUp } from "react-icons/fa";
import './BackToTop.css';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            className="back-to-top"
            onClick={scrollToTop}
            style={{ display: isVisible ? 'block' : 'none' }}
        >
            <FaAngleDoubleUp size={20} />
        </button>
    );
};

export default BackToTopButton;