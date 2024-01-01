import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import React from 'react'

function Line() {
  return (
    <Box m='20px'>
        <Header title='Bar Chart' subtitle='Simple Bar Chart' />
        <Box height='75vh'>
            <LineChart/>
        </Box>
    </Box>
  )
}

export default Line