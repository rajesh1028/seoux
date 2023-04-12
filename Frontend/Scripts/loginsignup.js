import { alertMsg } from "../Scripts/components/alertmsg.component.js";

let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
  slider.classList.add("moveslider");
  formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
  slider.classList.remove("moveslider");
  formSection.classList.remove("form-section-move");
});

// login signup section

let baseUrl = "https://lazy-pear-lemur-shoe.cyclic.app";

const signups = document.querySelector("#signup_btn");

signups.addEventListener("click", signupfun);

async function signupfun(event) {
  try {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#pass").value;
    let age = document.querySelector("#age").value;
    let gender = document.querySelector("#gender").value;
    let userObj = {
      name,
      email,
      pass,
      age,
      gender,
    };

    let fetchData = await fetch(`${baseUrl}/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.msg == "registration sucessfull") {
          alertMsg(`${name} registered successfully`, "success");
          setTimeout(() => {
            window.location.href = "./loginsignup.html";
          }, 1000);
        } else if (data == "user already exists") {
          alertMsg(`${name} already exists`, "error");
          setTimeout(() => {
            window.location.href = "./loginsignup.html";
          }, 1000);
        }
      })
      .catch((err) => console.log(err));
  } catch (error) {
    alertMsg("Something went wrong.", "fail");
  }
}

// login=================//

const logins = document.querySelector("#login_btn");
logins.addEventListener("click", func);
async function func(event) {
  try {
    let email = document.querySelector("#login_email").value;
    let pass = document.querySelector("#login_pass").value;
    let userObjs = {
      email,
      pass,
    };
    if (email == "admin@gmail.com" && pass == "admin") {
      window.location.href = "admin.html";
    } else {
      // console.log(userObjs);
      let loginSys = await fetch(`${baseUrl}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userObjs),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)

          if (data.msg == "logged in successfully") {
            alertMsg(`logged in successfully`, "success");
            localStorage.setItem("user", data.id);
            localStorage.setItem("user_name", data.name);
            setTimeout(() => {
              window.location.href = "./index.html";
            }, 3000);
            console.log(data);
          } else {
            alertMsg(`${data.msg}`, "error");
            // localStorage.setItem("user", data.id);
            // setTimeout(() => {
            //   window.location.href = "./index.html";
            // }, 3000);
          }
        })
        .catch((err) => console.log(err));
    }
  } catch (error) {
    alert("Something went wrong. Please try again later.");
  }
}
