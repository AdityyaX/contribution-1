// console.log("tushar shani");
let currentDate = new Date();
    let month = currentDate.getMonth();
    if (month < 10) {
        month = "0" + month;
    }
    let dateOfMonth = currentDate.getDate();
    if (dateOfMonth < 10) {
        dateOfMonth = "0" + dateOfMonth;
    }
    let year = currentDate.getFullYear();
    let formattedDate = dateOfMonth + "/" + month + "/" + year; 
    let i = 0;
let addItem = document.getElementById('addItem');
addItem.addEventListener("click", (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let item = document.getElementById('item').value;
    let tbodyEle = document.querySelector('tbody');

    tbodyEle.innerHTML += `
    <tr>
        <th scope="row">${++i}</th>
        <td>${name}</td>
        <td>${item}</td>
        <td>${price}</td>
        <td>${formattedDate}</td>
    </tr>`;


})