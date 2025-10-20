import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { BasicDatePickerProps } from "@/type/ComponentTypes";
import { useTheme } from "@/theme/useTheme";

export default function BasicDatePicker({
  data,
  setData,
}: BasicDatePickerProps) {
  const { colors } = useTheme();

  return (
    <div className="w-full">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Select Date"
          value={data}
          format="DD/MM/YYYY"
          onChange={(newValue) => setData(newValue)}
          sx={{
            width: '100%',
            borderRadius: '16px',
            '& .MuiInputLabel-root': {
              color: colors.text
            },
            backgroundColor: colors.field
          }}
          slotProps={{
            textField: {
              InputProps: {
                sx: {
                  borderRadius: '16px',
                }
              },
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
}