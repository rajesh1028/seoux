let form = document.getElementById("form");


let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    let obj = {
        name: form.name.value,
        email: form.email.value,
        address: form.address.value,
        city: form.city.value,
        state: form.state.value,
        zipcode: form.zipcode.value,
        name_on_card: form.name_on_card.value,
        card_number: form.card_number.value,
        expiry_month: form.expiry_month.value,
        expiry_year: form.expiry_year.value,
        cvv: form.cvv.value,
    }
    let flag = true;
    for (let key in obj) {
        if (!obj[key]) {
            flag = false;
            break;
        }
    }
    if(!flag){
        alert("Fill all the details");
    }else{
        addPayment(obj);
    }
})


async function addPayment(obj) {
    try {
        let result = await fetch("http://localhost:3000/payment/add", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        console.log(result);
        if(result.ok){
            patchTimeSlot();
        }else{
            alert("Error in payment");
        }
    } catch (error) {
        console.log(error);
    }
}

async function patchTimeSlot() {
    let id = localStorage.getItem("profId");
    let slot = JSON.parse(localStorage.getItem("clicked-slot"));
    
    try {
        let result = await fetch(`http://localhost:3000/hidetime/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(slot)
        })
        console.log(result);
        if(result.ok){
            
        }else{
            alert("Error in payment");
        }
    } catch (error) {
        console.log(error);
    }
}