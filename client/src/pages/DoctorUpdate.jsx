import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button, TextInput, Label, Textarea, Select, Datepicker, } from "flowbite-react";
import Delete from '../assets/delete.png';
import icon1 from '../assets/c.png';

function EmployeeEnrollForm({ onClose }) {
    const [formData, setFormData] = useState({
        staffrole: 'doctor',
        firstName: '564664',
        lastName: 'harsha',
        gender: 'M',
        birthday: '1998-05-02',
        email: 'harshafh@gmail.com',
        contactNumber: '078-8647221455',
        nic: '5645665465465d658',
        address: 'homagamaa',
        wardNumber: '12',
        designation: 'nugegoda',
        setdefaultpassowrd: '**********',
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // Submit the form data to your backend here
        onClose(); // Close the modal
    };
    return (
        <Modal
        isOpen={true} // Always open
        onRequestClose={onClose}
        ariaHideApp={false} // Disable aria-hide-app warning in development
        style={{
            overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
            },
            content: {
                maxWidth: '80%',
                margin: 'auto',
                backgroundColor: 'white', // Light blue background color
              
                marginTop:'1rem',
               padding: '0rem',
            },
        }}
        >
            <div>
                <div style={{ width: '80%' ,marginLeft:'-2px',marginTop:'-1px' }} className='flex fixed z-50 h-12 bg-indigo-900 text-white justify-between'>
                    <div className='justify-start ml-2 pt-2 text:sm md:text-xl' style={{  fontWeight: '600', fontStyle: 'italic', }}>
                        Doctor Update 
                    </div>
                    <div className='justify-end mr-2' style={{ fontSize: '23px', fontWeight: '600', fontStyle: 'italic', }}>
                        <img className='mt-2' src={Delete} alt="" onClick={onClose} />
                    </div>
                </div>
                <div className='pt-10'>
                    <div style={{ borderRadius: '25px' }} className='bg-blue-100 mx-8 mt-10 px-4 '>
                        <h2 className="flex justify-start text-xl px-2 md:px-5 lg:px-10 pt-5 text-slate-800 mt-5 mb-4">Update your Staff <span className='font-bold px-1'>{formData.staffrole}</span> Member here</h2>
                        <form onSubmit={handleSubmit}>
                    <div className="px-5 pb-5 lg:px-10 grid grid-cols-3  gap-4">

                        <Select
                            id="gender"
                            name="gender"
                            onChange={handleChange}
                            value={formData.staffrole}
                            required
                            style={{ borderRadius: '15px' ,color:'slategrey'}}


                        >
                            <option value="">Staff Rolle</option>
                            <option value="male">Doctor</option>
                            <option value="female">Employee</option>
                            <option value="other">Other</option>

                        </Select>
                    </div>
                    <div className="px-5 lg:px-10 grid grid-cols-3 gap-4">
                        <div>

                            <TextInput
                                id="firstName"
                                name="firstName"
                                placeholder='first name'
                                type="text"
                                onChange={handleChange}
                                value={formData.firstName}
                                required
                                style={{ borderRadius: '15px' }}
                            />
                        </div>
                        <div>

                            <TextInput
                                id="lastName"
                                name="lastName"
                                placeholder=' last name'
                                type="text"
                                onChange={handleChange}
                                value={formData.lastName}
                                required
                                style={{ borderRadius: '15px' }}
                            />
                        </div>
                        <div>

                            <TextInput
                                id="nic"
                                name="nic"
                                placeholder=' NIC number'
                                type="text"
                                onChange={handleChange}
                                value={formData.nic}
                                required
                                style={{ borderRadius: '15px' }}
                            />
                        </div>
                    </div>
                    <div className="px-5 mt-5 pb-5 lg:px-10 grid grid-cols-3  gap-4">
                        <div>

                            <Select
                                id="gender"
                                name="gender"
                                onChange={handleChange}
                                value={formData.gender}
                                required
                                style={{ borderRadius: '15px',color:'slategrey' }}

                            >
                                <option value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </Select>
                        </div>

                        <div >

                            <Datepicker
                                id="birthday"
                                name="birthday"
                                placeholder=' birthday'
                                type="text"
                                onChange={handleChange}
                                value={formData.birthday}
                                required
                                style={{ borderRadius: '15px' }}

                            />
                        </div>
                    </div>
                    <div className="px-5 lg:px-10 grid grid-cols-3 gap-4">
                        <div>

                            <TextInput
                                id="address"
                                name="address"
                                placeholder=' address'
                                type="text"
                                onChange={handleChange}
                                value={formData.address}
                                required
                                style={{ borderRadius: '15px' }}
                            />
                        </div>
                        <div>

                            <TextInput
                                id="contactNumber"
                                name="contactNumber"
                                placeholder=' contact number'
                                type="tel"
                                onChange={handleChange}
                                value={formData.contactNumber}
                                required
                                style={{ borderRadius: '15px' }}
                            />
                        </div>
                        <div>

                            <TextInput
                                id="email"
                                name="email"
                                placeholder=' email'
                                type="email"
                                onChange={handleChange}
                                value={formData.email}
                                required
                                style={{ borderRadius: '15px' }}
                            />
                        </div>
                    </div>
                    <div className="px-5 mt-5 pb-5 lg:px-10 grid grid-cols-3  gap-4">




                        <div>

                            <div>

                                <Select
                                    id="gender"
                                    name="gender"
                                    onChange={handleChange}
                                    value={formData.gender}
                                    required
                                    style={{ borderRadius: '15px', color: 'slategrey' }}
                                    className='text-slate-400'

                                >
                                    <option value="">Ward Number</option>
                                    <option value="male">1</option>
                                    <option value="female">2</option>
                                    <option value="other">3</option>
                                </Select>
                            </div>
                        </div>
                        <div>

                            <Select
                                id="slot"
                                name="slot"
                                placeholder='Slots Per day'
                                type="number"
                                onChange={handleChange}
                                value={formData.slot}
                                required
                                style={{ borderRadius: '15px',color:'slategrey' }}
                            >
                                <option value="">Slots Per day</option>
                                </Select>
                        </div>
                        <div >

                            <TextInput
                                id="role"
                                name="role"
                                placeholder=' Designation'
                                type="text"
                                onChange={handleChange}
                                value={formData.designation}
                                required
                                style={{ borderRadius: '15px' }}
                            />
                        </div>

                    </div>
                    <div className="px-5  pb-5 lg:px-10 grid grid-cols-3  gap-4">
                        <div>

                            <TextInput
                                id="defaultpassword"
                                name="defaultpassword"
                                placeholder=' default password'
                                type="text"
                                onChange={handleChange}
                                value={formData.setdefaultpassowrd}
                                required
                                style={{ borderRadius: '15px' }}
                            />
                        </div>




                    </div>

                    <div className='flex mx-4 mt-4 mb-10 justify-end px-5 pb-10'>
                    <button className='text-white px-5 rounded bg-indigo-600 py-2' type="submit">ENROLL</button>
                    </div>
                </form>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default EmployeeEnrollForm;
