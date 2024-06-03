// localStorage.setItem("name", "Astana");
// const a = localStorage.getItem("name");
// console.log(a);

// function check() {
//     let val = document.getElementsByName("radio");
//     if (val[0].checked) {
//         console.log("Female");
//     } else {
//         console.log("Male");
//     };
// };
// const formas = document.querySelector(".form");
// const nameInput = document.querySelector(".inputName");
// const lastNameInput = document.querySelector(".inputLastName");
// const age = document.querySelector("#age");
// let male = document.getElementsByName("radio");
// formas.addEventListener("submit", handleSubmit);
// function handleSubmit(event) {
//     event.preventDefault();
//     const info = {
//         name: nameInput.value,
//         age: age.value,
//         lastName: lastNameInput.value,
//         male: male[0].checked,
//     };
//     console.log(info);
//     localStorage.setItem("info", JSON.stringify(info));
//     // localStorage.setItem("info", info);
// };
// if (localStorage.getItem("info")) {
//     const ls = JSON.parse(localStorage.getItem("info"));
//     console.log(ls);
//     nameInput.value = ls.name;
//     lastNameInput.value = ls.lastName;
// };

// let form = document.querySelector("#form");
// let formData = {};
// form.addEventListener('input', function (event) {
//     formData[event.target.name] = event.target.value;
//     localStorage.setItem('formData', JSON.stringify(formData));
// });
// if (localStorage.getItem('formData')) {
//     formData = JSON.parse(localStorage.getItem('formData'));
//     for (let key in formData) {
//         form.elements[key].value = formData[key];
//     };
// };