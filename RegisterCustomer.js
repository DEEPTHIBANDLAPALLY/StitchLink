import React, { useState } from 'react';
import axios from 'axios';

const RegisterCustomer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/customers', formData);
      alert('Customer registered successfully!');
    } catch (err) {
      alert('Error registering customer');
    }
  };

  return (
    <div>
      <h2>Register as a Customer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterCustomer;
