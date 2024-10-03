import * as Yup from 'yup';

export const signUpSchema = Yup.object({
  name: Yup.string()
  .min(3, 'Password must be at least 3 characters long')
  .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
  ["confirm-password"]: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});