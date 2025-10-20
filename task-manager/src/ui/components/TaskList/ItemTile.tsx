import React, { useState } from "react";
import BasicModal from "./BasicModal";
import { findPriority, findType, findAssignee } from "@/utils/helperFunctions";
import { TheDataType } from "@/type/ComponentTypes";
import { useGlobalContext } from "@/context/GlobalContext";
import { useTheme } from "@/theme/useTheme";
function ItemTile({ id }: TheDataType) {
  const { colors } = useTheme();
  const { data, setData, assigneeData, typeData, setToastData } =
    useGlobalContext();
  const object = data.find((item) => item.id == id);
  const [expand, setExpand] = useState<boolean>(false);

  const toggleExpand = () => {
    setExpand((prev) => !prev);
  };
  const handleCheck = () => {
    setData((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status: object?.status === 3 ? 1 : 3,
          };
        }
        return item;
      })
    );
  };
  const { color, symbol } = findPriority(object?.priority || 1);
  const deleteTask = () => {
    setData((prev) => prev.filter((item) => item.id != id));
    setToastData({ message: "Deleted", color: "red" });
  };

  return (
    <div
      style={{
        borderRightColor:
          object?.status === 1
            ? "red"
            : object?.status === 2
            ? "yellow"
            : "green",
        borderRightWidth: "6px",
        borderStyle: "solid",
        backgroundColor: colors.taskItem,
      }}
      className="w-full text-black p-2 rounded-2xl px-5 flex flex-col shadow-md hover:shadow-xl transition-all duration-150"
    >
      <div className="flex gap-2">
        <input
          type="checkbox"
          size={30}
          checked={object?.status === 3}
          onChange={handleCheck}
        />
        <div
          className="flex gap-4 cursor-pointer w-full justify-between"
          onClick={toggleExpand}
        >
          <div>
            <p className="font-bold" style={{ color: colors.text }}>
              {object?.title}
            </p>
            <p style={{ color: colors.text }}>{object?.description}</p>
          </div>
          <div>
            <div className="flex gap-2 items-center justify-end">
              <p
                className="text-sm font-bolds bg-violet-500 px-2 rounded-full font-bold"
                style={{ color: "white" }}
              >
                {findType(object?.type || 1, typeData)}
              </p>
              <p
                className="text-orange-800 font-bold text-xl"
                style={{ color: color }}
              >
                {symbol}
              </p>
            </div>
            <p style={{ color: colors.text }} className="font-bold">
              {object?.dueDate?.format("DD/MM/YYYY")}
            </p>
          </div>
        </div>
      </div>

      {expand && (
        <div className="pb-2 mt-2 flex flex-col gap-2">
          <p className="text-sm" style={{ color: colors.text }}>
            Assigned by{" "}
            <span className="font-bold">
              {findAssignee(object?.assignee || 1, assigneeData)}
            </span>
          </p>
          <div className="flex gap-2">
            <BasicModal
              id={id}
              title={object?.title || ""}
              description={object?.description || ""}
              status={object?.status || 1}
              type={object?.type || 1}
              assignee={object?.assignee || 1}
              priority={object?.priority || 1}
              dueDate={object?.dueDate || null}
            />
            <button
              className="cursor-pointer bg-[#9a0007] p-2 rounded-lg min-w-[5rem] text-sm text-white"
              onClick={deleteTask}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemTile;
