 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCvVBj2bx8kxpoyZ2lWtz3IAHw2nS4aTgk",
    authDomain: "profile-fa7fa.firebaseapp.com",
    projectId: "profile-fa7fa",
    storageBucket: "profile-fa7fa.firebasestorage.app",
    messagingSenderId: "241892051068",
    appId: "1:241892051068:web:baa51c67adb267858261f9",
    measurementId: "G-C712YKSM84"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
