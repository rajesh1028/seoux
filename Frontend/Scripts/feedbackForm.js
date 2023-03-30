let form = document.getElementsByClassName("contact1-form validate-form");


let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    let name = (form[0][0].value);
    let email = (form[0][1].value);
    let message = (form[0][2].value);
    let obj = { name, email, message };
    addFeedback(obj);
})


async function addFeedback(obj) {
    try {
        let result = await fetch("http://localhost:3000/feedback/add", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        if(result.ok){
            alert("Thank you for your valuable feedback");
        }else{
            alert("Error in submitting feedback");
        }
    } catch (error) {
        console.log(error);
    }
}