import apiUrl from "../../constants/apiUrl";
import * as types from "./../types";

export const togglePatientDialog = (status) => ({
    type: types.TOGGLE_PATIENT_DIALOG,
    payload: status,
});

export const fetchPatients =
    (page = 0) =>
    async (dispatch) => {
        await fetch(apiUrl.patients.index + `?offset=${page}&size=10`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                dispatch({
                    type: types.FETCH_PATIENTS,
                    payload: res,
                });
            })
            .catch((err) => console.log(err));
    };

export const fetchPatient = (birthId) => async (dispatch) => {
    await fetch(apiUrl.patients.show + `?birthId=${birthId}`, {
        method: "GET",
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            if (Object.keys(res).length > 0) {
                dispatch({
                    type: types.FETCH_PATIENT,
                    payload: res,
                });
            }
        })
        .catch((err) => console.log(err));
};

export const createPatient =
    (data, cb = () => {}) =>
    async (dispatch) => {
        await fetch(apiUrl.patients.create, {
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
                        type: types.CREATE_PATIENT,
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

export const deletePatient = (id) => async (dispatch) => {
    await fetch(apiUrl.patients.delete + `?id=${id}`, {
        method: "DELETE",
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            if (res) {
                dispatch({
                    type: types.DELETE_PATIENT,
                    payload: id,
                });
            }
        })
        .catch((err) => console.log(err));
};
