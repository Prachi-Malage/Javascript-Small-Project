var cl = console.log


//07/10/22 >>>> CRUD >> create, read, update and delete

//>>
const studentForm = document.getElementById("studentForm")
const fnameControl = document.getElementById("fname")
const lnameControl = document.getElementById("lname")
const emailControl = document.getElementById("email")
const contactControl = document.getElementById("contact")
const stdInfo = document.getElementById("stdInfo")


let stdArray = [];
//>>
function uuid(mask = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx') {
    return `${mask}`.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

// const onEdit = (ele) =>{
//  cl(`Edited !!!`, ele)

// }
function onEdit () {
    console.log(button)
}
 
function onDelete(){
    console.log(button)
}


// const onDelete = (ele) =>{
//     cl(`Deleted !!!`)

// }

const templating = (arr) =>{
    let result = ' '
    arr.forEach((std, i) =>{
        result +=`
        <tr>
            <td>${i + 1}</td>
            <td>${std.fname}</td>
            <td>${std.lname}</td>
            <td>${std.email}</td>
            <td>${std.contact}</td>
            <td> <button class="btn btn-primary editbtn" onclick="onEdit()"> Edit</button></td>
            <td> <button class="btn btn-danger" onclick="onDelete()"> Delete</button></td>
        </tr>`
    })
    stdInfo.innerHTML = result

}

let getLocalDate = JSON.parse(localStorage.getItem('setInfo'))

if(getLocalDate){
    stdArray = getLocalDate;
    templating(getLocalDate)
}
const onStudentCreate = (e) => {

    e.preventDefault()
    // cl(e.target)
    let obj = {
        fname : fnameControl.value,
        lname : lnameControl.value,
        email : emailControl.value,
        contact : contactControl.value   
    }
    stdArray.push(obj)
    localStorage.setItem('setStdInfo', JSON.stringify(stdArray))
    cl(stdArray)
    templating(stdArray)
    e.target.reset()
}

//>>
studentForm.addEventListener('submit', onStudentCreate)


