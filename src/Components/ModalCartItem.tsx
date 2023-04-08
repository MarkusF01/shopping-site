import React from "react";
import { CartItemsObject } from "../App";

type Props = {
  element: CartItemsObject;
  handleRemove: (key: string) => void;
  handleQuantity: (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => void;
};

const ModalCartItem: React.FC<Props> = (props) => {
  return (
    <div className="cart-item" key={props.element.name}>
      <div>
        <input
          id="modal-amount-change"
          type="number"
          min={1}
          value={props.element.count}
          onChange={(event) => props.handleQuantity(event, props.element.name)}
        />
        x {props.element.name}        
      </div>


      <div className="price">{props.element.cumPrice()}€</div>
      <button className="material-symbols-outlined" onClick={() => props.handleRemove(props.element.name)}>
        clear
      </button>
    </div>
  );
};

export default ModalCartItem;
