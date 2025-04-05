import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to StitchLink</h1>
      <p>Connecting you with the best local tailors for custom-made clothes!</p>
      <Link to="/register-customer">Register as a Customer</Link>
      <Link to="/register-tailor">Register as a Tailor</Link>
      <Link to="/search-tailors">Find a Tailor</Link>
    </div>
  );
};

export default LandingPage;
