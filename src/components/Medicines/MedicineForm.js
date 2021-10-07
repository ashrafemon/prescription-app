import { Autocomplete, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createMedicine } from "../../store/actions/medicineActions";
import { DialogActionBtn } from "../../styles/globalStyles";

const MedicineForm = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        category: "",
        name: "",
        strength: "",
    });

    const [errors, setErrors] = useState({
        category: { text: "", show: false },
        name: { text: "", show: false },
        strength: { text: "", show: false },
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
            category: "",
            name: "",
            strength: "",
        }));
        setErrors((prevState) => ({
            ...prevState,
            category: { text: "", show: false },
            name: { text: "", show: false },
            strength: { text: "", show: false },
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(createMedicine(form, resetForm()));
    };

    return (
        <>
            <Box textAlign="center" mb={5}>
                <Typography variant="h6">Add Medicine</Typography>
            </Box>
            <Grid container justifyContent="center">
                <Grid item xs={12} lg={9}>
                    <form onSubmit={submitHandler}>
                        {/* <Box mb={2}>
                            <TextField
                                label="Medicine ID"
                                fullWidth
                                variant="standard"
                            />
                        </Box> */}
                        <Box mb={2}>
                            <TextField
                                label="Medicine Name"
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
                                label="Category"
                                fullWidth
                                variant="standard"
                                value={form.category}
                                onChange={(e) =>
                                    fieldChangeHandler(
                                        "category",
                                        e.target.value
                                    )
                                }
                            />
                            {/* <Autocomplete
                                options={[]}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Medicine Category"
                                        fullWidth
                                        variant="standard"
                                    />
                                )}
                            /> */}
                        </Box>
                        <Box mb={2}>
                            <TextField
                                label="Gram"
                                fullWidth
                                variant="standard"
                                value={form.strength}
                                onChange={(e) =>
                                    fieldChangeHandler(
                                        "strength",
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
                                Add Medicine
                            </DialogActionBtn>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </>
    );
};

export default MedicineForm;
