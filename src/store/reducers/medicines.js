import * as types from "../types";

const initialState = {
    medicines: {
        content: [],
    },
    medicine: {},
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
        default:
            return state;
    }
};

export default medicineReducer;
