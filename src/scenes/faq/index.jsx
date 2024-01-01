import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandeMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from "../../theme";

const FAQ =() => {
    const theme =useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box m='20px'>
            <Header title='FAQ' subtitle='Frequently Asked Questions P{age'/>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandeMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        An Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Voluptas ad blanditiis autem repudiandae! Voluptatum non 
                        voluptate repellendus esse? Earum molestiae sed ipsam corrupti 
                        doloribus hic porro harum distinctio vel ullam.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandeMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Another Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Voluptas ad blanditiis autem repudiandae! Voluptatum non 
                        voluptate repellendus esse? Earum molestiae sed ipsam corrupti 
                        doloribus hic porro harum distinctio vel ullam.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandeMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Some Random question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Voluptas ad blanditiis autem repudiandae! Voluptatum non 
                        voluptate repellendus esse? Earum molestiae sed ipsam corrupti 
                        doloribus hic porro harum distinctio vel ullam.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandeMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        The final Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Voluptas ad blanditiis autem repudiandae! Voluptatum non 
                        voluptate repellendus esse? Earum molestiae sed ipsam corrupti 
                        doloribus hic porro harum distinctio vel ullam.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}
export default FAQ;