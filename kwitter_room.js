
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBESc9Wig9xPSZ9xqC-ErOojqAPYNRn0vg",
      authDomain: "practice-activity-1322e.firebaseapp.com",
      databaseURL: "https://practice-activity-1322e-default-rtdb.firebaseio.com",
      projectId: "practice-activity-1322e",
      storageBucket: "practice-activity-1322e.appspot.com",
      messagingSenderId: "1048592349907",
      appId: "1:1048592349907:web:a584060781c9b81866f226"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name2").innerHTML = "Welcome "+ user_name+"!" ;


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name -" + Room_names);

var row = "<div id="+ Room_names + " class='room_name' onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"; 
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);

      window.location = "kwitter_page.html";

}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

