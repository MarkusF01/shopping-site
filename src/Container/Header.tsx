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
        <div id="logo-text">Fresh Harvest</div>
      </div>
      {props.children}
      <button id="checkout-button" onClick={() => props.handleModal()} > <div className="material-symbols-outlined" id="cart-icon">shopping_cart</div> ({props.itemsInCart})</button>
    </div>
  );
};

export default Header;
