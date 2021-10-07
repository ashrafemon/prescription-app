import React from 'react'
import {ListItem, ListItemText} from "@mui/material";
import {NavLink} from "react-router-dom";
import {NavList} from "../../../styles/globalStyles";
import siteUrl from "../../../constants/siteUrl";

const NavMenus = () => {
    return (
        <NavList>
            <ListItem>
                <ListItemText>
                    <NavLink to={siteUrl.doctors.index}>Doctors</NavLink>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                    <NavLink to={siteUrl.patients.index}>Patients</NavLink>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                    <NavLink to={siteUrl.medicines.index}>Medicines</NavLink>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                    <NavLink to={siteUrl.symptoms.index}>Symptoms</NavLink>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>
                    <NavLink to={siteUrl.diseases.index}>Diseases</NavLink>
                </ListItemText>
            </ListItem>
        </NavList>
    )
}

export default NavMenus
