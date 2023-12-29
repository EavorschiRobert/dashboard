import {Box, Typography, useTheme} from "@mui/material"
import {DataGrid} from "@mui/x-data-grid"
import {mockDataTeam} from "../../data/mockData"
import {tokens} from "../../theme"
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined"
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined"
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined"
import Header from "../../components/"
import React from 'react'

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {field: 'id', headerName: 'ID'}, //prende l'id dal file e crea una colonna chiamata ID
        {field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell'}, //flex fa crescere la colonna
        {field: 'email', headerName: 'Email', flex: 1, cellClassName: 'email-column--cell'},
        {field: 'age', headerName: 'Age', type: 'number', cellClassName: 'age-column--cell'},

    ]
  return (
    <Box>
        <Header title="TEAM" subtitle="Managing the Team Members"></Header>

        <Box>
            <DataGrid
                rows={mockDataTeam} //dati
                columns={columns} //dati delle colonne
            />
        </Box>
    </Box>
  )
}

export default Team