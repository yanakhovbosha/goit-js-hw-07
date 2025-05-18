const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
    event.preventDefault();
    const elem = event.target.elements;
    const info = {
        email: elem.email.value,
        password: elem.password.value,
    };
    console.log(info);
    if(info.email.trim() === "" || info.password.trim() === "") {
        alert("All form fields must be filled in");
        return
    }
    event.target.reset();
})