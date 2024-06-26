import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";


const Nav = () => {

    const { user, loginOut, clearCookie } = useContext(AuthContext);

    const handelLogout = () =>{
        clearCookie();
        loginOut();
        
    }

    const navLinks = <>

        <NavLink className='mx-4 text-lg font-semibold' to='/'>Home</NavLink>

        {user ? <div>
            <NavLink className='mx-4 text-lg font-semibold' to='/bookings'>My Bookings</NavLink>
            <NavLink onClick={handelLogout} className='mx-4 text-lg font-semibold' to='/login'>Log Out</NavLink>
        </div>
            : <div>
                <NavLink className='mx-4 text-lg font-semibold' to='/login'>Login</NavLink>
                <NavLink className='mx-4 text-lg font-semibold' to='/signUp'>Sign Up</NavLink>
            </div>
        }


    </>

    return (
        <div className="navbar bg-base-100 h-28 mb-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Nav;