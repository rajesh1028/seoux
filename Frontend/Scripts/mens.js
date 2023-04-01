function redirect() {
  window.location.href = "index.html";
}

async function FetchedAllData() {
  let url = "http://localhost:3000/getcategory";
  try {
    let api_data = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await api_data.json();
    displayCards(data);
    handleOnClick();
    console.log(data);
  } catch (error) {
    alert("something went wrong.");
  }
}
FetchedAllData();

function displayCards(data) {
  category_section.innerHTML = "";
  category_section.innerHTML = `${data
    .map((el) => {
      return `

        
        <div id="category_child" data-aos="fade-right" class="category_child_cards" class="details" onclick="handleCardClick(el)>

        <div id="category_child_img">
          <img
            src=${el.img}
            alt="category_img"
          />
        </div>
        <div id="category_child_details">
          <p id="category_child_details_name">${el.service}</p>
          <p id="category_child_details_desc">
            ${el.desc}
          </p>
        </div>
      </div>
    `;
    })
    .join("")}`;
}

// let child_card = document.querySelectorAll(".details");
// for (let i = 0; i < child_card.length; i++) {
//   child_card[i].addEventListener("click", (e) => {
//     // getdetails(e.target.dataset.id);
//     console.log(e);
//   });
// }

function handleCardClick(event) {
  // console.log(event);
  console.log(1)
}

function handleOnClick() {
  let category_sections = document.querySelectorAll(".category_child_cards");
  console.log(category_sections);
}
