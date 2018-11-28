let input = document.getElementById("message");
let articleEl = document.getElementById("message-box1");
let articleE2 = document.getElementById("message-box2");

input.addEventListener("keyup", function (event) {
    articleEl.innerHTML = event.target.value
})

input.addEventListener("keyup", function (event) {
    articleE2.innerHTML = event.target.value
})