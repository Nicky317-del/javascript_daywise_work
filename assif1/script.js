
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