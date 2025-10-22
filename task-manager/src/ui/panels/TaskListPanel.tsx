import React, { useState } from "react";
import { useGlobalContext } from "@/context/GlobalContext";
import CustomTextField from "@/ui/components/NewTask/CustomTextField";
import ItemTile from "@/ui/components/TaskList/ItemTile";
import { useTheme } from "@/theme/useTheme";
function TaskListPanel() {
  const { colors } = useTheme();
  const [search, setSearch] = useState<string>("");
  const { data, filterStatus } = useGlobalContext();
  const FilterData =
    filterStatus === 0
      ? data
      : data.filter((item) => item.status == filterStatus);

  const SearchData =
    search == ""
      ? FilterData
      : FilterData.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
  return (
    <div className="w-full overflow-y-auto">
      <div className="flex flex-col gap-5">
        <CustomTextField
          data={search}
          setData={setSearch}
          placeholder="Search..."
        />
        {SearchData.length !== 0 ? (
          SearchData.map((item, i) => {
            return (
              <ItemTile
                key={i}
                id={item.id}
                title={item.title}
                description={item.description}
                priority={item.priority}
                assignee={item.assignee}
                type={item.type}
                status={item.status}
                dueDate={item.dueDate}
              />
            );
          })
        ) : (
          <p
            className="text-slate-300 text-sm text-center"
            style={{ color: colors.field }}
          >
            No Tasks
          </p>
        )}
      </div>
    </div>
  );
}

export default TaskListPanel;
