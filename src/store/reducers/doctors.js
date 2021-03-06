import * as types from "../types";

const initialState = {
    doctors: {
        content: [],
    },
    doctor: {},
    doctorDialog: false,
};

const doctorReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_DOCTORS:
            return {
                ...state,
                doctors: action.payload,
            };
        case types.FETCH_DOCTOR:
            return {
                ...state,
                doctor: action.payload,
            };
        case types.CREATE_DOCTOR:
            return {
                ...state,
                doctors: {
                    ...state.doctors,
                    content: [action.payload, ...state.doctors.content],
                },
            };
        case types.TOGGLE_DOCTOR_DIALOG:
            return {
                ...state,
                doctorDialog: action.payload,
            };
        default:
            return state;
    }
};

export default doctorReducer;
