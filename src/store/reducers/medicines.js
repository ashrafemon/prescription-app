import * as types from "../types";

const initialState = {
    medicines: {
        content: [],
    },
    medicine: {},
    medicineDialog: false,
};

const medicineReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_MEDICINES:
            return {
                ...state,
                medicines: action.payload,
            };
        case types.FETCH_MEDICINE:
            return {
                ...state,
                medicine: action.payload,
            };
        case types.CREATE_MEDICINE:
            return {
                ...state,
                medicines: {
                    ...state.medicines,
                    content: [action.payload, ...state.medicines.content],
                },
            };
        case types.TOGGLE_MEDICINE_DIALOG:
            return {
                ...state,
                medicineDialog: action.payload,
            };
        default:
            return state;
    }
};

export default medicineReducer;
