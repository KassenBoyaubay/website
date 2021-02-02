import React from 'react'
import './contactForm.css'

const ContactForm = () => {
    return (
        <div className="contactForm">
            <section id="contact-btn">
                <h1>If You Have Any Project In Your Mind ?</h1>
                <span>Contact Me</span>
            </section>

            <section id="contact-form">
                <form action="">
                    {/* left */}
                    <div className="contact-left">

                        {/* heading */}
                        <h1 className="c-l-heading"><span style={{ borderBottom: "3px solid #1ed98b" }}>Writ</span>e Us</h1>
                        {/* form-name */}
                        <div className="f-name">
                            <span className="font">Name</span>
                            <input type="text" placeholder="Full Name" />
                        </div>
                        {/* form-email */}
                        <div className="f-email">
                            <span className="font">Email</span>
                            <input type="email" placeholder="Example@gmail.com" />
                        </div>
                        <div className="social-icons">
                            <span><i className="fab fa-facebook-f"></i></span>
                            <span><i className="fab fa-twitter"></i></span>
                            <span><i className="fab fa-instagram"></i></span>
                            <span><i className="fab fa-youtube"></i></span>
                        </div>
                    </div>
                    {/* right */}
                    <div className="contact-right">
                        <div className="message">
                            <p className="font">Message</p>
                            <textarea name="message" id="" cols="20" rows="5" placeholder="Write Message..."></textarea>
                        </div>
                        {/* submit */}
                        <button>submit</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default ContactForm