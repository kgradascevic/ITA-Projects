const blueButton = document.getElementById("bluebutton");
const  middle = document.getElementById("middle");
const signUpButton = document.getElementById("signUpButton");


blueButton.onclick = function() {
    middle.style.display = "flex";
}

signUpButton.onclick = function () {
    middle.style.display = "none";
}