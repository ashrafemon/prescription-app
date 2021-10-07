import { Box } from "@mui/system";
import React, { useState } from "react";
import SearchBox from "../components/HomePage/SearchBox";
import SearchIcon from "@mui/icons-material/Search";
import {
    Button,
    Card,
    CardContent,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { AppDataTable, useStyles } from "../styles/globalStyles";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PrescriptionForm from "../components/HomePage/PrescriptionForm";
import CrudDialog from "../components/shared/CrudDialog";

const HomePage = () => {
    const classes = useStyles();
    const [prescriptionDialog, setPrescriptionDialog] = useState(true);

    return (
        <Box>
            <CrudDialog
                open={prescriptionDialog}
                close={() => setPrescriptionDialog(false)}
                size="lg"
            >
                <PrescriptionForm />
            </CrudDialog>

            <Box mb={3}>
                <SearchBox />
            </Box>

            <Box textAlign="center" className={classes.searchBox}>
                <Typography>
                    <SearchIcon fontSize="large" />
                </Typography>
                <Typography>Please Search Patient</Typography>
                <Typography>Nothing To Show</Typography>
            </Box>

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
                                    <TableCell>Age</TableCell>
                                    <TableCell>Phone No</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Ashraf</TableCell>
                                    <TableCell>Male</TableCell>
                                    <TableCell>36</TableCell>
                                    <TableCell>+88 1324654314</TableCell>
                                </TableRow>
                            </TableBody>
                        </AppDataTable>
                    </TableContainer>
                </Box>

                <Box mb={2}>
                    <Typography>Medical History</Typography>
                </Box>

                <Box>
                    <Card
                        className={classes.prescriptionListItem}
                        elevation={0}
                    >
                        <CardContent>
                            <Grid
                                container
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={2}
                            >
                                <Grid item lg={1}>
                                    <Box
                                        className={
                                            classes.prescriptionListItemRx
                                        }
                                    >
                                        <Typography>
                                            R<sub>x</sub>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item lg={9}>
                                    <Box mb={1}>
                                        <Typography
                                            className={
                                                classes.prescriptionListItemUser
                                            }
                                        >
                                            <PersonIcon fontSize="small" />{" "}
                                            Doctor’s name : John Doe
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography
                                            className={
                                                classes.prescriptionListItemDate
                                            }
                                        >
                                            <CalendarTodayIcon fontSize="small" />{" "}
                                            02 September 2021
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item lg={2}>
                                    <Box mb={1}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                        >
                                            Add New
                                        </Button>
                                    </Box>

                                    <Button variant="text" fullWidth>
                                        View Prescription
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Box>
    );
};

export default HomePage;
