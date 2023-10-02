import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../Navigation/Navigation.module.css";

import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import { useState } from "react";


const Navigation = () => {
const navigate = useNavigate()


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [IsValidEmail, setIsValidEmail] = useState(true);
  const [activityIndicator, setActivityIndicator] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    }

    if (name === "password") {
      setPassword(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setActivityIndicator((pre)=>!pre);

    setTimeout(() => {
      setActivityIndicator((prev)=>!prev);
      navigate("/dashboard")
    }, 2000);
    

  
    

    setEmail("");
    setPassword("");
  };
  // VALIDATE EMAIL FUNCTION STARTS HERE
  const validateEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  // VALIDATE EMAIL FUNCTION ENDS HERE

  const handleEmailValidation = () => {
    if (email){
      setIsValidEmail(validateEmail(email));
   
    }
  };
  console.log(email, password);

  return (
    <div>
      <NavLink className={styles.logo} to="/">
        <img src="images/logo.png" alt="" />
      </NavLink>
      <div className={styles.container}>
        <div className={styles.imagesDiv}>
          <img src="images/pablo-sign-in 1.png" alt="" />
        </div>

        <div className={styles.forms}>
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>

          {!IsValidEmail ? <div className={styles.erros}>please enter a valid email address</div> : ""}
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="email"
                required
                placeholder="Email"
             onBlur={handleEmailValidation}
                value={email}
                onChange={handleChange}
              />
            </div>

            <div className={styles.passwordiv}>
              <input
                type={showPassword === true ? "text" : "password"}
                className={styles.input2}
                name="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="show"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  
                  {showPassword === false ? "show" : "hide"}
                </span>

            </div>

            <div>
              
            <NavLink className={styles.forgetpass}>Forgot Password</NavLink>
            </div>

            <button className={styles.button} type="submit" value="LOGIN">
            <div className={styles.Spinner}>
            {
          activityIndicator === false ?  "LOGIN"

           : 
         <Spinner animating={activityIndicator} />
            }
            </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
