import { useState } from 'react'
import { useAppDispatch } from '../../app/hooks';
import { createUser } from '../../api/users';
import * as userActions from '../../features/userSlice';

type Props = {
  goToLogin: () => void,
}

const RegistrationPage: React.FC<Props> = ({ goToLogin }) => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  const handleOnSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username) {
      return;
    }

    if (!email) {
      return;
    }

    if (!password) {
      return;
    }

    if (!name) {
      return;
    }

    const user = await createUser({
      username,
      name,
      email,
      password,
    });

    console.log(user);

    dispatch(userActions.set(user.data));
  }

  return (
    <div className="registration">
      <div className="registration__wrapper">
        <h3 className="registration__title">
          Sign up your account
        </h3>

        <form className="registration__form" onSubmit={handleOnSubmit}>
          <div className="registration__fieldgroup">
            <label>
              Your e-mail
              <input 
                type="email" 
                name="registration__email"
                className="registration__input"
                placeholder="example@mail.com"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </label>
          </div>

          <div className="registration__fieldgroup">
            <label>
              Your username
              <input 
                type="text" 
                name="registration__username"
                className="registration__input"
                placeholder="Enter you username..."
                value={username}
                onChange={(e) => setUsername(e.currentTarget.value)}
              />
            </label>
          </div>

          <div className="registration__fieldgroup">
            <label>
              Your name
              <input 
                type="text" 
                name="registration__username"
                className="registration__input"
                placeholder="Enter you name..."
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
            </label>
          </div>

          <div className="registration__fieldgroup">
            <label>
              Password
              <input 
                type="password" 
                name="registration__password"
                className="registration__input"
                placeholder="Enter your password..."
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </label>
          </div>

          <button type="submit" className="registration__submit">
            Sign up
          </button>
        </form>

        <p className='registration__goto'>
          Already registrated?
          <a 
            className='registration__goto-link' 
            onClick={goToLogin}
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  )
}

export default RegistrationPage