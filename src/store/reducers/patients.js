import * as types from "../types";

const initialState = {
    patients: {
        content: [],
    },
    patient: {},
};

const patientReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PATIENTS:
            return {
                ...state,
                patients: action.payload,
            };
        case types.FETCH_PATIENT:
            return {
                ...state,
                patient: action.payload,
            };
        case types.CREATE_PATIENT:
            return {
                ...state,
                patients: {
                    ...state.patients,
                    content: [action.payload, ...state.patients.content],
                },
            };
        default:
            return state;
    }
};

export default patientReducer;
