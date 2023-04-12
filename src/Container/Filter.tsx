import React from "react";
import { UserFilterObject as UserFilterObject } from "../App";

type Props = {
  changeFilterObject: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  currentFilterValues: UserFilterObject;
};

const Filter: React.FC<Props> = (props) => {
  return (
    <div className="filter-area">
      <h2>Filters:</h2>
      <label htmlFor="price">
        Max price: {props.currentFilterValues.price}€
      </label>
      <input
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          props.changeFilterObject(event)
        }
        id="price"
        type="range"
        min="0"
        max="7"
        step="0.1"
        defaultValue={10}
      />
      <label htmlFor="cal">
        Calories: {props.currentFilterValues.cal} kcal
      </label>
      <input
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          props.changeFilterObject(event)
        }
        id="cal"
        type="range"
        min="0"
        max="150"
        step="1"
        defaultValue={150}
      />
      <label htmlFor="category">Category</label>
      <select defaultValue={"mixed"}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          props.changeFilterObject(event)
        }
        name="categories"
        id="category"
      >
        <option value="fruit">Fruits</option>
        <option value="vegetable">Vegetables</option>
        <option value="mixed">
          Mixed
        </option>
      </select>
    </div>
  );
};

export default Filter;
