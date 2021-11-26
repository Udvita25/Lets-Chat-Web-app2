
var firebaseConfig = {
    apiKey: "AIzaSyB8Dd3Im1HqWxXJj8SZUEYcD9dY3CbNDT8",
    authDomain: "kwitter-33f4a.firebaseapp.com",
    databaseURL: "https://kwitter-33f4a-default-rtdb.firebaseio.com",
    projectId: "kwitter-33f4a",
    storageBucket: "kwitter-33f4a.appspot.com",
    messagingSenderId: "815513703954",
    appId: "1:815513703954:web:8fc9eb77028fd2c4edeacb"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function login() {
   user_name=document.getElementById("ibox1").value;
   firebase.database().ref("/").child(user_name).update({
   purpose:"addinguser"
   });
   
  }
