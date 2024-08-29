import React, { useState, useEffect, useRef } from 'react';
import { TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';


const PasswordResetWindow = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission of email
    console.log('Email submitted:', email);
    // You can add further logic here, like sending a reset password link.
    // Reset the email field
    setEmail('');
    onClose(); 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-blue-100 rounded-md shadow-md w-96">
        <div className='w-full h-12 bg-indigo-900' ></div>
        <div className='p-8 mt-5 mb-2'>
          <h2 style={{fontSize:'35px',fontWeight:'700',fontStyle:'italic',}} className="text-xl  lg:text-2xl text-black font-bold mb-10">RESET PASSWORD</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <TextInput
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-center mb-10">
             <Link  to='/resetPassword'> <button  type="submit" className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-600">Submit</button></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetWindow;
