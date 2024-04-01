import React from 'react';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function about() {
  return (
    <div>
      <div className="container" >
        <div className="row text-center mt-5">
          <div className="col-12 text-center">
            <h1 className='mb-5 ' style={{ fontSize: "60px", fontFamily: "sans-serif", fontWeight: "bold" }}>About</h1>
            <div className="about-text w-75 text-center mx-auto">

              <h5 className='mb-4' style={{ fontFamily: 'sans-serif', fontWeight: "bolder" }}>
                Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.
              </h5>

              <p className='mb-5  ' style={{ fontFamily: 'sans-serif' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci.  Suspendisse vulputate semper nunc eget rhoncus. Ut sit amet porta sem,    interdum tincidunt libero. Nulla vel quam lobortis, varius est scelerisque, dapibus nisl.
              </p>
            </div>
          </div>
        </div>
        <div className="row p-5 rounded-5 about-image">
          <div className="col-12 col-md-6">
            <small>
              THE MISSION
            </small>
            <h3>
            At the heart of everything, we set out to offer the best quality.
            </h3>
          </div>
          <div className="col-12 col-md-6">

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
