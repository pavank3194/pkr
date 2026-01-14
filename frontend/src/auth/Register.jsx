import React, {useState} from "react";
import { Link } from "react-router-dom";

import Input from "../common/Input";

const Register = () => {
    const [state, setState] = useState(1);

    if(state === 3){
        return (
            <div className="registeration-page">
                <div className="registeration-box">
                    <div className="logo">
                        <img src="./logo.png" alt="PKR" />
                        <h2>Registration Successful!</h2>
                        <p className="success-message">Your account has been created successfully</p>
                    </div>
                    <div className="success-icon">
                        <p style={{fontSize: '48px', textAlign: 'center', margin:'0'}}>✓</p>
                    </div>
                    <div style={{textAlign: 'center', marginTop: '20px'}}>
                        <p>
                            Welcome to PKR! You can now login to your account. 
                        </p>
                            <span>PKR-ID : PKR-696969-6969</span>
                    </div>
                    <Link to="/login" style={{textDecoration: 'none'}}>
                        <button className="button" style={{width: '100%', marginTop: '20px'}}>Go to Login</button>
                    </Link>
                </div>
            </div>
        );
    }
    if(state === 2){
        return (
            <div className="registeration-page"> 
                <div className="registeration-box">
                    <div className="logo">
                        <img src="./logo.png" alt="PKR" />
                        <h2>Verify Email</h2>
                        <p className="otp-description">We've sent a verification code to your <br /><span>email address</span></p>
                    </div>
                    <div>
                        <Input 
                            type="text" 
                            placeholder="Enter 6-digit code" 
                            maxLength={6}
                            className="input-otp"
                        />
                    </div>
                    <button className="button" onClick={() => setState(3)}>click me for page 3</button>
                    <p className="login-link"><Link to="/login">Din't receive OTP? Resend</Link></p>
                    <button style={{border:'none', backgroundColor:'white', cursor:'pointer', padding:'0'}} onClick={() => setState(1)}>&larr; Back to registration form</button>
                </div>
            </div>
        );
    }

  return (
    <div className="registeration-page"> 
        <div className="registeration-box">
            <div className="logo">
                <img src="./logo.png" alt="PKR" />
                <h2>Create Account</h2>
                <p>Join PKR to manage your rent</p>
            </div>
            <div className="registration-form">
                <Input type="text" label="Full Name" placeholder="Full Name" />
                <Input type="text" label="Phone Number" placeholder="10-digit mobile number" />
                <Input type="email" label="Email Address" placeholder="Email Address" />
                <Input type="password" label="Password" placeholder="Password" />
            </div>
            <div className="register-as">
                <label>Register As</label>
                <div className="radio-buttons">
                    <input type="radio" name="Tenant" id="tenant" />
                    <label htmlFor="tenant">Tenant</label>
                    <input type="radio" name="Owner" id="owner" />
                    <label htmlFor="owner">Owner</label>
                </div>
            </div>
            <button className="button" onClick={(e) => {
                setState(2)
                }}>click me for page 2
            </button>
            <p className="login-link">
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    </div>
  );
}

export default Register;