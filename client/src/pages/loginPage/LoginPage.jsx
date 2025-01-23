import React, { useEffect, useState } from 'react'
import {MdLogin} from "react-icons/md"
import {FaUser} from "react-icons/fa6"
import {AiFillEye} from "react-icons/ai"
import {AiFillEyeInvisible} from "react-icons/ai"
import {BsArrowRightShort} from "react-icons/bs"
import {FcGoogle} from "react-icons/fc"
import {BiLogoFacebook} from "react-icons/bi"
import { FaXTwitter } from "react-icons/fa6"
// import { useDispatch,useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./LoginPage.css"
// import { loginRoute } from '../../api/ApiRoutes'
// import { login, setLoading, logout } from '../../store/UserSlice'
import { toast,Toaster } from 'react-hot-toast'
import { useAuth } from '../../AuthContext.jsx'


const LoginPage = () => {
//   const dispatch = useDispatch();
//   const {isAuthenticated} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [visible,setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {login, isAuthenticated} = useAuth();

  useEffect(()=> {
    console.log(isAuthenticated);
  },[]);

  const seePassword = () => {
    setVisible(!visible);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // setLoading(true);

    try {
      const response = await login({email,password});
      toast.success(response);
      console.log(response);
      navigate("/");
      // dispatch(login({user: data}));
    } catch (error) {
      toast.error(error.message);
      // dispatch(logout());
    }
    
  };

//   if(isAuthenticated) navigate("/creator/dashboard");

  const directToSignup = () => {
    navigate("/register");
  }

  return (
    <section className="loginSection">
      <Toaster/>
      <form className="lform" onSubmit={submitHandler}>
        <div className="lform-intro">
            <MdLogin className='lform-icon'/>
            <h1 className='lform-title'>Welcome!</h1>
            <p className="lform-subtitle">Sign in to your account</p>
        </div>
        <div className="lform-fields">
          <div className="lform-field-div">
            <label className="lform-fieldname" htmlFor='email'>Email</label>
            <div className="lform-field-input-container">
              <input className="lform-field-input" type='email' id='email' value={email} required onChange={(e) => setEmail(e.target.value)}/>
              <FaUser className="lform-fieldIcon"/>
            </div>
          </div>
          <div className="lform-field-div">
            <label className="lform-fieldname" htmlFor='password'>Password</label>
            <div className="lform-field-input-container">
              <input className="lform-field-input" type={visible ? 'text' : 'password'} id='password' value={password} required onChange={(e) => setPassword(e.target.value)}/>
              {visible ? <AiFillEye className="lform-fieldIcon eye" onClick={seePassword} aria-label='hide Passsword' tabIndex={0}/> : <AiFillEyeInvisible className="lform-fieldIcon eye" onClick={seePassword} aria-label='Seek Password' tabIndex={0}/>}
            </div>
          </div>
        </div>
        <div className="lform-authAction">
          <p className="lform-authAction-signup" tabIndex={0} onClick={directToSignup}>Create a New Account</p>
          <p className="lform-authAction-forgot" tabIndex={0}>forgot password?</p>
        </div>
        <div className="lform-buttons">
          <button className="lform-login-button">Login<BsArrowRightShort/></button>
        </div>
        {/* <div className="lform-line-text-line">
          <div className="or-text">or</div>
        </div>
        <div className="lform-thirdPartyLogin">
          <FcGoogle className='gg ic' tabIndex={0}/>
          <BiLogoFacebook className='fb ic' tabIndex={0}/>
          <FaXTwitter className='twt ic' tabIndex={0}/>
        </div> */}
      </form>
    </section>
  )
}

export default LoginPage