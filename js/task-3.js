const inputEl = document.querySelector("#name-input");

const userName = document.querySelector("#name-output");


inputEl.addEventListener("input", inputUserNameTotal);

function inputUserNameTotal(event) {
    if (inputEl.value === "") {
        userName.textContent = "Anonymous";
    } else {
        userName.textContent = inputEl.value.trim();
    }
};
