import apiUrl from "../../constants/apiUrl";
import * as types from "./../types";

export const fetchDoctors =
    (page = 0) =>
    async (dispatch) => {
        await fetch(apiUrl.doctors.index + `?offset=${page}&size=10`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                dispatch({
                    type: types.FETCH_DOCTORS,
                    payload: res,
                });
            })
            .catch((err) => console.log(err));
    };

export const fetchDoctor = () => async (dispatch) => {
    await fetch(apiUrl.doctors.index, {
        method: "GET",
    })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};

export const createDoctor =
    (data, cb = () => {}) =>
    async (dispatch) => {
        await fetch(apiUrl.doctors.create, {
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
                        type: types.CREATE_DOCTOR,
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

export const deleteDoctor = () => async (dispatch) => {
    await fetch(apiUrl.doctors.index, {
        method: "GET",
    })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};
