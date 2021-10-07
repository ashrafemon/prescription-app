import { AddCircleOutline } from "@mui/icons-material";
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
import PatientForm from "../components/Patients/PatientForm";
import PatientItem from "../components/Patients/PatientItem";
import CrudDialog from "../components/shared/CrudDialog";
import { AppDataTable, TitleAddButton } from "../styles/globalStyles";
import {
    fetchPatients,
    togglePatientDialog,
} from "./../store/actions/patientActions";

const Patients = () => {
    const { patientDialog } = useSelector((state) => state.patients);
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
                        onClick={() => dispatch(togglePatientDialog(true))}
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
                                <PatientItem item={item} key={i} />
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
                close={() => dispatch(togglePatientDialog(true))}
            >
                <PatientForm />
            </CrudDialog>
        </Box>
    );
};

export default Patients;
