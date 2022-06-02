import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import { productContext } from "../../Context/ProductContext";
import "./ProductList.css";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import Filter from "../Filter/Filter";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { cartContext } from "../../Context/CartContext";

const max = 3000;
const min = 10;

const ProductsList = () => {
  const { id } = useParams();
  const { getProducts, products, deleteTopic, handleClick, a } =
    useContext(productContext);

  const { addProductToCart } = useContext(cartContext);

  const [searchParams, setSearchParams] = useSearchParams();
  // Хук useSearchParams предназначен для чтения и изменения строки запроса в URL для текущего маршрута. По аналогии с хуком useState возвращает значение и функцию для изменения этого значения.
  //   https://tokmakov.msk.ru/blog/item/678#:~:text=useSearchParams,%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8E%20%D0%B4%D0%BB%D1%8F%20%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F%20%D1%8D%D1%82%D0%BE%D0%B3%D0%BE%20%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F.

  const [type, setType] = useState(searchParams.get("type") || "all");
  const [price, setPrice] = useState(+searchParams.get("price_gte") || +min);
  const [price2, setPrice2] = useState(+searchParams.get("price_lte") || +max);

  const paramsWithType = () => {
    return {
      type: type,
      q: searchParams.get("q") || "",
      price_gte: price,
      // price_lte: price2,
    };
  };

  const paramsNoType = () => {
    return {
      q: searchParams.get("q") || "",
      price_gte: price,
      price_lte: price2,
    };
  };

  useEffect(() => {
    if (searchParams.get("type")) {
      setSearchParams(paramsWithType());
    } else {
      setSearchParams(paramsNoType());
    }
  }, []);

  useEffect(() => {
    getProducts();
    if (type === "all") {
      setSearchParams(paramsNoType());
    } else {
      setSearchParams(paramsWithType());
    }
  }, [type, searchParams, price, price2]);

  return (
    <>
      <Filter
        type={type}
        setType={setType}
        min={min}
        max={max}
        price={price}
        setPrice={setPrice}
        price2={price2}
        setPrice2={setPrice2}
      />
      <div className="container">
        {products.map((item) => (
          <Card
            key={item.id}
            className="card"
            sx={{
              maxWidth: 345,
              borderRadius: "20px",
              margin: "40px 20px",
              width: "400px",
              height: "500px ",
            }}
          >
            <CardMedia
              sx={{
                width: "300px",
                height: "300px",
                alignItems: "center",
                margin: "auto",
              }}
              component="img"
              alt={item.title}
              height="140"
              image={item.img1}
            />
            <CardContent sx={{ marginLeft: "20px" }}>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>

              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  marginTop: "20px",
                }}
                variant="body2"
                color="text.secondary"
              >
                {item.price}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                justifyContent: "center",
                marginBottom: "30px",
              }}
            >
              {/* <Button className="btn1" size="small" variant="outlined">
              Edit
            </Button> */}
              <Button
                sx={{
                  marginRight: "20px",
                }}
                onClick={() => deleteTopic(item.id)}
                className="btn"
                size="small"
                variant="outlined"
              >
                Delete <RestoreFromTrashIcon />
              </Button>
              <NavLink to={`/details/${item.id}`}>
                <Button
                  onClick={handleClick}
                  className="btn"
                  size="small"
                  variant="outlined"
                >
                  Preview
                </Button>
              </NavLink>

              <Button onClick={(e) => addProductToCart(item)}>
                <AddShoppingCartIcon />
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
