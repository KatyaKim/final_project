import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./MainRoutes";
// import Carousel from "./Components/Carousel/Carousel";
import PrimarySearchAppBar from "./Components/Navbar/Navbar";
import ProductContextProvider from "./Context/ProductContext";
import AuthContextProvider from "./Context/AuthContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ProductContextProvider>
          <PrimarySearchAppBar />
          <MainRoutes />
          {/* <Carousel /> */}
        </ProductContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
