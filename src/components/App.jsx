import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ContactPage } from 'pages/ContactPage';
import { LoginPage } from 'pages/LoginPage';
import { SignUpPage } from 'pages/SignUpPage';
import { selectAuthorized } from 'redux/auth/authSelectors';
import MainNav from './MainNav/MainNav';
import { useEffect } from 'react';
import { getCurrentUserData } from 'redux/auth/authOperations';
// import { getError, getIsLoading } from 'redux/contactsSelectors';

const App = () => {
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);
  const authorized = useSelector(selectAuthorized);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserData());
  }, [dispatch]);
  

return (
  <>
    <MainNav />
    {authorized ?
        (<Routes>
          <Route path='/' element={<ContactPage />} />
          <Route path='*' element={<Navigate to={'/'} />} />
        </Routes>) :
        (<Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='*' element={<Navigate to={'/login'} />} />
        </Routes>)
    }
  </>
);
};

export default App;