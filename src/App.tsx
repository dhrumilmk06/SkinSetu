import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import RoleSelectPage from '@/pages/RoleSelectPage'
import PatientPage from '@/pages/PatientPage'
import DoctorPage from '@/pages/DoctorPage'
import AdminPage from '@/pages/AdminPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root: role-select landing */}
        <Route path="/" element={<RoleSelectPage />} />

        {/* Patient / ASHA Worker portal */}
        <Route path="/patient/*" element={<PatientPage />} />

        {/* Doctor / AYUSH Practitioner portal */}
        <Route path="/doctor/*" element={<DoctorPage />} />

        {/* Admin portal */}
        <Route path="/admin/*" element={<AdminPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
