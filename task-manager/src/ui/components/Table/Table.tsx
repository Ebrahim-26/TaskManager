import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { postType } from "@/type/ComponentTypes";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 500 },
  { field: "body", headerName: "Body", width: 500 },
];

const paginationModel = { page: 0, pageSize: 10 };
type tableDataType = {
  apiData: postType[];
};

export default function DataTable({ apiData }: tableDataType) {
  return (
    <Paper sx={{ height: 650, width: "100%" }}>
      <DataGrid
        rows={apiData}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[10, 15]}
        sx={{ border: 2 }}
      />
    </Paper>
  );
}
