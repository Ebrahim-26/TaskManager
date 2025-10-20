import { StatusData } from "@/data/mockData";
import { StatusCardType } from "@/type/ComponentTypes";

export const findAssignee = (id: number, data: StatusCardType[]) => {
  const assignee = data.find((a) => a.id == id);
  return assignee?.name;
};

export const findStatus = (id: number) => {
  const status = StatusData.find((a) => a.id == id);
  return status?.name;
};

export const findType = (id: number, data: StatusCardType[]) => {
  const type = data.find((a) => a.id == id);
  return type?.name;
};

export const findPriority = (id: number) => {
  if (id === 1) {
    return { symbol: "!", color: "#7e7e00" };
  } else if (id === 2) {
    return { symbol: "!!", color: "#f6a001" };
  } else {
    return { symbol: "!!!", color: "#f7020d" };
  }
};
