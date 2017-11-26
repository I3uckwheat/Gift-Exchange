const submitButton = document.querySelector("#submit");
const inputBox = document.querySelector("#inputBox");
const provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
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

submitButton.addEventListener("click", function(){
  const text = inputBox.value;
  writeEntryToDataBase(text);
});

function writeEntryToDataBase(item) {
  firebase.database().ref('entry/' + item).set({
    entry: item
  });
}


// module.exports = {

// }
