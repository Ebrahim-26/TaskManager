import { TextFieldType } from "@/type/ComponentTypes";
import { TextField } from "@mui/material";
import React from "react";
import { useTheme } from "@/theme/useTheme";
function CustomTextField({
  data,
  setData,
  placeholder,
  multiline,
}: TextFieldType) {
  const { colors } = useTheme();
  return (
    <TextField
      value={data}
      onChange={(e) => setData(e.target.value)}
      multiline={multiline}
      rows={4}
      sx={{
        backgroundColor: colors.field,
        width: "100%",
        borderRadius: "16px",
        color: "white",
        "& .MuiInputBase-input::placeholder": {
          color: colors.text,
          opacity: 1,
        },
        "& .MuiInputBase-input": {
          color: colors.text,
        },
        "& .MuiOutlinedInput-root": {
          borderRadius: "12px",
          "& fieldset": {
            borderColor: "black",
            borderWidth: "2px",
          },
          "&:hover fieldset": {
            borderColor: "black",
          },
          "&.Mui-focused fieldset": {
            borderColor: "black",
            borderWidth: "3px",
          },
        },
      }}
      size="medium"
      placeholder={placeholder}
      variant="outlined"
    />
  );
}

export default CustomTextField;
