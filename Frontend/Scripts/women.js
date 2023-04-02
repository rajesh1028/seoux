function redirect() {
    window.location.href = "index.html";
  }
  
  async function FetchedAllData() {
    let url = "http://localhost:3000/getcategory/women";
    try {
      let api_data = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await api_data.json();
      displayCards(data);
      // handleOnClick();
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
  
          
          <div id="category_child" data-aos="fade-right" class="category_child_cards" >
  
          <div id="category_child_img">
            <img data-id=${el._id}
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
      
      let category_cards = document.querySelectorAll(".category_child_cards");
      
      for (const btn of category_cards) {
      btn.addEventListener("click", async(e) => {
       // console.log(e.target.dataset.id);
        let clickedid=e.target.dataset.id
  
        let clicked_service= await fetch(`http://localhost:3000/getcategory/name/${clickedid}`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
  
        clicked_service=await clicked_service.json()
  
       // console.log("mmm",clicked_service)
  
        clicked_service=clicked_service[0].service;
  
       localStorage.setItem("clicked_service",clicked_service)
        window.location.href="./workingprofessionals.html"
  
       // console.log("jjj",clicked_service)
      });
      }
  }
  
  