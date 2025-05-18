const inputEl = document.querySelector("#name-input");

const userName = document.querySelector("#name-output");


inputEl.addEventListener("input", inputUserNameTotal);

function inputUserNameTotal(event) {
    if (userName.textContent !== "") {
        return `Hello, ${userName.textContent}!`
    }
    return `Hello, Anonymous!`
};
console.log(inputUserNameTotal(event));
