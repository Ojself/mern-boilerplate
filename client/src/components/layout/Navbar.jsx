import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";

const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated } = auth;
  const dispatch = useDispatch();
  const { logout } = bindActionCreators(actionCreators, dispatch);

  const authLinks = (
    <>
      <NavLink to='/' exact>
        Home
      </NavLink>
      <NavLink to='/countries'>Countries</NavLink>
      <NavLink to='/add-country'>Add country</NavLink>
      <Link to='/' onClick={logout}>
        Logout
      </Link>
    </>
  );
  const guestLinks = (
    <>
      <NavLink to='/' exact>
        Home
      </NavLink>
      <NavLink to='/countries'>Countries</NavLink>
    </>
  );

  return (
    <header className=' bg-black text-white w-full flex justify-center items-end pb-2'>
      <nav className='w-4/5 lg:w-2/3 flex justify-around'>
        {isAuthenticated ? authLinks : guestLinks}
      </nav>
    </header>
  );
};

export default Navbar;
