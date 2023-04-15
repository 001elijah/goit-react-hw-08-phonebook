// import { useState } from "react";
import { Formik, Form } from "formik";

import { TextInput } from "components/TextInput/TextInput";

export const AuthForm = ({ onSubmit, btnSubmit, initialValues, validationSchema }) => {


   return (
     <>
       <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmit}
       >
         <Form>
           {btnSubmit !== 'Login' && <TextInput
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
                   />
                   
           <button type="submit" >{btnSubmit}</button>
         </Form>
       </Formik>
     </>
   );
 };
