import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import { useStyles } from "../../styles/globalStyles";

const PrescriptionItem = ({ item }) => {
    const classes = useStyles();

    return (
        <Box mb={3}>
            <Card className={classes.prescriptionListItem} elevation={0}>
                <CardContent>
                    <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item lg={1}>
                            <Box className={classes.prescriptionListItemRx}>
                                <Typography>
                                    R<sub>x</sub>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={9}>
                            <Box mb={1}>
                                <Typography
                                    className={classes.prescriptionListItemUser}
                                >
                                    <PersonIcon fontSize="small" /> Doctor’s
                                    name : {item?.doctor?.name}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    className={classes.prescriptionListItemDate}
                                >
                                    <CalendarTodayIcon fontSize="small" />{" "}
                                    {item?.date}
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
    );
};

export default PrescriptionItem;
