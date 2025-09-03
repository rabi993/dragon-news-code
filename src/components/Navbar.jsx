import { useContext } from "react";
import userIcon from "../assets/user.png"
import { Link } from 'react-router-dom';
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    return (
        <div className='flex justify-between'>
            <div className=''>{user && user.email}</div>
            <div className='nav space-x-5 items-center'>
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className='login flex gap-2 items-career'>
                <div>
                    {
                        user && user?.email ? (
                            <div>
                                <img className="w-5 rounded-full" src={user?.photoURL} alt=""></img>
                                <p>{user.displayName}</p>
                            </div>
                        )
                        :
                        (
                            <img src={userIcon} alt="" />
                        )
                    }
                    
                </div>
                {
                    user && user?.email ?
                    (<button onClick={logOut} className='btn btn-neutral'>Logout</button>)
                    :
                    (<Link to="/auth/login" className='btn btn-neutral'>Login</Link>)
                }
                
            </div>
        </div>
    );
};

export default Navbar;