import React from "react";
import { ProductObject } from "../data/dummyData";

type Props = {
  element: ProductObject;
  handleAddToCart: (newProduct: ProductObject) => void;
};

const Card: React.FC<Props> = (props) => {
  return (
    <div className="product-card" key={props.element.name}>
      <h1>{props.element.name}</h1>
      <h3>Price: {props.element.price}€</h3>
      <h3>Cal: {props.element.cal}</h3>
      <button onClick={() => props.handleAddToCart(props.element)}>Add</button>
    </div>
  );
};

export default Card;
