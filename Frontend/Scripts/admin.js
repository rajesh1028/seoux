var myButton = document.getElementById("myButton");
var myPopup = document.getElementById("myPopup");
var closePopup = document.getElementById("closePopup");
var dashboard = document.querySelector(".card-section");
let show_emplyee = document.getElementById("total_employee");
let show_users = document.getElementById("total_users");

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

async function fetchData() {
  let data = await fetch("http://localhost:3000/getWorker");
  let res = await data.json();
  displaycard(res);
  console.log(res);
  show_emplyee.innerHTML = res.length;
}

fetchData();

function displaycard(data) {
  dashboard.innerHTML = "";
  dashboard.innerHTML = `${data
    .map((el) => {
      return `
      <div class="cards" data-aos="zoom-out">
            <div class="image">
              <div class="image-left">
                <img
                  src=${el.img}
                  alt="user"
                />
                <h3>${el.name}</h3>
                <p>Project Manager</p>
              </div>
              <div class="menu">
                <span>...</span>
              </div>
            </div>
            <div class="cards-2">
              <div class="cards-mid">
                <div>
                  <p>Department</p>
                  <b>${el.service}</b>
                </div>
                <div>
                  <p>Hired Date</p>
                  <b>7/27/20</b>
                </div>
              </div>
              <div class="cards-bottom">
                <h4>
                  <img
                    src="./images/workingProfessionals/email.png"
                    alt="email"
                  />
                  ${el.email}
                </h4>
                <h4>
                  <img
                    src="./images/workingProfessionals/call.png"
                    alt="call"
                  />
                  ${el.mob}
                </h4>
              </div>
            </div>
            <button data-id=${el._id} class="button-62 delete" >Delete</button>
          </div>

  `;
    })
    .join(" ")}`;

  let delete_btns = document.querySelectorAll(".delete");
  for (let i = 0; i < delete_btns.length; i++) {
    delete_btns[i].addEventListener("click", async(e) => {
      console.log(e.target.dataset.id);
      let profid=e.target.dataset.id;

      try {

          let result=await fetch(`http://localhost:3000/deleteworker/${profid}`,{
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
        result=await result.json()
        console.log(result);
        
        fetchData();

      } catch (error) {
        console.log(error)
      }



    });

  }
}

async function allUsers() {
  let data = await fetch("http://localhost:3000/users/getUsers");
  let res = await data.json();
  // displaycard(res);
  console.log(res);
  show_users.innerHTML = res.length;
}
allUsers();

let submit_btn = document.getElementById("popupSubmit");
submit_btn.addEventListener("click", async (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let gender = document.getElementById("gender").value;
  let service = document.getElementById("service").value;

  let rate = document.getElementById("price").value;
  let img = document.getElementById("image").value;
  let email = document.getElementById("email").value;
  let mob = document.getElementById("mob").value;

  let obj = {
    name,
    gender,
    service,
    rate,
    img,
    email,
    mob,
  };
  console.log(obj);

  let data = await fetch("http://localhost:3000/addWorker", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      // displaycard();
      alert("Data Added");
      window.location.reload();
    });
});

// gender
// :
// "Male"
// img
// :
// "https://thumbs.dreamstime.com/z/man-getting-haircut-barbershop-professional-barber-work-process-beauty-selfcare-style-fashion-healthcare-young-bearded-231828039.jpg"
// name
// :
// "Rajesh"
// rate
// :
// 500
// service
// :
// "Hair Cut & Finish"
// _id
// :
// "64244cf719a432f8b2466488"
