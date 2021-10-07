import { Box, Container, Grid, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import NavMenus from "../components/shared/NavMenus";
import siteUrl from "../constants/siteUrl";
import { NavList } from "../styles/globalStyles";

const AppLayout = ({ children }) => {
    return (
        <Container maxWidth="lg">
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item xs={12} lg={6}>
                    <NavList>
                        <ListItem>
                            <ListItemText>
                                <NavLink to={siteUrl.home}>Home</NavLink>
                            </ListItemText>
                        </ListItem>
                    </NavList>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <NavMenus />
                </Grid>
            </Grid>

            <Box py={5}>{children}</Box>
        </Container>
    );
};

export default AppLayout;
