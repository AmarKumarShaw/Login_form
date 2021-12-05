import React,{useState,useEffect} from 'react';
import "./Login.css";


const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState("");
    const [showUp,setShowUp] = useState("password");

    const Enable = () => {
        if(email && password){
            return false
        }
        else{
            return true
        }        
    }

    const Eye = () => {
        if(showUp == "password"){
            return setShowUp("text")
        }
        if(showUp == "text"){
            return setShowUp("password")
        }
    }
    console.log(showUp)
    return (
        <div className="login-container">
            <div className="login">
                <form className="ui form">
                    <h3 className="ui dividing header">Login Form</h3>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="first-name" placeholder="First Name" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="field">
                        <label>Password</label>
                            <input id="password_input" type={showUp} name="last-name" placeholder="Last Name" value={password} onChange={(e) => setPassword(e.target.value)}  />
                            <i className="fas fa-eye eye-icon" onClick={Eye} ></i> 
                    </div>
                    <button className="ui primary button" disabled={Enable()} type="submit">Login</button>
                    <div className="forgot_register">
                        <div className="two fields">
                            <div className="field">
                                <a href=""><h5>Register Now</h5></a>
                            </div>
                            <div className="field"><a href=""><h5>Forgot Password ?</h5></a></div>
                        </div>
                    </div>
                   
                </form>
            </div>
        </div>
    )
}

export default Login
