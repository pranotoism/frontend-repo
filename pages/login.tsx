'use client';
import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../apis/firebaseConfig';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        async (res: any) => {
          localStorage.setItem('accessToken', res.user.accessToken);
          window.location.href = '/KeP0RmmaWJYQic8SJZhR';
        }
      );
    } catch (error: any) {
      setError('Invalid login credentials. Please try again.');
      console.error('Login Error:', error);
    }
  };

  return (
    <div>
      <Typography variant='h4'>Login</Typography>
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
      <Button onClick={handleLogin}>Login</Button>
      {error && <Typography color='error'>{error}</Typography>}
    </div>
  );
};

export default Login;
