import SearchIcon from "@mui/icons-material/Search";
import {
    Button,
    Grid,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PrescriptionForm from "../components/HomePage/PrescriptionForm";
import PrescriptionItem from "../components/HomePage/PrescriptionItem";
import SearchBox from "../components/HomePage/SearchBox";
import CrudDialog from "../components/shared/CrudDialog";
import {
    fetchPrescriptions,
    togglePrescriptionDialog,
} from "../store/actions/prescriptionActions";
import { AppDataTable, useStyles } from "../styles/globalStyles";

const HomePage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { patient } = useSelector((state) => state.patients);
    const { prescriptions, prescriptionDialog } = useSelector(
        (state) => state.prescriptions
    );

    useEffect(() => {
        if (Object.keys(patient).length > 0) {
            dispatch(fetchPrescriptions(patient.birthId));
        }
    }, [dispatch, patient]);

    return (
        <Box>
            <CrudDialog
                open={prescriptionDialog}
                close={() => dispatch(togglePrescriptionDialog(false))}
                size="lg"
            >
                <PrescriptionForm />
            </CrudDialog>

            <Box mb={3}>
                <SearchBox />
            </Box>

            {Object.keys(patient).length > 0 ? (
                <Box>
                    <Box mb={2}>
                        <Typography variant="h5">Showing Result</Typography>
                    </Box>
                    <Box mb={2}>
                        <Grid container>
                            <Grid item xs={12} lg={9}>
                                <Typography>Patient Information</Typography>
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    onClick={() =>
                                        dispatch(togglePrescriptionDialog(true))
                                    }
                                >
                                    Add New Prescription
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box mb={3}>
                        <TableContainer>
                            <AppDataTable>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Gender</TableCell>
                                        <TableCell>DOB</TableCell>
                                        <TableCell>Phone No</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>{patient.name}</TableCell>
                                        <TableCell>{patient.gender}</TableCell>
                                        <TableCell>
                                            {patient.dateOfBirth}
                                        </TableCell>
                                        <TableCell>{patient.mobile}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </AppDataTable>
                        </TableContainer>
                    </Box>

                    <Box mb={2}>
                        <Typography>Medical History</Typography>
                    </Box>

                    {prescriptions &&
                        prescriptions.length > 0 &&
                        prescriptions.map((item, i) => (
                            <PrescriptionItem item={item} key={i} />
                        ))}
                </Box>
            ) : (
                <Box textAlign="center" className={classes.searchBox}>
                    <Typography>
                        <SearchIcon fontSize="large" />
                    </Typography>
                    <Typography>Please Search Patient</Typography>
                    <Typography>Nothing To Show</Typography>
                </Box>
            )}
        </Box>
    );
};

export default HomePage;
