import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField, Tooltip } from "@mui/material";
import { useTheme } from "@/theme/useTheme";
import { useGlobalContext } from "@/context/GlobalContext";
import { ModalType } from "@/type/ComponentTypes";

export default function DockModal({
  passedData,
  setPassedData,
  title,
  TriggerIcon,
  iconSize,
}: ModalType) {
  const { setToastData } = useGlobalContext();
  const { colors } = useTheme();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(passedData);
  const [disable, setDisable] = useState<boolean>();
  const style = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: colors.field,
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const handleOpen = () => {
    setData(passedData);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSave = () => {
    setPassedData(data);
    setOpen(false);
    setToastData({ message: "Saved", color: "blue" });
  };

  const handleAdd = () => {
    setData((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: "",
      },
    ]);
  };

  useEffect(() => {
    const isEmpty = data.find((item) => item.name === "");
    if (isEmpty) {
      setDisable(true);
    } else setDisable(false);
  }, [data]);

  return (
    <div>
      <Tooltip title={`Add New ${title}`}>
        <TriggerIcon
          size={iconSize}
          color={colors.icon}
          onClick={handleOpen}
          className="cursor-pointer"
        />
      </Tooltip>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="flex flex-col gap-2">
            <p
              className="text-xl text-center mb-4 font-bold"
              style={{ color: colors.text }}
            >
              {title.toUpperCase()}
            </p>
            {data.map((item) => (
              <TextField
                key={item.id}
                size="small"
                placeholder={`Enter ${title}`}
                sx={{
                  backgroundColor: colors.field,
                  width: "100%",
                  color: "white",
                  "& .MuiInputBase-input::placeholder": {
                    color: "grey",
                    opacity: 1,
                  },
                  "& .MuiInputBase-input": {
                    color: colors.text,
                  },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "5px",
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
                value={item.name}
                onChange={(e) =>
                  setData((prev) =>
                    prev.map((a) =>
                      a.id === item.id ? { ...a, name: e.target.value } : a
                    )
                  )
                }
              />
            ))}

            {data.length >= 5 ? (
              <p className="text-left text-sm" style={{ color: colors.text }}>
                *Only 5 Fields can be added
              </p>
            ) : (
              <Button
                disabled={disable}
                sx={{
                  color: colors.background,
                  background: disable ? "grey" : colors.text,
                  textTransform: "none",
                  fontWeight: "bold",
                  marginTop: 2,
                }}
                onClick={handleAdd}
              >
                Add Field
              </Button>
            )}

            <div className="flex justify-end gap-2 mt-4">
              <Button
                sx={{
                  textTransform: "none",
                  borderColor: colors.text,
                  color: colors.text,
                }}
                variant="outlined"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                disabled={disable}
                sx={{
                  textTransform: "none",
                  backgroundColor: disable ? "grey" : colors.text,
                  color: colors.background,
                }}
                variant="contained"
                onClick={handleSave}
              >
                Save
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
