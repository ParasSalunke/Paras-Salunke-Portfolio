import './Contact.css';
import { IoMdMail } from "react-icons/io";
import { FaSquarePhone, FaLocationDot } from "react-icons/fa6";
import GradientLine from '../GradientLine/GradientLine';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SendMessage from '../SendMessageButton/SendMessage';
import MapComponent from '../MapComponent/MapComponent';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        if (!name) {
            toast.error("Name is required.");
            return;
        }

        if (!email) {
            toast.error("Email is required.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Invalid email format.");
            return;
        }

        if (!message) {
            toast.error("Message is required.");
            return;
        }

        formData.append("access_key", "2e581409-4fc2-403e-833d-9e5dbf901bc6");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            toast.success("Message sent successfully!");
        } else {
            toast.error("Failed to send message. Please try again.");
        }
    };

    return (
        <section id='contact' className='contact'>
            <ToastContainer />
            <div className="contact-title">
                <h1>Contact Me</h1>
                <GradientLine />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let&rsquo;s Talk</h1>
                    <p>Feel free to contact me for any project or collaboration.</p>

                    <div className="contact-details">
                        <div className="contact-detail">
                            <a href="mailto:salunkeparasorg@gmail.com">
                                <IoMdMail className='contact-icons' /> <p>salunkeparasorg@gmail.com</p>
                            </a>
                        </div>
                        <div className="contact-detail">
                            <a href="tel:+918767154704">
                                <FaSquarePhone className='contact-icons' /> <p>+91 8767154704</p>
                            </a>
                        </div>
                        <div className="contact-detail">
                            <a href="https://www.google.com/maps/search/?api=1&query=Pune,+Maharashtra" target="_blank" rel="noopener noreferrer">
                                <FaLocationDot className='contact-icons' /> <p>Pune, Maharashtra</p>
                            </a>
                        </div>
                    </div>

                    <MapComponent />
                </div>
                <form action="" onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter your email" name='email' />
                    <label htmlFor="">Type Your Message Here</label>
                    <textarea name="message" id="" cols="30" rows="8" placeholder="Enter your message"></textarea>
                    <SendMessage type='submit' />
                </form>
            </div>
        </section>
    )
}

export default Contact;