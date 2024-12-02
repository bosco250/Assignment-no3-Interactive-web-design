import React, { useState } from 'react';

function ModuleRegistrationForm() {
  const [formData, setFormData] = useState({
    moduleName: '',
    moduleCode: '',
    description: '',
    credits: '',
  });

  const [errors, setErrors] = useState({
    credits: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let valid = true;
    let errorMessages = { credits: '' };

    if (!/^[0-9]+$/.test(formData.credits)) {
      errorMessages.credits = 'Credits must be a numeric value';
      valid = false;
    }

    setErrors(errorMessages);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="moduleName"
          placeholder="Module Name"
          value={formData.moduleName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="moduleCode"
          placeholder="Module Code"
          value={formData.moduleCode}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="credits"
          placeholder="Credits"
          value={formData.credits}
          onChange={handleChange}
        />
        <div className="error">{errors.credits}</div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default ModuleRegistrationForm;
