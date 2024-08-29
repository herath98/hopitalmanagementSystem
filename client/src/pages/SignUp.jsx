import React, { useState } from 'react';
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import Logo from '../assets/tooth.png';

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [errorMassage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loarding, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasMoreThanTwoNumbers = /\d{3,}/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return hasUppercase && hasMoreThanTwoNumbers && hasSymbol;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any of the fields are empty
    if (!formData.username || !formData.email || !formData.password) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    // Check if email and password are the same
    if (formData.email === formData.password) {
      setErrorMessage('Email and password cannot be the same');
      return;
    }

    // Validate the password
    if (!validatePassword(formData.password)) {
      setErrorMessage('Password must contain at least one uppercase letter, more than two numbers, and at least one symbol.');
      return;
    }

    try {
      setLoading(true);
      setErrorMessage(null);

      // Send a POST request to the signup API
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      // Check if the signup was successful
      if (data.success === false) {
        return setErrorMessage(data.message);
      }

      setLoading(false);

      // Redirect to login page if signup was successful
      if (res.ok) {
        setSuccessMessage('Signup successful! Redirecting to login page...');
        setTimeout(() => {
          setSuccessMessage(null);
         
        }, 1000);
        return;
      }
    } catch (error) {
      console.error('Error:', error.message);
      setLoading(false);
    }
  };
  return (
    <div className='min-h-screen min-w-screen pt-20 bg-white '>
      <div className='grid grid-cols-1 md:grid-cols-2 '>
        <div className='grid justify-center col-span-1 md:py-20 md:col-span-1'>
          <div className='px-10 lg:px-20'><img src={Logo} alt="" /></div>
        </div>
        <div className='grid w-full px-5 md:px-10 lg:px-10 col-span-1 md:border-l-4 md:py-20  md:col-span-1'>
        <header style={{ fontSize: '40px', fontWeight: '700', fontStyle: 'italic', }} className="font-open-sans text-slate-800 text-center text-4x text-weight-700">SIGNUP</header>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="">
              <div className="w-full">
                <Label value="Your Username" />
                <TextInput
                  id="username"
                  name="username"
                  type="text"
                  placeholder="username"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full mt-1">
                <Label value="Your Email" />
                <TextInput id="email" name="email" type="email" placeholder="name@example.com" onChange={handleChange} />
              </div>
              <div className="w-full mt-1">
                <Label value="Your Password" />
                <TextInput id="password" name="password" type="password" placeholder="password" onChange={handleChange} />
              </div>
              <Button className="w-full mt-4" gradientDuoTone="purpleToPink" type="submit">
                Sign Up
              </Button>
            </div>
          </form>
          <div>
            <p className="text-sm mt-4">Already have an account?
              <Link to="/" className="text-blue-500">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>

      
     

     
    </div>
  );
};

export default SignUp;
