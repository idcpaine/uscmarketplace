//this file can be included in files later on as the single place for firebase initialization

src="https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js"
src="https://www.gstatic.com/firebasejs/8.4.1/firebase-analytics.js"
src="https://www.gstatic.com/firebasejs/8.4.1/firebase-auth.js"
src="https://www.gstatic.com/firebasejs/8.4.1/firebase-firestore.js"
src="https://www.gstatic.com/firebasejs/8.4.1/firebase-storage.js"

var firebaseConfig = {
    apiKey: "AIzaSyDggC7QCB9qvUa9sT9DgWn50djUDzR3_T0",
    authDomain: "uscmarketplace.firebaseapp.com",
    projectId: "uscmarketplace",
    storageBucket: "uscmarketplace.appspot.com",
    messagingSenderId: "432656718742",
    appId: "1:432656718742:web:9f34948f88a687987d9bb7",
    measurementId: "G-LSPEZ0QTC0"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();