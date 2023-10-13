import { useState } from 'react'
import LoginPage from '../LoginPage/LoginPage';
import RegistrationPage from '../RegistrationPage/RegistrationPage';

const UnauthorizedPage = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  return (
    <div>
      {isLoginPage ? (
        <LoginPage goToRegistration={() => setIsLoginPage(false)}/>
      ) : (
        <RegistrationPage goToLogin={() => setIsLoginPage(true)} />
      )}
    </div>
  )
}

export default UnauthorizedPage