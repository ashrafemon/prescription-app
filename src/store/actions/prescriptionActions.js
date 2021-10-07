import apiUrl from "../../constants/apiUrl";
import * as types from "../types";

export const togglePrescriptionDialog = (status) => ({
    type: types.TOGGLE_PRESCRIPTION_DIALOG,
    payload: status,
});

export const fetchPrescriptions = (birthId) => async (dispatch) => {
    await fetch(apiUrl.prescriptions.index + `?birthId=${birthId}`, {
        method: "GET",
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            dispatch({
                type: types.FETCH_PRESCRIPTIONS,
                payload: res,
            });
        })
        .catch((err) => console.log(err));
};

export const createNewPrescription =
    (data, cb = () => {}) =>
    async (dispatch) => {
        await fetch(apiUrl.prescriptions.create, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                if (Object.keys(res).length > 0) {
                    dispatch({
                        type: types.CREATE_PRESCRIPTION,
                        payload: res,
                    });
                    cb();
                }
            })
            .catch((err) => console.log(err));
    };

export const createOldPrescription =
    (data, cb = () => {}) =>
    async (dispatch) => {
        await fetch(apiUrl.prescriptions.createInOld, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                if (Object.keys(res).length > 0) {
                    dispatch({
                        type: types.CREATE_PRESCRIPTION,
                        payload: res,
                    });
                    cb();
                }
            })
            .catch((err) => console.log(err));
    };

export const updateDoctor = () => async (dispatch) => {
    await fetch(apiUrl.doctors.index, {
        method: "GET",
    })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};

export const deleteDisease = (id) => async (dispatch) => {
    await fetch(apiUrl.diseases.delete + `?id=${id}`, {
        method: "DELETE",
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            if (res) {
                dispatch({
                    type: types.DELETE_DISEASE,
                    payload: id,
                });
            }
        })
        .catch((err) => console.log(err));
};
