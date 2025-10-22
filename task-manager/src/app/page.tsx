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
        className="flex flex-col sm:flex-row gap-5 sm:h-[100vh] justify-around p-5 "
        style={{ backgroundColor: colors.background }}
      >
        <div
          style={{ backgroundColor: colors.panel }}
          className="relative rounded-3xl flex flex-col scrollbar-hide w-full sm:w-[100%] justify-between gap-4"
        >
          <div className="flex flex-col sm:flex-row gap-15 sm:gap-5 justify-between h-[100vh] sm:h-[100%] px-5 pt-5 ">
            <DashboardPanel />
            <div className="hidden h-full sm:flex items-center justify-center">
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
