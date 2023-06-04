import { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { AuthContext } from "../../Providers/AuthProvider";
import useCart from "../../Hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart()
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    const navOption = <>
        <li> <Link to="/menu">Our Menu</Link> </li>
        <li><Link to="/order/salad">Order</Link></li>
        <li><Link to="/secret">Secret</Link></li>
        <li>
            <Link to='/dashboard/mycart'>
                <button className="btn gap-2">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart.length || 0}</div>
                </button>
            </Link>
        </li>

        {
            user ?
                <div className="flex items-center gap-5">
                    <p>{user?.displayName}</p>
                    <img className="w-[40px] h-[40px] rounded-full" src={user?.photoURL} alt="" />
                </div> :
                <div></div>
        }
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOption}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><Link to="/">Bistro Boss</Link></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <><li><Link><button className="btn" onClick={handleLogOut}>Logout</button></Link></li></> :
                        <><li><Link to="/login"><button className="btn">Login</button></Link></li></>
                }
            </div>
        </div>
    );
};

export default Navbar;