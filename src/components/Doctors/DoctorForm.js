import { Autocomplete, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    createDoctor,
    toggleDoctorDialog,
} from "../../store/actions/doctorActions";
import { DialogActionBtn } from "../../styles/globalStyles";

const DoctorForm = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        designation: "",
        details: "",
        doctorId: "",
        gender: "",
        hospital: "",
        mobile: "",
        name: "",
        specialist: "",
    });

    const [genders] = useState(["Male", "Female", "Third Person"]);

    const [errors, setErrors] = useState({
        designation: { text: "", show: false },
        details: { text: "", show: false },
        doctorId: { text: "", show: false },
        gender: { text: "", show: false },
        hospital: { text: "", show: false },
        mobile: { text: "", show: false },
        name: { text: "", show: false },
        specialist: { text: "", show: false },
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
            designation: "",
            details: "",
            doctorId: "",
            gender: "",
            hospital: "",
            mobile: "",
            name: "",
            specialist: "",
        }));
        setErrors((prevState) => ({
            ...prevState,
            designation: { text: "", show: false },
            details: { text: "", show: false },
            doctorId: { text: "", show: false },
            gender: { text: "", show: false },
            hospital: { text: "", show: false },
            mobile: { text: "", show: false },
            name: { text: "", show: false },
            specialist: { text: "", show: false },
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(
            createDoctor(form, () => {
                resetForm();
                dispatch(toggleDoctorDialog(false));
            })
        );
    };
    return (
        <>
            <Box textAlign="center" mb={5}>
                <Typography variant="h6">Add Doctor</Typography>
            </Box>
            <Grid container justifyContent="center">
                <Grid item xs={12} lg={9}>
                    <form onSubmit={submitHandler}>
                        <Box mb={2}>
                            <TextField
                                label="Doctor's ID"
                                fullWidth
                                variant="standard"
                                value={form.doctorId}
                                onChange={(e) =>
                                    fieldChangeHandler(
                                        "doctorId",
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
                                label="Designation"
                                fullWidth
                                variant="standard"
                                value={form.designation}
                                onChange={(e) =>
                                    fieldChangeHandler(
                                        "designation",
                                        e.target.value
                                    )
                                }
                            />
                        </Box>
                        <Box mb={2}>
                            <TextField
                                label="Specialties"
                                fullWidth
                                variant="standard"
                                value={form.specialist}
                                onChange={(e) =>
                                    fieldChangeHandler(
                                        "specialist",
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
                        <Box mb={2}>
                            <TextField
                                label="Hospital Name"
                                fullWidth
                                variant="standard"
                                value={form.hospital}
                                onChange={(e) =>
                                    fieldChangeHandler(
                                        "hospital",
                                        e.target.value
                                    )
                                }
                            />
                        </Box>
                        <Box mb={2}>
                            <TextField
                                label="Details"
                                multiline
                                minRows={5}
                                maxRows={5}
                                fullWidth
                                variant="standard"
                                value={form.details}
                                onChange={(e) =>
                                    fieldChangeHandler(
                                        "details",
                                        e.target.value
                                    )
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
                                Add Doctor
                            </DialogActionBtn>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </>
    );
};

export default DoctorForm;
