// import './Contact.css';
// import { IoMdMail } from "react-icons/io";
// import { FaSquarePhone } from "react-icons/fa6";
// import { FaLocationDot } from "react-icons/fa6";
// import GradientLine from '../GradientLine/GradientLine';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Contact = () => {

//     const onSubmit = async (event) => {
//         event.preventDefault();
//         const formData = new FormData(event.target);

//         const name = formData.get('name');
//         const email = formData.get('email');
//         const message = formData.get('message');

//         // Basic validation
//         if (!name) {
//             toast.error("Name is required.");
//             return;
//         }

//         if (!email) {
//             toast.error("Email is required.");
//             return;
//         }

//         // Simple email validation regex
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(email)) {
//             toast.error("Invalid email format.");
//             return;
//         }

//         if (!message) {
//             toast.error("Message is required.");
//             return;
//         }

//         formData.append("access_key", "2e581409-4fc2-403e-833d-9e5dbf901bc6");

//         const object = Object.fromEntries(formData);
//         const json = JSON.stringify(object);

//         const res = await fetch("https://api.web3forms.com/submit", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json"
//             },
//             body: json
//         }).then((res) => res.json());

//         if (res.success) {
//             toast.success("Message sent successfully!");
//         } else {
//             toast.error("Failed to send message. Please try again.");
//         }
//     };

//     return (
//         <section id='contact' className='contact'>
//             <ToastContainer />
//             <div className="contact-title">
//                 <h1>Contact Me</h1>
//                 <GradientLine />
//             </div>
//             <div className="contact-section">
//                 <div className="contact-left">
//                     <h1>Let&rsquo;s Talk</h1>
//                     <p>Feel free to contact me for any project or collaboration.</p>

//                     <div className="contact-details">
//                         <div className="contact-detail">
//                             <a href="mailto:salunkeparasorg@gmail.com">
//                                 <IoMdMail className='contact-icons' /> <p>salunkeparasorg@gmail.com</p>
//                             </a>
//                         </div>
//                         <div className="contact-detail">
//                             <a href="tel:+918767154704">
//                                 <FaSquarePhone className='contact-icons' /> <p>+91 8767154704</p>
//                             </a>
//                         </div>
//                         <div className="contact-detail">
//                             <a href="https://www.google.com/maps/search/?api=1&query=Pune,+Maharashtra" target="_blank" rel="noopener noreferrer">
//                                 <FaLocationDot className='contact-icons' /> <p>Pune, Maharashtra</p>
//                             </a>
//                         </div>
//                     </div>

//                     <iframe
//                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d133511.60845731094!2d73.78056600378326!3d18.524761374474437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1724124250526!5m2!1sen!2sin&maptype=satellite"
//                         width="100%"
//                         height="200"
//                         style={{ border: 0, borderRadius: '10px' }}
//                         allowFullScreen=""
//                         loading="lazy"
//                         title="Pune Location"
//                     ></iframe>
//                 </div>
//                 <form action="" onSubmit={onSubmit} className="contact-right">
//                     <label htmlFor="">Your Name</label>
//                     <input type="text" placeholder="Enter your name" name='name' />
//                     <label htmlFor="">Your Email</label>
//                     <input type="email" placeholder="Enter your email" name='email' />
//                     <label htmlFor="">Type Your Message Here</label>
//                     <textarea name="message" id="" cols="30" rows="8" placeholder="Enter your message"></textarea>
//                     <button className='contact-submit' type='submit'>Send Message</button>
//                 </form>
//             </div>
//         </section>
//     )
// }

// export default Contact;

import './Contact.css';
import { IoMdMail } from "react-icons/io";
import { FaSquarePhone, FaLocationDot } from "react-icons/fa6";
import GradientLine from '../GradientLine/GradientLine';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current !== null) {
            return; // If map is already initialized, do nothing
        }

        // Initialize the map
        mapRef.current = L.map('map').setView([18.524761, 73.780566], 13);

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapRef.current);

        // Add a marker
        L.marker([18.524761, 73.780566]).addTo(mapRef.current)
            .bindPopup('Pune, Maharashtra')
            .openPopup();
    }, []);

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

                    <div id="map" style={{ width: '100%', height: '200px', borderRadius: '10px' }}></div>
                </div>
                <form action="" onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter your email" name='email' />
                    <label htmlFor="">Type Your Message Here</label>
                    <textarea name="message" id="" cols="30" rows="8" placeholder="Enter your message"></textarea>
                    <button className='contact-submit' type='submit'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;