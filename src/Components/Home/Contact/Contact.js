import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
import toast from 'react-hot-toast';
import swal from 'sweetalert';

const Contact = () => {
 
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_z7x7t5r', 'template_3c6fuec', e.target, 'user_edB0yp4J6oB3DhbVnw1d4')
            .then((result) => {
                if (result) {
                    swal({
                        title: "Message sent!",
                        icon: "success",
                    });
                }
            },
                (error) => {
                    toast.error(error.message);
                    console.log(error)
                });
        e.target.reset()
    }
    return (
        <section className="form-div mt-4 p-5 d-flex justify-content-center" id="contact">
            <div className="form-bg col-md-4">
                <h2  className="text-white fw-bold faHighlight">Stay Connected With Us</h2>
                <form  onSubmit={sendEmail}>
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
                        <input className="btn btn-success" type="submit" value="Send Message" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;