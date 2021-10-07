import apiUrl from "../../constants/apiUrl";
import * as types from "./../types";

export const toggleSymptomDialog = (status) => ({
    type: types.TOGGLE_SYMPTOM_DIALOG,
    payload: status,
});

export const fetchSymptoms =
    (page = 0) =>
    async (dispatch) => {
        await fetch(apiUrl.symptoms.index + `?offset=${page}&size=10`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                dispatch({
                    type: types.FETCH_SYMPTOMS,
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

export const createSymptom =
    (data, cb = () => {}) =>
    async (dispatch) => {
        await fetch(apiUrl.symptoms.create, {
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
                        type: types.CREATE_SYMPTOM,
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

export const deleteSymptom = (id) => async (dispatch) => {
    await fetch(apiUrl.symptoms.delete + `?id=${id}`, {
        method: "DELETE",
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            if (res) {
                dispatch({
                    type: types.DELETE_SYMPTOM,
                    payload: id,
                });
            }
        })
        .catch((err) => console.log(err));
};
