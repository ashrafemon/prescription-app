import apiUrl from "../../constants/apiUrl";
import * as types from "./../types";

export const toggleMedicineDialog = (status) => ({
    type: types.TOGGLE_MEDICINE_DIALOG,
    payload: status,
});

export const fetchMedicines =
    (page = 0) =>
    async (dispatch) => {
        await fetch(apiUrl.medicines.index + `?offset=${page}&size=10`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                dispatch({
                    type: types.FETCH_MEDICINES,
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

export const createMedicine =
    (data, cb = () => {}) =>
    async (dispatch) => {
        await fetch(apiUrl.medicines.create, {
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
                        type: types.CREATE_MEDICINE,
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

export const deleteMedicine = (id) => async (dispatch) => {
    await fetch(apiUrl.medicines.delete + `?id=${id}`, {
        method: "DELETE",
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            if (res) {
                dispatch({
                    type: types.DELETE_MEDICINE,
                    payload: id,
                });
            }
        })
        .catch((err) => console.log(err));
};
