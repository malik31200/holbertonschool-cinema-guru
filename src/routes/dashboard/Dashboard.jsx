import './dashboard.css';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function Dashboard({ userUsername, setIsLoggedIn }) {
    return(
        <BrowserRouter>
            <div className="dashboard">
                <Header
                    userUsername={userUsername}
                    setIsLoggedIn={setIsLoggedIn}
                />
                <SideBar />
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/watchlater" element={<WatchLater />} />
                    <Route path="*" element={<Navigate to="/home" />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Dashboard;
