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
import CrudDialog from "../components/shared/CrudDialog";
import SymptomForm from "../components/Symptoms/SymptomForm";
import { fetchSymptoms } from "../store/actions/symptomActions";
import {
    AppDataTable,
    StatusBtn,
    TableActionBtn,
    TableIconActionBtn,
    TitleAddButton,
} from "../styles/globalStyles";

const Symptoms = () => {
    const [symptomDialog, setSymptomDialog] = useState(false);
    const dispatch = useDispatch();
    const { symptoms } = useSelector((state) => state.symptoms);
    const [page, setPage] = useState(0);

    const pageChanger = (e, value) => {
        setPage(value);
    };

    useEffect(() => {
        dispatch(fetchSymptoms());
    }, [dispatch]);

    useEffect(() => {
        if (page) {
            dispatch(fetchSymptoms(page));
        }
    }, [dispatch, page]);

    return (
        <Box>
            <Box mb={2}>
                <Typography variant="h6">
                    Symptoms Information
                    <TitleAddButton
                        startIcon={<AddCircleOutline />}
                        variant="text"
                        onClick={() => setSymptomDialog(true)}
                    >
                        Add Symptom
                    </TitleAddButton>
                </Typography>
            </Box>

            <TableContainer>
                <AppDataTable>
                    <TableHead>
                        <TableRow>
                            <TableCell>Symptom ID</TableCell>
                            <TableCell>Symptom Name</TableCell>
                            <TableCell>Details</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {symptoms &&
                            symptoms.content.length > 0 &&
                            symptoms.content.map((item, i) => (
                                <TableRow>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.details}</TableCell>
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
                    count={symptoms?.totalPages}
                    page={page + 1}
                    onChange={pageChanger}
                />
            </Box>

            <CrudDialog
                open={symptomDialog}
                close={() => setSymptomDialog(false)}
            >
                <SymptomForm />
            </CrudDialog>
        </Box>
    );
};

export default Symptoms;
