import React from 'react'
import { Link } from 'react-router-dom'

export default function footer() {
  return (

    <>
      <div className="container " style={{ minHeight: "80vh", backgroundColor: "rgb(1, 7, 29)" }}>
        <div className="row">
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
              <button>
                <Link >
                Facebook
                </Link>
              </button>
              <button>
                <Link >
                Instragram
                </Link>
              </button>
              <button>
                <Link >
                Other Websites
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}




