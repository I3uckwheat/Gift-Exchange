const submitButton = document.querySelector("#submit");
const inputBox = document.querySelector("#inputBox");
const provider = new firebase.auth.GoogleAuthProvider();

document.querySelector("#signIn").addEventListener("click", function() {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });
})

document.querySelector("#signOut").addEventListener("click", function() {
  firebase.auth().signOut().then(function() {
    console.log("Signed Out");
  }).catch(function(error) {
    console.log("FAILED");
  });
})

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
