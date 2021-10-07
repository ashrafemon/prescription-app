import * as types from "../types";

const initialState = {
    prescriptions: [],
    prescription: {},
    prescriptionDialog: false,
};

const prescriptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRESCRIPTIONS:
            return {
                ...state,
                prescriptions: action.payload,
            };
        case types.FETCH_PRESCRIPTION:
            return {
                ...state,
                prescription: action.payload,
            };
        case types.CREATE_PRESCRIPTION:
            return {
                ...state,
                prescriptions: [action.payload, ...state.prescriptions],
            };
        case types.TOGGLE_PRESCRIPTION_DIALOG:
            return {
                ...state,
                prescriptionDialog: action.payload,
            };
        default:
            return state;
    }
};

export default prescriptionReducer;
