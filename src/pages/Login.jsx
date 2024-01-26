import { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context";

function Login() {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = (e) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth' , 'true')

    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="enter name"/>
                <MyInput type="password" placeholder="enter password"/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
}

export default Login;