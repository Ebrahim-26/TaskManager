import { useTheme } from "@/theme/useTheme";
import { useGlobalContext } from "@/context/GlobalContext";
import Tooltip from "@mui/material/Tooltip";
import DockModal from "./DockModal";
import { IoIosCloudyNight } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";
import { RiPagesFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { HiViewGridAdd } from "react-icons/hi";

function Dock() {
  const iconSize = 25;
  const router = useRouter();
  const { colors } = useTheme();
  const {
    darkMode,
    toggleDarkMode,
    assigneeData,
    setAssigneeData,
    typeData,
    setTypeData,
  } = useGlobalContext();
  return (
    <div className="w-[100%] flex justify-center absolute bottom-4">
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
  );
}

export default Dock;
