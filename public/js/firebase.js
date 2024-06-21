let firebaseConfig = {
    apiKey: "AIzaSyB-rX4t_EQZbWd_fYzNRHoI-7jtxkeAny4",
  authDomain: "blogging-website-fbf12.firebaseapp.com",
  projectId: "blogging-website-fbf12",
  storageBucket: "blogging-website-fbf12.appspot.com",
  messagingSenderId: "32070218204",
  appId: "1:32070218204:web:0eae399c9e448e3ca49f19"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();