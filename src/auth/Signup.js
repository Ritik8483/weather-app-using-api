import { Field, Form, Formik,ErrorMessage } from 'formik'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import styles from '../auth/Login.module.css'
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import YupPassword from 'yup-password';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Signup = () => {
    const navigate=useNavigate();
    const [passEye,setPassEye]=useState(true);
    const [confEye,setConfEye]=useState(true);
    const formikInitialValues={
        name:'',
        email:'',
        password:'',
        confirmPassword:''
      }
      const validation=yup.object().shape({
        name:yup.string().required('Name is required').min(3,'Please enter atleast 3 characters'),
        email:yup.string().email('Invalid email').required('Email is required'),
        password:yup.string().min(8, 'Enter at least 8 characters').max(12,'max 12 characters only').required('Password is required').minLowercase(1, 'password must contain at least 1 lower case letter').minUppercase(1, 'password must contain at least 1 upper case letter').minNumbers(1, 'password must contain at least 1 number').minSymbols(1, 'password must contain at least 1 special character'),
        confirmPassword:yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Please confirm password'),
    })
      const submitForm=(values)=>{
        console.log(values);
        navigate('/weather');
      }
      const tooglePassEye=()=>{
        setPassEye(!passEye);
      }
      const toogleConfEye=()=>{
        setConfEye(!confEye);
      }
  return (
    <div>
        <div className={styles.container}>
          <div className={styles.card}>
            <h1 className={styles.heading}>Sign up</h1>
            <Formik initialValues={formikInitialValues} validationSchema={validation} onSubmit={submitForm}>
              <Form>
                <div className={styles.input_field}>
                  <p className={styles.textHeading}>Name</p>
                  <Field name='name' type='text' placeholder='Enter your name'/>
                  <p className={styles.error}><ErrorMessage name='name'/></p>
                </div>
                <div className={styles.input_field}>
                  <p className={styles.textHeading}>Email</p>
                  <Field name='email' type='text' placeholder='Enter your email'/>
                  <p className={styles.error}><ErrorMessage name='email'/></p>
                </div>
                <div className={styles.input_field}>
                  <p className={styles.textHeading}>Password</p>
                  <Field name='password' type={passEye ? 'password' : 'text'} placeholder='Enter your password'/>
                  <p className={styles.error}><ErrorMessage name='password'/></p>
                  <div className={styles.passEye} >{passEye ? <VisibilityOffIcon onClick={tooglePassEye} style={{fontSize:'22px'}} /> : <VisibilityIcon onClick={tooglePassEye} style={{fontSize:'22px'}} />}</div>
                </div>
                <div className={styles.input_field}>
                  <p className={styles.textHeading}>Confirm Password</p>
                  <Field name='confirmPassword' type={confEye ? 'password' : 'text'} placeholder='Confirm password'/>
                  <p className={styles.error}><ErrorMessage name='confirmPassword'/></p>
                  <div className={styles.passEye}>{confEye ? <VisibilityOffIcon onClick={toogleConfEye} style={{fontSize:'22px'}} /> : <VisibilityIcon onClick={toogleConfEye} style={{fontSize:'22px'}} />}</div>
                </div>
                <div className={styles.button}>
                  <Button type='submit' className={styles.btn} variant="contained">Sign up</Button>
                </div>
                <div className={styles.footer}>
                  <p className={styles.footer_text}>Already have an account? <Link style={{textDecoration:'none'}} to='/'>Login</Link></p>
                </div>
              </Form>
            </Formik>
          </div>  
        </div>
    </div>
  )
}

export default Signup