const provider = new firebase.auth.GoogleAuthProvider();

document.querySelector("#login").addEventListener("click", function() {
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

function toggleActiveContent(contentContainer){
  const currentActiveContent = document.querySelector('.active');
  currentActiveContent.classList.replace('active', 'inactive');
  contentContainer.classList.add('active');
}


  // firebase.auth().signOut().then(function() {                 to sign out
  //   console.log("Signed Out");
  // }).catch(function(error) {
  //   console.log("FAILED");
  // });

// function writeEntryToDataBase(item) {                         to add data to DB
//   firebase.database().ref('entry/' + item).set({
//     entry: item
//   });
// }


// module.exports = {

// }
