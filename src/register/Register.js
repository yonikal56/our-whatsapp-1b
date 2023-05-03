import Background from "../background/Background.js"
import FormBottom from "../formBottom/FormBottom.js";
import RegisterForm from "../registerForm/RegisterForm";

function Register() {
    return (
        <>
            <Background />
            <div className="col-lg-8 col-sm-10">
                <form className="form-register">
                    <div className="row">
                        <RegisterForm type="text" labelText="User Name:" inputText="Enter your username" />
                        <RegisterForm type="password" labelText="Password:" inputText="Enter your password" />
                        <RegisterForm type="text" labelText="Display Name:" inputText="Enter your display name" />
                        <RegisterForm type="password" labelText="Confirm Password:" inputText="Repeat your password" />
                        <div className="col-md-6 mb-3">
                            <label className="form-label field">Profile Picture:</label>
                            <input className="form-control" type="file" accept="image/*" id="formFile"></input>
                        </div>
                        <div className="col-md-6">
                            <img id="selectedImage" src="photos/a.jpg"></img>
                        </div>
                        <FormBottom button="Register" subComment="Already registered?" sufComment="to login" link="/" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;