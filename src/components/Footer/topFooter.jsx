import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTelegram, faTwitter, } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

export default function footer() {
  return (

    <>
      <div className="container " style={{ minHeight: "60vh", backgroundColor: "rgb(1, 7, 29)" ,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <div className="row text-center">
          <div className="col">
            <h2 className='text-light text-center'>
              Subscribe To Get Offers In Your Inbox
            </h2>
            <p className='text-light'>
              Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod condimentum
            </p>
            <div>
              <input type="text"  style={{height:"50px"}}className='p-2 rounded border-0 w-50 d-inline' placeholder='Your Email Address ...' />
              <button  style={{height:"50px"}}className='p-2  rounded ms-2 border-0 d-inline'>
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




