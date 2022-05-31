import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { productContext } from "../../Context/ProductContext";
import "./ProductList.css";

const ProductsList = () => {
  const { id } = useParams();
  const { getProducts, products, deleteTopic, handleClick } =
    useContext(productContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      {products.map((item) => (
        <Card
          key={item.id}
          className="card"
          sx={{
            maxWidth: 345,
            borderRadius: "20px",
            margin: "30px 20px",
            width: "400px",
            height: "400px ",
          }}
        >
          <CardMedia
            component="img"
            alt={item.title}
            height="140"
            image={item.img1}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.title}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center", marginTop: "30px" }}>
            {/* <Button className="btn1" size="small" variant="outlined">
              Edit
            </Button> */}
            <Button
              onClick={() => deleteTopic(item.id)}
              className="btn"
              size="small"
              variant="outlined"
            >
              Delete
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
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default ProductsList;
