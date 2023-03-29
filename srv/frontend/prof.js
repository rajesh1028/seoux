//console.log("prof")

let clickedservice = localStorage.getItem("clickedservice");

console.log(clickedservice);

let obj={service:clickedservice}

const getprof=async()=>{

    try {

        const res=await fetch(`http://localhost:8080/getWorker/${clickedservice}`,{
            method: "GET",
           // body: JSON.stringify(obj),
            headers: {
            "Content-Type": "application/json",
            },
        })

        let data=await res.json();
        console.log(data)

        appendprof(data);
        
    } catch (error) {

        console.log("something is wrong")
        console.log(error)

        
    }

    
}

getprof();


const container=document.getElementById("prof")


const appendprof=(data)=>{

    container.innerHTML="";

    data.forEach((el)=>{

        let div=document.createElement("div");

        div.onclick=()=>{
            profselected(el)
        }

        let img=document.createElement("img");
        img.src=el.img;

        let name=document.createElement("h3");
        name.innerText="Name :- "+el.name;

        let gender=document.createElement("h3");
        gender.innerText="gender :- "+el.gender;

        let service=document.createElement("h3");
        service.innerText="service :- "+el.service;

        let charge=document.createElement("h3");
        charge.innerText="charge :- "+el.rate



        div.append(img,name,gender,service,charge);
        container.append(div)

    })


}


const profselected=(el)=>{

    // redirect to timeslot page

    // prof id 

    let profid=el._id;
    console.log(profid);

    let select_prof=localStorage.setItem("profid",profid);

    window.location.href="appt.html"

}