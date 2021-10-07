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
import DiseaseForm from "../components/Diseases/DiseaseForm";
import CrudDialog from "../components/shared/CrudDialog";
import { fetchDiseases } from "../store/actions/diseaseActions";
import {
    AppDataTable,
    StatusBtn,
    TableActionBtn,
    TableIconActionBtn,
    TitleAddButton,
} from "../styles/globalStyles";

const Diseases = () => {
    const [diseaseDialog, setDiseaseDialog] = useState(false);
    const dispatch = useDispatch();
    const { diseases } = useSelector((state) => state.diseases);

    const [page, setPage] = useState(0);

    const pageChanger = (e, value) => {
        setPage(value);
    };

    useEffect(() => {
        dispatch(fetchDiseases());
    }, [dispatch]);

    useEffect(() => {
        if (page) {
            dispatch(fetchDiseases(page));
        }
    }, [dispatch, page]);

    return (
        <Box>
            <Box mb={2}>
                <Typography variant="h6">
                    Diseases Information
                    <TitleAddButton
                        startIcon={<AddCircleOutline />}
                        variant="text"
                        onClick={() => setDiseaseDialog(true)}
                    >
                        Add Disease
                    </TitleAddButton>
                </Typography>
            </Box>

            <TableContainer>
                <AppDataTable>
                    <TableHead>
                        <TableRow>
                            <TableCell>Diseases ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Details</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {diseases &&
                            diseases.content.length > 0 &&
                            diseases.content.map((item, i) => (
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
                    count={diseases?.totalPages}
                    page={page + 1}
                    onChange={pageChanger}
                />
            </Box>

            <CrudDialog
                open={diseaseDialog}
                close={() => setDiseaseDialog(false)}
            >
                <DiseaseForm />
            </CrudDialog>
        </Box>
    );
};

export default Diseases;
