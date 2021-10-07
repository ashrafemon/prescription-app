const ROOT_URL = "http://203.202.241.85:6060/";

const apiUrl = {
    doctors: {
        index: ROOT_URL + "/doctor/list",
        create: ROOT_URL + "/doctor/create",
    },
    patients: {
        index: ROOT_URL + "/patient/list",
        create: ROOT_URL + "/patient/create",
    },
    medicines: {
        index: ROOT_URL + "/medicine/list",
        create: ROOT_URL + "/medicine/create",
    },
    symptoms: {
        index: ROOT_URL + "/symptom/list",
        create: ROOT_URL + "/symptom/create",
    },
    diseases: {
        index: ROOT_URL + "/disease/list",
        create: ROOT_URL + "/disease/create",
    },
};

export default apiUrl;
