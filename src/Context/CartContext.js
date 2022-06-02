import React, { createContext, useReducer } from "react";

export const cartContext = createContext();

const INIT_STATE = {
  cart: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CART":
      return { ...state, cart: action.payload };

    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addProductToCart = (productItem) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
      };
    }

    let newProduct = {
      item: productItem,
    };

    let filterCart = cart.products.filter((elem) => {
      return elem.item.id === productItem.id;
    });

    if (filterCart.length > 0) {
      cart.products = cart.products.filter((elem) => {
        return elem.item.id !== productItem.id;
      });
    } else {
      cart.products.push(newProduct);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
      };
    }
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  };

  const deleteCartProduct = () => {
    localStorage.removeItem("cart");
  };

  return (
    <cartContext.Provider
      value={{ cart: state.cart, addProductToCart, getCart, deleteCartProduct }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
