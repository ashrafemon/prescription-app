import { MoreVert } from "@mui/icons-material";
import { Button, Popover, TableCell, TableRow } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { deletePatient } from "../../store/actions/patientActions";
import {
    StatusBtn,
    TableActionBtn,
    TableIconActionBtn,
} from "../../styles/globalStyles";

const PatientItem = ({ item }) => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <TableRow>
            <TableCell>{item.birthId}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.gender}</TableCell>
            <TableCell>{item.dateOfBirth}</TableCell>
            <TableCell>{item.mobile}</TableCell>
            <TableCell>
                <StatusBtn disableElevation variant="contained">
                    Active
                </StatusBtn>
            </TableCell>
            <TableCell>
                {/* <TableActionBtn variant="outlined" color="primary">
                    View Profile
                </TableActionBtn> */}
                <TableIconActionBtn onClick={handleClick}>
                    <MoreVert />
                </TableIconActionBtn>

                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mb: 1 }}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        onClick={() => dispatch(deletePatient(item.id))}
                    >
                        Delete
                    </Button>
                </Popover>
            </TableCell>
        </TableRow>
    );
};

export default PatientItem;
