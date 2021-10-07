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
import React, { useState, useEffect } from "react";
import PatientForm from "../components/Patients/PatientForm";
import CrudDialog from "../components/shared/CrudDialog";
import {
    AppDataTable,
    StatusBtn,
    TableActionBtn,
    TableIconActionBtn,
    TitleAddButton,
} from "../styles/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatients } from "./../store/actions/patientActions";

const Patients = () => {
    const [patientDialog, setPatientDialog] = useState(false);
    const dispatch = useDispatch();
    const { patients } = useSelector((state) => state.patients);

    useEffect(() => {
        dispatch(fetchPatients());
    }, [dispatch]);

    const [page, setPage] = useState(0);

    useEffect(() => {
        if (page) {
            dispatch(fetchPatients(page));
        }
    }, [dispatch, page]);

    const pageChanger = (e, value) => {
        setPage(value);
    };

    return (
        <Box>
            <Box mb={2}>
                <Typography variant="h6">
                    Patient Information
                    <TitleAddButton
                        startIcon={<AddCircleOutline />}
                        variant="text"
                        onClick={() => setPatientDialog(true)}
                    >
                        Add Patient
                    </TitleAddButton>
                </Typography>
            </Box>

            <TableContainer>
                <AppDataTable>
                    <TableHead>
                        <TableRow>
                            <TableCell>Birth ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>Date Of Birth</TableCell>
                            <TableCell>Phone No</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {patients &&
                            patients.content.length > 0 &&
                            patients.content.map((item, i) => (
                                <TableRow>
                                    <TableCell>{item.birthId}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.gender}</TableCell>
                                    <TableCell>{item.dateOfBirth}</TableCell>
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
                    count={patients?.totalPages}
                    page={page + 1}
                    onChange={pageChanger}
                />
            </Box>

            <CrudDialog
                open={patientDialog}
                close={() => setPatientDialog(false)}
            >
                <PatientForm />
            </CrudDialog>
        </Box>
    );
};

export default Patients;
