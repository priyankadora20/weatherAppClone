// fill in javascript code here
document.querySelector("form").addEventListener("submit", myFunction)

function myFunction(event) {
    event.preventDefault()



    let name = document.querySelector("#name").value
    let employeeid = document.querySelector("#employeeID").value
    let dept = document.querySelector("#department").value
    let exp = document.querySelector("#exp").value
    let email = document.querySelector("#email").value
    let mbl = document.querySelector("#mbl").value

    console.log(name, employeeid, dept, exp, email, mbl);


    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = name

    var td2 = document.createElement("td");
    td2.innerText = employeeid

    var td3 = document.createElement("td");
    td3.innerText = dept

    var td4 = document.createElement("td");
    td4.innerText = exp


    var td5 = document.createElement("td");
    td5.innerText = email

    var td6 = document.createElement("td");
    td6.innerText = mbl


    var td7 = document.createElement("td");

    if (Number(exp) > 5) {
        td7.innerText = "Senior"
    } else if (Number(exp) <= 5 && Number(exp) >= 2) {
        td7.innerText = "Junior"
    } else {
        td7.innerText = "Fresher"
    }

    var td8 = document.createElement("td");
    td8.innerText = "DELETE"
    td8.style.backgroundColor = "red";

    td8.addEventListener("click", deleteRow)

    function deleteRow(event) {
        event.target.parentNode.remove()

    }



    tr.append(td1, td2, td3, td4, td5, td6, td7, td8)
    document.querySelector("tbody").append(tr)



}