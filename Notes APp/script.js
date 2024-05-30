const addbtn = document.querySelector('#btn')

addbtn.addEventListener(
    "click",
    function(){
        addNote()
    }
)
const saveNotes = ()=>{
    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    notes.forEach(
        (note)=>{
            data.push(note.value)
        }
    )
    localStorage.setItem('notes',JSON.stringify(data))
}



const addNote = ()=>{
    const note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML = `    <div class="tool">
               
    <i class="save fa-solid fa-floppy-disk" style="color: #f4f5f5;font-size:25px"></i>
    <i class="trash fa-solid fa-trash-can" style="color: #eaf3fb;font-size:25px"></i>
</div>
<textarea></textarea>`;
note.querySelector(".trash").addEventListener("click",function(){
    note.remove();
})
note.querySelector(".save").addEventListener("click",
function()
{
saveNotes()
})
main.appendChild(note);
saveNotes();
}