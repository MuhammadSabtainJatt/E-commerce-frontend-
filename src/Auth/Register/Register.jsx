import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { message } from 'antd';


const initialState = { name: '', email: '', password: '' }
export default function CustomRegister() {
    const [data, setData] = useState(initialState);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const { email, password } = data
        const registerData = { email, password }
        console.log(registerData);
        axios.post('http://localhost:3000/register', registerData)
            .then((res) => {
                console.log(res.data)
                message.success("User Register Successfully")
                setData(initialState)
            })
            .catch((error) => {
                console.log('error', error)
                message.error(error)
            })


    }

    return (
        <div className="login-form">
            <div className="text">
                Register
            </div>
            <form className='form'>
                <div className="field">
                    <div className="fas fa-envelope"><FontAwesomeIcon icon={faUser} /></div>
                    <input type="text" name='name' placeholder="Enter Your Name" value={data.name} onChange={handleChange} />
                </div>
                <div className="field">
                    <div className="fas fa-lock"><FontAwesomeIcon icon={faEnvelope} /></div>
                    <input type="email" name='email' placeholder="Email" value={data.email} onChange={handleChange} />
                </div>
                <div className="field">
                    <div className="fas fa-lock"><FontAwesomeIcon icon={faLock} /></div>
                    <input type="password" name='password' placeholder="Password" value={data.password} onChange={handleChange} />
                </div>
                <button onClick={handleRegister}>Register</button>
                <div className="link">
                    Already Registered? <a href="#">Login now</a>
                </div>
            </form>
        </div>
    );
}
