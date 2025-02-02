const btnSubmit = document.getElementById("btnSubmit");
const txtArea = document.getElementById("txtArea");
const messageBoardReplies = document.getElementById("messageBoardReplies");

let txtValue;
let messages = [];

function obtainMessage() {
    txtValue = txtArea.value;
    messages.push(txtValue);
}

function addNote() {
    let messagesString = "";
    for (let i = 0; i < messages.length; i++) {
        messagesString += "<div id='messageNote'>\n\t<p>"+messages[i]+"</p>\n</div>";
    }
    messageBoardReplies.innerHTML = messagesString;
}

btnSubmit.addEventListener("click", () => {
    obtainMessage();
    addNote();
    txtArea.value = "";
})




