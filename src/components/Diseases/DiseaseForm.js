import { Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createDisease } from "../../store/actions/diseaseActions";
import { DialogActionBtn } from "../../styles/globalStyles";

const DiseaseForm = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        name: "",
        details: "",
    });

    const [errors, setErrors] = useState({
        name: { text: "", show: false },
        details: { text: "", show: false },
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
            name: "",
            details: "",
        }));
        setErrors((prevState) => ({
            ...prevState,
            name: { text: "", show: false },
            details: { text: "", show: false },
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(createDisease(form, resetForm()));
    };

    return (
        <>
            <Box textAlign="center" mb={5}>
                <Typography variant="h6">Add Disease</Typography>
            </Box>
            <Grid container justifyContent="center">
                <Grid item xs={12} lg={9}>
                    <form onSubmit={submitHandler}>
                        {/* <Box mb={2}>
                            <TextField
                                label="Disease ID"
                                fullWidth
                                variant="standard"
                            />
                        </Box> */}
                        <Box mb={2}>
                            <TextField
                                label="Disease Name"
                                fullWidth
                                variant="standard"
                                value={form.name}
                                onChange={(e) =>
                                    fieldChangeHandler("name", e.target.value)
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
                                Add Disease
                            </DialogActionBtn>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </>
    );
};

export default DiseaseForm;
