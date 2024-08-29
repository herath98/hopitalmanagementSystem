import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button, Navbar, Table, TextInput } from "flowbite-react";
import PatientEnrollmentForm from "./Prescription";
import PatientEnrollmentForm2 from './PrecriptionUpdate';
import logo from "../assets/tooth.png";
import logout from "../assets/logout.png";
import user1 from "../assets/next.png";
import user2 from "../assets/add.png";

const patients = [
    {   number:'1',
        name: "Whamsi Pareta",
        email: "200157780422",
        contact: "(not available)",
        nic: "NIC (not available)",
        address: "Mathara",
        age: "Age (not available)",
        sex: "M",
        status:'IN',
       
        icon2: user2,
        icon3: user1
    },
    {   number:'1',
    name: "Whamsi Pareta",
    email: "200157780422",
    contact: "(not available)",
    nic: "NIC (not available)",
    address: "Mathara",
    age: "Age (not available)",
    sex: "M",
    status:'IN',
   
    icon2: user2,
    icon3: user1
},
    
    // ... more patients
];


const PatientList = () => {
    const [isPasswordResetOpen, setIsPasswordResetOpen] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [formData, setFormData] = useState({}); 

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

    const handleOpenPasswordReset = () => {
        setIsPasswordResetOpen(true); // Open the modal window
    };

    const handleClosePasswordReset = () => {
        setIsPasswordResetOpen(false); // Close the modal window
    };
    
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-indigo-900   w-full">
                <Navbar className="bg-indigo-900" fluid rounded>
                    <Navbar.Brand>
                        <img src={logo} className="mr-3 h-6 sm:h-9" alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-between">
                        
                        <Link to="#" className="navbar-item pl-2" activeClassName="active">
                            <img src={logout} alt="logout" />
                        </Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div className="pt-0">
            

                <div className="flex font-open-sans text-xl  text-black font-semibold justify-start ml-10 pt-2">DOCTOR PORTAL</div>
                <div style={{ borderRadius: '25px' }} className=" mx-10 px-4 lg:px-10 pt-10 mt-2 bg-blue-100 border-radius-2xl">
                <div className="flex justify-between mb-4">
                    <div className="w-1/2 mx-auto mt-5 flex justify-start">
                        <TextInput className='w-1/2' placeholder="Search" />
                    </div>

                    <div className="w-1/2 mx-auto mt-5 flex justify-end">
                        
                    </div>
                </div>
                <div className="pb-5 overflow-x-auto mt-4 bg-blue-100">

                    <Table className="w-full flowbite-table">
                        <Table.Head className="bg-blue-200">
                            <Table.HeadCell className="w-1/6 bg-blue-100 pl-4">#</Table.HeadCell>
                            <Table.HeadCell className="w-1/6 bg-blue-100 pl-4">Patient Name</Table.HeadCell>
                            <Table.HeadCell className="w-1/4 bg-blue-100">Email</Table.HeadCell>
                            <Table.HeadCell className="w-1/6 bg-blue-100">Contact No</Table.HeadCell>
                            <Table.HeadCell className="w-1/6 bg-blue-100">Nic</Table.HeadCell>
                            <Table.HeadCell className="w-1/6 bg-blue-100">Age</Table.HeadCell>
                            <Table.HeadCell className="w-1/6 bg-blue-100">Status</Table.HeadCell>
                            <Table.HeadCell className="w-1/6 bg-blue-100">Slot No</Table.HeadCell>
                            
                            <Table.HeadCell className="w-1/6 ml-3 bg-blue-100 text-blue-100">Icon 2</Table.HeadCell>
                            <Table.HeadCell className="w-1/6 bg-blue-100 text-blue-100">Icon 3</Table.HeadCell>
                        </Table.Head>
                        <Table.Body>
                            {patients.map((patient, index) => (
                                <Table.Row key={index} className="border-b hover:bg-gray-100">
                                    <Table.Cell className="pl-4">{patient.number}</Table.Cell>
                                    <Table.Cell>{patient.email}</Table.Cell>
                                    <Table.Cell>{patient.contact}</Table.Cell>
                                    <Table.Cell>{patient.nic}</Table.Cell>
                                    <Table.Cell>{patient.address}</Table.Cell>
                                    <Table.Cell>{patient.age}</Table.Cell>
                                  
                                    <Table.Cell>{patient.status}</Table.Cell>
                                    <Table.Cell>{patient.sex}</Table.Cell>
                                   
                                    <Table.Cell  onClick={handleOpenPasswordReset2}><img src={user2} alt="icon2" /></Table.Cell>
                                   <Table.Cell  onClick={handleOpenPasswordReset}><img src={user1} alt="icon3" /></Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </div>
            </div>
            </div>
        
            {isPasswordResetOpen && <PatientEnrollmentForm onClose={handleClosePasswordReset} />}
            {isUpdate && <PatientEnrollmentForm2 onClose={handleClosePasswordReset2} />}

        </div>
    );
};

export default PatientList;
