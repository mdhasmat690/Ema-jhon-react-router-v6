import React from "react";
import { NavLink } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const {user,googleLogout} = UseAuth()
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/orders">Orders Review</NavLink>
        <NavLink to="/inventory">Manage Inventory</NavLink>
        <NavLink to="/drone">drone</NavLink>
        {user.email ? <><button onClick={googleLogout}>LogOut</button></> : <NavLink to="/login">Login</NavLink>}
        {user.email && <span style={{color: 'white'}}> {user.displayName}</span>}
      </nav>
    </div>
  );
};

export default Header;
