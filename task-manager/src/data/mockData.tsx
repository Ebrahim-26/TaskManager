import dayjs from "dayjs";
export const StatusData = [
  { id: 1, name: "Todo" },
  { id: 2, name: "In Progress" },
  { id: 3, name: "Completed" },
];
export const TypeData = [
  { id: 1, name: "Bugs" },
  { id: 2, name: "Feature" },
];
export const AssigneeData = [
  { id: 1, name: "Jon" },
  { id: 2, name: "Farhan" },
];

export const priorityData = [
  {
    id: 1,
    name: "Low Priority",
  },
  {
    id: 2,
    name: "Medium Priority",
  },
  {
    id: 3,
    name: "High Priority",
  },
];

export const TheData = [
  {
    id: 1,
    title: "Daskboard",
    description: "The Dashboard on the left also serves as a filter button.",
    status: 1,
    type: 1,
    assignee: 1,
    priority: 1,
    dueDate: dayjs("2025-10-21"),
  },
  {
    id: 2,
    title: "Colors on the Task List",
    description: "Green= Completed; Yellow= In Progress; Red= Todo",
    status: 2,
    type: 2,
    assignee: 2,
    priority: 2,
    dueDate: dayjs("2025-10-21"),
  },
  {
    id: 3,
    title: "Check the Dock",
    description:
      "You can change the theme, go the Api integration page and add/edit assignee and type",
    status: 3,
    type: 1,
    assignee: 1,
    priority: 3,
    dueDate: dayjs("2025-10-21"),
  },
];
