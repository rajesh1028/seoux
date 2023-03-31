function redirect() {
  window.location.href = "index.html";
}

async function FetchedAllData() {
  let url = "http://localhost:8080/getcategory";
  try {
    let api_data = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await api_data.json();
    displayCards(data);
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
        <div id="category_child" data-aos="fade-right">
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
