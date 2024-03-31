import React from 'react';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactForm() {
    return (
        <div className="widget ContactForm">
            <div className="contact-form-widget">
                <h2 className="ribbon">
                    <strong className="ribbon-content">Shoot Me an Email</strong>
                </h2>
                <div className="form">
                    <form name="contact-form">
                        <div className="contactf-name">
                            Your name:
                            <input
                                className="contact-form-name"
                                id="contact-form-name"
                                name="Name"
                                size="30"
                                type="text"
                                defaultValue="Name"
                                onBlur={(e) => { if (e.target.value === "") e.target.value = "Name"; }}
                                onFocus={(e) => { if (e.target.value === "Name") e.target.value = ""; }}
                            />
                        </div>
                        <div className="contactf-email">
                            E-mail address *:
                            <input
                                className="contact-form-email"
                                id="contact-form-email"
                                name="E-mail address"
                                size="30"
                                type="text"
                                defaultValue="E-mail address"
                                onBlur={(e) => { if (e.target.value === "") e.target.value = "E-mail address"; }}
                                onFocus={(e) => { if (e.target.value === "E-mail address") e.target.value = ""; }}
                            />
                        </div>
                        <div style={{ clear: 'both' }}></div>
                        <div className="contactf-message">
                            Message *:
                            <textarea
                                className="contact-form-email-message"
                                cols="25"
                                id="contact-form-email-message"
                                name="Type your message here..."
                                rows="5"
                                placeholder="Type your message here..."
                                defaultValue="Type your message here..."
                                onBlur={(e) => { if (e.target.value === "") e.target.value = "Type your message here..."; }}
                                onFocus={(e) => { if (e.target.value === "Type your message here...") e.target.value = ""; }}
                            ></textarea>
                            <input
                                className="contact-form-button contact-form-button-submit"
                                id="contact-form-submit"
                                type="button"
                                value="SEND MESSAGE"
                            />
                            <div className="contact-form-error-message" id="contact-form-error-message"></div>
                            <div className="contact-form-success-message" id="contact-form-success-message"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

function Contact() {
    return (
        <div>
            <div className="container">
                <div className="row text-center mt-5">
                    <div className="col-12">
                        <h1 className='mb-5' style={{ fontSize: "60px" }}>Contact</h1>
                        <h5 className='mb-5'>
                            Proin eu ante vel mauris molestie dignissim non eget nunc. <br /> Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.
                        </h5>
                    </div>
                </div>
                <div className="row bg-dark p-5 rounded-5">
                    <div className="col-12 col-md-6 p-5 rounded-5" style={{ backgroundColor: "lightgray" }}>
                        <h2 className='mb-5'>
                            Get In Touch
                        </h2>
                        <h6 className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at, lobortis orci.</h6>
                        <div className="contact-info mb-3">
                            <p><FontAwesomeIcon icon={faPhone} />&nbsp; 03047191103</p>
                            <p><FontAwesomeIcon icon={faEnvelope} />&nbsp; alibrother@gmail.com</p>
                            <p><FontAwesomeIcon icon={faLocationDot} />&nbsp; Faisalabad Pakistan</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 rounded-5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217897.62046143698!2d72.92448580884746!3d31.42375904202356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88932671c6!2sFaisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1711646232879!5m2!1sen!2s" allowFullScreen="" loading="lazy" className='rounded-5' style={{ width: "100%", height: "100%", border: "0" }} referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="row mt-5 bg-dark rounded-5 shadow py-5">
                    <div className="col">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Contact;
