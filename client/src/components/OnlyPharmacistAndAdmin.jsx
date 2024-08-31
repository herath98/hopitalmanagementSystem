import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function OnlyPharmacistAndAdmin() {
    const {currentUser} = useSelector((state) => state.user);
  return currentUser.isAdmin || currentUser.isPharmacist ? <Outlet /> : <Navigate to="/" /> ;
    
  
}
