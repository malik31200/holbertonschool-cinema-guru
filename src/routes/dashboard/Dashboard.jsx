import './dashboard.css';
import Header from '../../components/navigation/Header';

function Dashboard({ userUsername, setIsLoggedIn }) {
    return(
        <div className="dashboard">
            <Header
                userUsername={userUsername}
                setIsLoggedIn={setIsLoggedIn}
            />
        </div>
    )
}

export default Dashboard;
