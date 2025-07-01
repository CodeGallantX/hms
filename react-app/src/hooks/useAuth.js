import { useState, useEffect, createContext, useContext } from 'react';
import { getCurrentUser, setCurrentUser, logout as logoutUser } from '../utils/storage.js';
import { getUsers } from '../utils/storage.js';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUserState] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUserState(currentUser);
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const users = getUsers();
    const foundUser = users.find(u => u.email === email);
    
    if (foundUser) {
      // In a real app, you'd verify the password
      // For demo purposes, we'll accept any password
      setCurrentUser(foundUser);
      setUserState(foundUser);
      return { success: true, user: foundUser };
    }
    
    return { success: false, error: 'Invalid credentials' };
  };

  const logout = () => {
    logoutUser();
    setUserState(null);
  };

  const updateUser = (updatedUser) => {
    setCurrentUser(updatedUser);
    setUserState(updatedUser);
  };

  const value = {
    user,
    login,
    logout,
    updateUser,
    loading,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    isDoctor: user?.role === 'doctor',
    isPatient: user?.role === 'patient',
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 