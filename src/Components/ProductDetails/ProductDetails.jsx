import React, { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { productContext } from "../../Context/ProductContext";
import BrushIcon from "@mui/icons-material/Brush";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import { Carousel } from "bootstrap";

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
      <>
        {/* carousel start */}
        {/* <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
        {/* carousel start */}
      </>

      <div style={{ display: "flex" }}>
        <div className="previewList">
          <img
            style={{ width: "600px", margin: "auto 100px" }}
            id="imgCards"
            src={detailsObj.img1}
            alt="img"
          />
        </div>

        <div style={{ margin: "auto 100px", fontSize: "25px" }}>
          <p
            style={{ fontSize: "30px", fontWeight: "bold" }}
            className="topicDetailsH3"
          >
            {detailsObj.title}
          </p>
          <p className="topicDetailsPT1">{detailsObj.type}</p>
          <p className="topicDetailsPT1">{detailsObj.description}</p>
          <p
            style={{ fontSize: "30px", fontWeight: "bold" }}
            className="topicDetailsPT1"
          >
            {detailsObj.price}
          </p>

          <div style={{ margin: "50px 30px" }}>
            <NavLink to={`/edit/${id}`}>
              <button
                style={{
                  width: "50px",
                  height: "50px",
                  marginRight: "30px",
                  borderRadius: "10px",
                }}
                className="btnCrud"
                id="edit"
              >
                <BrushIcon />
              </button>
            </NavLink>
            <NavLink to="/list">
              <button
                style={{ width: "50px", height: "50px", borderRadius: "10px" }}
                className="btnCrud"
                id="del"
                onClick={() => deleteTopic(id)}
              >
                <RestoreFromTrashIcon />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
