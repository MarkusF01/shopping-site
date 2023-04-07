import { useState, useEffect } from "react";
import Header from "./Container/Header";
import Filter from "./Container/Filter";
import CardArea from "./Container/CardArea";
import SearchBar from "./Components/SearchBar";
import "./App.css";
import { dummyData, ProductObject } from "./data/dummyData";
import Card from "./Components/Card";
import Modal from "./Components/Modal";
import ModalCartItem from "./Components/ModalCartItem";

export type UserFilterObject = {
  category: string;
  price: number;
  cal: number;
};

export type CartItemsObject = {
  name: string;
  count: number;
  price: number;
  cumPrice: () => number;
};

function App() {
  const [userFilter, setUserFilter] = useState({
    category: "mixed",
    price: 10,
    cal: 0,
  } as UserFilterObject);

  const [productArray, setProductArray] = useState<ProductObject[]>(dummyData);
  const [cartArray, setCartArray] = useState<ProductObject[]>([]);
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [groupedCartArray, setGroupedCartArray] = useState<CartItemsObject[]>(
    []
  );

  useEffect(() => {
    setProductArray(createFilterdArray(dummyData));
  }, [userFilter, inputSearchValue]);

  useEffect(() => {
    setCartItemsCount(cartArray.length);
  }, [cartArray]);

  useEffect(() => {
    groupCartItems(cartArray);
  }, [cartArray]);

  const changeFilterObject = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setUserFilter({
      ...userFilter,
      [event.target.id]:
        event.target.id == "category"
          ? event.target.value
          : parseFloat(event.target.value),
    });
  };

  const createFilterdArray = (data: ProductObject[]): ProductObject[] => {
    const filteredArray = data.filter((product) => {
      const { category, price, cal } = userFilter;

      if (
        !product.name
          .toLocaleLowerCase()
          .startsWith(inputSearchValue.toLocaleLowerCase())
      ) {
        return false;
      }
      if (category !== "mixed" && product.category !== category) {
        return false;
      }
      if (product.price > price || product.cal < cal) {
        return false;
      }
      return true;
    });
    return filteredArray;
  };

  const createCartItemsObject = (currentItem: ProductObject) => {
    return {
      name: currentItem.name,
      price: currentItem.price,
      count: 1,
      cumPrice: function () {
        return this.count * this.price;
      },
    };
  };

  const groupCartItems = (cartArray: ProductObject[]) => {
    const groupedArray = cartArray.reduce(
      (groupedCartArray: CartItemsObject[], currentItem: ProductObject) => {
        const index = customFindIndex(groupedCartArray, currentItem.name);

        index >= 0
          ? (groupedCartArray[index].count += 1)
          : groupedCartArray.push(createCartItemsObject(currentItem));

        return groupedCartArray;
      },
      []
    );
    setGroupedCartArray(groupedArray);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearchValue(event.target.value);
  };

  const handleAddToCart = (newProduct: ProductObject, amount: number) => {
    const newItems = new Array(amount).fill(newProduct);
    setCartArray((prevArray) => [...prevArray, ...newItems]);
  };

  const handleModal = () => {
    setShowModal((prevModal) => !prevModal);
  };

  const handleRender = (array: Array<ProductObject>): JSX.Element => {
    return (
      <div className="card-area">
        {array.map((element) => (
          <Card
            key={element.name}
            element={element}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    );
  };

  const customFindIndex = (
    array: CartItemsObject[] | ProductObject[],
    key: string
  ): number => {
    return array.findIndex((item) => item.name === key);
  };

  const handleRemove = (key: string) => {
    const tempCartArray = cartArray.filter((object) => object.name != key);
    setCartArray(tempCartArray);
  };

  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    let index = customFindIndex(cartArray, key);

    let restItemArray = cartArray.filter(
      (element) => element.name !== cartArray[index].name
    );

    const changedItemArray = Array(parseInt(event.target.value)).fill(
      cartArray[index]
    );

    const newCartArray = restItemArray
      .slice(0, index)
      .concat(changedItemArray)
      .concat(restItemArray.slice(index));

    setCartArray(newCartArray);
  };

  const getTotalSum = () => {
    const total = groupedCartArray.reduce(
      (totalSum: number, currentItem: CartItemsObject) => {
        return totalSum + currentItem.cumPrice();
      },
      0
    );
    return total;
  };

  const handleCheckout = () => {
    alert("call banking");
  };

  const handleModalRender = (array: CartItemsObject[]): JSX.Element => {
    return (
      <div className="modal-area">
        {array.map((element) => (
          <ModalCartItem
            key={element.name}
            element={element}
            handleRemove={handleRemove}
            handleQuantity={handleQuantityChange}
          />
        ))}
        <hr />
        <div className="total-row">
          <div>Item Count: {cartItemsCount}</div>
          <div>Total: {getTotalSum()}€</div>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    );
  };

  return (
    <div id="wrapper">
      <Header itemsInCart={cartItemsCount} handleModal={handleModal}>
        <SearchBar handleSearchChange={handleSearchChange} />
      </Header>

      {showModal ? (
        <Modal
          handleModalRender={handleModalRender}
          cartArray={groupedCartArray}
        />
      ) : null}

      <div className="main-area">
        <Filter
          changeFilterObject={changeFilterObject}
          currentFilterValues={userFilter}
        />
        <CardArea productArray={productArray} handleRender={handleRender} />
      </div>
      <footer>© 2023 Copyright - Markus Fehringer </footer>


    </div>
  );
}

export default App;
