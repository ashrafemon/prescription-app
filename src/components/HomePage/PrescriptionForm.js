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
import {
    createNewPrescription,
    togglePrescriptionDialog,
} from "../../store/actions/prescriptionActions";

const PrescriptionForm = () => {
    const dispatch = useDispatch();
    const { medicines } = useSelector((state) => state.medicines);
    const { symptoms } = useSelector((state) => state.symptoms);
    const { diseases } = useSelector((state) => state.diseases);
    const { doctors } = useSelector((state) => state.doctors);
    const { patient } = useSelector((state) => state.patients);

    const [dozeNumber] = useState(["01", "02", "03", "04", "05"]);

    useEffect(() => {
        dispatch(fetchDiseases());
        dispatch(fetchSymptoms());
        dispatch(fetchMedicines());
        dispatch(fetchDoctors());
    }, [dispatch]);

    const [form, setForm] = useState({
        date: null,
        diseaseList: [],
        doctor: null,
        medicineInformationList: [],
        note: "",
        patient: null,
        symptomList: [],
    });

    const resetForm = () => {
        setForm((prevState) => ({
            ...prevState,
            date: null,
            diseaseList: [],
            doctor: null,
            medicineInformationList: [],
            note: "",
            patient: null,
            symptomList: [],
        }));
    };

    useEffect(() => {
        if (Object.keys(patient).length > 0) {
            setForm((prevState) => ({
                ...prevState,
                patient: patient,
            }));
        }
    }, [patient]);

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
                    beforeEating: false,
                    days: 0,
                    details: "",
                    medicine: null,
                    morning: 0,
                    night: 0,
                    noon: 0,
                },
            ],
        }));
    };

    const medicineFieldChangeHandler = (index, field, value) => {
        let medicineInformationList = [...form.medicineInformationList];

        medicineInformationList.forEach((item, i) => {
            if (i === index) {
                item[field] = value;
            }
        });

        setForm((prevState) => ({
            ...prevState,
            medicineInformationList: medicineInformationList,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(
            createNewPrescription(form, () => {
                resetForm();
                dispatch(togglePrescriptionDialog(false));
            })
        );
    };

    return (
        <>
            <Box mb={2}>
                <Typography variant="h5">Add Prescription</Typography>
            </Box>

            <form onSubmit={submitHandler}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={4}>
                        <Card>
                            <CardContent>
                                <Box mb={3}>
                                    <Card>
                                        <CardContent>
                                            <Box mb={2}>
                                                <Typography>
                                                    Select Date
                                                </Typography>
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
                                                        doctors &&
                                                        doctors.content
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
                                                <Typography>
                                                    Symptoms
                                                </Typography>
                                            </Box>

                                            <Box mb={1}>
                                                <Autocomplete
                                                    options={
                                                        symptoms &&
                                                        symptoms.content
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
                                                <Typography>
                                                    Diseases
                                                </Typography>
                                            </Box>

                                            <Box mb={1}>
                                                <Autocomplete
                                                    options={
                                                        diseases &&
                                                        diseases.content
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
                                            <TextField
                                                variant="outlined"
                                                fullWidth
                                                multiline
                                                minRows={8}
                                                maxRows={8}
                                                label="Notes"
                                                value={form.note}
                                                onChange={(e) =>
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
                                                        <Grid
                                                            item
                                                            xs={12}
                                                            lg={6}
                                                        >
                                                            <Typography>
                                                                Select Medicine
                                                            </Typography>
                                                        </Grid>
                                                        <Grid
                                                            item
                                                            xs={12}
                                                            lg={6}
                                                        >
                                                            <Box textAlign="right">
                                                                <FormControlLabel
                                                                    control={
                                                                        <Checkbox
                                                                            checked={
                                                                                item.beforeEating
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                medicineFieldChangeHandler(
                                                                                    i,
                                                                                    "beforeEating",
                                                                                    e
                                                                                        .target
                                                                                        .checked
                                                                                )
                                                                            }
                                                                        />
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
                                                        getOptionLabel={(
                                                            option
                                                        ) => option.name}
                                                        fullWidth
                                                        value={item.medicine}
                                                        onChange={(e, data) =>
                                                            medicineFieldChangeHandler(
                                                                i,
                                                                "medicine",
                                                                data
                                                            )
                                                        }
                                                        renderInput={(
                                                            params
                                                        ) => (
                                                            <TextField
                                                                {...params}
                                                                label="Select Medicine"
                                                            />
                                                        )}
                                                    />
                                                </Box>

                                                <Box mb={2}>
                                                    <TextField
                                                        variant="outlined"
                                                        fullWidth
                                                        minRows={3}
                                                        maxRows={3}
                                                        label="Details"
                                                        value={item.details}
                                                        onChange={(e) =>
                                                            medicineFieldChangeHandler(
                                                                i,
                                                                "details",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </Box>

                                                <Box mb={2}>
                                                    <Box mb={2}>
                                                        <Typography variant="body1">
                                                            Days
                                                        </Typography>
                                                    </Box>

                                                    <Autocomplete
                                                        options={dozeNumber}
                                                        fullWidth
                                                        value={item.days}
                                                        onChange={(e, data) =>
                                                            medicineFieldChangeHandler(
                                                                i,
                                                                "days",
                                                                data
                                                            )
                                                        }
                                                        renderInput={(
                                                            params
                                                        ) => (
                                                            <TextField
                                                                {...params}
                                                                label="How many days"
                                                            />
                                                        )}
                                                    />
                                                </Box>

                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} lg={4}>
                                                        <Box mb={2}>
                                                            <Typography variant="body1">
                                                                Morning
                                                            </Typography>
                                                        </Box>

                                                        <Autocomplete
                                                            options={dozeNumber}
                                                            fullWidth
                                                            value={item.morning}
                                                            onChange={(
                                                                e,
                                                                data
                                                            ) =>
                                                                medicineFieldChangeHandler(
                                                                    i,
                                                                    "morning",
                                                                    data
                                                                )
                                                            }
                                                            renderInput={(
                                                                params
                                                            ) => (
                                                                <TextField
                                                                    {...params}
                                                                    label="Select Doze"
                                                                />
                                                            )}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} lg={4}>
                                                        <Box mb={2}>
                                                            <Typography variant="body1">
                                                                Afternoon
                                                            </Typography>
                                                        </Box>

                                                        <Autocomplete
                                                            options={dozeNumber}
                                                            fullWidth
                                                            value={item.noon}
                                                            onChange={(
                                                                e,
                                                                data
                                                            ) =>
                                                                medicineFieldChangeHandler(
                                                                    i,
                                                                    "noon",
                                                                    data
                                                                )
                                                            }
                                                            renderInput={(
                                                                params
                                                            ) => (
                                                                <TextField
                                                                    {...params}
                                                                    label="Select Doze"
                                                                />
                                                            )}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} lg={4}>
                                                        <Box mb={2}>
                                                            <Typography variant="body1">
                                                                Evening
                                                            </Typography>
                                                        </Box>

                                                        <Autocomplete
                                                            options={dozeNumber}
                                                            fullWidth
                                                            value={item.night}
                                                            onChange={(
                                                                e,
                                                                data
                                                            ) =>
                                                                medicineFieldChangeHandler(
                                                                    i,
                                                                    "night",
                                                                    data
                                                                )
                                                            }
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
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
                                    Save Prescription
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default PrescriptionForm;
