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


  let baseUrl = "http://localhost:3000";
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
      gender
    };



    let fetchData = await fetch(`${baseUrl}/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj)
    })
      .then(res => res.json())
      .then(data => {
      if(data=="registered successfully"){
        alert(`${name} registerd successfully`)
        window.location.href="./loginsignup.html"
      }else if(data=="user already exists"){
        alert(`${name}  already exists`)
        window.location.href="./loginsignup.html"
      }
       
        // alert(data)      
      })
      .catch(err => console.log(err))
  } catch (error) {
    alert("Something went wrong. Please try again later.");
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
      pass
    };


// console.log(userObjs);
    let loginSys = await fetch(`${baseUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObjs)
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data)

        if (data.msg == "logged in successfully") {
          alert(data.msg)
          console.log(data)
          localStorage.setItem("user", data.id);
          window.location.href = "./index.html"
        } else {
          alert(data.msg)
          window.location.href = "./index.html"
        }
       
      })
      .catch(err => console.log(err))
  } catch (error) {
    alert("Something went wrong. Please try again later.");
  }
}




