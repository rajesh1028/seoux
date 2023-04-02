document.getElementById("logout").addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "index.html";
});

function loginsignup() {
  // window.location.href = "loginsignup.html";
  document.getElementById("divPopup").style = "opacity: 1";
}

document.querySelector(".slideshow-container").addEventListener("click", () => {
  document.getElementById("divPopup").style = "opacity: 0";
});

let user_name = localStorage.getItem("user_name") || "User";
console.log(user_name)
document.getElementById("fullname").innerHTML = user_name;

// if(document.getElementById("my_account").innerText=="My Account"){
//   document.getElementById("divPopup").style="opacity: 0"
// }else{
//   document.getElementById("divPopup").style="opacity: 1"
// }

// let newName=localStorage.getItem('user')
// console.log("1"+newName)

// if(newName==null){
//   document.getElementById("divPopup").style="opacity: 0"
//   console.log("2"+newName)

// }else{

//   document.getElementById("divPopup").style="opacity:0";
//   // window.location.href="loginsignup.html"
//   console.log("3"+newName)
//   }
// let newName=localStorage.getItem('user')
//   function loginsignup() {

//     if(newName==null){
// window.location.href="loginsignup.html"
// // document.getElementById("divPopup").style="opacity:1";
//     }else{
//       document.getElementById("divPopup").style.display="block"
//     }

//   }

var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow((slidePosition += n));
}

//  images controls
function currentSlide(n) {
  SlideShow((slidePosition = n));
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {
    slidePosition = 1;
  }
  if (n < 1) {
    slidePosition = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition - 1].style.display = "block";
  circles[slidePosition - 1].className += " enable";
}

var slidePosition = 0;
SlideShow();

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("Containers");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {
    slidePosition = 1;
  }
  slides[slidePosition - 1].style.display = "block";
  setTimeout(SlideShow, 3000); // Change image every 2 seconds
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function redirect() {
  window.location.href = "index.html";
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

