import { useState } from 'react';
import { ChangeEvent } from 'react';
import {
  Paper,
  Stack,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LoginContainer } from '../styles';

const Login = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <LoginContainer>
      <Paper sx={{ padding: '60px 40px' }}>
        <Stack alignItems='center' spacing={4}>
          <Typography>Login</Typography>
          <Stack spacing={2}>
            <TextField type='email' fullWidth id='email' label='Email' />
            <FormControl>
              <InputLabel htmlFor='password'>Password</InputLabel>
              <OutlinedInput
                id='password'
                label='Password'
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePassword}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      edge='end'>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Stack>
          <NavLink to={'/'}>
            <Button variant='contained'>Login</Button>
          </NavLink>
        </Stack>
      </Paper>
    </LoginContainer>
  );
};

export default Login;
