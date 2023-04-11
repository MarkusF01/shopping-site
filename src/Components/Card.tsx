import React, { useEffect, useState } from "react";
import { ProductObject } from "../data/dummyData";

type Props = {
  element: ProductObject;
  isLightTheme: boolean;
  handleAddToCart: (newProduct: ProductObject, amount: number) => void;
};

function getImageUrl(name: string) {
  return new URL(`../data/product-img/${name}.jpg`, import.meta.url).href
}

const Card: React.FC<Props> = (props) => {
  const [amount, setAmount] = useState(1);

  const handleAmountChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAmount(parseInt(event.target.value));
  }

  return (
    <div className=
      {
        props.element.category == "fruit" ?
          props.isLightTheme ? "product-card-fruit-light" : "product-card-fruit-dark"
          :
          props.isLightTheme ? "product-card-veg-light" : "product-card-veg-dark" 
      }
      key={props.element.name}>
      <img id="product-img" src={getImageUrl(props.element.name.toLowerCase().replace(/\s/g, ""))} />
      <div className="product-card-description">
        <div id="card-name">{props.element.name}</div>
        <div>Calories: {props.element.cal}</div>
        <div>Origin: AT</div>
        <div id="card-bottom">
          <div id="card-price">{props.element.price}€/kg</div>
          <div id="card-add">
            <select id={props.isLightTheme ? "card-select-light" : "card-select-dark" } defaultValue={"1"} name="amount" onChange={handleAmountChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
            <button
              className="material-symbols-outlined"
              id="card-add-button"
              onClick={() => props.handleAddToCart(props.element, amount)}>
              add_shopping_cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
