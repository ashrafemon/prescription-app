import { combineReducers } from "redux";
import diseaseReducer from "./diseases";
import doctorReducer from "./doctors";
import medicineReducer from "./medicines";
import patientReducer from "./patients";
import prescriptionReducer from "./prescriptions";
import symptomReducer from "./symptoms";

const rootReducers = combineReducers({
    doctors: doctorReducer,
    patients: patientReducer,
    medicines: medicineReducer,
    diseases: diseaseReducer,
    symptoms: symptomReducer,
    prescriptions: prescriptionReducer,
});

export default rootReducers;
