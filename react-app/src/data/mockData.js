// Mock data for MedPlus Hospital Management System
import { getUsers, setUsers, getAppointments, setAppointments, getPrescriptions, setPrescriptions, getBills, setBills, getRooms, setRooms, getMedications, setMedications, getLabRequests, setLabRequests, getLabResults, setLabResults } from '../utils/storage.js';

export const mockUsers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@medplus.com",
    role: "doctor",
    specialization: "Cardiology",
    phone: "+1-555-0101",
    status: "active",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    email: "michael.chen@medplus.com",
    role: "doctor",
    specialization: "Neurology",
    phone: "+1-555-0102",
    status: "active",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    email: "emily.rodriguez@medplus.com",
    role: "doctor",
    specialization: "Pediatrics",
    phone: "+1-555-0103",
    status: "active",
    avatar: "https://images.unsplash.com/photo-1594824475545-9d0c7c4951e1?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "John Smith",
    email: "john.smith@email.com",
    role: "patient",
    phone: "+1-555-0201",
    dateOfBirth: "1985-03-15",
    bloodType: "O+",
    emergencyContact: "+1-555-0202",
    status: "active",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Maria Garcia",
    email: "maria.garcia@email.com",
    role: "patient",
    phone: "+1-555-0203",
    dateOfBirth: "1990-07-22",
    bloodType: "A+",
    emergencyContact: "+1-555-0204",
    status: "active",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 6,
    name: "Admin User",
    email: "admin@medplus.com",
    role: "admin",
    phone: "+1-555-0001",
    status: "active",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }
];

export const mockAppointments = [
  {
    id: 1,
    patientId: 4,
    doctorId: 1,
    date: "2024-01-15",
    time: "09:00",
    type: "Consultation",
    status: "confirmed",
    notes: "Regular checkup",
    roomId: 1
  },
  {
    id: 2,
    patientId: 5,
    doctorId: 2,
    date: "2024-01-15",
    time: "10:30",
    type: "Follow-up",
    status: "confirmed",
    notes: "Neurology follow-up",
    roomId: 2
  },
  {
    id: 3,
    patientId: 4,
    doctorId: 3,
    date: "2024-01-16",
    time: "14:00",
    type: "Emergency",
    status: "pending",
    notes: "Urgent consultation",
    roomId: 3
  }
];

export const mockPrescriptions = [
  {
    id: 1,
    patientId: 4,
    doctorId: 1,
    date: "2024-01-10",
    medications: [
      {
        name: "Lisinopril",
        dosage: "10mg",
        frequency: "Once daily",
        duration: "30 days"
      }
    ],
    instructions: "Take with food",
    status: "active"
  },
  {
    id: 2,
    patientId: 5,
    doctorId: 2,
    date: "2024-01-12",
    medications: [
      {
        name: "Ibuprofen",
        dosage: "400mg",
        frequency: "Every 6 hours",
        duration: "7 days"
      }
    ],
    instructions: "Take as needed for pain",
    status: "active"
  }
];

export const mockBills = [
  {
    id: 1,
    patientId: 4,
    amount: 150.00,
    date: "2024-01-10",
    status: "paid",
    items: [
      { description: "Consultation", amount: 100.00 },
      { description: "Lab Tests", amount: 50.00 }
    ]
  },
  {
    id: 2,
    patientId: 5,
    amount: 200.00,
    date: "2024-01-12",
    status: "pending",
    items: [
      { description: "Neurology Consultation", amount: 150.00 },
      { description: "MRI Scan", amount: 50.00 }
    ]
  }
];

export const mockRooms = [
  {
    id: 1,
    number: "101",
    type: "Consultation",
    status: "occupied",
    floor: 1,
    capacity: 1
  },
  {
    id: 2,
    number: "102",
    type: "Consultation",
    status: "occupied",
    floor: 1,
    capacity: 1
  },
  {
    id: 3,
    number: "201",
    type: "Emergency",
    status: "available",
    floor: 2,
    capacity: 1
  },
  {
    id: 4,
    number: "301",
    type: "Ward",
    status: "available",
    floor: 3,
    capacity: 4
  }
];

export const mockMedications = [
  {
    id: 1,
    name: "Lisinopril",
    genericName: "Lisinopril",
    category: "ACE Inhibitor",
    dosage: "10mg",
    form: "Tablet",
    stock: 500,
    price: 15.99,
    manufacturer: "Generic Pharma",
    expiryDate: "2025-12-31"
  },
  {
    id: 2,
    name: "Ibuprofen",
    genericName: "Ibuprofen",
    category: "NSAID",
    dosage: "400mg",
    form: "Tablet",
    stock: 1000,
    price: 8.99,
    manufacturer: "Generic Pharma",
    expiryDate: "2025-06-30"
  },
  {
    id: 3,
    name: "Amoxicillin",
    genericName: "Amoxicillin",
    category: "Antibiotic",
    dosage: "500mg",
    form: "Capsule",
    stock: 300,
    price: 25.99,
    manufacturer: "Generic Pharma",
    expiryDate: "2024-12-31"
  }
];

export const mockLabRequests = [
  {
    id: 1,
    patientId: 4,
    doctorId: 1,
    date: "2024-01-10",
    tests: ["Blood Count", "Cholesterol"],
    status: "completed",
    results: "Normal"
  },
  {
    id: 2,
    patientId: 5,
    doctorId: 2,
    date: "2024-01-12",
    tests: ["MRI Brain"],
    status: "pending",
    results: null
  }
];

export const mockLabResults = [
  {
    id: 1,
    labRequestId: 1,
    patientId: 4,
    date: "2024-01-10",
    results: {
      "Blood Count": "Normal",
      "Cholesterol": "200 mg/dL"
    },
    status: "completed",
    notes: "All values within normal range"
  }
];

// Initialize localStorage with mock data if empty
export const initializeMockData = () => {
  const users = getUsers();
  if (users.length === 0) {
    setUsers(mockUsers);
  }
  
  const appointments = getAppointments();
  if (appointments.length === 0) {
    setAppointments(mockAppointments);
  }
  
  const prescriptions = getPrescriptions();
  if (prescriptions.length === 0) {
    setPrescriptions(mockPrescriptions);
  }
  
  const bills = getBills();
  if (bills.length === 0) {
    setBills(mockBills);
  }
  
  const rooms = getRooms();
  if (rooms.length === 0) {
    setRooms(mockRooms);
  }
  
  const medications = getMedications();
  if (medications.length === 0) {
    setMedications(mockMedications);
  }
  
  const labRequests = getLabRequests();
  if (labRequests.length === 0) {
    setLabRequests(mockLabRequests);
  }
  
  const labResults = getLabResults();
  if (labResults.length === 0) {
    setLabResults(mockLabResults);
  }
}; 