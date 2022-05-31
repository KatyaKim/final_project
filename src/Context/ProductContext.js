import axios from "axios";
import React, { createContext, useReducer } from "react";

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

  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
  };

  const getProducts = async () => {
    let { data } = await axios.get(API);
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
