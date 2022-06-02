import React, { useContext, useEffect } from "react";
import { cartContext } from "../../Context/CartContext";

const Cart = () => {
  const { cart, getCart, deleteCartProduct } = useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "70px",
        // width: "800px",
      }}
    >
      <table>
        <thead>
          <tr style={{ fontSize: "20px", marginBottom: "50px" }}>
            <th>Фото</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Сумма продукта</th>
          </tr>
        </thead>
        <tbody>
          {cart.products
            ? cart.products.map((elem) => (
                <tr>
                  <td>
                    <img width={100} src={elem.item.img1} alt="phone" />
                  </td>
                  <td
                  // style={{
                  //   display: "flex",
                  //   justifyContent: "center",
                  //   marginTop: "40px",
                  // }}
                  >
                    {elem.item.title}
                  </td>
                  <td
                  // style={{
                  //   display: "flex",
                  //   justifyContent: "center",
                  //   marginTop: "40px",
                  // }}
                  >
                    {elem.item.price}
                  </td>
                  <td
                  // style={{
                  //   display: "flex",
                  //   justifyContent: "center",
                  //   marginTop: "40px",
                  // }}
                  >
                    1
                  </td>
                  <td>200</td>
                  <td>
                    <button onClick={() => deleteCartProduct()}>Delete</button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
