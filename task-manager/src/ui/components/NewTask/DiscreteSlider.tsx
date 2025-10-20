import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { DiscreteSliderType } from "@/type/ComponentTypes";
import { useTheme } from "@/theme/useTheme";
const data = [
  { value: 1, label: "Low Priority" },
  { value: 2, label: "Medium Priority" },
  { value: 3, label: "High Priority" },
];

export default function DiscreteSlider({
  value,
  setValue,
}: DiscreteSliderType) {
  const { colors } = useTheme()
  return (
    <Box sx={{ width: "70%" }}>
      <Slider
        aria-label="Priority"
        value={value}
        onChange={(_, newValue) => setValue(newValue as number)}
        step={1}
        marks={data}
        min={1}
        max={3}
        valueLabelDisplay="auto"
        sx={{
          color: colors.background, '& .MuiSlider-markLabel': {
            color: colors.text,
          },
        }}
      />
    </Box>
  );
}
