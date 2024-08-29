import React, { useState } from 'react';
import { Button, Navbar, Table, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from '../assets/man.png';
import logo1 from "../assets/tooth.png";
import logout from "../assets/logout.png";
import user1D from "../assets/user_1.png";
import user2 from "../assets/user_2.png";

function MyComponent() {
    const [formData, setFormData] = useState({
        firstName: 'Vihansi',
        lastName: 'Perera',
        gender: 'Female',
        birthday: '2001-03-12',
        email: 'vihansi123@gmail.com',
        contactNumber: '0745698745',
        nic: '200145697894465696',
        address: 'Kalubowia',
        stI: '5555',
        wordNo: '123',
        password: '********************',
        designation: 'Consultant',
        slots: '15'
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

            <header className="flex text-black ml-5 justify-start text-2xl font-bold pt-5 px-5 mb-4">STAFF PROFILE- DOCTOR</header>
            <div style={{ borderRadius: '25px' }} className='bg-blue-100 px-5 mx-10 py-10  mt-5'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-end">
                    <div className="  lg:col-span-1 md:justify-end  md:pl-5  rounded-lg">
                        <img style={{ borderRadius: '25px' }} className="bg-white px-1 " src={logo} alt="" />
                    </div>
                    <div style={{ borderRadius: '25px' }} className=" lg:col-span-3 bg-white p-4 rounded-lg mb-5 lg:mb-10 mx-5">
                        <div className="flex justify-between gap-4" >
                            <h3 className=' flex text-xl text-slate-800 font-bold justify-start mb-4'>Doctor Information</h3>
                            <div className=' flex justify-end md:inline gap-5'>
                                <img className='hidden md:inline px-2' src={user1D} alt="" />
                                <img className='hidden md:inline px-1' src={user2} alt="" />
                            </div>

                        </div>


                        <div className='grid grid-cols-1 lg:grid-cols-2'>
                            <div className='grid col-span-1'>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-sm lg:text-xl italic bg-white">
                                        <tbody>
                                            <tr>
                                                <td className="px-1 py-1 whitespace-nowrap font-medium text-gray-700">
                                                    <strong>First Name</strong>
                                                </td>
                                                <td className=" whitespace-nowrap  text-gray-500">:</td>
                                                <td className="lg:pl-4  whitespace-nowrap  text-gray-500">{formData.firstName}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-1 py-1  whitespace-nowrap  font-medium text-gray-700">
                                                    <strong>Last Name</strong>
                                                </td>
                                                <td className=" whitespace-nowrap  text-gray-500">:</td>
                                                <td className="lg:pl-4  whitespace-nowrap  text-gray-500">{formData.lastName}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-1 py-1 whitespace-nowrap font-medium text-gray-700">
                                                    <strong>Address:</strong>
                                                </td>
                                                <td className=" whitespace-nowrap  text-gray-500">:</td>
                                                <td className="lg:pl-4  whitespace-nowrap text-gray-500">{formData.address}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-1 py-1 whitespace-nowrap font-medium text-gray-700">
                                                    <strong>Contact Number</strong>
                                                </td>
                                                <td className=" whitespace-nowrap text-gray-500">:</td>
                                                <td className="lg:pl-4  whitespace-nowrap text-gray-500">{formData.contactNumber}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-1 py-1 whitespace-nowrap  font-medium text-gray-700">
                                                    <strong>Gender</strong>
                                                </td>
                                                <td className=" whitespace-nowrap text-gray-500">:</td>
                                                <td className="lg:pl-4  whitespace-nowrap text-gray-500">{formData.gender}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-1 py-1 whitespace-nowrap  font-medium text-gray-700">
                                                    <strong>Word No</strong>
                                                </td>
                                                <td className=" whitespace-nowrap text-gray-500">:</td>
                                                <td className=" lg:pl-4  whitespace-nowrap text-gray-500">{formData.wordNo}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-1 py-10 whitespace-nowrap  font-medium text-gray-700">
                                                    <strong>Password</strong>
                                                </td>
                                                <td className=" whitespace-nowrap py-10 text-gray-500">:</td>
                                                <td className=" whitespace-nowrap lg:pl-4 py-10 text-gray-500">{formData.password}</td>
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
                                                    <strong>Staff  ID</strong>
                                                </td>
                                                <td className=" whitespace-nowrap  text-gray-500">:</td>
                                                <td className="lg:pl-4  whitespace-nowrap  text-gray-500">{formData.stI}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-1 py-1  whitespace-nowrap  font-medium text-gray-700">
                                                    <strong>NIC</strong>
                                                </td>
                                                <td className=" whitespace-nowrap  text-gray-500">:</td>
                                                <td className="lg:pl-4  whitespace-nowrap  text-gray-500">{formData.nic}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-1 py-1 whitespace-nowrap  font-medium text-gray-700">
                                                    <strong>Email</strong>
                                                </td>
                                                <td className=" whitespace-nowrap text-gray-500">:</td>
                                                <td className="lg:pl-4  whitespace-nowrap text-gray-500">{formData.email}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-1 py-1 whitespace-nowrap font-medium text-gray-700">
                                                    <strong>Birthday</strong>
                                                </td>
                                                <td className=" whitespace-nowrap text-gray-500">:</td>
                                                <td className="lg:pl-4  whitespace-nowrap text-gray-500">{formData.birthday}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-1 py-1 whitespace-nowrap font-medium text-gray-700">
                                                    <strong>Designation</strong>
                                                </td>
                                                <td className=" whitespace-nowrap text-gray-500">:</td>
                                                <td className="lg:pl-4  whitespace-nowrap text-gray-500">{formData.designation}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-1 py-1 whitespace-nowrap font-medium text-gray-700">
                                                    <strong>Slots</strong>
                                                </td>
                                                <td className=" whitespace-nowrap text-gray-500">:</td>
                                                <td className="lg:pl-4  whitespace-nowrap text-gray-500">{formData.slots}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                       


                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyComponent;
