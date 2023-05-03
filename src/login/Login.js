import Background from "../background/Background.js"
import FormBottom from "../formBottom/FormBottom.js"
import LoginForm from "../loginForm/LoginForm.js";

function Login() {
    return (
        <>
            <Background />
            <form className="row g-3">
                <LoginForm type="text" labelText="User Name:" inputText="Enter your username" />
                <LoginForm type="password" labelText="Password:" inputText="Enter your password" />
                <FormBottom button="Login" subComment="Not registed?" sufComment="to register" link="/register" />
            </form>
        </>
    );
}

export default Login;
