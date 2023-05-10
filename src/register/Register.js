import { useState } from 'react';
import Background from '../background/Background.js';
import FormBottom from '../formBottom/FormBottom.js';
import RegisterForm from '../registerForm/RegisterForm';
import "./Register.css"

function Register() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [profilePicture, setProfilePicture] = useState('photos/no_img.png');
    
    const regexes = {
        password: new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'),
        username: new RegExp('^[a-zA-Z0-9]{6,}$'),
        displayName: new RegExp('^[a-zA-Z0-9][a-zA-Z0-9 ]{4,}[a-zA-Z0-9]$')
    };

    function checkField(e, regex) {
        if (!regex.test(e.target.value)) {
            if (e.target.classList) {
                e.target.classList.add('error');
            }
        } else {
            if (e.target.classList) {
                e.target.classList.remove('error');
            }
        }
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
                            onKeyUp={(e) => checkField(e, regexes.username)}
                        />
                        <RegisterForm
                            type="password"
                            labelText="Password:"
                            inputText="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyUp={(e) => checkField(e, regexes.password)}
                        />
                        <RegisterForm
                            type="text"
                            labelText="Display Name:"
                            inputText="Enter your display name"
                            onKeyUp={(e) => checkField(e, regexes.displayName)}
                        />
                        <RegisterForm
                            type="password"
                            labelText="Confirm Password:"
                            inputText="Repeat your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            onKeyUp={(e) => checkField(e, new RegExp('^' + password + '$'))}
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
                            link="/"
                        />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;
