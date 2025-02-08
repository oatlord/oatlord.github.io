const btnChangeText = document.getElementById("btnChangeText");
const text = document.getElementById("text");

btnChangeText.addEventListener('click', function() {
    text.textContent="You clicked the button!";
});