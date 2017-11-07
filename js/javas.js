
document.addEventListener("keydown", function(evento){
    if(evento.keyCode==13){
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
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        var photo = user.photoURL;
        document.getElementById('usr_img').src = photo;
        
        
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
}

initializeFirebase();

function salir(){
    console.log("Adasd");
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});  
}

function mostrarmapa() {
    $("#container").load("map.html");
}



