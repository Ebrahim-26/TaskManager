import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTheme } from "@/theme/useTheme";
type BasicSelectType = {
  title: string;
  data: dataType[];
  value: number | "";
  setValue: React.Dispatch<React.SetStateAction<number | "">>;
};

type dataType = {
  id: number;
  name: string;
};
export default function BasicSelect({
  title,
  data,
  value,
  setValue,
}: BasicSelectType) {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(Number(event.target.value));
  };
  const { colors } = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "16px",
        backgroundColor: colors.field,
        "& .MuiInputLabel-root": {
          color: colors.text,
        },
        "& .MuiOutlinedInput-root": {
          borderRadius: "16px",
          "& fieldset": {
            borderColor: "black",
            borderWidth: "2px",
          },
          "&:hover fieldset": {
            borderColor: "black",
            borderWidth: 1,
          },
          "&.Mui-focused fieldset": {
            borderColor: "black",
            borderWidth: "3px",
          },
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "black",
        },
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value.toString()}
          label={title}
          onChange={handleChange}
          sx={{ color: colors.text }}
        >
          {data.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
