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
import { AccountPaperContainer } from '../styles/styledComponents';

const SignIn = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <AccountPaperContainer>
      <Paper sx={{ padding: '60px 40px' }}>
        <Stack alignItems='center' spacing={4}>
          <Typography>Sign In</Typography>
          <form>
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
              <FormControl>
                <InputLabel htmlFor='confirm-password'>
                  Confirm password
                </InputLabel>
                <OutlinedInput
                  id='confirm-password'
                  label='Confirm password'
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowConfirmPassword}
                        edge='end'>
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button variant='contained'>Sign In</Button>
            </Stack>
          </form>
        </Stack>
      </Paper>
    </AccountPaperContainer>
  );
};

export default SignIn;
