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
      {props.element.name}
      <label htmlFor="quantity"> Quantity: </label>
      <input
        id="quantity"
        type="number"
        min={1}
        value={props.element.count}
        onChange={(event) => props.handleQuantity(event, props.element.name)}
      />
      <div className="price">{props.element.cumPrice()}€</div>
      <button onClick={() => props.handleRemove(props.element.name)}>
        Remove
      </button>
    </div>
  );
};

export default ModalCartItem;
