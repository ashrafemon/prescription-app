import React from 'react'
import {Box, Container, Grid} from "@mui/material";
import NavMenus from "../components/shared/NavMenus";

const AppLayout = ({children}) => {
    return (
        <Container maxWidth="lg">
            <Grid container justifyContent="flex-end">
                <Grid item xs={12} lg={6}>
                    <NavMenus />
                </Grid>
            </Grid>

            <Box py={5}>
                {children}
            </Box>
        </Container>
    )
}

export default AppLayout
