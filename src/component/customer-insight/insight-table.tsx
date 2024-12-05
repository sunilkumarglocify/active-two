import * as React from "react";
import { Box } from "@mui/material";
import { StandardDataGrid } from "../../global/data-grid/data-grid";

export default function InsightTable() {
  const rows = [
    {
      _id: 1,
      name: "Ram",
      emailId: "ram@gmail.com",
      phoneNumber: "98567269",
      participants: "23",
      purchaseCount: "43",
    },
    {
      _id: 2,
      name: "Karan",
      emailId: "karan@gmail.com",
      phoneNumber: "6875642394",
      participants: "234",
      purchaseCount: "23",
    },
    {
      _id: 3,
      name: "Atul",
      emailId: "atul@gmail.com",
      phoneNumber: "572496173",
      participants: "43",
      purchaseCount: "42",
    },
    {
      _id: 4,
      name: "Puneet",
      emailId: "puneet@gmail.com",
      phoneNumber: "645379124",
      participants: "35",
      purchaseCount: "56",
    },
    {
      _id: 5,
      name: "Vikram",
      emailId: "vikram@gmail.com",
      phoneNumber: "0579922125",
      participants: "12",
      purchaseCount: "67",
    },
    {
      _id: 6,
      name: "Sandeep",
      emailId: "sandeep@gmail.com",
      phoneNumber: "36348631",
      participants: "32",
      purchaseCount: "24",
    },
    {
      _id: 7,
      name: "Manoj",
      emailId: "manoj@gmail.com",
      phoneNumber: "48611683",
      participants: "34",
      purchaseCount: "64",
    },
    {
      _id: 8,
      name: "Lucky",
      emailId: "lucky@gmail.com",
      phoneNumber: "461834683",
      participants: "76",
      purchaseCount: "86",
    },
    {
      _id: 9,
      name: "Sandy",
      emailId: "sandy@gmail.com",
      phoneNumber: "68131468",
      participants: "16",
      purchaseCount: "24",
    },
    {
      _id: 10,
      name: "Krishna",
      emailId: "krishna@gmail.com",
      phoneNumber: "87109118",
      participants: "27",
      purchaseCount: "45",
    },
  ];

  const VISIBLE_FIELDS = [
    { field: "name", headerName: "Name", flex: 1, fontSize: "25px"},
    { field: "emailId", headerName: "Email Id", flex: 1 },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 1,
    },
    { field: "participants", headerName: "Participants", flex: 1 },
    { field: "purchaseCount", headerName: "Purchase Count", flex: 1 },
  ];

  return (
    <Box sx={{ height: 400, width: '100%', }}>
      <StandardDataGrid sx={{width: '100%'}} columns={VISIBLE_FIELDS} rows={rows} />
    </Box>
  );
}
