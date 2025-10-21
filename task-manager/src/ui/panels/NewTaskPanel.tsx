import React, { useEffect, useState } from "react";
import CustomTextField from "@/ui/components/NewTask/CustomTextField";
import BasicSelect from "@/ui/components/NewTask/Select";
import DiscreteSlider from "@/ui/components/NewTask/DiscreteSlider";
import BasicDatePicker from "@/ui/components/NewTask/BasicDatePicker";
import { StatusData } from "@/data/mockData";
import { useGlobalContext } from "@/context/GlobalContext";
import dayjs, { Dayjs } from "dayjs";
import { useTheme } from "@/theme/useTheme";
import { TheDataType } from "@/type/ComponentTypes";
function NewTaskPanel() {
  const { colors } = useTheme();
  const { setData, assigneeData, typeData, setToastData } = useGlobalContext();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<number | "">("");
  const [type, setType] = useState<number | "">("");
  const [assignee, setAssignee] = useState<number | "">("");
  const [dueDate, setDueDate] = useState<Dayjs | null>(dayjs());
  const [priority, setPriority] = useState<number>(1);
  const [createTask, setCreateTask] = useState<boolean>(false);

  useEffect(() => {
    if (
      title != "" &&
      description != "" &&
      status != "" &&
      type != "" &&
      assignee != ""
    ) {
      setCreateTask(true);
    } else {
      setCreateTask(false);
    }
  }, [title, description, status, type, assignee]);

  const addNewTask = (e: React.FormEvent) => {
    e.preventDefault();
    setData((prev: TheDataType[]) => [
      ...prev,
      {
        id: prev.length + 1,
        title,
        description,
        status: status as number,
        type: type as number,
        assignee: assignee as number,
        priority: type as number,
        dueDate,
      },
    ]);
    setTitle("");
    setDescription("");
    setAssignee("");
    setStatus("");
    setType("");
    setDueDate(dayjs());
    setPriority(1);
    setToastData({ message: `Created: ${title}`, color: "green" });

  };
  return (
    <div
      style={{ backgroundColor: colors.panel }}
      className="rounded-3xl p-5 flex flex-col overflow-y-auto scrollbar-hide w-full sm:w-[30%]"
    >
      <form className="flex flex-col justify-between h-full w-[100%]">
        <div className="flex flex-col gap-5">
          <p
            className="text-center text-2xl font-bold"
            style={{ color: colors.text }}
          >
            Add New Tasks
          </p>
          <CustomTextField
            data={title}
            setData={setTitle}
            placeholder="Title"
          />
          <CustomTextField
            data={description}
            setData={setDescription}
            placeholder="Description"
            multiline
          />
          <div className="flex gap-5 w-full">
            <BasicSelect
              title="Status"
              data={StatusData}
              value={status}
              setValue={setStatus}
            />
            <BasicSelect
              title="Type"
              data={typeData}
              value={type}
              setValue={setType}
            />
          </div>
          <div className="flex flex-col gap-5 w-full">
            <BasicSelect
              title="Assignee"
              data={assigneeData}
              value={assignee}
              setValue={setAssignee}
            />
            <BasicDatePicker data={dueDate} setData={setDueDate} />
          </div>
          <div className="flex items-center justify-center">
            <DiscreteSlider value={priority} setValue={setPriority} />
          </div>
        </div>
        <button
          disabled={!createTask}
          onClick={addNewTask}
          className="rounded-xl h-[3rem] font-bold "
          style={{
            backgroundColor: createTask ? colors.background : "grey",
            color: colors.text,
            cursor: createTask ? "pointer" : "not-allowed",
            opacity: createTask ? 1 : 0.5,
          }}
        >
          Create New Task
        </button>
      </form>
    </div>
  );
}

export default NewTaskPanel;
