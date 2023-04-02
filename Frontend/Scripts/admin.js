var myButton = document.getElementById("myButton");
var myPopup = document.getElementById("myPopup");
var closePopup = document.getElementById("closePopup");

myButton.onclick = function () {
  myPopup.style.display = "block";
};

closePopup.onclick = function () {
  myPopup.style.animation = "fadeOut 0.5s";
  setTimeout(function () {
    myPopup.style.display = "none";
    myPopup.style.animation = "";
  });
};
