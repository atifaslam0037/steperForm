import React, { useState } from 'react';

const Step1 = ({ formData, handleChange, onNext }) => {
  const [firstNameError, setFirstNameError] = useState('');

  const validateFirstName = (value) => {
    if (!value) {
      return 'First Name is required';
    } else if (value.length < 4) {
      return 'First Name must be at least 4 characters long';
    }
    return '';
  };

  const handleFirstNameChange = (e) => {
    const { value } = e.target;
    setFirstNameError(validateFirstName(value));
    handleChange(e);
  };

  return (
    <>
      <h2>Step 1: Personal Information</h2>
      <div>
        <label className="label">First Name:</label>
        <input
          className="input"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleFirstNameChange}
        />
        {firstNameError && <div className="error">{firstNameError}</div>}
      </div>
      <div>
        <label className="label">Last Name:</label>
        <input
          className="input"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="label">Email:</label>
        <input
          className="input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="btn-con">
      <button
        disabled={!formData.firstName || firstNameError}
        onClick={onNext}
        className="button"
      >
        Next
      </button>
      </div>
    </>
  );
};

export default Step1;
