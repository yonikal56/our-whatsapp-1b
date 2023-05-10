import { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import Background from '../background/Background.js';
import FormBottom from '../formBottom/FormBottom.js';
import RegisterForm from '../registerForm/RegisterForm';
import "./Register.css"

function Register({ users, setUsers }) {
    const password = useRef(0);
    const confirmPassword = useRef(0);
    const displayName = useRef(0);
    const username = useRef(0);
    const [profilePicture, setProfilePicture] = useState('photos/no_img.png');

    const regexes = {
        password: new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'),
        username: new RegExp('^[a-zA-Z0-9]{6,}$'),
        displayName: new RegExp('^[a-zA-Z0-9][a-zA-Z0-9 ]{4,}[a-zA-Z0-9]$')
    };

    const [errors, setErrors] = useState({});
    let navigate = useNavigate();

    function validateValue(regex, value, field, error) {
        if (field === "username") {
            let f = false;
            users.forEach((user, index) => {
                if (value === user.username) {
                    f = true;
                }
            });

            if (f) {
                setErrors(prevState => ({
                    ...prevState,
                    [field]: "username already exists, try another"
                }));
                return false;
            }
        }

        let flag = regex.test(value);
        if (!flag) {
            setErrors(prevState => ({
                ...prevState,
                [field]: error
            }));
        } else {
            setErrors(prevState => ({
                ...prevState,
                [field]: ""
            }));
        }
        return flag;
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

    function tryRegister(e) {
        let flag1 = validateValue(regexes.username, username.val ? username.val : "", "username", "username is not valid");
        let flag2 = validateValue(regexes.password, password.val ? password.val : "", "password", "password is not valid");
        let flag3 = validateValue(regexes.displayName, displayName.val ? displayName.val : "", "displayName", "display name is not valid");
        let flag4 = validateValue(new RegExp('^' + password.val + '$'), confirmPassword.val ? confirmPassword.val : "", "confirm", "confirm password does not match password")
        if (flag1 && flag2 && flag3 && flag4) {
            // save user
            let user = {
                username: username.val,
                password: password.val,
                displayName: displayName.val,
                photo: profilePicture
            };
            setUsers(oldArray => [...oldArray, user]);
            navigate('/');
        }
        e.preventDefault();
    }

    function handleFileInputChange(e) {
        const selectedFile = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function (event) {
            setProfilePicture(event.target.result);
        };
        reader.readAsDataURL(selectedFile);
    }

    return (
        <>
            <Background />
            <div className="col-lg-8 col-sm-10">
                <form className="form-register">
                    <div className="row">
                        <RegisterForm
                            type="text"
                            labelText="User Name:"
                            inputText="Enter your username"
                            onChange={(e) => username.val = e.target.value}
                            onKeyUp={(e) => checkField(e, regexes.username, "username", "username is not valid")}
                            error={errors.username}
                        />
                        <RegisterForm
                            type="password"
                            labelText="Password:"
                            inputText="Enter your password"
                            onChange={(e) => password.val = e.target.value}
                            onKeyUp={(e) => checkField(e, regexes.password, "password", "password is not valid")}
                            error={errors.password}
                        />
                        <RegisterForm
                            type="text"
                            labelText="Display Name:"
                            inputText="Enter your display name"
                            onChange={(e) => displayName.val = e.target.value}
                            error={errors.displayName}
                            onKeyUp={(e) => checkField(e, regexes.displayName, "displayName", "display name is not valid")}
                        />
                        <RegisterForm
                            type="password"
                            labelText="Confirm Password:"
                            inputText="Repeat your password"
                            error={errors.confirm}
                            onChange={(e) => confirmPassword.val = e.target.value}
                            onKeyUp={(e) => checkField(e, new RegExp('^' + password.val + '$'), "confirm", "confirm password does not match password")}
                        />
                        {confirmPassword !== password && (
                            <div className="col-md-12 error-message"></div>
                        )}
                        <div className="col-md-6 mb-3">
                            <label className="form-label field">Profile Picture:</label>
                            <input
                                className="form-control"
                                type="file"
                                accept="image/*"
                                id="formFile"
                                onChange={handleFileInputChange}
                            ></input>
                        </div>
                        <div className="col-md-6">
                            <img id="selectedImage" src={profilePicture} alt="avatar"></img>
                            {!profilePicture && (
                                <img id="defaultImage" src="photos/no_img.png" alt="avatar"></img>
                            )}
                        </div>
                        <FormBottom
                            button="Register"
                            subComment="Already registered?"
                            sufComment="to login"
                            onSubmit={tryRegister}
                            link="/"
                        />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;
