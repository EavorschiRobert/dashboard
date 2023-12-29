import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material'
import React from 'react'
import { tokens } from '../theme';

function Header({title, subtitle}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box>
        <Typography variant='h2'>{title}</Typography>
        <Typography variant='h6' color={colors.greenAccent[500]}>{subtitle}</Typography>
    </Box>
  )
}

export default Header