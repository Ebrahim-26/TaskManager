import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TheDataType } from "@/type/ComponentTypes";
import BasicSelect from "../NewTask/Select";
import { priorityData, StatusData } from "@/data/mockData";
import { useGlobalContext } from "@/context/GlobalContext";
import BasicDatePicker from "../NewTask/BasicDatePicker";
import { useTheme } from "@/theme/useTheme";
import CustomTextField from "../NewTask/CustomTextField";

export default function BasicModal({
  id,
  title,
  description,
  assignee,
  type,
  status,
  priority,
  dueDate,
}: TheDataType) {
  
  const { colors } = useTheme();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: colors.background,
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    gap: 2,
    display: "flex",
    flexDirection: "column",
  };
  const { setData, assigneeData, typeData, setToastData } = useGlobalContext();
  const [enable, setEnable] = React.useState<boolean>(false);
  const [editData, setEditData] = React.useState({
    title,
    description,
    status,
    type,
    assignee,
    priority,
    dueDate,
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setEditData({
      title,
      description,
      status,
      type,
      assignee,
      priority,
      dueDate,
    });
    setOpen(false);
  };

  const handleSave = () => {
    setData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...editData } : item))
    );
    setOpen(false);
    setToastData({ message: "Saved", color: "blue" });
  };
  React.useEffect(() => {
    if (editData.title != "" && editData.description != "") {
      setEnable(true);
    } else setEnable(false);
  }, [editData.title, editData.description]);
  return (
    <div>
      <Button
        sx={{
          textTransform: "none",
          backgroundColor: colors.text,
          color: colors.background,
          fontWeight: "bold",
          borderRadius: "8px",
        }}
        variant="contained"
        onClick={handleOpen}
      >
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CustomTextField
            data={editData.title}
            setData={(newValue) =>
              setEditData((prev) => ({ ...prev, title: newValue }))
            }
            placeholder="Title"
          />
          <CustomTextField
            data={editData.description}
            setData={(newVal) =>
              setEditData((prev) => ({ ...prev, description: newVal }))
            }
            placeholder="Description"
            multiline
          />
          <div className="grid grid-cols-2 gap-5">
            <BasicSelect
              title="Status"
              data={StatusData}
              value={editData.status}
              setValue={(val) =>
                setEditData((prev) => ({
                  ...prev,
                  status: typeof val === "number" ? val : prev.status,
                }))
              }
            />
            <BasicSelect
              title="Type"
              data={typeData}
              value={editData.type}
              setValue={(val) =>
                setEditData((prev) => ({
                  ...prev,
                  type: typeof val === "number" ? val : prev.type,
                }))
              }
            />
            <BasicSelect
              title="Assignee"
              data={assigneeData}
              value={editData.assignee}
              setValue={(val) =>
                setEditData((prev) => ({
                  ...prev,
                  assignee: typeof val === "number" ? val : prev.assignee,
                }))
              }
            />
            <BasicSelect
              title="Priority"
              data={priorityData}
              value={editData.priority}
              setValue={(val) =>
                setEditData((prev) => ({
                  ...prev,
                  priority: typeof val === "number" ? val : prev.priority,
                }))
              }
            />
            <BasicDatePicker
              data={editData.dueDate}
              setData={(val) =>
                setEditData((prev) => ({ ...prev, dueDate: val }))
              }
            />
          </div>
          <button
            className="text-black rounded-xl p-5 cursor-pointer"
            onClick={handleSave}
            style={{
              backgroundColor: enable ? colors.text : "grey",
              color: colors.background,
              fontWeight: "bold",
            }}
            disabled={!enable}
          >
            Save
          </button>
        </Box>
      </Modal>
    </div>
  );
}
