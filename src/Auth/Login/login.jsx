import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { message } from 'antd';


const initialState = { email: '', password: '' }
export default function CustomLogin() {
    const [data, setData] = useState(initialState);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/login', data)
            .then((res) => {
                message.success("User Login Successfully")
                setData(initialState)
            })
            .catch((error) => {
                console.log('error', error)
                message.error(error)
            })


    }

    return (
       <div className="body">
         <div className="login-form">
            <div className="text">
                Login
            </div>
            <form className='form'>
                <div className="field">
                    <div className="fas fa-lock"><FontAwesomeIcon icon={faEnvelope} /></div>
                    <input type="email" name='email' placeholder="Email" value={data.email} onChange={handleChange} />
                </div>
                <div className="field">
                    <div className="fas fa-lock"><FontAwesomeIcon icon={faLock} /></div>
                    <input type="password" name='password' placeholder="Password" value={data.password} onChange={handleChange} />
                </div>
                <button onClick={handleLogin}>Login</button>
                <div className="link">
                    Not a Member ? <a href="#">Register now</a>
                </div>
            </form>
        </div>
       </div>
    );
}
