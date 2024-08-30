import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signInFailure, signInStart, signInSuccess } from "../redux/user/userSlice";
import Oauth from '../components/OAuth.jsx';
import Logo from '../assets/tooth.png';

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, successMessage } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      dispatch(signInFailure('Please fill in all fields'));
      return;
    }
    if (formData.email === formData.password) {
      dispatch(signInFailure('Email and password cannot be the same'));
      return;
    }

    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok){
        dispatch(signInSuccess(data));
        navigate('/');
    }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className='min-h-screen min-w-screen pt-20 bg-white '>
      <div className='grid grid-cols-1 md:grid-cols-2 '>
        <div className='grid justify-center col-span-1 md:py-20 md:col-span-1'>
          <div className='px-10 lg:px-20'><img src={Logo} alt="" /></div>
        </div>
        <div className='grid w-full px-5 md:px-10 lg:px-10 col-span-1 md:border-l-4 md:py-20  md:col-span-1'>
        <header style={{ fontSize: '40px', fontWeight: '700', fontStyle: 'italic', }} className="font-open-sans text-slate-800 text-center text-4x text-weight-700">LOGIN</header>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {successMessage &&
              <Alert className="mt-4" color="success">
                {successMessage}
              </Alert>
            }
            <div className="">
              <div className="w-full mt-1">
                <Label value="Your Email" />
                <TextInput id="email" name="email" type="email" placeholder="name@example.com" onChange={handleChange} />
              </div>
              <div className="w-full mt-1">
                <Label value="Your Password" />
                <TextInput id="password" name="password" type="password" placeholder="*******************" onChange={handleChange} />
              </div>
              <Button className="w-full mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."    type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Spinner
                      size="sm"
                      aria-label="Extra large spinner example"
                    />
                    <span className="pl-3">Loading...</span>
                  </>
                ) : 'Sign In'}
              </Button>
            </div>
            <Oauth/>
          </form>
        </div>
      </div>

      
     

      {/* Render the PasswordResetWindow component only when isPasswordResetOpen is true */}
      {isPasswordResetOpen && <PasswordResetWindow onClose={handleClosePasswordReset} />}
    </div>
  );
};

export default SignIn;
