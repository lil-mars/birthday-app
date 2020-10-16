import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCIac0pHuftzCnIB_faP5QEu8un0T8m9XQ",
    authDomain: "birthday-app-80b17.firebaseapp.com",
    databaseURL: "https://birthday-app-80b17.firebaseio.com",
    projectId: "birthday-app-80b17",
    storageBucket: "birthday-app-80b17.appspot.com",
    messagingSenderId: "133979568002",
    appId: "1:133979568002:web:79499878fd799cf80a419b",
    measurementId: "G-H8200HW02V"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
