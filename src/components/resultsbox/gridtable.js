import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "drug", headerName: "Drug Name", width: 200 },
  { field: "minDose", headerName: "Min Dose (mg)", width: 150 },
  { field: "maxDose", headerName: "Max Dose (mg)", width: 150 },
  { field: "freq", headerName: "Freq", width: 100 },
  { field: "notes", headerName: "Notes", width: 600 },
];

const GridTable = ({ dose }) => {
  return (
    <DataGrid
      rows={dose}
      columns={columns}
      getRowId={(row) => row.drug}
      pageSize={5}
      autoHeight
      checkboxSelection
    />
  );
};

export default GridTable;
