import React from "react";
import { CartItemsObject } from "../App"

type Props = {
  handleModalRender: (cartArray: CartItemsObject[]) => JSX.Element
  cartArray: CartItemsObject[]
  handleModal: () => void
};

const Modal: React.FC<Props> = (props) => {
  return (
    <div id="modal-wrapper">
      <div id="modal-background" onClick={props.handleModal} />
      <div className="modal-area" onClick={() => null}>
        {props.handleModalRender(props.cartArray)}
      </div>

    </div>

  )
};

export default Modal;
