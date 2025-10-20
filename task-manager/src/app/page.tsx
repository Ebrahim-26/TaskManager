"use client";
import React from "react";
import DashboardPanel from "@/ui/panels/DashboardPanel";
import NewTaskPnael from "@/ui/panels/NewTaskPanel";
import TaskListPanel from "@/ui/panels/TaskListPanel";
import { useGlobalContext } from "@/context/GlobalContext";
import { IoIosCloudyNight } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";
import { RiPagesFill } from "react-icons/ri";
import { useTheme } from "@/theme/useTheme";
import { useRouter } from "next/navigation";
import Tooltip from "@mui/material/Tooltip";
import DockModal from "@/ui/components/Dock/DockModal";
import { HiViewGridAdd } from "react-icons/hi";
import Toast from "@/ui/components/Toast";
function Page() {
  const router = useRouter();
  const {
    darkMode,
    toggleDarkMode,
    assigneeData,
    setAssigneeData,
    typeData,
    setTypeData,
  } = useGlobalContext();
  const { colors } = useTheme();
  const iconSize = 25;
  return (
    <div>
      <Toast />
      <div
        className="flex gap-5 h-[100vh] justify-around p-5 "
        style={{ backgroundColor: colors.background }}
      >
        <div
          style={{ backgroundColor: colors.panel }}
          className=" rounded-3xl p-5 flex flex-col overflow-y-auto scrollbar-hide w-[70%] justify-between"
        >
          <div className="flex gap-5 justify-between h-[80vh]">
            <DashboardPanel />
            <div className="h-full flex items-center justify-center">
              <div className="h-[95%] border-1 border-white/40"></div>
            </div>
            <TaskListPanel />
          </div>

          {/* Dock */}
          <div className="w-[100%] flex justify-center">
            <div
              style={{ backgroundColor: colors.field }}
              className="flex justify-center rounded-full h-[3rem] px-[2rem] items-center"
            >
              <div className="flex gap-3">
                {!darkMode ? (
                  <Tooltip title="Dark Mode">
                    <IoIosCloudyNight
                      size={iconSize}
                      color={colors.icon}
                      onClick={() => toggleDarkMode()}
                      className="cursor-pointer"
                    />
                  </Tooltip>
                ) : (
                  <Tooltip title="Light Mode">
                    <IoMdSunny
                      size={iconSize}
                      color={colors.icon}
                      onClick={() => toggleDarkMode()}
                      className="cursor-pointer"
                    />
                  </Tooltip>
                )}
                <Tooltip title="API Page">
                  <RiPagesFill
                    size={iconSize}
                    color={colors.icon}
                    className="cursor-pointer"
                    onClick={() => router.push("/rest-api")}
                  />
                </Tooltip>

                <DockModal
                  passedData={assigneeData}
                  title="Assignee"
                  setPassedData={setAssigneeData}
                  TriggerIcon={FaUserPlus}
                  iconSize={iconSize}
                />

                <DockModal
                  passedData={typeData}
                  title="Type"
                  setPassedData={setTypeData}
                  TriggerIcon={HiViewGridAdd}
                  iconSize={iconSize}
                />
              </div>
            </div>
          </div>
        </div>
        <NewTaskPnael />
      </div>
    </div>
  );
}

export default Page;
