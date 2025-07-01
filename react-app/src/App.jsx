import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth.js';
import { initializeMockData } from './data/mockData.js';

// Layouts
import AdminLayout from './layouts/AdminLayout.jsx';
import DoctorLayout from './layouts/DoctorLayout.jsx';
import PatientLayout from './layouts/PatientLayout.jsx';

// Pages
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import DashboardRedirect from './pages/DashboardRedirect.jsx';
import NotFound from './pages/NotFound.jsx';

// Admin Pages
import DashboardAdmin from './pages/admin/DashboardAdmin.jsx';
import UserManagement from './pages/admin/UserManagement.jsx';
import PatientManagement from './pages/admin/PatientManagement.jsx';
import DoctorManagement from './pages/admin/DoctorManagement.jsx';
import AppointmentManagement from './pages/admin/AppointmentManagement.jsx';
import RoomManagement from './pages/admin/RoomManagement.jsx';
import Billing from './pages/admin/Billing.jsx';
import Pharmacy from './pages/admin/Pharmacy.jsx';

// Doctor Pages
import DashboardDoctor from './pages/doctor/DashboardDoctor.jsx';
import ViewAppointments from './pages/doctor/ViewAppointments.jsx';
import PatientRecord from './pages/doctor/PatientRecord.jsx';

// Patient Pages
import DashboardPatient from './pages/patient/DashboardPatient.jsx';
import BookAppointment from './pages/patient/BookAppointment.jsx';
import AppointmentHistory from './pages/patient/AppointmentHistory.jsx';
import ViewPrescriptions from './pages/patient/ViewPrescriptions.jsx';
import BillingHistory from './pages/patient/BillingHistory.jsx';

// Protected Route Component
const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

// App Content Component
const AppContent = () => {
  useEffect(() => {
    // Initialize mock data on app start
    initializeMockData();
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        {/* Dashboard Redirect */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardRedirect />
            </ProtectedRoute>
          } 
        />

        {/* Patient Routes */}
        <Route 
          element={
            <ProtectedRoute allowedRoles={['patient']}>
              <PatientLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/patient/dashboard" element={<DashboardPatient />} />
          <Route path="/patient/appointments" element={<BookAppointment />} />
          <Route path="/patient/history" element={<AppointmentHistory />} />
          <Route path="/patient/prescriptions" element={<ViewPrescriptions />} />
          <Route path="/patient/billing" element={<BillingHistory />} />
        </Route>

        {/* Doctor Routes */}
        <Route 
          element={
            <ProtectedRoute allowedRoles={['doctor']}>
              <DoctorLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/doctor/dashboard" element={<DashboardDoctor />} />
          <Route path="/doctor/appointments" element={<ViewAppointments />} />
          <Route path="/doctor/record/:id" element={<PatientRecord />} />
        </Route>

        {/* Admin Routes */}
        <Route 
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/admin/dashboard" element={<DashboardAdmin />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/patients" element={<PatientManagement />} />
          <Route path="/admin/doctors" element={<DoctorManagement />} />
          <Route path="/admin/appointments" element={<AppointmentManagement />} />
          <Route path="/admin/rooms" element={<RoomManagement />} />
          <Route path="/admin/billing" element={<Billing />} />
          <Route path="/admin/pharmacy" element={<Pharmacy />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

// Main App Component
function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;

