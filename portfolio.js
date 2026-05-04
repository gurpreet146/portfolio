function show_text() {
    text = document.getElementById("hid_about_text");
    button=document.getElementById("button_text");
    if (text.style.display === "none") {
        text.style.display = "inline";
        button.innerHTML="Read Less";
    }
    else {
        text.style.display = "none";
        button.innerHTML="Read More";
    }
}

function handleSubmit(event) {
    event.preventDefault(); // stop reload

    // show success box
    document.getElementById("successBox").style.display = "flex";

    // clear form
    document.querySelector(".form").reset();
}

function closeMessage() {
    document.getElementById("successBox").style.display = "none";
}