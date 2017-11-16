function initializeFirebase() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBGGI2y7_Vcp_guzHuUZAI-e3Bbthh6nEk",
    authDomain: "project-5049986903013159327.firebaseapp.com",
    databaseURL: "https://project-5049986903013159327.firebaseio.com",
    projectId: "project-5049986903013159327",
    storageBucket: ""
  };
  firebase.initializeApp(config);
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
}

initializeFirebase();

document.addEventListener("keydown", function(evento) {
  if (evento.keyCode == 13) {
    linker();
  }
})


/*
function linker(){
if(document.getElementById("barra").value!= ""){

window.location.href = "https://www.google.com.ar/search?q="+document.getElementById("barra").value+"&oq=yugioh&gs_l=psy-ab.3..0i67k1j0i131k1j0l2.65229.67815.0.68113.9.9.0.0.0.0.108.777.5j3.9.0.dummy_maps_web_fallback.2..0...1.1.64.psy-ab..0.9.865.6..35i39k1j0i10i67k1.95.JDmYu3VhW1s";
}

}
*/



function cambiar2() {
  document.getElementById("signin").innerHTML = "<div class='large material-icons icon offset-s6'>account_circle</div>";
}

/*function linker2(){
window.location.href = "https://es.wikipedia.org/wiki/"+document.getElementById("barra").value;
}*/

function Signingoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;



  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var photo = user.photoURL;
    document.getElementById('usr_img').src = photo;
    writeUserData();
    sideNavbar();
  } else {
    // Sign-out successful.
    let img = $("#usr_img");
    img.attr("src", "https://www.materialui.co/materialIcons/action/account_circle_grey_192x192.png");
  }
});

function salir() {
  console.log("Adasd");
  firebase.auth().signOut().then(function() {
  }).catch(function(error) {
    // An error happened.
  });
}

function mostrarmapa() {
  $("#container").load("map.html");
}

(function() {
  var cx = '005853302836175793985:e2fzujjywhk';
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
})();


function writeUserData(age = "Not specified", gender = "Not specified", address = "Not specified", phone = "Not specified") {

  var name = firebase.auth().currentUser.displayName.split(" ")[0];
  var surname = firebase.auth().currentUser.displayName.split(" ")[1];
  var email = firebase.auth().currentUser.email;

  firebase.database().ref("/users/" + firebase.auth().currentUser.uid).set({
    name: name,
    surname: surname,
    age: age,
    gender: gender,
    address: address,
    phone: phone,
    email: email
  });
}

function updateData() {
  var age = document.getElementById("input_age").value;
  var gender = document.getElementById("input_gender").value;
  var address = document.getElementById("input_address").value;
  var phone = document.getElementById("input_phone").value;

  writeUserData(age, gender, address, phone)
}

$( document ).ready(function(){
  $(".button-collapse").sideNav();
})

function sideNavbar(){

  var user = firebase.auth().currentUser;
  var user_nav = user.photoURL;
  var name_nav = user.displayName;
  var email_nav = user.email;

  $("#imgG").attr("src", user_nav);
  $("#nameG").empty();
  $("#nameG").text(name_nav);
  $("#emailG").empty();
  $("#emailG").text(email_nav);
}
