import React from 'react';

const Input = ({ 
  label, 
  error, 
  helperText,
  className = '', 
  ...props 
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-secondary-700">
          {label}
        </label>
      )}
      <input 
        className={`input ${error ? 'border-danger-500 focus:ring-danger-500' : ''}`}
        {...props}
      />
      {error && (
        <p className="text-sm text-danger-600">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-sm text-secondary-500">{helperText}</p>
      )}
    </div>
  );
};

export default Input; 