import React, { useState } from 'react';

function BookRegistrationForm() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    publishedYear: '',
  });

  const [errors, setErrors] = useState({
    publishedYear: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let valid = true;
    let errorMessages = { publishedYear: '' };

    if (!/^\d{4}$/.test(formData.publishedYear)) {
      errorMessages.publishedYear = 'Published Year must be a four-digit number';
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
          name="title"
          placeholder="Book Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
        />
        <input
          type="text"
          name="isbn"
          placeholder="ISBN"
          value={formData.isbn}
          onChange={handleChange}
        />
        <input
          type="text"
          name="publishedYear"
          placeholder="Published Year"
          value={formData.publishedYear}
          onChange={handleChange}
        />
        <div className="error">{errors.publishedYear}</div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default BookRegistrationForm;
