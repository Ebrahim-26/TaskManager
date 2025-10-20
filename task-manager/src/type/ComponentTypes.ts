import { Dayjs } from "dayjs";
import React from "react";

export type StatusCardType = {
  id: number;
  name: string;
};

export type TextFieldType = {
  data: string;
  setData: (newVal: string) => void;
  placeholder: string;
  multiline?: boolean;
};

export type DiscreteSliderType = {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

export type TheDataType = {
  id: number;
  title: string;
  description: string;
  status: number;
  type: number;
  assignee: number;
  priority: number;
  dueDate: Dayjs | null;
};

export type BasicDatePickerProps = {
  data: Dayjs | null;
  setData: (val: Dayjs | null) => void;
};

export type postType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type toastType = {
  message: string;
  color: "red" | "blue" | "green";
};
