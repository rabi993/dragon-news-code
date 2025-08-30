import userIcon from "../assets/user.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div className=''></div>
            <div className='nav space-x-5 items-center'>
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className='login flex gap-2 items-career'>
                <div>
                    <img src={userIcon} alt="" />
                </div>
                <button className='btn btn-neutral'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;