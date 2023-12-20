const addButton = document.querySelector('#add')


const updateLSData = () =>{
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];
    textAreaData.forEach((note) =>{
        return notes.push(note.value)
    })

    localStorage.setItem('notes', JSON.stringify(notes))
}



const addNewNote = (text = '') => {
    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = `
    <div class="opration">
    <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
    <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
     <textarea  class="${text ? "hidden" : ""}"></textarea>`;


     note.insertAdjacentHTML('afterbegin', htmlData)
    
     document.body.appendChild(note)


    //  getting reference

    const editButton = note.querySelector('.edit')
    const delButton = note.querySelector('.delete')
    const mainDiv = note.querySelector('.main')
    const textarea = note.querySelector('textarea')


    //deleteing the note

    delButton.addEventListener('click', () => {
        note.remove();
        updateLSData();
    })


    //edit toggle button

    textarea.value = text
    mainDiv.innerHTML = text

    editButton.addEventListener('click', () =>{
        mainDiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden')
    })

    textarea.addEventListener('change', (event)=>{
        const value = event.target.value
        mainDiv.innerHTML = value

        updateLSData()

    })




}


// getting data back from localstorage

const notes = JSON.parse(localStorage.getItem('notes'))

if(notes){
    notes.forEach((note) => addNewNote(note))
}

addButton.addEventListener('click', ()=>
    addNewNote()
);

