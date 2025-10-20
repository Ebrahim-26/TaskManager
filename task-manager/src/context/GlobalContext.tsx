"use client";
import React, { createContext, useContext, ReactNode, useState } from "react";
import { AssigneeData, TheData, TypeData } from "@/data/mockData";
import { StatusCardType, TheDataType, toastType } from "@/type/ComponentTypes";

type GlobalContextType = {
  data: TheDataType[];
  setData: React.Dispatch<React.SetStateAction<TheDataType[]>>;
  assigneeData: StatusCardType[];
  setAssigneeData: React.Dispatch<React.SetStateAction<StatusCardType[]>>;
  typeData: StatusCardType[];
  setTypeData: React.Dispatch<React.SetStateAction<StatusCardType[]>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  filterStatus: number;
  setFilterStatus: React.Dispatch<React.SetStateAction<number>>;
  toggleDarkMode: () => void;
  toastData: toastType | null;
  setToastData: React.Dispatch<React.SetStateAction<toastType | null>>;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<TheDataType[]>(TheData);
  const [toastData, setToastData] = useState<toastType | null>(null);
  const [assigneeData, setAssigneeData] =
    useState<StatusCardType[]>(AssigneeData);
  const [typeData, setTypeData] = useState<StatusCardType[]>(TypeData);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [filterStatus, setFilterStatus] = useState<number>(0);
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <GlobalContext.Provider
      value={{
        data,
        setData,
        assigneeData,
        setAssigneeData,
        typeData,
        setTypeData,
        darkMode,
        setDarkMode,
        filterStatus,
        setFilterStatus,
        toggleDarkMode,
        toastData,
        setToastData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
