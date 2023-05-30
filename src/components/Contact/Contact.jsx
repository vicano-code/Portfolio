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
        <div className="contact-form" id="Contact" >
            <div className="c-left">
                <div id="contactme">
                    <h2>Contact me</h2>
                </div>
            </div>

            <div className="c-form">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="email" />
                    <textarea name="message" className="user" placeholder="Message" cols="30" rows="10"></textarea>
                    <button type="submit" value="send" className="button">Send</button>
                    <span>{done && "Thanks for contacting me!"}</span>
                    <div className="blur c-blur" style={{background: "var(--purple)"}}></div>
                </form>
            </div>

        </div>
    );
};

export default Contact;