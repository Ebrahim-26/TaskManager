import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { DiscreteSliderType, StatusCardType } from "@/type/ComponentTypes";
import { useTheme } from "@/theme/useTheme";
import { priorityData } from "@/data/mockData";

const formatData = (data: StatusCardType[]) =>
  data.map((item) => ({
    value: item.id,
    label: item.name,
  }));

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
        marks={formatData(priorityData)}
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
