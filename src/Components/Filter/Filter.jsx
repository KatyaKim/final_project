import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Slider } from "@mui/material";
import { Box } from "@mui/system";

const Filter = ({
  type,
  setType,
  min,
  max,
  price,
  setPrice,
  price2,
  setPrice2,
}) => {
  const [totalPrice, setTotalPrice] = useState([price, price2]);
  const handleChange = (e) => {
    setPrice(e.target.value[0]);
    setPrice2(e.target.value[1]);
    setTotalPrice(e.target.value);
    console.log(totalPrice);
  };

  function valuetext(value) {
    return value;
  }
  return (
    <div className="filter">
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <FormControl>
          <FormLabel
            sx={{ fontSize: "30px", fontWeigth: "bold" }}
            id="demo-radio-buttons-group-label"
          >
            Фильтрация
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <FormControlLabel
              value="Laptop"
              control={<Radio />}
              label="Laptop"
            />
            <FormControlLabel value="Phone" control={<Radio />} label="Phone" />
            <FormControlLabel
              value="Accessories"
              control={<Radio />}
              label="Accessories"
            />
            <FormControlLabel value="all" control={<Radio />} label="All" />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <Box width={250}>
          {/* <Slider
            defaultValue={0}
            min={min}
            max={max}
            aria-label="Default"
            valueLabelDisplay="auto"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          /> */}

          <Slider
            sx={{
              marginLeft: "17px",
              width: "200px",
              marginTop: "50px",
              alignItems: "center",
            }}
            getAriaLabel={() => "Minimum distance"}
            value={totalPrice}
            onChange={handleChange}
            max={2500}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
          />
        </Box>
      </div>
    </div>
  );
};

export default Filter;
