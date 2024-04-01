import React from 'react';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function about() {
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
              </div>
          </div>
      </div>
  </div>
    );
}
