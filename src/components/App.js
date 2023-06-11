import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [formDetails, setFormDetails] = useState({
    username: '',
    email: '',
    password: '',
    contactNo: '',
  });
  const [error, setError] = useState({
    username: '',
    email: '',
    password: '',
    contactNo: '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    setFormDetails({ ...formDetails, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let updatedError = { ...error };

    if (!formDetails.username) {
      updatedError.username = 'Username is required';
      isValid = false;
    } else {
      updatedError.username = '';
    }

    if (!formDetails.email) {
      updatedError.email = 'Email is required';
      isValid = false;
    } else {
      updatedError.email = '';
    }

    if (formDetails.password.length < 4) {
      updatedError.password = 'Password must have at least 4 characters';
      isValid = false;
    } else {
      updatedError.password = '';
    }

    if (formDetails.contactNo.length !== 10) {
      updatedError.contactNo = 'Contact number should have exactly 10 digits';
      isValid = false;
    } else {
      updatedError.contactNo = '';
    }

    setError(updatedError);

    if (isValid) {
      setSuccess(true);
      setFormDetails({ username: '', email: '', password: '', contactNo: '' });
      setError({ username: '', email: '', password: '', contactNo: '' });
    }
  };

  return (
    <div id="main">
      {success && <h3 className='success-alert'>Registered Successfully</h3>}
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <section>
          <label>Username</label>
          <input type="text" name='username' value={formDetails.username} onChange={handleChange} />
          {error.username && <p className='username-error'>{error.username}</p>}

          <label>Email</label>
          <input type="email" name='email' value={formDetails.email} onChange={handleChange} />
          {error.email && <p className='email-error'>{error.email}</p>}

          <label>Password</label>
          <input type="password" name='password' value={formDetails.password} onChange={handleChange} />
          {error.password && <p className='password-error'>{error.password}</p>}

          <label>Contact Number</label>
          <input type="number" name='contactNo' value={formDetails.contactNo} onChange={handleChange} />
          {error.contactNo && <p className='contactNo-error'>{error.contactNo}</p>}

          <button type="submit">Submit</button>
        </section>
      </form>
    </div>
  );
};

export default App;
