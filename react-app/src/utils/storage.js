// Storage utility functions for localStorage management
export const getData = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(`Error getting data for key ${key}:`, error);
    return [];
  }
};

export const setData = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Error setting data for key ${key}:`, error);
    return false;
  }
};

export const removeData = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Error removing data for key ${key}:`, error);
    return false;
  }
};

export const clearAllData = () => {
  try {
    localStorage.clear();
    return true;
  } catch (error) {
    console.error('Error clearing localStorage:', error);
    return false;
  }
};

// Specific data getters and setters
export const getUsers = () => getData('users');
export const setUsers = (users) => setData('users', users);

export const getAppointments = () => getData('appointments');
export const setAppointments = (appointments) => setData('appointments', appointments);

export const getPrescriptions = () => getData('prescriptions');
export const setPrescriptions = (prescriptions) => setData('prescriptions', prescriptions);

export const getBills = () => getData('bills');
export const setBills = (bills) => setData('bills', bills);

export const getRooms = () => getData('rooms');
export const setRooms = (rooms) => setData('rooms', rooms);

export const getMedications = () => getData('medications');
export const setMedications = (medications) => setData('medications', medications);

export const getLabRequests = () => getData('labRequests');
export const setLabRequests = (labRequests) => setData('labRequests', labRequests);

export const getLabResults = () => getData('labResults');
export const setLabResults = (labResults) => setData('labResults', labResults);

export const getCurrentUser = () => getData('currentUser');
export const setCurrentUser = (user) => setData('currentUser', user);

export const logout = () => {
  removeData('currentUser');
  return true;
}; 