import { IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useGlobalContext } from "@/context/GlobalContext";
function Toast() {
  const { toastData, setToastData } = useGlobalContext();
  useEffect(() => {
    const timer = setTimeout(() => {
      setToastData(null);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [toastData]);

  if (!toastData) {
    return <></>;
  }

  const handleClose = () => {
    setToastData(null);
  };

  const toastColor = () => {
    switch (toastData.color) {
      case "red":
        return "#9a0007";
      case "blue":
        return "#007fff";
      case "green":
        return "#188351";
      default:
        return "grey";
    }
  };
  return (
    <div
      className="h-8 items-center  justify-center inline-flex  rounded-md fixed bottom-10 left-10"
      style={{ backgroundColor: toastColor() }}
    >
      <p className="text-white w-full text-center p-4">{toastData?.message}</p>
      <div className="h-full flex items-center justify-center">
        <div className="h-[60%] border-1 border-white/40"></div>
      </div>
      <IconButton onClick={handleClose}>
        <IoMdClose size={20} color="white" />
      </IconButton>
    </div>
  );
}

export default Toast;
