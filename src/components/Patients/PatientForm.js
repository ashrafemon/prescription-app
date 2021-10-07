import { Autocomplete, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    createPatient,
    togglePatientDialog,
} from "../../store/actions/patientActions";
import { DialogActionBtn } from "../../styles/globalStyles";

const PatientForm = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        birthId: "",
        dateOfBirth: "",
        gender: "",
        mobile: "",
        name: "",
    });

    const [genders] = useState(["Male", "Female", "Third Person"]);

    const [errors, setErrors] = useState({
        birthId: { text: "", show: false },
        dateOfBirth: { text: "", show: false },
        gender: { text: "", show: false },
        mobile: { text: "", show: false },
        name: { text: "", show: false },
    });

    const fieldChangeHandler = (field, value) => {
        setErrors((prevState) => ({
            ...prevState,
            [field]: { text: "", show: false },
        }));
        setForm((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const resetForm = () => {
        setForm((prevState) => ({
            ...prevState,
            birthId: "",
            dateOfBirth: "",
            gender: "",
            mobile: "",
            name: "",
        }));
        setErrors((prevState) => ({
            ...prevState,
            birthId: { text: "", show: false },
            dateOfBirth: { text: "", show: false },
            gender: { text: "", show: false },
            mobile: { text: "", show: false },
            name: { text: "", show: false },
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(
            createPatient(form, () => {
                resetForm();
                dispatch(togglePatientDialog(false));
            })
        );
    };
    return (
        <>
            <Box textAlign="center" mb={5}>
                <Typography variant="h6">Add Patient</Typography>
            </Box>
            <Grid container justifyContent="center">
                <Grid item xs={12} lg={9}>
                    <form onSubmit={submitHandler}>
                        <Box mb={2}>
                            <TextField
                                label="Birth ID"
                                fullWidth
                                variant="standard"
                                value={form.birthId}
                                onChange={(e) =>
                                    fieldChangeHandler(
                                        "birthId",
                                        e.target.value
                                    )
                                }
                            />
                        </Box>
                        <Box mb={2}>
                            <TextField
                                label="Name"
                                fullWidth
                                variant="standard"
                                value={form.name}
                                onChange={(e) =>
                                    fieldChangeHandler("name", e.target.value)
                                }
                            />
                        </Box>
                        <Box mb={2}>
                            <Autocomplete
                                options={genders}
                                value={form.gender}
                                onChange={(e, data) =>
                                    fieldChangeHandler("gender", data)
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Gender"
                                        fullWidth
                                        variant="standard"
                                    />
                                )}
                            />
                        </Box>
                        <Box mb={2}>
                            <TextField
                                label="Date Of Birth"
                                fullWidth
                                variant="standard"
                                value={form.dateOfBirth}
                                onChange={(e) =>
                                    fieldChangeHandler(
                                        "dateOfBirth",
                                        e.target.value
                                    )
                                }
                            />
                        </Box>
                        <Box mb={2}>
                            <TextField
                                label="Phone No"
                                fullWidth
                                variant="standard"
                                value={form.mobile}
                                onChange={(e) =>
                                    fieldChangeHandler("mobile", e.target.value)
                                }
                            />
                        </Box>

                        <Box mt={5}>
                            <DialogActionBtn
                                variant="contained"
                                color="primary"
                                fullWidth
                                type="submit"
                            >
                                Add Patient
                            </DialogActionBtn>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </>
    );
};

export default PatientForm;
