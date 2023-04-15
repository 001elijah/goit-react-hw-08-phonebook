import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { AuthForm } from "components/AuthForm/AuthForm";
import { signup } from "redux/authOperations";



export function SignUpPage() {
  const dispatch = useDispatch();

  const handleUserSignup = formData => {
    dispatch(signup(formData));
  };
  
  return (
    <AuthForm
      onSubmit={handleUserSignup}
      btnSubmit='Sign up'
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={
        Yup.object({
          name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(7, 'Must contain 7 characters or more')
            .required('Required'),
        })}
    />
  )
}