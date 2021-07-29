import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import Aos from "aos";
import "aos/dist/aos.css"

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
            <div className="container form-bg">
                <h2 data-aos="fade-left" className="name-color">Contact <span className="text-white">with me</span></h2>
                <form data-aos="fade-left" onSubmit={sendEmail}>
                    <div className="row d-flex flex-column">
                        <div className="col-12 col-md-6 form-group pt-2 ">
                            <input type="text" name="name" className="form-control" placeholder="name" />
                        </div> <br />
                        <div className="col-12 col-md-6  form-group pt-2 ">
                            <input type="text" name="name" className="form-control" placeholder="email" />
                        </div>
                        <div className="col-12 col-md-6  form-group pt-2 ">
                            <input type="text" name="name" className="form-control" placeholder="subject" />
                        </div>
                        <div className="col-12 col-md-6 form-group pt-2 ">
                            <textarea name="message" id="" cols="24" rows="8" placeholder="Your message"></textarea><br />
                            <input type="submit" value="Send Message" className="btn btn-info" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;