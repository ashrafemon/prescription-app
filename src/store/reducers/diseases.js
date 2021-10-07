import * as types from "../types";

const initialState = {
    diseases: {
        content: [],
    },
    disease: {},
    diseaseDialog: false,
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
        case types.DELETE_DISEASE:
            return {
                ...state,
                diseases: {
                    ...state.diseases,
                    content: [
                        ...state.diseases.content.filter(
                            (item) => item.id !== action.payload
                        ),
                    ],
                },
            };
        case types.TOGGLE_DISEASE_DIALOG:
            return {
                ...state,
                diseaseDialog: action.payload,
            };
        default:
            return state;
    }
};

export default diseaseReducer;
