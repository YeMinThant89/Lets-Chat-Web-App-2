// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDcZkdrei8RmGiDptiGGyB5S7wwoKvFUIQ",
    authDomain: "let-chat-web-app-3da74.firebaseapp.com",
    projectId: "let-chat-web-app-3da74",
    storageBucket: "let-chat-web-app-3da74.appspot.com",
    messagingSenderId: "663427501135",
    appId: "1:663427501135:web:a864c0fb884927fc8aee3a"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}