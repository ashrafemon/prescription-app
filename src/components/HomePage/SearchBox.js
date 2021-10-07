import {
    Button,
    Divider,
    Grid,
    InputAdornment,
    TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Images } from "../../constants/themeData";
import {
    FullAvatar,
    SearchPatientText,
    SearchPatientTitle,
} from "../../styles/globalStyles";

const SearchBox = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        birthId: "",
    });

    const fieldChangeHandler = (field, value) => {
        setForm((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const searchPatient = () => {
        // dispatch();
    };

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="flex-end"
            spacing={3}
        >
            <Grid item xs={12} lg={6}>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="flex-end"
                >
                    <Grid item xs={6} lg={6}>
                        <FullAvatar src={Images.DoctorImage} />
                    </Grid>
                    <Grid item xs={6} lg={6}>
                        <SearchPatientTitle>
                            <em>Search</em> Patient
                        </SearchPatientTitle>
                        <SearchPatientText>
                            Search Patient By Birth ID
                        </SearchPatientText>
                        <Divider />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={6}>
                <TextField
                    fullWidth
                    variant="outlined"
                    value={form.birthId}
                    placeholder="Search Patient by Birth ID"
                    onChange={(e) =>
                        fieldChangeHandler("birthId", e.target.value)
                    }
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <Button variant="contained" color="primary">
                                    Search
                                </Button>
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>
        </Grid>
    );
};

export default SearchBox;
