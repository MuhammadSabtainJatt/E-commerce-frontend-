import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.scss';
import React, { useState } from 'react';

const ModernLoginPage = () => {
    const [isSignIn, setIsSignIn] = useState(false);

    const toggleForm = () => {
        setIsSignIn(!isSignIn);
    };


    
    return (
        <div className="container" id="container">
            <div className={`form-container ${isSignIn ? 'sign-in' : 'sign-up'}`}>
                <form>
                    <h1>{isSignIn ? 'Sign In' : 'Create Account'}</h1>
                    <div className="social-icons">
                        <a href="#" className="icon"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="icon"><i className="fab fa-github"></i></a>
                        <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>{isSignIn ? 'or use your email and password' : 'or use your email for registration'}</span>
                    {!isSignIn && <input type="text" placeholder="Name" />}
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    {!isSignIn && <button>Sign Up</button>}
                    {isSignIn && <a href="#">Forget Your Password?</a>}
                    <button>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className={`toggle-panel toggle-left ${isSignIn ? 'active' : ''}`}>
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all of the site features</p>
                        <button onClick={toggleForm} className="hidden">Sign In</button>
                    </div>
                    <div className={`toggle-panel toggle-right ${!isSignIn ? 'active' : ''}`}>
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to use all of the site features</p>
                        <button onClick={toggleForm} className="hidden">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModernLoginPage;

// function App() {
//   return (
//    <>
//    <h1>
//     Hi!
//    </h1>
//    </>
//   );
// }

// export default App;
