import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';
import { Google, Facebook, X as TwitterIcon } from '@mui/icons-material';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Login with:', { email, password });
    // Add your login logic here
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // Add your social login logic here
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
          <Typography variant="h5" component="h1" textAlign="center" mb={3}>
            Login
          </Typography>

          {/* Social Login Buttons */}
          <Box display="flex" gap={1} mb={3}>
            <Button
              variant="outlined"
              startIcon={<Google />}
              onClick={() => handleSocialLogin('google')}
              fullWidth
            >
              Google
            </Button>
            <Button
              variant="outlined"
              startIcon={<Facebook />}
              onClick={() => handleSocialLogin('facebook')}
              fullWidth
            >
              Facebook
            </Button>
            <Button
              variant="outlined"
              startIcon={<TwitterIcon />}
              onClick={() => handleSocialLogin('twitter')}
              fullWidth
            >
              X
            </Button>
          </Box>

          {/* Login Form */}
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}