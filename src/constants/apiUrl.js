const ROOT_URL = "http://203.202.241.85:6060/";

const apiUrl = {
    doctors: {
        index: ROOT_URL + "/doctor/list",
        create: ROOT_URL + "/doctor/create",
        delete: ROOT_URL + "/doctor/delete",
    },
    patients: {
        index: ROOT_URL + "/patient/list",
        show: ROOT_URL + "/patient/details",
        create: ROOT_URL + "/patient/create",
        delete: ROOT_URL + "/patient/delete",
    },
    medicines: {
        index: ROOT_URL + "/medicine/list",
        create: ROOT_URL + "/medicine/create",
        delete: ROOT_URL + "/medicine/delete",
    },
    symptoms: {
        index: ROOT_URL + "/symptom/list",
        create: ROOT_URL + "/symptom/create",
        delete: ROOT_URL + "/symptom/delete",
    },
    diseases: {
        index: ROOT_URL + "/disease/list",
        create: ROOT_URL + "/disease/create",
        delete: ROOT_URL + "/disease/delete",
    },
    prescriptions: {
        index: ROOT_URL + "/prescription",
        create: ROOT_URL + "/prescription/new",
        createInOld: ROOT_URL + "/prescription/old",
    },
};

export default apiUrl;
