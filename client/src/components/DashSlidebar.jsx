import { Sidebar, SidebarItem } from 'flowbite-react';
import {
    HiUser,
    HiArrowSmRight,
    HiDocumentText,
    HiOutlineUserGroup,
    HiAnnotation,
    HiChartPie,
    HiDocumentReport,
    HiOutlineDocument,
} from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { signOutSuccess } from '../redux/user/userSlice';
import './Sidebar.css';

export default function DashSidebar() {
    const location = useLocation();
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const [tab, setTab] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [hide ,sethide]=useState(false);
    const [hide2 ,sethide2]=useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        sethide(!hide);
        sethide2(!hide2);
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if (tabFromUrl) {
            setTab(tabFromUrl);
        }
    }, [location.search]);
    const handleSignout = async () => {
        try {
            const res = await fetch('/api/user/signout', {
                method: 'POST',
            });
            const data = await res.json();
            if (!res.ok) {
                console.log(data.message);
            } else {
                dispatch(signOutSuccess());
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <div className="sidebar-container z-50">
            <div className={`${hide2 ? 'inline' : 'hidden'}`} >
            <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
            ☰ {/* You can replace this with any icon */}
            </button>
            </div>
            <Sidebar className={`sidebar ${isOpen ? 'closed' : 'open'} `} >

                <Sidebar.Items >
                    <Sidebar.ItemGroup className='flex flex-col gap-1 relative'>
                        <div
                            className={`${hide ? 'hidden' : 'inline'} mb-10 flex justify-end items-end`}
                        >
                            <button className="absolute top-0 right-0" onClick={toggleSidebar}>
                             X
                            </button>
                        </div>
                        {currentUser && currentUser.isAdmin && (
                            <Link to='/dashboard?tab=dash'>
                                <Sidebar.Item
                                    active={tab === 'dash' || !tab}
                                    icon={HiChartPie}
                                    label={currentUser.isAdmin ? 'Admin' : 'User'}
                                    as='div'
                                >
                                    Dashboard
                                </Sidebar.Item>
                            </Link>
                        )}
                        <Link to='/dashboard?tab=profile'>
                            <Sidebar.Item
                                active={tab === 'profile'}
                                icon={HiUser}
                                label={currentUser.isAdmin ? 'Admin' : 'User'}
                                labelColor='dark'
                                as='div'
                            >
                                Profile
                            </Sidebar.Item>
                        </Link>
                        {currentUser.isAdmin && (
                            <Link to='/appoimentList?tab=alist'>
                                <Sidebar.Item
                                    active={tab === 'posts'}
                                    icon={HiDocumentText}
                                    as='div'
                                >
                                    Apoiment Schedule
                                </Sidebar.Item>
                            </Link>
                        )}
                        {currentUser.isAdmin && (
                            <Link to='/dashboard?tab=project'>
                                <Sidebar.Item
                                    active={tab === 'project'}
                                    icon={HiOutlineDocument}
                                    as='div'
                                >
                                    Projects
                                </Sidebar.Item>
                            </Link>
                        )}
                        {currentUser.isAdmin && (
                            <>
                                <Link to='/dashboard?tab=users'>
                                    <Sidebar.Item
                                        active={tab === 'users'}
                                        icon={HiOutlineUserGroup}
                                        as='div'
                                    >
                                        Users
                                    </Sidebar.Item>
                                </Link>
                                <Link to='/dashboard?tab=comments'>
                                    <Sidebar.Item
                                        active={tab === 'comments'}
                                        icon={HiAnnotation}
                                        as='div'
                                    >
                                        Comments
                                    </Sidebar.Item>
                                </Link>
                            </>
                        )}
                        <Sidebar.Item
                            icon={HiArrowSmRight}
                            className='cursor-pointer'
                            onClick={handleSignout}
                        >
                            Sign Out
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    );
}