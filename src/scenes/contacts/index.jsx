import {Box} from "@mui/material"
import {DataGrid, GridToolbar, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton} from "@mui/x-data-grid"
import {mockDataContacts} from "../../data/mockData"
import {tokens} from "../../theme"
import React from 'react'
import Header from "../../components/Header"
import { useTheme } from "@mui/material"
import './index.css'

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
      { field: "id", headerName: "ID", flex: 0.5}, //prende l'id dal file e crea una colonna chiamata ID
      {field: 'registrarId', headerName: 'Registrar ID'},
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
        field: "address",
        headerName: "Address",
        flex: 1,
      },
      {
        field: "city",
        headerName: "City",
        flex: 1,
      },
      {
        field: "zipCode",
        headerName: "Zip Code",
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
      }
    ];
  return (
    <Box m='20px'>
        <Header title="CONTACTS" subtitle="List of Contacts for Future References"></Header>

        <Box m='40px 0 0 0' height='75vh' sx={{
          "& .MuiDataGrid-root": {
            border: 'none'
          },
          "& .MuiDataGrid-cell": {
            borderBottom: 'none'
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300]
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none'
          },
          '& .MuiDataGrid-virtualScroller': {
            bacgroundColor: colors.primary[400]
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor:  colors.blueAccent[700]
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            colro: `${colors.grey[100]} !important`
          },
          '& .css-1a2dy5t-MuiButtonBase-root-MuiButton-root': {
            color: `${colors.grey[100]} !important`
          }
        }}>
            <DataGrid
                rows={mockDataContacts} //dati
                columns={columns} //dati delle colonne
                slots={{
                    toolbar: GridToolbar,
                  }}
                
            />
        </Box>
    </Box>
  )
}

export default Contacts