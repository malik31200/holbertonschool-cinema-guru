import { useEffect, useState } from 'react';
import './App.css';
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      return;
    }

    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json', 
          },
        });

        if (!response.ok) {
          return;
        }

        const data = await response.json();

        setIsLoggedIn(true);
        setUserUsername(data.username);
      } catch (error) {
        console.error('Authentication check failed', error);
      }
    };

    checkAuth();
  }, []);

  return <div className='App'>
    {isLoggedIn ? (
      <Dashboard
        userUsername={userUsername}
        setIsLoggedIn={setIsLoggedIn}
      />
    ) : (
      <Authentication
        setIsLoggedIn={setIsLoggedIn}
        setUserUsername={setUserUsername}
      />
    )}
  </div>
}

export default App
