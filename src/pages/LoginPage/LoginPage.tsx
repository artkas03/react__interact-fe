import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { AppDispatch } from '../../app/store';
import { authUser } from '../../api/users';
import * as userActions from '../../features/userSlice';

type Props = {
  goToRegistration: () => void,
}

const LoginPage: React.FC<Props> = ({ goToRegistration }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch: AppDispatch = useAppDispatch();

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentUser = await authUser({
      username,
      password,
    });

    if (currentUser) {
      dispatch(userActions.set(currentUser));
    }
  }

  return (
    <div className="loginpage">
      <div className="loginpage__wrapper">
        <h3 className="loginpage__title">
          Sign in your account
        </h3>

        <form className="loginpage__form" onSubmit={handleSubmit}>
          <div className="loginpage__fieldgroup">
            <label>
              Your username
              <input 
                type="text" 
                name="loginpage__username"
                className="loginpage__input"
                placeholder="Enter you username..."
                value={username}
                onChange={(e) => setUsername(e.currentTarget.value)}
              />
            </label>
          </div>

          <div className="loginpage__fieldgroup">
            <label>
              Password
              <input 
                type="password" 
                name="loginpage__username"
                className="loginpage__input"
                placeholder="Enter your password..."
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </label>
          </div>

          <button type="submit" className="loginpage__submit">
            Sign in
          </button>
        </form>

        <p className='loginpage__goto'>
          Not registrated?
          <a 
            className='loginpage__goto-link' 
            onClick={goToRegistration}
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}

export default LoginPage