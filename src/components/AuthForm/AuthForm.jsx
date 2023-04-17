import { Formik, Form } from "formik";
import { Box, Button } from "@mui/material";

import { TextInput } from "components/TextInput/TextInput";
import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import { getError } from "redux/contacts/contactsSelectors";
import { useDispatch } from "react-redux";

import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import AppRegistrationTwoToneIcon from '@mui/icons-material/AppRegistrationTwoTone';
import { useEffect } from "react";
import { refreshError } from "redux/contacts/contactsSlice";


export const AuthForm = ({ onSubmit, btnSubmit, initialValues, validationSchema }) => {
  const error = useSelector(getError);
  const location = useLocation();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(refreshError());
  }, [dispatch, location]);
  
   return (
     <>
       <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmit}
       >
           <Box width="400px" margin="0 auto">
             <Form>
                 {btnSubmit !== 'Login' &&
                      <TextInput
                        label="Name"
                        name="name"
                        type="text"
                     placeholder="Jane"
                      />}
       
                   <TextInput
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="jane@formik.com"
                    />
                 
                   <TextInput
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                    />
                 <Box textAlign="center">
               <Button
                      variant="contained"
                      size="large"
                      type="submit"
                      sx={{
                        fontWeight: 900,
                        backgroundColor: '#4CAF50',
                      }}
                  >
                      {btnSubmit}
                      {btnSubmit === "Login" ? <LoginTwoToneIcon /> : <AppRegistrationTwoToneIcon />}
                   </Button>
                 </Box>
             </Form>
           </Box>
       </Formik>
       {error && error.includes('400') && btnSubmit === 'Sign up' && <p>😤 User with this email already exists 😤</p>}
       {error && error.includes('400') && btnSubmit === 'Login' && <p>😤 Wrong email or password 😤</p>}
     </>
   );
 };
