import React, { useState } from 'react';

function LecturerRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let valid = true;
    let errorMessages = { email: '', phone: '' };

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(formData.email)) {
      errorMessages.email = 'Invalid email format';
      valid = false;
    }

    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(formData.phone)) {
      errorMessages.phone = 'Phone number must be numeric';
      valid = false;
    }

    setErrors(errorMessages);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submission logic here
      console.log(formData);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="error">{errors.email}</div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <div className="error">{errors.phone}</div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default LecturerRegistrationForm;
