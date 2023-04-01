// Get the current date
var today = new Date();

// Loop through each day of the week and add it to the calendar
for (var i = 0; i < 7; i++) {
  // Create a new date for each day of the week
  var date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + i
  );

  // Get the cell for the current day
  var cell = document.getElementById("calendar-row").getElementsByTagName("td")[
    i
  ];
  var day = document.getElementById("calendar-day").getElementsByTagName("th")[
    i
  ];

  // Set the cell's text to the current date and day of the week
  cell.innerHTML = date.toLocaleDateString("en-US", {
    day: "numeric",
  });
  day.innerText = date.toLocaleDateString("en-US", { weekday: "short" });
  // Add any events or appointments for this day
  // TODO: add your code here to retrieve and display events
}


// 
function getData() {
  fetch(`http://localhost:3000/gettime`)
    .then((res) => res.json())
    .then((data) => {
      displayData(data);
    })
    .catch((err) => console.log(err));
}

getData();


function displayData(data) {
  let td1 = document.getElementById("td_1");
  td1.innerHTML = "";

  data.map((elem) => {

    let obj = elem.slots

    for (let key in obj) {
      let btn = document.createElement("button");
      btn.innerHTML = key;
      td1.append(btn)
    }
    
    // console.log(elem);

  })
}