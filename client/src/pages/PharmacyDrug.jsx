import { Button, Select, TextInput, Textarea } from 'flowbite-react';
import React, { useState } from 'react';
import Delete from '../assets/delete.png';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

function PatientEnrollmentForm({ onClose }) {
    const [formData, setFormData] = useState({
        medicalNotes: 'szxdgdfcnfg',
    });

    const [patientInfo, setPatientInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });
    const [appointmentDetails, setAppointmentDetails] = useState({
        date: new Date(),
        doctor: '',
        wardNumber: '',
        slotNumber: '',
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
        const { name, value } = event.target;
        if (name.startsWith('patient')) {
            setPatientInfo({ ...patientInfo, [name]: value });
        } else {
            setAppointmentDetails({ ...appointmentDetails, [name]: value });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement form validation and data submission logic here
        console.log('Form submitted:', { patientInfo, appointmentDetails });
        alert('Appointment submitted successfully!'); // Simulate success
        event.preventDefault();
        console.log(formData);
        // Submit the form data to your backend here
        onClose(); // Close the modal
    };


    return (

            <div>
                <div  className='flex w-full fixed z-50 h-12 bg-indigo-900 text-white justify-between'>
                    <div className='justify-start ml-2 text-white mt-1' style={{ fontSize: '23px', fontWeight: '600', fontStyle: 'italic', }}>
                        Pharmacy Drug Release
                    </div>
                    <div className='justify-end mr-2' style={{ fontSize: '23px', fontWeight: '600', fontStyle: 'italic', }}>
                       <Link to="/pharmaciydash"> <img className='mt-2' src={Delete} alt="" onClick={onClose} /></Link> 
                    </div>
                </div>
                <div className='w-full bg-white  px-5 p-3'>
                    <form style={{ backgroundColor: '#C8EAF3', borderRadius: '25px' }} onSubmit={handleSubmit} className="flex mt-16 mx-10 flex-col p-10 space-y-4">
                        <h1 className="text-xl text-slate-900 font-normal mb-2">Relese your prescription`s here</h1>

                        <div className="mt-4 px-5 lg:px-10">

                            <Textarea
                                id="medicalNotes"
                                name="medicalNotes"
                                onChange={handleChange}
                                placeholder='Add Precription'
                                value={formData.medicalNotes}
                                style={{ height: '300px', width: '100%', borderRadius: '25px' }}
                            />
                        </div>
                        <div className='flex mx-4 mt-4 mb-10 justify-end px-5 py-10'>
                            <button  className='px-5 py-2 bg-blue-700 rounded text-white' type="submit">UPDATE</button>
                        </div>
                    </form>
                </div>
            </div>
       
    );
}

export default PatientEnrollmentForm;
