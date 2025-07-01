import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';
import { Eye, EyeOff, User, Lock, AlertCircle } from 'lucide-react';
import Button from '../components/ui/Button.jsx';
import Input from '../components/ui/Input.jsx';
import Card from '../components/ui/Card.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedRole, setSelectedRole] = useState('patient');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const demoCredentials = {
    admin: { email: 'admin@medplus.com', password: 'password' },
    doctor: { email: 'sarah.johnson@medplus.com', password: 'password' },
    patient: { email: 'john.smith@email.com', password: 'password' }
  };

  const handleRoleChange = (role) => {
    setSelectedRole(role);
    setEmail(demoCredentials[role].email);
    setPassword(demoCredentials[role].password);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = login(email, password);
      
      if (result.success) {
        // Redirect based on user role
        switch (result.user.role) {
          case 'admin':
            navigate('/admin/dashboard');
            break;
          case 'doctor':
            navigate('/doctor/dashboard');
            break;
          case 'patient':
            navigate('/patient/dashboard');
            break;
          default:
            navigate('/dashboard');
        }
      } else {
        setError(result.error || 'Login failed');
      }
    } catch {
      setError('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">M</span>
            </div>
            <span className="text-3xl font-bold text-secondary-900">MedPlus</span>
          </div>
          <h1 className="text-2xl font-bold text-secondary-900">Welcome Back</h1>
          <p className="text-secondary-600 mt-2">Sign in to your account</p>
        </div>

        <Card className="p-8">
          {/* Role Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-secondary-700 mb-3">
              Select Role
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { key: 'patient', label: 'Patient', color: 'bg-blue-100 text-blue-700 border-blue-200' },
                { key: 'doctor', label: 'Doctor', color: 'bg-green-100 text-green-700 border-green-200' },
                { key: 'admin', label: 'Admin', color: 'bg-purple-100 text-purple-700 border-purple-200' }
              ].map((role) => (
                <button
                  key={role.key}
                  type="button"
                  onClick={() => handleRoleChange(role.key)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    selectedRole === role.key
                      ? `${role.color} border-current`
                      : 'bg-white border-secondary-200 text-secondary-600 hover:border-secondary-300'
                  }`}
                >
                  <div className="text-sm font-medium">{role.label}</div>
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <Input
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />

            {/* Password */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-secondary-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="input pr-10"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-secondary-500 hover:text-secondary-700"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center space-x-2 p-3 bg-danger-50 border border-danger-200 rounded-lg">
                <AlertCircle size={16} className="text-danger-600" />
                <span className="text-sm text-danger-600">{error}</span>
              </div>
            )}

            {/* Demo Info */}
            <div className="p-4 bg-secondary-50 rounded-lg">
              <p className="text-sm text-secondary-600 mb-2">
                <strong>Demo Credentials:</strong>
              </p>
              <p className="text-xs text-secondary-500">
                Email: {demoCredentials[selectedRole].email}
              </p>
              <p className="text-xs text-secondary-500">
                Password: {demoCredentials[selectedRole].password}
              </p>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
              loading={loading}
              disabled={loading}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-secondary-600">
              Don't have an account?{' '}
              <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                Contact administrator
              </a>
            </p>
          </div>
        </Card>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-secondary-500">
            This is a demo application. All data is stored locally in your browser.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login; 