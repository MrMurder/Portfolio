function openWindow(itemName) {
    switch (itemName.innerText) {
        case "Virtual Piano" :
            document.getElementById("modal_h").innerText = "Virtual piano";
            document.getElementById("modal_p").innerText = "The long description to the project Virtual piano";
            break;
        case "Flashcard" :
            document.getElementById("modal_h").innerText = "Flashcard";
            document.getElementById("modal_p").innerText = "I did this project when I was studying the frontend on HyperSkill. I created a web page with flip-down flash cards, learned some HTML basics and learned that CSS can easily make a beautiful design";
            break;
        case "Case converter" :
            document.getElementById("modal_h").innerText = "Case converter";
            document.getElementById("modal_p").innerText = "The long description to the project Case converter";
            break;
        case "To-Do List" :
            document.getElementById("modal_h").innerText = "To-Do List";
            document.getElementById("modal_p").innerText = "The long description to the project To-Do List";
            break;
        case "Open space" :
            document.getElementById("modal_h").innerText = "Open space";
            document.getElementById("modal_p").innerText = "The long description to the project Open space";
            break;
        default :
            console.log(false);
    }
    document.getElementById("modal-window").style.display = "block";

}

function closeModal() {
    document.getElementById("modal-window").style.display = "none";
}

function myFunction() {
    let x = document.getElementById("topNav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}