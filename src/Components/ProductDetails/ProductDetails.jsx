import React, { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { productContext } from "../../Context/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();

  const {
    // addProduct,
    // editProductFunc,
    detailsObj,
    getProducts,
    deleteTopic,

    getProductsDetails,
  } = useContext(productContext);

  useEffect(() => {
    getProductsDetails(id);
  }, [id]);
  //   console.log(productObj);

  return (
    <>
      <div>
        <img id="imgCards" src={detailsObj.img1} alt="img" />

        <p className="topicDetailsH3">{detailsObj.title}</p>
        <p className="topicDetailsPT1">{detailsObj.type}</p>
        <p className="topicDetailsPT1">{detailsObj.description}</p>
        <p className="topicDetailsPT1">{detailsObj.price}</p>

        <NavLink to={`/edit/${id}`}>
          <button className="btnCrud" id="edit">
            ✎
          </button>
        </NavLink>
        <NavLink to="/list">
          <button className="btnCrud" id="del" onClick={() => deleteTopic(id)}>
            🗑
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default ProductDetails;
