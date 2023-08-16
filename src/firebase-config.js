import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyA7oHh_ScaP10a4vjOkvdPNyuxbpWZmmrE",
    authDomain: "file-upload-drive-83cb8.firebaseapp.com",
    projectId: "file-upload-drive-83cb8",
    storageBucket: "file-upload-drive-83cb8.appspot.com",
    messagingSenderId: "806759040105",
    appId: "1:806759040105:web:033741791c19ed2e924ef8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, storage, auth, provider };