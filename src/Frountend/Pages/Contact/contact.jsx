import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function contact() {
    return (
        <>
            <div className="container">
                <div className="row text-center mt-5">
                    <div className="col-12">
                        <h1 className='mb-5 ' style={{ fontSize: "60px" }}>Contact</h1>
                        <h5 className='mb-5'>
                            Proin eu ante vel mauris molestie dignissim non eget nunc. <br /> Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.
                        </h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 p-5 rounded-5 " style={{backgroundColor:"lightgray" ,}}>
                        <h2 className='mb-5'>
                            Get In Touch
                        </h2>
                        <h6 className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at, lobortis orci.</h6>
                        <p> <FontAwesomeIcon icon={faPhone} /> &nbsp; 03047191103</p>
                        <p> <FontAwesomeIcon icon={faEnvelope} />   &nbsp;alibrother@gmail.com</p>
                        <p> <FontAwesomeIcon icon={faLocationDot} /> &nbsp;Faisalabad Pakistan</p>
                    </div>
                    <div className="col-12 col-md-6 p-5 rounded-5 " >

                    </div>
                    
                </div>
            </div>
        </>
    )
}
