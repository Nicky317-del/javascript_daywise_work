// const eventForm=document.getElementById("eventForm");
// const eventTitle=document.getElementById("eventTitle");
// const eventDate=document.getElementById("eventDate");
// const eventCategory=document.getElementById("eventCategory");
// const eventDescription=document.getElementById("eventDescription");
// const clearAllBtn=document.getElementById("clearAllBtn");
// const addSampleBtn=document.getElementById("addSampleBtn");
// const eventContainer=document.getElementById("eventContainer");
// const demoContent=document.getElementById("demoContent");


// const sampleEvents = 
// [
// {
//     title:"Web dev",
//     date:"4-5-2026",
//     category:"Workshop",
//     description:"usd ius sijjnsf j snen s"
// },
// {
//     title:"Web dev2",
//     date:"4-6-2026",
//     category:"conference",
//     description:"bds iudsfnjn s sijjnsf j snen s"
// }
// ]

// function createEventCard(eventData){
//    const card=document.createElement("div");

//    card.innerHTML=`
//    <button class="delete-btn">X</button>
//    <h3>${eventData.title}</h3>
//    <div>${eventData.date}</div>
//    <span>${eventData.category}</span>
//    <p>${eventData.description}</p>
//    `

//    return card;
// }

// function addEvent(eventData){
//     const emptyState = document.querySelector(".empty-state");
//     if (emptyState){ emptyState.remove();
// }
// eventContainer.appendChild(createEventCard(eventData));
// }
// eventForm.addEventListener("submit",(event)=>{
//     event.preventDefault();

//     const eventData = {
//         title: eventTitle.value,
//         data: eventDate.value,
//         category: eventCategory.value,
//         description: eventDescription.value
//     }
//     addEvent(eventData);
// });

// clearAllBtn.addEventListener("click",()=>{
//     eventContainer.innerHTML=`<div class="empty-state">No events yet. Add your first event!</div>
//     </div>`
// });

// addSampleBtn.addEventListener("click",()=> {
//     sampleEvents.forEach(addEvent);
// });

// eventContainer.addEventListener("click",(event)=>{
//         const card = event.target.closest('.event-card');
        
//         if(event.target.classList.contains("delete-btn")){
//             card.remove();
//     }

//     if(!eventContainer.querySelector(".event-card")){
//         eventContainer.innerHTML=`<div class= "empty-state"> No Elements yet. Add your first event </div>`
//     }
// });


const addBtn = document.getElementById("addBtn");
const container = document.getElementById("eventContainer");
const countSpan = document.getElementById("count");

let total = 0;

// Add Event
addBtn.addEventListener("click", () => {
    const title = document.getElementById("title").value.trim();
    const date = document.getElementById("date").value;
    const desc = document.getElementById("desc").value.trim();

    if (!title || !date || !desc) {
        alert("Please fill all fields");
        return;
    }

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h3>${title}</h3>
        <small>${date}</small>
        <p>${desc}</p>
        <div class="btn-group">
            <button class="small-btn doneBtn">Mark Done</button>
            <button class="small-btn deleteBtn">Delete</button>
        </div>
    `;

    container.appendChild(card);

    total++;
    updateCount();

    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("desc").value = "";
});

// Event Delegation for buttons
container.addEventListener("click", (e) => {

    // Delete
    if (e.target.classList.contains("deleteBtn")) {
        e.target.closest(".card").remove();
        total--;
        updateCount();
    }

    // Mark Done
    if (e.target.classList.contains("doneBtn")) {
        const card = e.target.closest(".card");
        card.classList.toggle("done");
        e.target.innerText =
            e.target.innerText === "Mark Done"
                ? "Undo"
                : "Mark Done";
    }
});

// Update counter textContent demo
function updateCount() {
    countSpan.textContent = total;
}