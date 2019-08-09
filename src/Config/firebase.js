import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyAWerA-i5n11LIsp4YnL3-BxEIk8JLIq3M",
    authDomain: "tvmaze-e4ce0.firebaseapp.com",
    databaseURL: "https://tvmaze-e4ce0.firebaseio.com",
    projectId: "tvmaze-e4ce0",
    storageBucket: "",
    messagingSenderId: "117410392890",
    appId: "1:117410392890:web:7e8f42f92a868cbf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//   *   { database, auth, storage}   *   // 


export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
