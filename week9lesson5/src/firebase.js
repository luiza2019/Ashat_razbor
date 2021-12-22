import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA4Mzfss8cnKD13k8dxv9snwetkGrjhsLU",
    authDomain: "gang-store-13.firebaseapp.com",
    projectId: "gang-store-13",
    storageBucket: "gang-store-13.appspot.com",
    messagingSenderId: "364256640022",
    appId: "1:364256640022:web:fafccc32f16bd751350937",
    measurementId: "G-2XHKRYPRBF"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);