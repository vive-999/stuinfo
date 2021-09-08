var selectedRow = null;
userData = {};

function updateData() {
    let data = getuserData()
    if (selectedRow ==null)
        populateData(data);
    else
        updateRecord(data);
    
     
    ClearData();

}



function ClearData() {
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('address').value = '';
    document.getElementById('phone').value = '';
    var ele = document.getElementsByName("gender");
    //for multiple elements:
    for (const checkbox of document.querySelectorAll('.hobbies')) {
        //iterating over all matched elements

        // checkbox.checked = true //for selection
        checkbox.checked = false //for unselection
    }
    for (var i = 0; i < ele.length; i++)
        ele[i].checked = false;
    var dropDown = document.getElementById("country");
    dropDown.selectedIndex = 0;
    var dropDown = document.getElementById("state");
    dropDown.selectedIndex = 0;
    var dropDown = document.getElementById("city");
    dropDown.selectedIndex = 0;
    selectedRow = null;
 


}

function getuserData() {
    // Populate values into an object

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    userData['name'] = fname + " " + lname;

    phone = document.getElementById('phone').value;
    if (phone.length < 10){phone = "   - ";}else{phone = phone;}
    userData['phone'] = phone;
    var allTableData = document.getElementById("studenttable");
    userData['sno'] = allTableData.rows.length;

    //Get radio Valuesand Checkbox Values
    hobbies_nl = document.querySelectorAll('input[type=checkbox][class=hobbies]:checked');
    userData["hobbies"] = "";
    for (i = 0; i < hobbies_nl.length; i++) {
        userData["hobbies"] += hobbies_nl[i].value + ",";
    }


    return userData;
}

function populateData(data) {
    var table = document.getElementById("tableBody");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = data.sno;
    cell2.innerHTML = data.name;
    cell3.innerHTML = data.phone;
    cell4.innerHTML = data.hobbies;
    cell5.innerHTML = `<button onClick="onEdit(this)"">Edit</button>
                            <button onclick="onDelete(this)">Delete</button>`
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    
    document.getElementById("fname").value = selectedRow.cells[1].innerHTML.split(" ")[0];
    document.getElementById("lname").value = selectedRow.cells[1].innerHTML.split(" ")[1];
    document.getElementById("phone").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
    document.getElementById("h3_id").innerHTML = "Edit" + " " + document.getElementById("fname").value;
    document.getElementById('clickme').innerHTML = "Update"


}

function updateRecord(data) {
    selectedRow.cells[0].innerHTML = data.sno;
    selectedRow.cells[1].innerHTML = data.name;
    selectedRow.cells[2].innerHTML = data.phone;
    selectedRow.cells[3].innerHTML = data.hobbies;
    document.getElementById("h3_id").innerHTML = "Add New";
    document.getElementById('clickme').innerHTML = "Save"
    
}


//Working Don't Touch it
function onDelete(td) {
    var i = td.parentNode.rowIndex;
    // alert(i)
    document.getElementById("tableBody").deleteRow(i);
}