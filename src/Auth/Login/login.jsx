import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';

export default function login() {
    return (
        <div className="login-form">
            <div className="text">
                LOGIN
            </div>
            <form>
                <div className="field">
                    <div className="fas fa-envelope"><FontAwesomeIcon icon={faUser} /></div>
                    <input type="text" placeholder="Email or Phone" />
                </div>
                <div className="field">
                    <div className="fas fa-lock"><FontAwesomeIcon icon={faLock} /></div>
                    <input type="password" placeholder="Password" />
                </div>
                <button>LOGIN</button>
                <div className="link">
                    Not a member?
                    <a href="#">Register now</a>
                </div>
            </form>
        </div>
    );
}


