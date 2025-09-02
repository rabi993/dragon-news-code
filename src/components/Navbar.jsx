import { useContext } from "react";
import userIcon from "../assets/user.png"
import { Link } from 'react-router-dom';
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='flex justify-between'>
            <div className=''>{user.name}</div>
            <div className='nav space-x-5 items-center'>
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className='login flex gap-2 items-career'>
                <div>
                    <img src={userIcon} alt="" />
                </div>
                <Link to="/auth/login" className='btn btn-neutral'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;