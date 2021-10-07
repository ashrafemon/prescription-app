import {
    Autocomplete,
    Button,
    Card,
    CardActions,
    CardContent,
    Checkbox,
    FormControlLabel,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { fetchDiseases } from "../../store/actions/diseaseActions";
import { fetchSymptoms } from "../../store/actions/symptomActions";
import { fetchMedicines } from "../../store/actions/medicineActions";
import { fetchDoctors } from "../../store/actions/doctorActions";

const PrescriptionForm = () => {
    const dispatch = useDispatch();
    const { medicines } = useSelector((state) => state.medicines);
    const { symptoms } = useSelector((state) => state.symptoms);
    const { diseases } = useSelector((state) => state.diseases);
    const { doctors } = useSelector((state) => state.doctors);

    const [dozeNumber] = useState(["01", "02", "03", "04", "05"]);

    useEffect(() => {
        dispatch(fetchDiseases());
        dispatch(fetchSymptoms());
        dispatch(fetchMedicines());
        dispatch(fetchDoctors());
    }, [dispatch]);

    // const [form, setForm] = useState({
    //     date: "2021-10-07",
    //     diseaseList: [
    //         // {
    //         //     details: "string",
    //         //     id: "string",
    //         //     name: "string",
    //         // },
    //     ],
    //     doctor: {
    //         designation: "",
    //         details: "",
    //         doctorId: "",
    //         gender: "",
    //         hospital: "",
    //         id: "",
    //         mobile: "",
    //         name: "",
    //         specialist: "",
    //     },
    //     medicineInformationList: [
    //         // {
    //         //     beforeEating: true,
    //         //     days: 0,
    //         //     details: "string",
    //         //     id: "string",
    //         //     medicine: {
    //         //         category: "string",
    //         //         id: "string",
    //         //         name: "string",
    //         //         strength: "string",
    //         //     },
    //         //     morning: 0,
    //         //     night: 0,
    //         //     noon: 0,
    //         // },
    //     ],
    //     note: "",
    //     patient: {
    //         birthId: "",
    //         dateOfBirth: "",
    //         gender: "",
    //         id: "",
    //         mobile: "",
    //         name: "",
    //     },
    //     symptomList: [
    //         // {
    //         //     details: "string",
    //         //     id: "string",
    //         //     name: "string",
    //         // },
    //     ],
    // });

    const [form, setForm] = useState({
        date: null,
        diseaseList: [],
        doctor: null,
        medicineInformationList: [],
        note: "",
        patient: null,
        symptomList: [],
    });

    const fieldChangeHandler = (field, value) => {
        setForm((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const addNewMedicineForm = () => {
        setForm((prevState) => ({
            ...prevState,
            medicineInformationList: [
                ...prevState.medicineInformationList,
                {
                    beforeEating: true,
                    days: 0,
                    details: "string",
                    id: "string",
                    medicine: {
                        category: "",
                        id: "",
                        name: "",
                        strength: "",
                    },
                    morning: 0,
                    night: 0,
                    noon: 0,
                },
            ],
        }));
    };

    return (
        <>
            <Box mb={2}>
                <Typography variant="h5">Add Prescription</Typography>
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={12} lg={4}>
                    <Card>
                        <CardContent>
                            <Box mb={3}>
                                <Card>
                                    <CardContent>
                                        <Box mb={2}>
                                            <Typography>Select Date</Typography>
                                        </Box>
                                        <TextField
                                            type="date"
                                            fullWidth
                                            value={form.date}
                                            onChange={(e) =>
                                                fieldChangeHandler(
                                                    "date",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </CardContent>
                                </Card>
                            </Box>
                            <Box mb={3}>
                                <Card>
                                    <CardContent>
                                        <Box mb={2}>
                                            <Typography>Doctor</Typography>
                                        </Box>

                                        <Box mb={1}>
                                            <Autocomplete
                                                options={
                                                    doctors && doctors.content
                                                }
                                                getOptionLabel={(option) =>
                                                    option.name
                                                }
                                                fullWidth
                                                onChange={(e, data) =>
                                                    fieldChangeHandler(
                                                        "doctor",
                                                        data
                                                    )
                                                }
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        label="Select Doctor"
                                                    />
                                                )}
                                            />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>

                            <Box mb={3}>
                                <Card>
                                    <CardContent>
                                        <Box mb={2}>
                                            <Typography>Symptoms</Typography>
                                        </Box>

                                        <Box mb={1}>
                                            <Autocomplete
                                                options={
                                                    symptoms && symptoms.content
                                                }
                                                getOptionLabel={(option) =>
                                                    option.name
                                                }
                                                multiple
                                                filterSelectedOptions
                                                fullWidth
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        label="Select Symptoms"
                                                    />
                                                )}
                                                value={form.symptomList}
                                                onChange={(e, data) =>
                                                    fieldChangeHandler(
                                                        "symptomList",
                                                        data
                                                    )
                                                }
                                            />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>

                            <Box mb={3}>
                                <Card>
                                    <CardContent>
                                        <Box mb={2}>
                                            <Typography>Diseases</Typography>
                                        </Box>

                                        <Box mb={1}>
                                            <Autocomplete
                                                options={
                                                    diseases && diseases.content
                                                }
                                                getOptionLabel={(option) =>
                                                    option.name
                                                }
                                                fullWidth
                                                multiple
                                                filterSelectedOptions
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        label="Select Diseases"
                                                    />
                                                )}
                                                value={form.diseaseList}
                                                onChange={(e, data) =>
                                                    fieldChangeHandler(
                                                        "diseaseList",
                                                        data
                                                    )
                                                }
                                            />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>

                            <Box>
                                <Card>
                                    <CardContent>
                                        <Box mb={2}>
                                            <Typography>Notes</Typography>
                                        </Box>
                                        addNewMedicineForms={8}
                                        value={form.note}
                                        onChange=
                                        {(e) =>
                                            fieldChangeHandler(
                                                "note",
                                                e.target.value
                                            )
                                        }
                                        />
                                    </CardContent>
                                </Card>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={8}>
                    <Card>
                        <CardContent>
                            {form.medicineInformationList.map((item, i) => (
                                <Box mb={2}>
                                    <Card>
                                        <CardContent>
                                            <Box mb={2}>
                                                <Grid
                                                    container
                                                    alignItems="center"
                                                >
                                                    <Grid item xs={12} lg={6}>
                                                        <Typography>
                                                            Select Medicine
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} lg={6}>
                                                        <Box textAlign="right">
                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox />
                                                                }
                                                                label="Before meal"
                                                            />
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Box>

                                            <Box mb={2}>
                                                <Autocomplete
                                                    options={
                                                        medicines &&
                                                        medicines.content
                                                    }
                                                    getOptionLabel={(option) =>
                                                        option.name
                                                    }
                                                    fullWidth
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            label="Select Medicines"
                                                        />
                                                    )}
                                                />
                                            </Box>

                                            <Grid container spacing={2}>
                                                <Grid item xs={12} lg={4}>
                                                    <Box mb={2}>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox />
                                                            }
                                                            label="Morning"
                                                        />
                                                    </Box>

                                                    <Autocomplete
                                                        options={dozeNumber}
                                                        fullWidth
                                                        renderInput={(
                                                            params
                                                        ) => (
                                                            <TextField
                                                                {...params}
                                                                label="Select Medicines"
                                                            />
                                                        )}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} lg={4}>
                                                    <Box mb={2}>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox />
                                                            }
                                                            label="Afternoon"
                                                        />
                                                    </Box>

                                                    <Autocomplete
                                                        options={dozeNumber}
                                                        fullWidth
                                                        renderInput={(
                                                            params
                                                        ) => (
                                                            <TextField
                                                                {...params}
                                                                label="Select Medicines"
                                                            />
                                                        )}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} lg={4}>
                                                    <Box mb={2}>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox />
                                                            }
                                                            label="Evening"
                                                        />
                                                    </Box>

                                                    <Autocomplete
                                                        options={dozeNumber}
                                                        fullWidth
                                                        renderInput={(
                                                            params
                                                        ) => (
                                                            <TextField
                                                                {...params}
                                                                label="Select Medicines"
                                                            />
                                                        )}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Box>
                            ))}
                        </CardContent>

                        <CardActions>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={addNewMedicineForm}
                            >
                                Add New Medicine
                            </Button>
                            <Button variant="contained" color="primary">
                                Save Prescription
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default PrescriptionForm;
