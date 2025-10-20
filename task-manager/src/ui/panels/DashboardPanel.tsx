import React from "react";
import StatusCard from "@/ui/components/Dashboard/StatusCard";
import { StatusData } from "@/data/mockData";
import DonutChart from "@/ui/components/Dashboard/PieChart";
import { useTheme } from "@/theme/useTheme";
function DashboardPanel() {
  const { colors } = useTheme();
  return (
    <div className="w-full">
      <div className="flex flex-col gap-5 ">
        <StatusCard id={0} name="Total Tasks" />
        <div className="flex gap-2">
          {StatusData.map((item) => (
            <StatusCard id={item.id} name={item.name} key={item.id} />
          ))}
        </div>
      </div>
      <div className="h-[70%] flex flex-col justify-center items-center gap-6">
        <p style={{ color: colors.text, fontSize: "24px", fontWeight: "bold" }}>
          Task Status
        </p>
        <div>
          <DonutChart />
        </div>
      </div>
    </div>
  );
}

export default DashboardPanel;
