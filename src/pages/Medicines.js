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
import MedicineForm from "../components/Medicines/MedicineForm";
import CrudDialog from "../components/shared/CrudDialog";
import { fetchMedicines } from "../store/actions/medicineActions";
import {
    AppDataTable,
    StatusBtn,
    TableActionBtn,
    TableIconActionBtn,
    TitleAddButton,
} from "../styles/globalStyles";

const Medicines = () => {
    const [medicineDialog, setMedicineDialog] = useState(false);
    const { medicines } = useSelector((state) => state.medicines);
    const [page, setPage] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMedicines());
    }, [dispatch]);

    const pageChanger = (e, value) => {
        setPage(value);
    };

    useEffect(() => {
        if (page) {
            dispatch(fetchMedicines(page));
        }
    }, [dispatch, page]);

    return (
        <Box>
            <Box mb={2}>
                <Typography variant="h6">
                    Medicine Information
                    <TitleAddButton
                        startIcon={<AddCircleOutline />}
                        variant="text"
                        onClick={() => setMedicineDialog(true)}
                    >
                        Add Medicine
                    </TitleAddButton>
                </Typography>
            </Box>

            <TableContainer>
                <AppDataTable>
                    <TableHead>
                        <TableRow>
                            <TableCell>Medicine ID</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Gram</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {medicines &&
                            medicines.content.length > 0 &&
                            medicines.content.map((item, i) => (
                                <TableRow>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.category}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.strength}</TableCell>
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
                    count={medicines?.totalPages}
                    page={page + 1}
                    onChange={pageChanger}
                />
            </Box>

            <CrudDialog
                open={medicineDialog}
                close={() => setMedicineDialog(false)}
            >
                <MedicineForm />
            </CrudDialog>
        </Box>
    );
};

export default Medicines;
