import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../apis/firebaseConfig';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage('Registration successful! You can now log in.');
    } catch (error: any) {
      setError(error.message);
      console.error('Registration Error:', error);
    }
  };

  return (
    <div>
      <Typography variant='h4'>Register</Typography>
      <TextField
        label='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label='Password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleRegister}>Register</Button>
      {message && <Typography color='primary'>{message}</Typography>}
      {error && <Typography color='error'>{error}</Typography>}
    </div>
  );
};

export default Register;
