import { Button, Select, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import Delete from '../assets/delete.png';
import Modal from 'react-modal';
import { GiAges } from 'react-icons/gi';
const AppointmentPage = ({ onClose }) => {
    const [formData, setFormData] = useState({
        firstName: 'Vihansi',
        lastName: 'Perera',
        operator: "Dr. John Doe",
        channelId: '88794',
        patientId: 'P12345',
        time: '09:00:00',
        age: '30',
        address: 'Kalubowia',
        date: '2022-01-01',
        opID: 'OP12345',

    });
    const [patientInfo, setPatientInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });
    const [appointmentDetails, setAppointmentDetails] = useState({
        date: new Date(),
        doctor: 'sadun',
        wardNumber: '02',
        slotNumber: '0585',
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

                    marginTop: '1rem',
                    padding: '0rem',
                },
            }}
        >
            <div>
                <div style={{ width: '80%', marginLeft: '-2px', marginTop: '-1px' }} className='flex fixed z-50 h-12 bg-indigo-900 text-white justify-between'>
                    <div className='justify-start ml-2 text-white mt-1' style={{ fontSize: '23px', fontWeight: '600', fontStyle: 'italic', }}>
                        Appointment Update
                    </div>
                    <div className='justify-end mr-2' style={{ fontSize: '23px', fontWeight: '600', fontStyle: 'italic', }}>
                        <img className='mt-2' src={Delete} alt="" onClick={onClose} />
                    </div>
                </div>
                <div className='w-full bg-white  px-5 p-3'>
                    <form style={{ backgroundColor: '#C8EAF3', borderRadius: '25px' }} onSubmit={handleSubmit} className="flex mt-16 mx-10 flex-col p-10 space-y-4">


                        <h1 className="text-xl text-slate-900 font-normal mb-2">Update channel <span className='font-bold'>{formData.channelId}</span> here</h1>
                        <div className=' '>
                            <div className='grid grid-cols-1 lg:grid-cols-3'>
                                <div className='grid col-span-1'>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full text-sm lg:text-xl italic bg-none">
                                            <tbody>
                                                <tr>
                                                    <td className="px-1 py-1 whitespace-nowrap font-medium text-gray-700">
                                                        <strong>First Name</strong>
                                                    </td>
                                                    <td className=" whitespace-nowrap  text-gray-500">:</td>
                                                    <td className=" whitespace-nowrap  text-gray-500">{formData.firstName}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-1 py-1  whitespace-nowrap  font-medium text-gray-700">
                                                        <strong>Patient ID</strong>
                                                    </td>
                                                    <td className=" whitespace-nowrap  text-gray-500">:</td>
                                                    <td className="whitespace-nowrap  text-gray-500">{formData.patientId}</td>
                                                </tr>
                                                <tr className=''>
                                                    <td className="px-1 py-1 pt-5 whitespace-nowrap font-medium text-gray-700">
                                                        <strong>Operator </strong>
                                                    </td>
                                                    <td className=" pt-5 whitespace-nowrap  text-gray-500">:</td>
                                                    <td className="pt-5 whitespace-nowrap text-gray-500">{formData.operator}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-1 py-1 whitespace-nowrap font-medium text-gray-700">
                                                        <strong>Time </strong>
                                                    </td>
                                                    <td className=" whitespace-nowrap  text-gray-500">:</td>
                                                    <td className=" whitespace-nowrap text-gray-500">{formData.time}</td>
                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                                <div className='grid col-span-1'>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full text-sm lg:text-xl italic bg-none">
                                            <tbody>
                                                <tr>
                                                    <td className="px-1 py-1 whitespace-nowrap font-medium text-gray-700">
                                                        <strong>Last Name</strong>
                                                    </td>
                                                    <td className=" whitespace-nowrap  text-gray-500">:</td>
                                                    <td className=" whitespace-nowrap  text-gray-500">{formData.lastName}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-1 py-1  whitespace-nowrap  font-medium text-gray-700">
                                                        <strong>Age</strong>
                                                    </td>
                                                    <td className=" whitespace-nowrap  text-gray-500">:</td>
                                                    <td className="whitespace-nowrap  text-gray-500">{formData.age}</td>
                                                </tr>
                                                <tr className=''>
                                                    <td className="px-1 py-1 pt-5 whitespace-nowrap font-medium text-gray-700">
                                                        <strong>Operator ID </strong>
                                                    </td>
                                                    <td className=" pt-5 whitespace-nowrap  text-gray-500">:</td>
                                                    <td className="pt-5 whitespace-nowrap text-gray-500">{formData.opID}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-1 py-1 whitespace-nowrap font-medium text-gray-700">
                                                        <strong>Channel ID</strong>
                                                    </td>
                                                    <td className=" whitespace-nowrap  text-gray-500">:</td>
                                                    <td className=" whitespace-nowrap text-gray-500">{formData.channelId}</td>
                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                                <div className='grid col-span-1'>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full text-sm lg:text-xl italic bg-none">
                                            <tbody>
                                                <tr>
                                                    <td className="px-1 py-1 whitespace-nowrap font-medium text-gray-700">
                                                        <strong>Address</strong>
                                                    </td>
                                                    <td className=" whitespace-nowrap  text-gray-500">:</td>
                                                    <td className=" whitespace-nowrap  text-gray-500">{formData.address}</td>
                                                </tr>
                                                <tr></tr>

                                                <tr>
                                                    <td className="px-1 pt-14 py-1 whitespace-nowrap font-medium text-gray-700">
                                                        <strong>Date</strong>
                                                    </td>
                                                    <td className=" pt-14 whitespace-nowrap  text-gray-500">:</td>
                                                    <td className="pt-14 whitespace-nowrap text-gray-500">{formData.date}</td>
                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>

                                </div>




                            </div>
                        </div>

                        <div className='grid grid-cols-2 lg:grid-cols-3 text-black font-sans pt-5 '>
                            <div className=' grid col-span-1'>
                                <Select
                                    name="doctor"
                                    value={appointmentDetails.doctor}
                                    onChange={handleChange}
                                    className="  w-full pr-2 "
                                    style={{ borderRadius: '15px' }}
                                >
                                    <option value="">Select Doctor</option>
                                    <option value="Dr. Smith">Dr. Smith</option>
                                    <option value="Dr. Jones">Dr. Jones</option>
                                </Select>
                            </div>
                            <div className='grid col-span-1'>
                                <TextInput
                                    type="number"
                                    name="wardNumber"
                                    placeholder="Ward Number"
                                    value={appointmentDetails.wardNumber}
                                    onChange={handleChange}
                                    className="w-full pl-2 "
                                    style={{ borderRadius: '15px' }}
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 lg:grid-cols-3   '>
                            <div className=' grid col-span-1'>

                                <TextInput
                                    type="number"
                                    name="slotNumber"
                                    placeholder="Slot Number"
                                    value={appointmentDetails.slotNumber}
                                    onChange={handleChange}
                                    className="w-full pr-2"
                                    style={{ borderRadius: '15px' }}
                                />
                            </div>
                        </div>
                        <div className="flex pt-24 justify-end">
                            <button
                                type="submit"
                                className="bg-blue-700 justify-center text-white px-5 py-2 rounded  focus:outline-none f"
                            >
                                UPDATE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default AppointmentPage;
