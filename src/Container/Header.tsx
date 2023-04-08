import SearchBar from "../Components/SearchBar";
import React from "react";
import logo from '../assets/logo.png';

type Props = {
  children: React.ReactElement;
  itemsInCart: number;
  handleModal: () => void;
};

const Header: React.FC<Props> = (props) => {
  return (
    <div className="header">
      <div id="logo">
        <img id="logo-img" src={logo} alt="logo" />
        <div id="logo-text">Healthy Harvest</div>
      </div>
      {props.children}
      <div id="header-icons">
        <button className="material-symbols-outlined">dark_mode</button>
        <button className="material-symbols-outlined">account_circle</button>
        <button id="shopping-cart-button" onClick={() => props.handleModal()} >
          <div className="material-symbols-outlined" id="cart-icon">shopping_cart</div>
          <div id="amount-in-cart">{props.itemsInCart}</div>
        </button>
      </div>

    </div>
  );
};

export default Header;
