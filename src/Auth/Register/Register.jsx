import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Register() {
    return (
        <div className="login-form">
            <div className="text">
                Register
            </div>
            <form className='form'>
                <div className="field">
                    <div className="fas fa-envelope"><FontAwesomeIcon icon={faUser} /></div>
                    <input type="text" placeholder="Enter Your Name" />
                </div>
                <div className="field">
                    <div className="fas fa-lock"><FontAwesomeIcon icon={faEnvelope} /></div>
                    <input type="email" placeholder="Email" />
                </div>
                <div className="field">
                    <div className="fas fa-lock"><FontAwesomeIcon icon={faLock} /></div>
                    <input type="password" placeholder="Password" />
                </div>
                <button>Register</button>
                <div className="link">
                    Already Register
                    <a href="#">Login now</a>
                </div>
            </form>
        </div>
    );
}


