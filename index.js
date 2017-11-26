const submitButton = document.querySelector("#submit");
const inputBox = document.querySelector("#inputBox");

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
