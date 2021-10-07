import * as types from "../types";

const initialState = {
    diseases: {
        content: [],
    },
    disease: {},
};

const diseaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_DISEASES:
            return {
                ...state,
                diseases: action.payload,
            };
        case types.FETCH_DISEASE:
            return {
                ...state,
                disease: action.payload,
            };
        case types.CREATE_DISEASE:
            return {
                ...state,
                diseases: {
                    ...state.diseases,
                    content: [action.payload, ...state.diseases.content],
                },
            };
        default:
            return state;
    }
};

export default diseaseReducer;
