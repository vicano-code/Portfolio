import React, { useState } from 'react';
import './Contact.css';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send('service_h4f9dl7', 'template_h4cmjne', form.current, 'YmbgAu2M_3T47URsF')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className="contact-form">
            <h1>Contact Me</h1>
            <div className="c-form">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" required/>
                    <input type="email" name="user_email" className="user" placeholder="Email" required/>
                    <textarea name="message" className="user" placeholder="Message" cols="30" rows="10" required></textarea>
                    <button type="submit" value="send" className="button">Send</button>
                    <span>{done && "Thanks for contacting me!"}</span>
                    <div className="blur c-blur" style={{background: "var(--purple)"}}></div>
                </form>
            </div>

        </section>
    );
};

export default Contact;