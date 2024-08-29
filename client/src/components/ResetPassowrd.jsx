import React, { useState } from 'react';
import PasswordResetWindow from '../components/PasswordResetWindow '
import { Alert, Button, TextInput, Spinner } from 'flowbite-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/tooth.png';

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPasswordResetOpen, setIsPasswordResetOpen] = useState(false); // State to control the modal window

  const handleChange = (e) => {
    // Handle form input changes here
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement your login logic here
  };

  const handleOpenPasswordReset = () => {
    setIsPasswordResetOpen(true); // Open the modal window
  };

  const handleClosePasswordReset = () => {
    setIsPasswordResetOpen(false); // Close the modal window
  };

  return (
    <div className='min-h-screen min-w-screen pt-20 bg-white '>
      <div className='grid grid-cols-1 md:grid-cols-2 '>
        <div className='grid justify-center col-span-1 md:py-20 md:col-span-1'>
          <div className='px-10 lg:px-20'><img src={Logo} alt="" /></div>
        </div>
        <div className='grid w-full px-5 md:px-10 lg:px-10 col-span-1 md:border-l-4 md:py-20  md:col-span-1'>
        <header style={{ fontSize: '40px', fontWeight: '700', fontStyle: 'italic', }} className="font-open-sans text-slate-800 text-center text-4x text-weight-700">RESET !</header>
        <form className="lg:px-20" onSubmit={handleSubmit}>
              {successMessage &&
                <Alert className="mt-4" color="success">
                  {successMessage}
                </Alert>
              }
              <div className="">
                <div style={{borderRadius:'15px'}} className="w-full  mt-8">
                  <TextInput style={{borderRadius:'15px'}} id="email" name="email" type="email" placeholder="New Password" onChange={handleChange} />
                </div>
                <div className="w-full mt-8">
                  <TextInput style={{borderRadius:'15px'}} id="password" name="password" type="password" placeholder="Confirm New Password" onChange={handleChange} />
                </div>
             
                <div className='flex justify-center'>
                <Button  className="w-1/2 flex mt-10 justify-center" color="blue" type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <Spinner
                        size="sm"
                        aria-label="Extra large spinner example"
                      />
                      <span className="pl-3">Loading...</span>
                    </>
                  ) : 'RESET'}
                </Button>
                </div>
              </div>
            </form>
        </div>
      </div>

      
     

      {/* Render the PasswordResetWindow component only when isPasswordResetOpen is true */}
      {isPasswordResetOpen && <PasswordResetWindow onClose={handleClosePasswordReset} />}
    </div>
  );
};

export default SignIn;
