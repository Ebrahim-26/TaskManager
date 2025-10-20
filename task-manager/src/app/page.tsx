"use client";
import React from "react";
import DashboardPanel from "@/ui/panels/DashboardPanel";
import NewTaskPnael from "@/ui/panels/NewTaskPanel";
import TaskListPanel from "@/ui/panels/TaskListPanel";
import { useTheme } from "@/theme/useTheme";
import Toast from "@/ui/components/Toast";
import Dock from "@/ui/components/Dock/Dock";
function Page() {
  const { colors } = useTheme();
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
          <Dock />
        </div>
        <NewTaskPnael />
      </div>
    </div>
  );
}

export default Page;
