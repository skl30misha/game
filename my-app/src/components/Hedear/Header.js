import React from 'react';
import style from "./Header.css"
import {Link} from "react-router-dom";
import CartBlock from "../CartBlock/CartBlock";

const Header = () => {
    return (
        <div className="header">
            <div className="wrapper">
                <Link to="/"  className="header__store-title" >  Game store </Link>
            </div>
            <div className=" wrapper header__cart-btn-wrapper">
                <CartBlock/>
            </div>
        </div>
    );
};

export default Header;