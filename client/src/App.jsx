import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import SignUp from './pages/SignUp'
import SingIn from './pages/SingIn'
import Project from './pages/Project'
import PasswordResetWindow from './components/PasswordResetWindow '
import ResetPassowrd from './components/ResetPassowrd'
import AppointmentPage from './pages/AppoimentSchedule'
import PatientList from './pages/PatientList'
import PatientEnrollmentForm from './pages/PationEnrollment'
import PatientInformationUpdate from './pages/PatientInformationUpdate'
import SinglePatient from './pages/SinglePatient'
import EmployeList from './pages/EmployeList'
import EmployeeEnrollment from './pages/EmployeeEnroll'
import DoctorEnrollForm from './pages/DoctorEn'
import DoctorList from './pages/Doctorlist'
import DoctorUpdateForm from './pages/DoctorUpdate'
import DoctorProfile from './pages/DoctorProfile'
import PharmacityProfile from './pages/PharmacityProfile'
import AppointmentList from './pages/ApoimentList'
import SingleAppoiment from './pages/SingleAppoiment'
import DoctorDashboard from './pages/DoctorDashbord'
import DoctorSingleAppoiment from './pages/DoctorSingleAppoiment'
import Precription from './pages/Prescription'
import PrecriptionUpdate from './pages/PrecriptionUpdate'
import AppoimentUpdate from './pages/AppoimentUpdate'
import EmployeeUpdate from './pages/EmployeeUpdate'
import PharmaciyDashboard from './pages/PharmacityDashboerd'
import PharmacyDrug from './pages/PharmacyDrug'

function App() {


  return (
    <BrowserRouter>

      {/* Logging Route */}
      <Routes>

        <Route path='/' element={<SingIn />} />
        <Route path='reset-password' element={<PasswordResetWindow />} />
        <Route path='resetPassword' element={<ResetPassowrd />} />
        <Route path='signup' element={<SignUp/>}/>

      </Routes>

      {/* Admin dashboard */}
        {/* patient */}
      <Routes>
        <Route path='apoimentp' element={<AppointmentPage />} /> {/* add appointment */}
        <Route path='patientList' element={<PatientList />} />
        <Route path='singlePatient' element={<SinglePatient />} />
      </Routes>
        {/* Doctor */}
      <Routes>
        <Route path='doctorlist' element={<DoctorList />} />
        <Route path='doctorprofile' element={<DoctorProfile />} />
      </Routes>

      {/* Employee */}
      <Routes>
        <Route path='employeList' element={<EmployeList />} />
        <Route path='pharmaciyProfile' element={<PharmacityProfile />} />
        <Route path='empUpdate' element={<EmployeeUpdate />} />
      </Routes>

      {/* Appointments */}
      <Routes>
        <Route path='appoimentList' element={<AppointmentList />} />
        <Route path='singleAppoiment' element={<SingleAppoiment />} />
        <Route path='apoimentUpdate' element={<AppoimentUpdate />} />
      </Routes>

      {/* Doctor dashboard */}
      <Routes>
        <Route path='doctorDashboard' element={<DoctorDashboard />} />
        <Route path='doctorSingleAppoiment' element={<DoctorSingleAppoiment />} />
        <Route path='prescription' element={<Precription />} />
        <Route path='precriptionUpdate' element={<PrecriptionUpdate />} />
      </Routes>
      {/* Pharmacist dashboard */}
      <Routes>
        <Route path='pharmaciydash' element={<PharmaciyDashboard />} />
        <Route path='pharmacydrug' element={<PharmacyDrug />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
