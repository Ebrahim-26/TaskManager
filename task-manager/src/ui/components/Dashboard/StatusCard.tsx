import React from "react";
import { StatusCardType } from "@/type/ComponentTypes";
import { useGlobalContext } from "@/context/GlobalContext";
import { useTheme } from "@/theme/useTheme";
function StatusCard({ name, id }: StatusCardType) {
  const { colors } = useTheme();
  const { setFilterStatus, data, setToastData } = useGlobalContext();
  const count =
    id == 0 ? data.length : data.filter((item) => item.status === id).length;
  const handleClick = () => {
    setFilterStatus(id)
    setToastData({ message: `Filter: ${name}`, color: 'blue' })
  }
  return (
    <div
      style={{ backgroundColor: colors.taskItem, borderColor: colors.text }}
      onClick={() => handleClick()}
      className="border-l-4 border-b-[7px] hover:border-l-5 hover:border-b-8 active:border-0 shadow-white  cursor-pointer  backdrop-blur-3xl rounded-2xl  border-black/55 w-full h-[6rem] items-center justify-center flex flex-col gap-3"
    >
      <p style={{ color: colors.text }} className="text-2xl">
        {count}
      </p>
      <p style={{ color: colors.text }} className="text-md">
        {name}
      </p>
    </div>
  );
}

export default StatusCard;
