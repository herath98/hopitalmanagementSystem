import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button, Navbar, Table, TextInput } from "flowbite-react";
import PatientEnrollmentForm from "./PationEnrollment";
import PatientEnrollmentForm2 from './PatientInformationUpdate';
import logo from "../assets/tooth.png";
import logout from "../assets/logout.png";
import user1 from "../assets/user_1.png";
import user2 from "../assets/user_2.png";
import user3 from "../assets/cal.png";

const patients = [
    {   number:'1',
        name: "Whamsi Pareta",
        email: "200157780422",
        contact: "(not available)",
        nic: "NIC (not available)",
        address: "Mathara",
        age: "Age (not available)",
        sex: "M",
        icon1: user3,
        icon2: user2,
        icon3: user1
    },
    {   
        number:'2',
        name: "Saham Sand",
        email: "sandee123@emattom",
        contact: "1071-44444444",
        nic: "(not available)",
        address: "Mathara",
        age: "M",
        sex: "M",
        icon1: user3,
        icon2: user2,
        icon3: user1
    },
    {   
        number:'3',
        name: "Saham Sand",
        email: "sandee123@emattom",
        contact: "1071-44444444",
        nic: "(not available)",
        address: "Mathara",
        age: "M",
        sex: "M",
        icon1: user3,
        icon2: user2,
        icon3: user1
    },
    {   
        number:'4',
        name: "Saham Sand",
        email: "sandee123@emattom",
        contact: "1071-44444444",
        nic: "(not available)",
        address: "Mathara",
        age: "M",
        sex: "M",
        icon1: user3,
        icon2: user2,
        icon3: user1
    },
    {   
        number:'5',
        name: "Saham Sand",
        email: "sandee123@emattom",
        contact: "1071-44444444",
        nic: "(not available)",
        address: "Mathara",
        age: "M",
        sex: "M",
        icon1: user3,
        icon2: user2,
        icon3: user1
    },
    {   
        number:'6',
        name: "Saham Sand",
        email: "sandee123@emattom",
        contact: "1071-44444444",
        nic: "(not available)",
        address: "Mathara",
        age: "M",
        sex: "M",
        icon1: user3,
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
        <div className="bg-white">
            <div className="bg-indigo-900   w-full">
                <Navbar className="bg-indigo-900" fluid rounded>
                    <Navbar.Brand>
                        <img src={logo} className="mr-3 h-6 sm:h-9" alt="logo" />
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
            <div className="pt-0">
            

                <div className="flex font-open-sans text-xl  text-black font-semibold justify-start pl-5 ml-8 mb-2 pt-2">PATIENTS</div>
                <div style={{ borderRadius: '25px' }} className=" mx-10 px-4 lg:px-10 pt-10   bg-blue-100 border-radius-2xl">
                <div className="flex justify-between mb-4">
                    <div className="w-1/2 mx-auto  flex justify-start">
                        <TextInput className='w-1/2' placeholder="Search" />
                    </div>

                    <div className="w-1/2 mx-auto mt-5 flex justify-end">
                        <button className=" bg-blue-700 rounded text-white px-5 py-2 hover:bg-blue-700  float-right" onClick={handleOpenPasswordReset}>ADD PATIENT</button>

                

                    </div>
                </div>
                <div className="flex pb-5 overflow-x-auto mt-4 bg-blue-100">

                    <Table className="w-full flowbite-table">
                        <Table.Head className="bg-blue-200">
                            <Table.HeadCell className="w-1/6 bg-blue-100 pl-4">#</Table.HeadCell>
                            <Table.HeadCell className="w-1/6 bg-blue-100 pl-4">Patient name</Table.HeadCell>
                            <Table.HeadCell className="w-1/4 bg-blue-100">Email</Table.HeadCell>
                            <Table.HeadCell className="w-1/6 bg-blue-100">Contact no</Table.HeadCell>
                            <Table.HeadCell className="w-1/6 bg-blue-100">NIC</Table.HeadCell>
                            <Table.HeadCell className="w-1/4 bg-blue-100">Address</Table.HeadCell>
                            <Table.HeadCell className="w-1/6 bg-blue-100">Age</Table.HeadCell>
                            <Table.HeadCell className="w-1/6 bg-blue-100">Sex</Table.HeadCell>
                          
                            <Table.HeadCell className="w-1/6 bg-blue-100 text-blue-100">Icon 2</Table.HeadCell> 
                            <Table.HeadCell className="w-1/6 bg-blue-100 text-blue-100">Icon 2</Table.HeadCell>
                            <Table.HeadCell className="w-1/6 bg-blue-100 text-blue-100">Icon 3</Table.HeadCell>
                           
                        </Table.Head>
                        <Table.Body>
                            {patients.map((patient, index) => (
                                <Table.Row key={index} className="border-b hover:bg-gray-100">
                                    <Table.Cell className="pl-4">{patient.number}</Table.Cell>
                                    <Table.Cell className="pl-4">{patient.name}</Table.Cell>
                                    <Table.Cell>{patient.email}</Table.Cell>
                                    <Table.Cell>{patient.contact}</Table.Cell>
                                    <Table.Cell>{patient.nic}</Table.Cell>
                                    <Table.Cell>{patient.address}</Table.Cell>
                                    <Table.Cell>{patient.age}</Table.Cell>
                                    <Table.Cell>{patient.sex}</Table.Cell>
                                    <Table.Cell className=''><img src={user3} alt="icon1" /></Table.Cell>
                                    <Table.Cell  onClick={handleOpenPasswordReset2}><img src={user2} alt="icon2" /></Table.Cell>
                                   <Table.Cell ><img src={user1} alt="icon3" /></Table.Cell>
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
