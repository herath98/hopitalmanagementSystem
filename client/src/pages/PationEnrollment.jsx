import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button, TextInput, Label, Textarea, Select,  Alert } from "flowbite-react";
import Delete from '../assets/delete.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function PatientEnrollmentForm({ onClose }) {
    const [formData, setFormData] = useState({});
    const [publishError, setPublishError] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();




    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/appoiment/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            const data = await res.json();
           
            
            if (!res.ok) {
                setPublishError(data.message);
                return;
            }
            if (res.ok) {
                dispatch({ type: 'CREATE_APPOIMENT', payload: data });
                setPublishError(null);
                navigate('/appoiment');
            }

        } catch (error) {
            setPublishError(error.message);

        }

        onClose();
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
                    backgroundColor: 'white',
                    marginTop: '1rem',
                    padding: '0rem',
                },
            }}
        >
            <div>
                <div style={{ width: '80%', marginLeft: '-2px', marginTop: '-1px' }} className='flex fixed z-50 h-12 bg-indigo-900 text-white justify-between'>
                    <div className='justify-start pt-2 ml-2 text:sm md:text-xl' style={{ fontWeight: '600', fontStyle: 'italic', }}>
                        Patient Enrollment
                    </div>
                    <div className='justify-end mr-2' style={{ fontSize: '23px', fontWeight: '600', fontStyle: 'italic', }}>
                        <img className='mt-2' src={Delete} alt="" onClick={onClose} />
                    </div>
                </div>
                <div className='pt-10'>
                    <div style={{ borderRadius: '25px' }} className='bg-blue-100 mx-8 mt-10 px-4 '>
                        <h2 className="flex justify-start text-md px-2  md:px-5 lg:px-10 pt-5 text-slate-800 mt-5 mb-4">Enroll your Patient here</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="md:px-5 lg:justify-between grid-cols-1  grid lg:grid-cols-2 gap-1">
                                <div className='w-full grid col-span-1 '>

                                    <TextInput
                                        id="firstname"
                                        name="firstName"
                                        placeholder='First name'
                                        type="text"
                                        onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                                        required
                                        className="col-span-1 px-4 py-2"
                                        style={{ borderRadius: '15px' }}
                                    />
                                </div>
                                <div>

                                    <TextInput
                                        id="lastname"
                                        name="lastName"
                                        placeholder='Last name'
                                        type="text"
                                        onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                                        required
                                        className="col-span-1  px-4 py-2"
                                        style={{ borderRadius: '15px' }}
                                    />
                                </div>
                                <div>

                                    <Select
                                        id="gender"
                                        name="gender"
                                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                        required
                                        className="col-span-1 px-4 py-2 text-slate-800"
                                        style={{ borderRadius: '15px' }}

                                    >
                                        <option value="notfill">Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </Select>
                                </div>
                                <div>

                                    <TextInput
                                        id="birthday"
                                        name="birthday"
                                        placeholder="Birthday"
                                        type="date"
                                        onChange={(e) =>
                                            setFormData({ ...formData, birthday: e.target.value })
                                        }
                                        required
                                        className="col-span-1 px-4 py-2"
                                        style={{ borderRadius: '15px' }}
                                    />
                                </div>

                                <div>

                                    <TextInput
                                        id="email"
                                        name="email"
                                        placeholder='Email'
                                        type="email"
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="col-span-1 px-4 py-2"
                                        style={{ borderRadius: '15px' }}
                                    />
                                </div>
                                <div>

                                    <TextInput
                                        id="tnumber"
                                        name="contactNumber"
                                        placeholder='Contact Number'
                                        type="tel"
                                        onChange={(e) => setFormData({ ...formData, tnumber: e.target.value })}
                                        required
                                        className="col-span-1 px-4 py-2"
                                        style={{ borderRadius: '15px' }}
                                    />
                                </div>
                                <div>

                                    <TextInput
                                        id="nic"
                                        name="nic"
                                        placeholder=' NIC'
                                        type="text"
                                        onChange={(e) => setFormData({ ...formData, nic: e.target.value })}
                                        required
                                        className="col-span-1 px-4 py-2"
                                        style={{ borderRadius: '15px' }}
                                    />
                                </div>
                                <div>

                                    <TextInput
                                        id="address"
                                        name="address"
                                        placeholder='Address'
                                        type="text"
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                        required
                                        className="col-span-1 px-4 py-2"
                                        style={{ borderRadius: '15px' }}
                                    />
                                </div>




                            </div>
                            <div className="mt-5 px-2 md:px-8 justify-between grid grid-cols-1 lg:grid-cols-2 ">

                                <Textarea
                                    id="medinote"
                                    name="medinote"
                                    onChange={(e) => setFormData({ ...formData, medinote: e.target.value })}
                                    placeholder=' Medical Notes'

                                    className="col-span-2 px-2 md:px-5 py-2 h-10"
                                    style={{ borderRadius: '15px', height: '100px' }}
                                />
                            </div>
                            <div className='flex mx-2 md:mx-4 mt-4 mb-10 justify-end px-2 md:px-5 pb-10'>
                                <button className=' bg-blue-700 rounded text-white px-10 py-2' type="submit">ENROLL</button>
                                {publishError && <Alert color="failure">{publishError}</Alert>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default PatientEnrollmentForm;
