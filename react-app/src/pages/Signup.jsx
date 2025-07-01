import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button.jsx';
import Input from '../components/ui/Input.jsx';
import Card from '../components/ui/Card.jsx';
import { getUsers, setUsers } from '../utils/storage.js';

const initialForm = {
  name: '',
  email: '',
  password: '',
  phone: '',
  // Patient fields
  dateOfBirth: '',
  bloodType: '',
  // Doctor fields
  specialization: '',
};

const Signup = () => {
  const [role, setRole] = useState('patient');
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    setForm(initialForm);
    setError('');
    setSuccess(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    // Basic validation
    if (!form.name || !form.email || !form.password || !form.phone) {
      setError('Please fill in all required fields.');
      setLoading(false);
      return;
    }
    if (role === 'patient' && (!form.dateOfBirth || !form.bloodType)) {
      setError('Please fill in all patient details.');
      setLoading(false);
      return;
    }
    if (role === 'doctor' && !form.specialization) {
      setError('Please enter your specialization.');
      setLoading(false);
      return;
    }

    // Check if email already exists
    const users = getUsers();
    if (users.some(u => u.email === form.email)) {
      setError('An account with this email already exists.');
      setLoading(false);
      return;
    }

    // Create new user object
    const newUser = {
      id: Date.now(),
      name: form.name,
      email: form.email,
      password: form.password, // In real app, hash this!
      phone: form.phone,
      role,
      status: 'active',
      avatar: '',
      ...(role === 'patient' ? {
        dateOfBirth: form.dateOfBirth,
        bloodType: form.bloodType,
        emergencyContact: '',
      } : {}),
      ...(role === 'doctor' ? {
        specialization: form.specialization,
      } : {}),
    };

    setUsers([...users, newUser]);
    setSuccess(true);
    setLoading(false);
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">M</span>
            </div>
            <span className="text-3xl font-bold text-secondary-900">MedPlus</span>
          </div>
          <h1 className="text-2xl font-bold text-secondary-900">Create an Account</h1>
          <p className="text-secondary-600 mt-2">Sign up as a Patient or Doctor</p>
        </div>
        <Card className="p-8">
          {/* Role Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-secondary-700 mb-3">
              Select Role
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { key: 'patient', label: 'Patient', color: 'bg-blue-100 text-blue-700 border-blue-200' },
                { key: 'doctor', label: 'Doctor', color: 'bg-green-100 text-green-700 border-green-200' },
              ].map((r) => (
                <button
                  key={r.key}
                  type="button"
                  onClick={() => handleRoleChange(r.key)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    role === r.key
                      ? `${r.color} border-current`
                      : 'bg-white border-secondary-200 text-secondary-600 hover:border-secondary-300'
                  }`}
                >
                  <div className="text-sm font-medium">{r.label}</div>
                </button>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
            <Input
              label="Email Address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
            <Input
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />
            <Input
              label="Phone Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
            {role === 'patient' && (
              <>
                <Input
                  label="Date of Birth"
                  name="dateOfBirth"
                  type="date"
                  value={form.dateOfBirth}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Blood Type"
                  name="bloodType"
                  value={form.bloodType}
                  onChange={handleChange}
                  placeholder="e.g. O+, A-, B+"
                  required
                />
              </>
            )}
            {role === 'doctor' && (
              <Input
                label="Specialization"
                name="specialization"
                value={form.specialization}
                onChange={handleChange}
                placeholder="e.g. Cardiology, Neurology"
                required
              />
            )}
            {error && (
              <div className="p-3 bg-danger-50 border border-danger-200 rounded-lg text-danger-700 text-sm">
                {error}
              </div>
            )}
            {success && (
              <div className="p-3 bg-success-50 border border-success-200 rounded-lg text-success-700 text-sm">
                Signup successful! Redirecting to login...
              </div>
            )}
            <Button type="submit" className="w-full" loading={loading} disabled={loading}>
              {loading ? 'Creating Account...' : 'Sign Up'}
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-secondary-600">
              Already have an account?{' '}
              <a href="/login" className="text-primary-600 hover:text-primary-700 font-medium">
                Login
              </a>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Signup; 