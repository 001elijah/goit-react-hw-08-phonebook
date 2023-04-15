import { Formik, Form } from "formik";
import { Box, Button } from "@mui/material";

import { TextInput } from "components/TextInput/TextInput";
import { useSelector } from "react-redux";
import { getError } from "redux/contactsSelectors";


export const AuthForm = ({ onSubmit, btnSubmit, initialValues, validationSchema }) => {
  const error = useSelector(getError);
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
                 sx={{ fontWeight: 900 }}
                   >
                     {btnSubmit}
                   </Button>
                 </Box>
             </Form>
           </Box>
       </Formik>
       {error && error.includes('400') && <p>😤 User with this email already exists 😤</p>}
     </>
   );
 };
