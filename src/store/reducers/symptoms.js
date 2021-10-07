import * as types from "../types";

const initialState = {
    symptoms: {
        content: [],
    },
    symptom: {},
};

const symptomReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_SYMPTOMS:
            return {
                ...state,
                symptoms: action.payload,
            };
        case types.FETCH_SYMPTOM:
            return {
                ...state,
                symptom: action.payload,
            };
        case types.CREATE_SYMPTOM:
            return {
                ...state,
                symptoms: {
                    ...state.symptoms,
                    content: [action.payload, ...state.symptoms.content],
                },
            };
        default:
            return state;
    }
};

export default symptomReducer;
