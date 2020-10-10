import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase.js";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="Am__header">
      <Link to="/amazonApp">
        <img
          className="Am__header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="Am__header__search">
        <input type="text" className="Am__header__search__input" />
        <SearchIcon className="Am__header__search__icon" />
      </div>
      <div className="Am__header__nav">
        <Link to={!user && "/amazonApp/login"}>
          <div
            onClick={handleAuthenticaton}
            className="Am__header__nav__option"
          >
            <span className="Am__header__nav__option__lineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="Am__header__nav__option__lineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/amazonApp/orders">
          <div className="Am__header__nav__option">
            <span className="Am__header__nav__option__lineOne">Returns</span>
            <span className="Am__header__nav__option__lineTwo">& Orders</span>
          </div>
        </Link>
        <div className="Am__header__nav__option">
          <span className="Am__header__nav__option__lineOne">Your</span>
          <span className="Am__header__nav__option__lineTwo">Prime</span>
        </div>
        <Link to="/amazonApp/checkout">
          <div className="Am__header__nav__optionBasket">
            <ShoppingBasketIcon />
            <span className="Am__header__nav__option__lineTwo Am__header__nav__optionBasket__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
