import {Box, Typography, useTheme} from "@mui/material"
import {DataGrid} from "@mui/x-data-grid"
import {mockDataTeam} from "../../data/mockData"
import {tokens} from "../../theme"
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined"
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined"
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined"
import React from 'react'
import Header from "../../components/Header"

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
      { field: "id", headerName: "ID" }, //prende l'id dal file e crea una colonna chiamata ID
      {
        field: "name",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column--cell",
      }, //flex fa crescere la colonna
      {
        field: "email",
        headerName: "Email",
        flex: 1,
      },
      {
        field: "phone",
        headerName: "Phone Number",
        flex: 1,
      },
      {
        field: "age",
        headerName: "Age",
        type: "number",
        headerAlign: "left",
        align: "left",
      },
      {
        field: "access",
        headerName: "Access Level",
        flex: 1,
        renderCell: ({row: {access}}) => {
            return (
                <Box
                    width='60%'
                    m='0 auto'
                    p='5px'
                    display='flex'
                    justifyContent='center'
                    backgroundColor={
                        access === 'admin'
                            ? colors.greenAccent[600]
                            : colors.greenAccent[700]
                    }
                    borderRadius='4px'
                >
                    {access === 'admin' && <AdminPanelSettingsOutlinedIcon/>}
                    {access === 'manager' && <SecurityOutlinedIcon/>}
                    {access === 'user' && <LockOpenOutlinedIcon/>}
                    <Typography color={colors.grey[100]} sx={{ml: '6px'}}>
                        {access}
                    </Typography>
                </Box>
            )
        }
      }
    ];
  return (
    <Box m='20px'>
        <Header title="TEAM" subtitle="Managing the Team Members"></Header>

        <Box m='40px 0 0 0' height='75vh'>
            <DataGrid
                rows={mockDataTeam} //dati
                columns={columns} //dati delle colonne
            />
        </Box>
    </Box>
  )
}

export default Team