import { useState, useEffect } from 'react';
import { getData, setData } from '../utils/storage.js';

export const useStorage = (key, defaultValue = []) => {
  const [data, setDataState] = useState(defaultValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load data from localStorage on mount
    const storedData = getData(key);
    setDataState(storedData);
    setLoading(false);
  }, [key]);

  const updateData = (newData) => {
    setData(key, newData);
    setDataState(newData);
  };

  const addItem = (item) => {
    const newData = [...data, { ...item, id: Date.now() }];
    updateData(newData);
  };

  const updateItem = (id, updates) => {
    const newData = data.map(item => 
      item.id === id ? { ...item, ...updates } : item
    );
    updateData(newData);
  };

  const removeItem = (id) => {
    const newData = data.filter(item => item.id !== id);
    updateData(newData);
  };

  const findById = (id) => {
    return data.find(item => item.id === id);
  };

  const findByField = (field, value) => {
    return data.filter(item => item[field] === value);
  };

  return {
    data,
    loading,
    updateData,
    addItem,
    updateItem,
    removeItem,
    findById,
    findByField,
  };
}; 