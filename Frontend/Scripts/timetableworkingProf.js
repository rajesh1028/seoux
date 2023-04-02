// pop up javascript

// const confirmBtn = document.getElementById("btn-65");
// const confirmationPopup = document.getElementById("confirmation-popup");
// const yesBtn = document.getElementById("yes-btn");
// const noBtn = document.getElementById("no-btn");

// confirmBtn.addEventListener("click", () => {
//   confirmationPopup.style.display = "block";
// });

// yesBtn.addEventListener("click", () => {
//   // do something when user clicks "Yes"
//   confirmationPopup.style.display = "none";
// });

// noBtn.addEventListener("click", () => {
//   // do something when user clicks "No"
//   confirmationPopup.style.display = "none";
// });












// Get the current date
var today = new Date();

let arr = [];

// Loop through each day of the week and add it to the calendar
for (var i = 0; i < 7; i++) {
  var date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + i
  );
  var cell = document.getElementById("calendar-row").getElementsByTagName("td")[
    i
  ];
  var day = document.getElementById("calendar-day").getElementsByTagName("th")[
    i
  ];
  cell.innerHTML = date.toLocaleDateString("en-US", {
    day: "numeric",
  });

  let datetoday = date.toLocaleDateString("es-US", { day: "numeric" });

  arr.push(+datetoday);

  day.innerText = date.toLocaleDateString("en-US", { weekday: "short" });
}

console.log(arr);

//
function getData() {
  fetch(`http://localhost:3000/gettime`)
    .then((res) => res.json())
    .then((data) => {
      displayData(data);
      console.log(data);
    })
    .catch((err) => console.log(err));
}

getData();

let tr = document.getElementById("appointment-btn");
tr.innerHTML = "";
for (let i = 0; i < arr.length; i++) {
  let td = document.createElement("td");
  let classname = `td_${arr[i]}`;
  td.classList.add(classname);
  tr.append(td);
}


function displayData(data) {
  data.map((elem) => {
    let obj = elem.slots;
    let classname = `td_${elem.date}`;
    // console.log(elem);
    let btndivs = document.getElementsByClassName(classname);
    // console.log(obj);
    for (let key in obj) {
      let btn = document.createElement("button");
      btn.classList.add("slot-btn"); // adding class list
      btn.dataset.add = `${elem.date}`;
      btn.innerHTML = key;
      for (let i = 0; i < btndivs.length; i++) {
        if (obj[key]) {
          btndivs[i].appendChild(btn);
          let br = document.createElement("br");
          btndivs[i].appendChild(br);
        } else {
          btndivs[i].appendChild(btn);
          btn.disabled = true;
          btn.style.opacity = "40%";
          let br = document.createElement("br");
          btndivs[i].appendChild(br);
        }

      }

    }
  });

  let slotButtons = document.querySelectorAll(".slot-btn");
  slotButtons.forEach((elem, i) => {
    elem.addEventListener("click", () => styleButton(slotButtons, i));
  })


}



function styleButton(slotButtons, index) {
  for (let i = 0; i < slotButtons.length; i++) {
    if (i == index) {
      slotButtons[i].classList.add("focused");
    } else {
      slotButtons[i].classList.remove("focused");
    }
  }
  // console.log(slotButtons[index].dataset.add, slotButtons[index].innerHTML);
  let obj = {
    date: slotButtons[index].dataset.add,
    time: slotButtons[index].innerHTML
  }
  sessionStorage.setItem("clicked-slot", JSON.stringify(obj));
}


// let nextButton = document.getElementById("btn-65");
// nextButton.addEventListener("click", () => {
  
//   let value = sessionStorage.getItem("clicked-slot")
//   if(value){
//     console.log(value);
//   }else{
//     alert("no data present");
//   }
//   sessionStorage.setItem("clicked-slot", "");
//   // console.log(sessionStorage.getItem("clicked-slot"));
// })
