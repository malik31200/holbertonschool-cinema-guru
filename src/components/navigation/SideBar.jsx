import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './navigation.css';
import Activity from '../Activity';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faHeart,
    faClock
} from '@fortawesome/free-solid-svg-icons';

function SideBar () {
    const [selected, setSelected] = useState("Home");
    const [small, setSmall] = useState(true);
    const [activities, setActivities] = useState([]);
    const [showActivities, setShowActivities] = useState(false);

    const navigate = useNavigate();

    const setPage = (pageName) => {
        setSelected(pageName);

        if (pageName === 'Home') {
            navigate('/home');
        } else if (pageName === 'Favorites') {
            navigate('/favorites');
        } else if (pageName === 'Watch Later') {
            navigate('/watchlater');
        }
    };

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const token = localStorage.getItem('accessToken');

                const response = await axios.get('/api/activity', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setActivities(response.data);

            } catch (error) {
                console.error('Error fetching activities:', error);
            }
        };
        fetchActivities();
    }, []);

    return (
        <nav
            className={`sidebar ${small ? 'sidebar-small' : 'sidebar-large'}`}
            onMouseEnter={() => setSmall(false)}
            onMouseLeave={() => setSmall(true)}
        >  
            <ul className="sidebar-menu">
                <li
                    className={selected === "Home" ? "active" : ""}
                    onClick={() => setPage("Home")}>
                    <FontAwesomeIcon icon={faHouse} />
                    <span>Home</span>
                </li>

                <li
                    className={selected === "Favorites" ? "active" : ""}
                    onClick={() => setPage("Favorites")}>
                    <FontAwesomeIcon icon={faHeart}/>
                    <span>Favorites</span>
                </li>

                <li
                    className={selected === "Watch Later" ? "active" : ""}
                    onClick={() => setPage("Watch Later")}>
                    <FontAwesomeIcon icon={faClock}/>
                    <span>Watch Later</span>
                </li>
            </ul>

            <div className="latest-activities">
                <h3>Latest Activities</h3>

                <ul className="activity-list">
                    {activities.slice(0, 10).map((activity) => (
                        <Activity key={activity.id} activity={activity} />
                    ))}
                </ul>
            </div>
        </nav>
    )
};

export default SideBar;
