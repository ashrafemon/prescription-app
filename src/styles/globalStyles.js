import { makeStyles, withStyles } from "@mui/styles";
import {
    Avatar,
    Button,
    Dialog,
    IconButton,
    List,
    Table,
    Typography,
} from "@mui/material";

export const NavList = withStyles(() => ({
    root: {
        display: "flex",
        "& a": {
            textDecoration: "none",
            color: "rgba(0, 0, 0, 0.3)",
        },
    },
}))(List);

export const TitleAddButton = withStyles(() => ({
    root: {
        fontSize: 12,
        color: "#000",
        marginLeft: 10,
    },
}))(Button);

export const AppDataTable = withStyles(() => ({
    root: {
        borderCollapse: "separate",
        borderSpacing: "5px",

        "& .MuiTableCell-root": {
            border: 0,
            fontSize: 12,
            textAlign: "center",
        },
        "& .MuiTableCell-head": {
            backgroundColor: "rgba(229, 229, 229, 0.3)",
            color: "#000",
            textTransform: "uppercase",
            borderRadius: 2,
            fontWeight: 600,
        },
    },
}))(Table);

export const StatusBtn = withStyles(() => ({
    root: {
        fontSize: 12,
        backgroundColor: "rgba(12, 150, 84, 0.1)",
        color: "#0C9654",
        fontWeight: 600,
        borderRadius: 8,
    },
}))(Button);

export const TableActionBtn = withStyles(() => ({
    root: {
        fontSize: 12,
        border: "1px solid rgba(0, 0, 0, 0.3)",
        color: "#000",
        borderRadius: 8,
    },
}))(Button);

export const TableIconActionBtn = withStyles(() => ({
    root: {
        padding: 5,
    },
}))(IconButton);

export const AppCrudDialog = withStyles(() => ({
    root: {
        "& .MuiPaper-root": {
            borderRadius: 5,
            "& ::-webkit-scrollbar": {
                width: 3,
                backgroundColor: "rgba(0,0,0,0.3)",
            },
            "& ::-webkit-scrollbar-thumb": {
                width: 3,
                backgroundColor: "#005085",
            },
        },
    },
}))(Dialog);

export const DialogActionBtn = withStyles(() => ({
    root: {
        backgroundColor: "#005085",
        color: "#fff",
        textTransform: "capitalize",
        fontSize: 12,
        borderRadius: 8,
        padding: "10px 16px",
        fontWeight: 600,
    },
}))(Button);

export const FullAvatar = withStyles(() => ({
    root: {
        width: "100%",
        height: 150,
        borderRadius: 0,
        "& .MuiAvatar-img": {
            objectFit: "contain",
        },
    },
}))(Avatar);

export const SearchPatientTitle = withStyles(() => ({
    root: {
        fontSize: 24,
        "& em": {
            fontSize: 35,
            color: "#005085",
        },
    },
}))(Typography);

export const SearchPatientText = withStyles(() => ({
    root: {
        color: "rgba(0, 0, 0, 0.28)",
    },
}))(Typography);

export const useStyles = makeStyles(() => ({
    searchBox: {
        width: "100%",
        minHeight: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    prescriptionListItem: {
        backgroundColor: "#F8F8F8",
        borderRadius: 8,
    },
    prescriptionListItemRx: {
        backgroundColor: "#005085",
        borderRadius: 8,
        width: "100%",
        height: 55,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
    },
    prescriptionListItemUser: {
        fontSize: 12,
        color: "#000",
        "& .MuiSvgIcon-root": {
            position: "relative",
            top: 3,
        },
    },
    prescriptionListItemDate: {
        fontSize: 12,
        color: "rgba(0, 0, 0, 0.3)",
        "& .MuiSvgIcon-root": {
            position: "relative",
            top: 3,
        },
    },
}));
