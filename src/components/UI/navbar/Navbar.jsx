import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { useContext } from "react";
import { AuthContext } from "../../../context";

function Navbar() {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
    return (
        <div className="navbar">
            <MyButton onClick={() => logout()}>Log out</MyButton>
            <div className="navbar_links">
                <Link to="/about">About Us</Link>
                <Link to="/posts">Posts</Link>
            </div>
        </div>
    );
}

export default Navbar;