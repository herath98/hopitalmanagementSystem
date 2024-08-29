import React, { useState } from 'react';
import { Button, Navbar, Table, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import logo1 from "../assets/tooth.png";
import logout from "../assets/logout.png";
import user1D from "../assets/add.png";
import user2 from "../assets/dapp.png";
import PatientEnrollmentForm2 from './Prescription';

function MyComponent() {
    const [isUpdate, setIsUpdate] = useState(false);
  

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Implement your form submission logic here
    };

    const handleOpenPasswordReset2 = () => {
        setIsUpdate(true); // Open the modal window
    };

    const handleClosePasswordReset2 = () => {
        setIsUpdate(false); // Close the modal window
    };

   
    const [formData, setFormData] = useState({
        channelId: '88794',
        firstName: 'Vihansi',
        lastName: 'Perera',
        patientId: 'P12345',
        gender: 'Female',
        birthday: '2001-03-12',
        email: 'vihansi123@gmail.com',
        contactNumber: '0745698745',
        nic: '200145697894465696',
        address: 'Kalubowia',
        stI: '5555',
        wordNo: '123',
        doctName: 'Dr. John Doe',
        stats: 'In',
        date: '2022-01-01',
        time: '09:00:00',
        oparatioId: 'OP12345',
        operator: 'John Doe',

    });

    return (
        <div className="bg-white min-h-screen">
        <div className="bg-indigo-900">
            <Navbar className="bg-indigo-900" fluid rounded>
                <Navbar.Brand>
                    <img src={logo1} className="mr-3 h-6 sm:h-9" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-between">
                    <Link to="#" className="navbar-item lg:px-2 lg:text-xl text-md text-white" activeClassName="active">
                        PATIENTS
                    </Link>
                    <Link to="#" className="navbar-item lg:px-2 lg:text-xl text-md text-white" activeClassName="active">
                        DOCTORS
                    </Link>
                    <Link to="#" className="navbar-item lg:px-2 lg:text-xl text-md text-white" activeClassName="active">
                        STAFF
                    </Link>
                    <Link to="#" className="navbar-item lg:px-2 lg:text-xl text-md text-white" activeClassName="active">
                        APPOINTMENTS
                    </Link>
                    <Link to="#" className="navbar-item pl-2" activeClassName="active">
                        <img src={logout} alt="logout" />
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        </div>

        <header className="flex text-black ml-5 justify-start text-2xl font-bold pt-5 px-5 mb-4">APPOINTMENT</header>
        <div style={{ borderRadius: '25px' }} className='bg-blue-100 px-5 mx-10 py-10  mt-5'>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-end">
                    <div className=" bg-white ml-5 mb-10 grid grid-cols-1 col-span-1 justify-items-between md:justify-end   rounded-lg">
                        <h3 className=' flex pl-5 justify-start pt-5 '>Recent</h3>
                        
                        <div className="flex px-5 justify-between gap-4" >
                            <h3 className=' flex justify-start '>Apoiment Details</h3>
                            <div className=' flex justify-end md:inline gap-5'>
                                <img className='hidden md:inline px-2' src={user2} alt="" />

                            </div>

                        </div>
                        <div className="flex px-5 justify-between gap-4" >
                            <h3 className=' flex justify-start '>Apoiment Details</h3>
                            <div className=' flex justify-end md:inline gap-5'>
                                <img className='hidden md:inline px-2' src={user2} alt="" />

                            </div>

                        </div>
                        <div className="flex px-5 justify-between gap-4" >
                            <h3 className=' flex justify-start '>Apoiment Details</h3>
                            <div className=' flex justify-end md:inline gap-5'>
                                <img className='hidden md:inline px-2' src={user2} alt="" />

                            </div>

                        </div>
                        <div className="flex px-5 justify-between gap-4" >
                            <h3 className=' flex justify-start '>Apoiment Details</h3>
                            <div className=' flex justify-end md:inline gap-5'>
                                <img className='hidden md:inline px-2' src={user2} alt="" />

                            </div>

                        </div>
                       
                  
                      
                     
                    </div>
                    <div className=" col-span-3  bg-white p-4 rounded-lg mb-5 lg:mb-10 mx-5">

                        <div className="flex justify-between gap-4" >
                            <h3 className=' flex justify-start text-xl font-bold text-slate-900 mb-4'>Apoiment Information</h3>
                            <div  className=' flex justify-end md:inline gap-5'>
                                <img onClick={handleOpenPasswordReset2} className='hidden md:inline px-2' src={user1D} alt="" />

                            </div>

                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2'>
                            <div className='grid col-span-1'>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-sm lg:text-xl italic bg-white">
                                        <tbody>
                                            <tr>
                                                <td className="px-1 py-1 whitespace-nowrap font-medium text-gray-700">
                                                    <strong>Channel ID</strong>
                                                </td>
                                                <td className=" whitespace-nowrap  text-gray-500">:</td>
                                                <td className=" whitespace-nowrap  text-gray-500">{formData.channelId}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-1 py-1 whitespace-nowrap font-medium text-gray-700">
                                                    <strong>Patient Name</strong>
                                                </td>
                                                <td className=" whitespace-nowrap  text-gray-500">:</td>
                                                <td className=" whitespace-nowrap  text-gray-500">{formData.firstName}</td>
                                            </tr>

                                            <tr>
                                                <td className="px-1 py-1 whitespace-nowrap font-medium text-gray-700">
                                                    <strong>Address:</strong>
                                                </td>
                                                <td className=" whitespace-nowrap  text-gray-500">:</td>
                                                <td className=" whitespace-nowrap text-gray-500">{formData.address}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-1 py-1 pt-5 whitespace-nowrap font-medium text-gray-700">
                                                    <strong>Doctor Name</strong>
                                                </td>
                                                <td className=" whitespace-nowrap text-gray-500">:</td>
                                                <td className=" whitespace-nowrap text-gray-500">{formData.contactNumber}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-1 py-1 whitespace-nowrap  font-medium text-gray-700">
                                                    <strong>Status</strong>
                                                </td>
                                                <td className=" whitespace-nowrap text-gray-500">:</td>
                                                <td className=" whitespace-nowrap text-gray-500">{formData.stats}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-1 py-1 pt-5 whitespace-nowrap  font-medium text-gray-700">
                                                    <strong>Operator</strong>
                                                </td>
                                                <td className=" whitespace-nowrap text-gray-500">:</td>
                                                <td className=" whitespace-nowrap text-gray-500">{formData.operator}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-1 py-1 whitespace-nowrap  font-medium text-gray-700">
                                                    <strong>Date</strong>
                                                </td>
                                                <td className=" whitespace-nowrap text-gray-500">:</td>
                                                <td className=" whitespace-nowrap text-gray-500">{formData.date}</td>
                                            </tr>


                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <div className='grid col-span-1'>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-sm lg:text-xl italic bg-white">
                                        <tbody>
                                            <tr>
                                                <td className="px-1 py-1 whitespace-nowrap font-medium text-gray-700">
                                                    <strong>Patient  ID</strong>
                                                </td>
                                                <td className=" whitespace-nowrap  text-gray-500">:</td>
                                                <td className=" whitespace-nowrap  text-gray-500">{formData.patientId}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-1 py-1  whitespace-nowrap  font-medium text-gray-700">
                                                    <strong>Age</strong>
                                                </td>
                                                <td className=" whitespace-nowrap  text-gray-500">:</td>
                                                <td className="whitespace-nowrap  text-gray-500">{formData.age}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-1 py-1 whitespace-nowrap  font-medium text-gray-700">
                                                    <strong>Contact No</strong>
                                                </td>
                                                <td className=" whitespace-nowrap text-gray-500">:</td>
                                                <td className=" whitespace-nowrap text-gray-500">{formData.contactNumber}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-1 py-1 pt-5 whitespace-nowrap font-medium text-gray-700">
                                                    <strong>Word No</strong>
                                                </td>
                                                <td className=" whitespace-nowrap text-gray-500">:</td>
                                                <td className=" whitespace-nowrap text-gray-500">{formData.wordNo}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-1 py-1 whitespace-nowrap font-medium text-gray-700">
                                                    <strong>Slot No</strong>
                                                </td>
                                                <td className=" whitespace-nowrap text-gray-500">:</td>
                                                <td className=" whitespace-nowrap text-gray-500">{formData.stI}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-1 py-1 pt-5 whitespace-nowrap font-medium text-gray-700">
                                                    <strong>Operator ID</strong>
                                                </td>
                                                <td className=" whitespace-nowrap text-gray-500">:</td>
                                                <td className=" whitespace-nowrap text-gray-500">{formData.oparatioId}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-1 py-1 whitespace-nowrap font-medium text-gray-700">
                                                    <strong>Time</strong>
                                                </td>
                                                <td className=" whitespace-nowrap text-gray-500">:</td>
                                                <td className=" whitespace-nowrap text-gray-500">{formData.time}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
           
            {isUpdate && <PatientEnrollmentForm2 onClose={handleClosePasswordReset2} />}
        </div>
    );
}

export default MyComponent;
