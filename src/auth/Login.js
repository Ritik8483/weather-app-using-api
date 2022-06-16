import { Field, Form, Formik,ErrorMessage } from 'formik'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import styles from '../auth/Login.module.css'
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import YupPassword from 'yup-password';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
YupPassword(yup);

const Login = () => {
  const navigate=useNavigate();
  const [eye,setEye]=useState(true);
  const formikInitialValues={
    email:'',
    password:''
  }
  const validation=yup.object().shape({
    email:yup.string().email('Invalid email').required('Email is required'),
    password:yup.string().min(8, 'Enter at least 8 characters').max(12,'max 12 characters only').required('Password is required').minLowercase(1, 'password must contain at least 1 lower case letter').minUppercase(1, 'password must contain at least 1 upper case letter').minNumbers(1, 'password must contain at least 1 number').minSymbols(1, 'password must contain at least 1 special character'),
  })
  const submitForm=(values)=>{
    console.log(values);
    navigate('/weather')
  }
  const eyeChange=()=>{
    setEye(!eye)
  }
  return (
    <div>
        <div className={styles.container}>
          <div className={styles.card}>
            <h1 className={styles.heading}>Login</h1>
            <Formik initialValues={formikInitialValues} validationSchema={validation} onSubmit={submitForm}>
              <Form>
                <div className={styles.input_field}>
                  <p className={styles.textHeading}>Email</p>
                  <Field name='email' type='text' placeholder='Enter your email'/>
                  <p className={styles.error}><ErrorMessage name='email'/></p>
                </div>
                <div className={styles.input_field}>
                  <p className={styles.textHeading}>Password</p>
                  <Field name='password' type={eye===true ? 'password' : 'text'} placeholder='Enter your password'/>
                  <p className={styles.error}><ErrorMessage name='password'/></p>
                  <div className={styles.passEye}>{eye===true ? <VisibilityOffIcon style={{fontSize:'22px'}} onClick={eyeChange} /> : <VisibilityIcon onClick={eyeChange} style={{fontSize:'22px'}} />}</div>
                </div>
                <div className={styles.button}>
                  <Button type='submit' className={styles.btn} variant="contained">Login</Button>
                </div>
                <div className={styles.footer}>
                  <p className={styles.footer_text}>Don't have an account? <Link style={{textDecoration:'none'}} to='/signup'>Sign up</Link></p>
                </div>
              </Form>
            </Formik>
          </div>  
        </div>
    </div>
  )
}

export default Login