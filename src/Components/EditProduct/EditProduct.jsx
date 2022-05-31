import { Button, TextField } from "@mui/material";
import { productContext } from "../../Context/ProductContext";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();

  const { editProductFunc, getProductsDetails, detailsObj } =
    useContext(productContext);

  const [editTitle, setEditTitle] = useState(detailsObj.title);
  const [editType, setEditType] = useState(detailsObj.type);
  const [editDescription, setEditDescription] = useState(
    detailsObj.description
  );
  const [editPrice, setEditPrice] = useState(detailsObj.price);
  const [editImg1, setEditImg1] = useState(detailsObj.img1);
  const [editImg2, setEditImg2] = useState(detailsObj.img2);
  const [editImg3, setEditImg3] = useState(detailsObj.img3);

  useEffect(() => {
    getProductsDetails(id);
  }, []);

  const handleClick = () => {
    let editedProductObj = {
      title: editTitle,
      type: editType,
      description: editDescription,
      price: editPrice,
      img1: editImg1,
      img2: editImg2,
      img3: editImg3,
    };
    editProductFunc(id, editedProductObj);
  };

  return (
    <form className="inp">
      <div className="inputs">
        <div>
          <TextField
            id="outlined-basic"
            label="Название"
            variant="outlined"
            value={editTitle}
            name="title"
            onChange={(e) => setEditTitle(e.target.value)}
            className="inp1"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Тип"
            variant="outlined"
            value={editType}
            name="type"
            onChange={(e) => setEditType(e.target.value)}
            className="inp2"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Описание"
            variant="outlined"
            value={editDescription}
            name="description"
            onChange={(e) => setEditDescription(e.target.value)}
            className="inp3"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Цена"
            variant="outlined"
            value={editPrice}
            name="price"
            onChange={(e) => setEditPrice(e.target.value)}
            className="inp4"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Изображение 1"
            variant="outlined"
            value={editImg1}
            name="img1"
            onChange={(e) => setEditImg1(e.target.value)}
            className="inp5"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Изображение 2"
            variant="outlined"
            value={editImg2}
            name="img2"
            onChange={(e) => setEditImg2(e.target.value)}
            className="inp6"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Изображение 3"
            variant="outlined"
            value={editImg3}
            name="img3"
            onChange={(e) => setEditImg3(e.target.value)}
            className="inp7"
          />
        </div>
        <div>
          <NavLink to="/list">
            <Button
              onClick={handleClick}
              type="submit"
              variant="contained"
              className="btnSave"
            >
              Save
            </Button>
          </NavLink>
        </div>
      </div>
    </form>
  );
};

export default EditProduct;
