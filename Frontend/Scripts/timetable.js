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
