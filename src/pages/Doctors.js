import { AddCircleOutline, MoreVert } from "@mui/icons-material";
import {
    Box,
    Pagination,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DoctorForm from "../components/Doctors/DoctorForm";
import CrudDialog from "../components/shared/CrudDialog";
import { fetchDoctors } from "../store/actions/doctorActions";
import {
    AppDataTable,
    StatusBtn,
    TableActionBtn,
    TableIconActionBtn,
    TitleAddButton,
} from "../styles/globalStyles";

const Doctors = () => {
    const [doctorDialog, setDoctorDialog] = useState(false);
    const dispatch = useDispatch();
    const { doctors } = useSelector((state) => state.doctors);

    useEffect(() => {
        dispatch(fetchDoctors());
    }, [dispatch]);

    const [page, setPage] = useState(0);

    const pageChanger = (e, value) => {
        setPage(value);
    };

    useEffect(() => {
        if (page) {
            dispatch(fetchDoctors(page));
        }
    }, [dispatch, page]);

    return (
        <Box>
            <Box mb={2}>
                <Typography variant="h6">
                    Doctor Information
                    <TitleAddButton
                        startIcon={<AddCircleOutline />}
                        variant="text"
                        onClick={() => setDoctorDialog(true)}
                    >
                        Add Doctor
                    </TitleAddButton>
                </Typography>
            </Box>

            <TableContainer>
                <AppDataTable>
                    <TableHead>
                        <TableRow>
                            <TableCell>Doctor ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>Designation</TableCell>
                            <TableCell>Phone No</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {doctors &&
                            doctors.content.length > 0 &&
                            doctors.content.map((item, i) => (
                                <TableRow>
                                    <TableCell>{item.doctorId}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.gender}</TableCell>
                                    <TableCell>{item.designation}</TableCell>
                                    <TableCell>{item.mobile}</TableCell>
                                    <TableCell>
                                        <StatusBtn
                                            disableElevation
                                            variant="contained"
                                        >
                                            Active
                                        </StatusBtn>
                                    </TableCell>
                                    <TableCell>
                                        <TableActionBtn
                                            variant="outlined"
                                            color="primary"
                                        >
                                            View Profile
                                        </TableActionBtn>
                                        <TableIconActionBtn>
                                            <MoreVert />
                                        </TableIconActionBtn>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </AppDataTable>
            </TableContainer>

            <Box>
                <Pagination
                    count={doctors?.totalPages}
                    page={page + 1}
                    onChange={pageChanger}
                />
            </Box>

            <CrudDialog
                open={doctorDialog}
                close={() => setDoctorDialog(false)}
            >
                <DoctorForm />
            </CrudDialog>
        </Box>
    );
};

export default Doctors;
