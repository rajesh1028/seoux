let globalData = [];

let card_section = document.querySelector(".card-section");

function getWorkers() {
  fetch("http://localhost:3000/getWorker")
    .then((res) => res.json())
    .then((data) => {
      globalData = data;
      displayCard(data);
      totalEmployee(data.length);
    })
    .catch((err) => console.log(err));
}

getWorkers();

function displayCard(data) {
  // console.log(data);
  let displayData = data.map((elem) => {
    return `
        <div class="cards" data-aos="zomm-out-up">
            <div class="image">
                <div class="image-left">
                    <img src=${elem.img} alt="user">
                    <h3>${elem.name}</h3>
                    <p>salonist</p>
                </div>
                <div class="menu">
                    <span>...</span>
                </div>
            </div>
            <div class="cards-2">
                <div class="cards-mid">
                    <div>
                        <p>Department</p>
                        <b>${elem.service}</b>
                    </div>
                    <div>
                        <p>Price</p>
                        <b>₹ ${elem.rate}</b>
                    </div>
                </div>
                <div class="cards-bottom">
                    <h4><img src="./images/workingProfessionals/email.png" alt="email"> ronaldo@gmail.com</h4>
                    <h4><img src="./images/workingProfessionals/call.png" alt="call"> 1234567890</h4>
                </div>
            </div>

        </div>
        `;
  });
  card_section.innerHTML = displayData.join("");
}

function totalEmployee(data) {
  let totalEmployee = document.getElementById("total-employee");
  totalEmployee.innerHTML = `<span>${data}</span> Employee`;
}

let sort = document.getElementById("price");
sort.addEventListener("change", () => {
  sortByPrice(globalData, sort.value);
});

function sortByPrice(data, sortType) {
  if (sortType == "LTH") {
    let sortedData = data.sort((a, b) => {
      return a.rate - b.rate;
    });
    displayCard(sortedData);
  } else {
    let sortedData = data.sort((a, b) => {
      return b.rate - a.rate;
    });
    displayCard(sortedData);
  }
}

// search function

let search = document.getElementById("search");
search.addEventListener("input", () => {
  searchFunction(search.value);
});

function searchFunction(value) {
  let result = [];
  for (let i = 0; i < globalData.length; i++) {
    if (globalData[i].name.includes(value)) {
      result.push(globalData[i]);
    }
  }
  displayCard(result);
  totalEmployee(result.length);
}

// highlighting text

let dashboard = document.querySelector(".container .dashboard");

let para = dashboard.childNodes;

for (let i = 1; i < para.length; i = i + 2) {
  para[i].addEventListener("click", () => {
    changeColor(i);
  });
}

function changeColor(index) {
  for (let i = 1; i < para.length; i = i + 2) {
    if (i == index) {
      para[i].classList.add("focused");
    } else {
      para[i].classList.remove("focused");
    }
  }
  console.log("done");
}

// console.log(dashboard.childNodes[1].innerHTML);
