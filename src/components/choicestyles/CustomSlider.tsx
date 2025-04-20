"use client";

import { useState } from "react";
import Slider from "@mui/material/Slider";

interface SliderProps {
  updateBudget: (newBudget: number) => void;
}

const CustomSlider = ({ updateBudget }: SliderProps) => {
  const [value, setValue] = useState(2000000);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(typeof newValue === "number" ? newValue : newValue[0]);
    updateBudget(typeof newValue === "number" ? newValue : newValue[0]);
  };

  return (
    <div className="flex flex-col w-full px-4 max-w-2xl ">
      <div className="text-xl sm:text-2xl items-center flex flex-row gap-5 text-[#BD4848]">
        <p className="text-2xl sm:text-3xl">$2M</p>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          shiftStep={30}
          step={500000}
          min={2000000}
          max={20000000}
          valueLabelFormat={(value) => `${value / 1000000}M`}
          sx={{
            color: "#BD4848",
            "& .MuiSlider-thumb": {
              backgroundColor: "#BD4848",
            },
            "& .MuiSlider-track": {
              backgroundColor: "#BD4848",
            },
            "& .MuiSlider-rail": {
              opacity: 0.3,
              backgroundColor: "#BD4848",
            },
          }}
        />
        <p className="text-3xl">$20M</p>
      </div>
    </div>
  );
};

export default CustomSlider;
