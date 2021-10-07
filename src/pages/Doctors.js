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
import DoctorForm from "../components/Doctors/DoctorForm";
import DoctorItem from "../components/Doctors/DoctorItem";
import CrudDialog from "../components/shared/CrudDialog";
import {
    fetchDoctors,
    toggleDoctorDialog,
} from "../store/actions/doctorActions";
import { AppDataTable, TitleAddButton } from "../styles/globalStyles";

const Doctors = () => {
    const { doctorDialog } = useSelector((state) => state.doctors);
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
                        onClick={() => dispatch(toggleDoctorDialog(true))}
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
                                <DoctorItem item={item} key={i} />
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
                close={() => dispatch(toggleDoctorDialog(false))}
            >
                <DoctorForm />
            </CrudDialog>
        </Box>
    );
};

export default Doctors;
