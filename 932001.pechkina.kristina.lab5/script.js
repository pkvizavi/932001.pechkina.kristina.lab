const modal = document.querySelector("#modal");
const modalHeading = modal.querySelector("h1");
const modalText = modal.querySelector(".modal-content div");

const btns = document.querySelectorAll("button");

btns.forEach(btn => {
    btn.onclick = () => {
        modal.style.display = "block";
        modalHeading.innerText = btn.parentElement.querySelector("h1").innerText;
        modalText.innerHTML = btn.parentElement.querySelector(".modal-text").innerHTML;
    }
})

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}