import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button, Navbar, Table, TextInput } from "flowbite-react";
import { useSelector } from 'react-redux';
import logo from "../assets/tooth.png";
import logout from "../assets/logout.png";
import user1 from "../assets/user_1.png";
import user2 from "../assets/user_2.png";
import user3 from "../assets/cal.png";
import PatientEnrollmentForm from "./PationEnrollment";
import PatientEnrollmentForm2 from './PatientInformationUpdate';

const PatientList = () => {
    const { currentUser } = useSelector((state) => state.user);
    const [patient, setPatient] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showMore, setShowMore] = useState(true);
    
    
    useEffect(() => {
        const fetchPatient = async () => {
            try {
                const res = await fetch(`/api/appoiment/getappoiment?userId=${currentUser._id}`);
                const data = await res.json();
                if (res.ok) {
                    setPatient(data.appoiment);
                    if (data.appoiment.length < 9) {
                        setShowMore(false);
                    }
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        if (currentUser.isAdmin) {
            fetchPatient();
        }
    }, [currentUser.Id]);

    const handleShowMore = async () => {
        const startIndex = patient.length;
        try {
            const res = await fetch(`/api/appoiment/getappoiment?userId=${currentUser._id}&startIndex=${startIndex}`);
            const data = await res.json();
            if (res.ok) {
                setPatient((prev) => [...prev, ...data.appoiment]);
                if (data.appoiment.length < 9) {
                    setShowMore(false);
                }
            }
        } catch (error) {
            console.log(error.massage);
        }
    }

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="bg-white">
            <div className="bg-indigo-900 w-full">
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
                <div className="flex font-open-sans text-xl text-black font-semibold justify-start pl-5 ml-8 mb-2 pt-2">PATIENTS</div>
                <div style={{ borderRadius: '25px' }} className="mx-10 px-4 lg:px-10 pt-10 bg-blue-100 border-radius-2xl">
                    <div className="flex justify-between mb-4">
                        <div onClick={handleSearch} className="w-1/2 mx-auto flex justify-start">
                            <TextInput className='w-1/2' placeholder="Search" />
                        </div>
                        <div className="w-1/2 mx-auto mt-5 flex justify-end">
                            <button className="bg-blue-700 rounded text-white px-5 py-2 hover:bg-blue-700 float-right" >ADD PATIENT</button>
                        </div>
                    </div>
                    <div className="flex pb-5 overflow-x-auto mt-4 bg-blue-100">
                        {currentUser.isAdmin && patient.length > 0 ? (
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
                                    {patient.map((patient, index) => {
                                        
                                        const birthDate = new Date(patient.birthday);
                                        const today = new Date();
                                        let age = today.getFullYear() - birthDate.getFullYear();
                                        const monthDifference = today.getMonth() - birthDate.getMonth();
                                        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
                                            age--;
                                        }
                                        
                                        return (
                                            <Table.Row key={index} className="border-b hover:bg-gray-100">
                                                <Table.Cell className="pl-4">{index + 1}</Table.Cell>
                                                <Table.Cell className="pl-4">{patient.firstname + " " + patient.lastname}</Table.Cell>
                                                <Table.Cell>{patient.email}</Table.Cell>
                                                <Table.Cell>{patient.tnumber}</Table.Cell>
                                                <Table.Cell>{patient.nic}</Table.Cell>
                                                <Table.Cell>{patient.address}</Table.Cell>
                                                <Table.Cell>{age}</Table.Cell> {/* Display the calculated age */}
                                                <Table.Cell>{patient.gender}</Table.Cell>
                                                <Table.Cell className=''><img src={user3} alt="icon1" /></Table.Cell>
                                                <Table.Cell ><img src={user2} alt="icon2" /></Table.Cell>
                                                <Table.Cell><img src={user1} alt="icon3" /></Table.Cell>
                                            </Table.Row>
                                        );
                                    })}
                                </Table.Body>
                            </Table>
                        ) : (
                            <p>No patients yet</p>
                        )}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default PatientList;
