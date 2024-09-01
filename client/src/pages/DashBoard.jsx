import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import DashSidebar from '../components/DashSlidebar';
import AppoimentList from './ApoimentList';


export default function DashBoard() {

    const location = useLocation();
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };


    // State hook to store the current tab
    const [tab, setTab] = useState('');
    
  
    // UseEffect hook to update the tab state whenever the location search changes
    useEffect(() => {
      // Get the tab value from the location search
      const urlprams = new URLSearchParams(location.search);
      const tabFormUrl = urlprams.get('tab');
  
      // If tab value exists, update the tab state
  
  
      if (tabFormUrl) {
        setTab(tabFormUrl);
      }
    }, [location.search]);
  return (
    <div className={`app ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
   
 
      <DashSidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    
    
      <div className="content">
     
       {tab === 'alist' && <AppoimentList />}
    
       </div>    
      
   
    </div>
  )
}
