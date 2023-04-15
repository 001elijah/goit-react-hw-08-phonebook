import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { AuthForm } from "components/AuthForm/AuthForm";
import { login } from "redux/authOperations";



export function LoginPage() {
  const dispatch = useDispatch();

  const handleUserLogin = formData => {
    dispatch(login(formData));
  };
  return (
    <AuthForm
      onSubmit={handleUserLogin}
      btnSubmit='Login'
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={
        Yup.object({
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