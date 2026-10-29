import { useState } from 'react';
import axios from 'axios';
import './auth.css';
import Button from '../../components/general/Button';
import Login from './Login';
import Register from './Register';

function Authentication({ setIsLoggedIn, setUserUsername }) {
    const [_switch, set_switch] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const route = _switch
            ? '/api/auth/login'
            : '/api/auth/register';

            const response = await axios.post( route, {
                username,
                password,
            });

            const accessToken = response.data.accessToken;

            localStorage.setItem('accessToken', accessToken);
            setUserUsername(username)
            setIsLoggedIn(true);
        } catch (error) {
            console.error('Authentication failed:', error);
        }
    };

    return (
        <div className="authentication">
            <form onSubmit={handleSubmit}>  
                <div className="auth-buttons">
                    <Button
                        label="Sign In"
                        onClick={() => set_switch(true)}
                    />
                    
                    <Button 
                        label="Sign Up"
                        onClick={() => set_switch(false)}
                    />
                </div>
                {_switch ? (
                    <Login
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                    />

                ) : (
                    <Register
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                    />
                )}
            </form>
        </div>
    );
}

export default Authentication;