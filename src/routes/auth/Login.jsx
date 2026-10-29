import './auth.css';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';

function Login({
    username,
    password,
    setUsername,
    setPassword,
}) {
    return (
        <div className="login">
            <Input
                label="Username"
                type="text"
                value={username}
                setValue={setUsername}
            />
            <Input
                label="Password"
                type="password"
                value={password}
                setValue={setPassword}
            />

            <Button
                label="Sign In"
                className="button-sign-in"
                onClick={() => {}}

            />

        </div>
    );
}

export default Login;
