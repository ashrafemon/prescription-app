import { DialogContent } from "@mui/material";
import React from "react";
import { AppCrudDialog } from "../../../styles/globalStyles";

const CrudDialog = ({ open, close, size = "sm", children }) => {
    return (
        <AppCrudDialog open={open} maxWidth={size} fullWidth onClose={close}>
            <DialogContent>{children}</DialogContent>
        </AppCrudDialog>
    );
};

export default CrudDialog;
