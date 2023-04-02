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

// function displayData(data) {

//   data.map((elem) => {
//     let obj = elem.slots;
//     let classname = `td_${elem.date}`;
//     let btndiv = document.getElementsByClassName(classname);
//     for (let key in obj) {
//       let btn = document.createElement("button");
//       btn.innerHTML = key;
//       btndiv.append(btn);
//     }

//     console.log(btndiv);

//   });
// }

function displayData(data) {
  data.map((elem) => {
    let obj = elem.slots;
    let classname = `td_${elem.date}`;
    let btndivs = document.getElementsByClassName(classname);
    for (let key in obj) {
      if (obj[key]) {
        let btn = document.createElement("button");
        btn.innerHTML = key;
        for (let i = 0; i < btndivs.length; i++) {
          btndivs[i].appendChild(btn);
          let br = document.createElement("br");
          btndivs[i].appendChild(br);
        }
      }
    }
  });
}
