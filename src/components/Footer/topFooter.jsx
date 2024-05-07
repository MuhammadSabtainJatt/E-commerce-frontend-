import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTelegram, faTwitter, } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

export default function footer() {
  return (

    <>
      <div className="container " style={{ minHeight: "80vh", backgroundColor: "rgb(1, 7, 29)" ,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <div className="row text-center">
          <div className="col">
            <h4 className='text-light text-center'>
              Subscribe To Get Offers In Your Inbox
            </h4>
            <p className='text-light'>
              Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod condimentum
            </p>
            <div>
              <input type="text" className='w-50 d-inline' placeholder='Your Email Address ...' />
              <button>
                Subscribe
              </button>
            </div>
            <div>
              <button style={{backgroundColor:"transparent",border:"none",margin:"19px"}}>
                <Link className='text-white'>
                  <h2>
                <FontAwesomeIcon icon={faFacebookF} />
                </h2>
                </Link>
              </button>
              <button style={{backgroundColor:"transparent",border:"none",margin:"19px"}}>
                <Link className='text-white'>
                  <h2>
                <FontAwesomeIcon icon={faTwitter} />
                  </h2>
                </Link>
              </button>
              <button style={{backgroundColor:"transparent",border:"none",margin:"19px"}}>
                <Link className='text-white'>
                  <h2>
                <FontAwesomeIcon icon={faInstagram} />
                </h2>
                </Link>
              </button>
              <button style={{backgroundColor:"transparent",border:"none",margin:"19px"}}>
                <Link className='text-white'>
                <h2>
                <FontAwesomeIcon icon={faTelegram} /></h2>
                </Link>
              </button>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}




