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
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  AccountPaperContainer,
  Form,
  HelperErrorText,
} from '../styles/styledComponents';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validationSchema = () => ({
    email: Yup.string().email('Email not valid').required('Email required'),
    password: Yup.string().required('Pasword required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password equired'),
  });

  const formik = useFormik({
    initialValues: { email: '', password: '', confirmPassword: '' },
    initialErrors: { email: '', password: '', confirmPassword: '' },
    validationSchema: Yup.object(validationSchema()),
    onSubmit: () => {
      console.log('Valid!');
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <AccountPaperContainer>
      <Paper sx={{ padding: '60px 40px' }}>
        <Stack alignItems='center' spacing={4}>
          <Typography>Sign In</Typography>
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
            <FormControl error={formik.errors.confirmPassword ? true : false}>
              <InputLabel htmlFor='confirmPassword'>
                Confirm password *
              </InputLabel>
              <OutlinedInput
                id='confirmPassword'
                label='Confirm password *'
                type={showConfirmPassword ? 'text' : 'password'}
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle confirm password visibility'
                      onClick={handleClickShowConfirmPassword}
                      edge='end'>
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {formik.errors.confirmPassword ? (
                <HelperErrorText>
                  {formik.errors.confirmPassword}
                </HelperErrorText>
              ) : null}
            </FormControl>
            <Button type='submit' variant='contained'>
              Sign In
            </Button>
          </Form>
        </Stack>
      </Paper>
    </AccountPaperContainer>
  );
};

export default SignIn;
