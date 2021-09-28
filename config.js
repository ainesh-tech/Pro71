import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCh_qEXv_glVITGkVRNyNCwJcp_L0HUEHI",
  authDomain: "class35-fa097.firebaseapp.com",
  databaseURL: "https://class35-fa097-default-rtdb.firebaseio.com",
  projectId: "class35-fa097",
  storageBucket: "class35-fa097.appspot.com",
  messagingSenderId: "378742977502",
  appId: "1:378742977502:web:5fd2b81de0a38aaa73a34f"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

