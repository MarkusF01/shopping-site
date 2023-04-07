import React from "react";
import { CartItemsObject } from "../App"

type Props = {
  handleModalRender: (cartArray: CartItemsObject[]) => JSX.Element
  cartArray: CartItemsObject[]
};

const Modal: React.FC<Props> = (props) => {
  return <div>{props.handleModalRender(props.cartArray)}</div>;
};

export default Modal;
