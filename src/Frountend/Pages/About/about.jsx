import React from 'react';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from "../../../Asset/Images/8e865a52091829.59040ce0693a2.jpg"

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

        <h1 className='mt-4 mb-2 text-center' style={{ fontFamily: "sans-serif", fontWeight: "bolder" }}>How It Started</h1>

        <p className='text-center w-50 mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat sint libero iste dolorem cum dignissimos doloremque rerum tempora unde ipsum!</p>

        <div className="row mt-5 " style={{ height: "90vh" }}>
          <div className="col-12 col-md-6 p-2 abouttext" >
            <h1 className='m-2 text-light '>
              Vel mauris molestie dignissim
            </h1>
            <h5 className='my-3 mx-5 text-light '>
              Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.
            </h5>
            <p className='my-3 mx-5 text-light  '>
            Praesent vel faucibus ligula. Sed sit amet ipsum eget velit aliquet faucibus. Maecenas et odio id turpis sollicitudin pulvinar sit amet vitae augue. Phasellus nec ultricies arcu. Quisque efficitur tellus sit amet bibendum molestie. Duis id egestas odio. Phasellus lacinia ex quis faucibus tempor. Sed feugia.
            </p>
          </div>
          <div className="col-12 col-md-6 p-0">
            <img src={image} style={{ width: "90%", height: "91vh" }} alt="" />
          </div>
        </div>
        haekjbhlk
      </div>
    </div>
  );
}
