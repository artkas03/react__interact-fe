import { useAppSelector } from "../../app/hooks"

const Header = () => {
  const currentUser = useAppSelector(state => state.user.user);

  return (
    <header className='header'>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-list-item">
            <a href="#" className="header__nav-link">Home</a>
          </li>

          <li className="header__nav-list-item">
            <a href="#" className="header__nav-link">Friend</a>
          </li>

          <li className="header__nav-list-item">
            <a href="#" className="header__nav-link">Profile</a>
          </li>
        </ul>

        <div className="header__email">
          {currentUser?.email}
        </div>
      </nav>
    </header>
  )
}

export default Header