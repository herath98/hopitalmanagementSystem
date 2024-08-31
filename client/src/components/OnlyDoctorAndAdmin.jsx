import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function OnlyDoctorAndAdmin() {
    const {currentUser} = useSelector((state) => state.user);
  return currentUser.isAdmin || currentUser.isDoctor ? <Outlet /> : <Navigate to="/" /> ;
    
  
}
