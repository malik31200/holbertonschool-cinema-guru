import './auth.css';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';

function Register({
    username,
    password,
    setUsername,
    setPassword,
}) {
    return (
        <div className="register">
            <Input
                label="Username"
                type="text"
                value={username}
                setValue={setUsername}
            />

            <Input
                label="Password  "
                type="password"
                value={password}
                setValue={setPassword}
            />

            <Button
                label="Sign Up"
                className="button-sign-up"
                type="submit"
            />
        </div>
    );
}

export default Register;
