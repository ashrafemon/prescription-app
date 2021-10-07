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
import CrudDialog from "../components/shared/CrudDialog";
import SymptomForm from "../components/Symptoms/SymptomForm";
import SymptomItem from "../components/Symptoms/SymptomItem";
import {
    fetchSymptoms,
    toggleSymptomDialog,
} from "../store/actions/symptomActions";
import { AppDataTable, TitleAddButton } from "../styles/globalStyles";

const Symptoms = () => {
    const { symptomDialog } = useSelector((state) => state.symptoms);
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
                        onClick={() => dispatch(toggleSymptomDialog(true))}
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
                                <SymptomItem item={item} key={i} />
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
                close={() => dispatch(toggleSymptomDialog(true))}
            >
                <SymptomForm />
            </CrudDialog>
        </Box>
    );
};

export default Symptoms;
