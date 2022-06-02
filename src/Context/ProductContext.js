import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useLocation } from "react-router-dom";

export const productContext = createContext();

const API = "http://localhost:8000/products";

const INIT_STATE = {
  products: [],
  productObj: {},
};

const reduser = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCT_DETAILS":
      return { ...state, productObj: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduser, INIT_STATE);

  const location = useLocation();
  //   Хук useLocation возвращает объект location, представляющий текущий URL. Его можно рассматривать как useState, который возвращает новое местоположение при каждом изменении URL. Этот хук можно использовать, например, чтобы вызвать событие просмотра новой страницы для инструмента веб-аналитики.

  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
  };

  const getProducts = async () => {
    let { data } = await axios.get(`${API}${location.search}`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  const getProductsDetails = async (id) => {
    let { data } = await axios.get(`${API}/${id}`);
    dispatch({
      type: "GET_PRODUCT_DETAILS",
      payload: data,
    });
  };

  const deleteTopic = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  const editProductFunc = async (id, editedProduct) => {
    await axios.patch(`${API}/${id}`, editedProduct);
    getProducts();
  };

  return (
    <productContext.Provider
      value={{
        products: state.products,
        detailsObj: state.productObj,
        addProduct,
        getProducts,
        deleteTopic,
        editProductFunc,

        getProductsDetails,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
