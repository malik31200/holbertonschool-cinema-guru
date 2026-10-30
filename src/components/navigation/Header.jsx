import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function Header({ userUsername, setIsLoggedIn }) {
    const logout = () => {
        localStorage.removeItem('accessToken');
        setIsLoggedIn(false);
    }
    return (
        <nav className="header">
            <img
                src="https://picsum.photos/100/100"
                alt="user avatar"
            />

            <p>Welcome, {userUsername}</p>

            <span onClick={logout}>
                <FontAwesomeIcon icon={faRightFromBracket} />
                {' '}Logout
            </span>
        </nav>
    );
}

export default Header;
