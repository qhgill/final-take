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
      <div className="text-xl sm:text-2xl items-center flex flex-row gap-5 text-[#D45555]">
        <p>$2M</p>
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
            color: "#D45555",
            "& .MuiSlider-thumb": {
              backgroundColor: "#D45555",
            },
            "& .MuiSlider-track": {
              backgroundColor: "#D45555",
            },
            "& .MuiSlider-rail": {
              opacity: 0.3,
              backgroundColor: "#D45555",
            },
          }}
        />
        <p>$20M</p>
      </div>

      <p className="mt-4 text-xl sm:text-2xl font-medium text-[#D45555]">
        Current: ${(value / 1000000).toFixed(1)}M
      </p>
    </div>
  );
};

export default CustomSlider;
