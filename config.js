import firebase from 'firebase';

  var firebaseConfig = {
apiKey: "AIzaSyC5ePAvTm0Qp5BWECrAfGkVhwHeujAmaEk",
    authDomain: "myquiz-game-64397.firebaseapp.com",
    databaseURL: "https://myquiz-game-64397-default-rtdb.firebaseio.com",
    projectId: "myquiz-game-64397",
    storageBucket: "myquiz-game-64397.appspot.com",
    messagingSenderId: "77211020939",
    appId: "1:77211020939:web:a38f8df5da5d3b3a1c6e8e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();