
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAr3UAn9eRJiGF_Wz12lhzcP_5AbldpQRY",
      authDomain: "kwitter-78fa2.firebaseapp.com",
      databaseURL: "https://kwitter-78fa2-default-rtdb.firebaseio.com",
      projectId: "kwitter-78fa2",
      storageBucket: "kwitter-78fa2.appspot.com",
      messagingSenderId: "999159923168",
      appId: "1:999159923168:web:67bdba413cf7a1ded02b85"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();





 
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("roomname", name);
    window.location = "kwitter_page.html";
  }
  function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);  
  document.getElementById("output").innerHTML += row;
  });
  document.getElementById("output").innerHTML += row;
  });
  }
  getData();
  
  function logout()
  {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = kwitter_page.html
  }
