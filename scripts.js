const modal = document.querySelector(".modal");
const mask = document.querySelector(".mask-map");

function showModal() {
    modal.style.left = "50%";
    mask.style.visibility = "visible";
}

function hideModal() {
    modal.style.left = "-30%";
    mask.style.visibility = "hidden";
}

