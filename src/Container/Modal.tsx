import React from "react";
import { CartItemsObject } from "../App"

type Props = {
  isLightTheme: boolean;
  cartArray: CartItemsObject[]
  handleModal: () => void
  handleModalRender: (cartArray: CartItemsObject[]) => JSX.Element
};

const Modal: React.FC<Props> = (props) => {
  return (
    <div id="modal-wrapper">
      <div id="modal-background" onClick={props.handleModal} />
      <div className={ props.isLightTheme ? "modal-area-light" : "modal-area-dark" } onClick={() => null}>
        {props.handleModalRender(props.cartArray)}
      </div>

    </div>

  )
};

export default Modal;
