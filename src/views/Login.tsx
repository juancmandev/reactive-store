import { useState } from 'react';
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
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  AccountPaperContainer,
  Form,
  HelperErrorText,
} from '../styles/styledComponents';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = () => ({
    email: Yup.string().email('Email not valid').required('Email required'),
    password: Yup.string().required('Pasword required'),
  });

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    initialErrors: { email: '', password: '' },
    validationSchema: Yup.object(validationSchema()),
    onSubmit: () => {
      console.log('Valid!');
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <AccountPaperContainer>
      <Paper sx={{ padding: '60px 40px' }}>
        <Stack alignItems='center' spacing={4}>
          <Typography>Login</Typography>
          <Form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id='email'
              type='email'
              label='Email *'
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.errors.email ? true : false}
              helperText={formik.errors.email}
            />
            <FormControl error={formik.errors.password ? true : false}>
              <InputLabel htmlFor='password'>Password *</InputLabel>
              <OutlinedInput
                id='password'
                label='Password *'
                type={showPassword ? 'text' : 'password'}
                value={formik.values.password}
                onChange={formik.handleChange}
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
              {formik.errors.password ? (
                <HelperErrorText>{formik.errors.password}</HelperErrorText>
              ) : null}
            </FormControl>
            <Button type='submit' variant='contained'>
              Login
            </Button>
          </Form>
        </Stack>
      </Paper>
    </AccountPaperContainer>
  );
};

export default Login;
