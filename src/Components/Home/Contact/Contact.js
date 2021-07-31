import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import Aos from "aos";
import "aos/dist/aos.css"
import './Contact.css'

const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_z7x7t5r', 'template_3c6fuec', e.target, 'user_edB0yp4J6oB3DhbVnw1d4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div className="form-div p-5 d-flex justify-content-center" id="contact">
            <div className="form-bg col-md-4">
                <h2 data-aos="fade-left" className="text-white fw-bold faHighlight">Stay Connected With Us</h2>
                <form data-aos="fade-left" onSubmit={sendEmail}>
                    <div className="form-group pt-2">
                        <input type="text" name="name" className="form-control" placeholder="name" />
                    </div>
                    <div className="form-group pt-3">
                        <input type="text" name="name" className="form-control" placeholder="email" />
                    </div>
                    <div className="form-group pt-3">
                        <input type="text" name="name" className="form-control" placeholder="subject" />
                    </div>
                    <div className="form-group pt-3">
                        <textarea name="message" id="" cols="34" rows="8" placeholder="Your message"></textarea><br />
                    </div>
                    <div className="form-group">
                        <input className="btn btn-success" type="submit" value="Send Message"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;