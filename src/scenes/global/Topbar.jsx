import React from 'react'
import {Box, IconButton, useTheme} from "@mui/material";
import { useContext } from 'react';
import {ColorModeContext, tokens} from "../../theme"
import {InputBase} from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import SettingsOutlined from "@mui/icons-material/SettingsOutlined"
import SearchIcon from "@mui/icons-material/Search"
/*
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/global/team";
import Invoices from "./scenes/global/invoices";
import Contacts from "./scenes/global/contacts";
import Bar from "./scenes/global/bar";
import Form from "./scenes/global/form";
import Line from "./scenes/global/line";
import Pie from "./scenes/global/pie";
import FAQ from "./scenes/global/faq";
import Geography from "./scenes/global/geography";
*/
function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/*Search*/}
      <Box 
        display="flex" 
        backgroundColor={colors.primary[400]} 
        borderRadius="3px"
      >
        <InputBase sx={{ml: 2 , flex: 1}} placeholder="Search"/>
        <IconButton type="button" sx={{p: 1}}>
          <SearchIcon/>
        </IconButton>
      </Box>

      {/*Icons */}
      <Box dispaly="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
          
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon/>
        </IconButton>
        <IconButton>
          <SettingsOutlined/>
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon/>
        </IconButton>        
      </Box>
    </Box>
  )
}

export default Topbar