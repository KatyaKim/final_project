import React, { useState } from "react";
import Filter from "../Components/Filter/Filter";
import ProductsList from "../Components/Products/ProductsList";
import Navbar from "../Components/Navbar/Navbar";
import { useSearchParams } from "react-router-dom";

const ListPage = () => {
  const max = 3000;
  const min = 20;

  const [searchParams, setSearchParams] = useSearchParams();

  const [type, setType] = useState(searchParams.get("type") || "all");
  const [price, setPrice] = useState(+searchParams.get("price_gte") || +min);

  return (
    <>
      {/* <Navbar /> */}
      <div style={{ display: "flex" }}>
        {/* <Filter
          // value={value}
          // setValue={setValue}
          type={type}
          setType={setType}
          min={min}
          max={max}
          price={price}
          setPrice={setPrice}
          // elem={elem}
        /> */}
        <ProductsList />
      </div>
    </>
  );
};

export default ListPage;
