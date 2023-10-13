import { useAppSelector } from './app/hooks';
import HomePage from './pages/HomePage/HomePage';
import UnauthorizedPage from './pages/UnauthorizedPage/UnauthorizedPage';

const App = () => {
  const user = useAppSelector(state => state.user.user);

  return (
    <div>
      {user ? (
        <HomePage />
      ) : (
        <UnauthorizedPage />
      )}
    </div>
  )
}

export default App;
