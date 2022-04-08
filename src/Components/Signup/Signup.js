import React from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogo from "../../Assets/Image/google.svg";
import { auth } from "../../firebase.init";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// const auth = getAuth(app);

const Signup = () => {
  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();
  // google popup function  
  const handleGoogleAuth = () => {
    signInWithPopup(auth, googleProvider)
      .then(res => {
        const user = res.user
        navigate('/')
      })
      .catch(error => {
        console.error(error)
      })
  }

  const handleSignup = (event) => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    console.log(email)
    console.log(password)
  }
  return (
    <div className='auth-form-container '>
      <div className='auth-form'>
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup}>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <div className='input-wrapper'>
              <input type='email' name='email' id='email' />
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <div className='input-wrapper'>
              <input type='password' name='password' id='password' />
            </div>
          </div>
          <div className='input-field'>
            <label htmlFor='confirm-password'>Confirm Password</label>
            <div className='input-wrapper'>
              <input
                type='password'
                name='confirmPassword'
                id='confirm-password'
              />
            </div>
          </div>
          <button type='submit' className='auth-form-submit'>
            Sign Up
          </button>
        </form>
        <p className='redirect'>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
        <div className='horizontal-divider'>
          <div className='line-left' />
          <p>or</p>
          <div className='line-right' />
        </div>
        <div className='input-wrapper'>
          <button onClick={handleGoogleAuth} className='google-auth'>
            <img src={GoogleLogo} alt='' />
            <p> Continue with Google </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
