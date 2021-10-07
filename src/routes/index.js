import Doctors from "../pages/Doctors";
import Patients from "../pages/Patients";
import Symptoms from "../pages/Symptoms";
import Diseases from "../pages/Diseases";
import Medicines from "../pages/Medicines";
import siteUrl from "../constants/siteUrl";
import HomePage from "../pages/HomePage";

const routes = [
    { path: siteUrl.home, component: HomePage },
    { path: siteUrl.doctors.index, component: Doctors },
    { path: siteUrl.patients.index, component: Patients },
    { path: siteUrl.symptoms.index, component: Symptoms },
    { path: siteUrl.diseases.index, component: Diseases },
    { path: siteUrl.medicines.index, component: Medicines },
];

export default routes;
