import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Background from "../background/Background.js"
import FormBottom from "../formBottom/FormBottom.js"
import RegisterForm from "../registerForm/RegisterForm.js";
import "./Login.css"

function Login({ users, setCurrentUser }) {
    const password = useRef(0);
    const username = useRef(0);

    function tryLogin(e) {
        let flag1 = validateValue(regexes.username, username.val ? username.val : "", "username", "username is not valid");
        let flag2 = validateValue(regexes.password, password.val ? password.val : "", "password", "password is not valid");
        if (flag1 && flag2) {
            let f = false;
            users.forEach((user, index) => {
                if (username.val === user.username && password.val === user.password) {
                    f = true;
                }
            });
            // login
            if (f) {
                setCurrentUser(username.val);
                navigate('/messages');
            } else {
                setErrors(prevState => ({
                    ...prevState,
                    ["password"]: "password is wrong!"
                }));
            }
        }
        e.preventDefault();
    }

    const regexes = {
        password: new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'),
        username: new RegExp('^[a-zA-Z0-9]{6,}$')
    };

    const [errors, setErrors] = useState({});
    let navigate = useNavigate();

    function validateValue(regex, value, field, error) {
        let flag = regex.test(value);
        if (!flag) {
            setErrors(prevState => ({
                ...prevState,
                [field]: error
            }));
            return false;
        } else {
            setErrors(prevState => ({
                ...prevState,
                [field]: ""
            }));
        }

        if (field === "username") {
            let f = false;
            users.forEach((user, index) => {
                if (value === user.username) {
                    f = true;
                }
            });

            if (!f) {
                setErrors(prevState => ({
                    ...prevState,
                    [field]: "username does not exists"
                }));
                return false;
            }
        }
        return true;
    }

    function checkField(e, regex, field, error) {
        if (!validateValue(regex, e.target.value, field, error)) {
            if (e.target.classList) {
                e.target.classList.add('error');
            }
        } else {
            if (e.target.classList) {
                e.target.classList.remove('error');
            }
        }
    }

    return (
        <>
            <Background />
            <form className="row g-3">
                <RegisterForm type="text" labelText="User Name:" inputText="Enter your username" error={errors.username}
                    onChange={(e) => username.val = e.target.value}
                    onKeyUp={(e) => checkField(e, regexes.username, "username", "username is not valid")} />
                <RegisterForm type="password" labelText="Password:" inputText="Enter your password" error={errors.password}
                    onChange={(e) => password.val = e.target.value}
                    onKeyUp={(e) => checkField(e, regexes.password, "password", "password is not valid")} />
                <FormBottom button="Login" subComment="Not registed?" sufComment="to register" link="/register" onSubmit={tryLogin} />
            </form>
        </>
    );
}

export default Login;
