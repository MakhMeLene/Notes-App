const addBtn=document.querySelector("#addBtn");
const main=document.querySelector("#main");

addBtn.addEventListener("click",function() {
    addNote();
});

const saveNotes=()=> {
    const notes = document.querySelectorAll(".note .content");

    const titles= document.querySelectorAll(".note .title");

    const data=[];
    
    notes.forEach((note,index)=> {
        const content=note.value;
        const title= titles[index].value;
        console.log(title);
        if (content.trim() !=="") {
            data.push({title,content});
        }
    });

    const titlesData=data.map((item)=>item.title);
    console.log(titlesData);
    localStorage.setItem("notes",JSON.stringify(titlesData));

    const contentData=data.map((item)=>item.title);
    localStorage.setItem("notes",JSON.stringify(contentData));
    
};

//Addnote Button function
const addNote=(text="",title="")=>{
    const note= document.createElement("div");
    note.classList.add("note");
    note.innerHTML= `
    <div class="icons">
         <i class="save fas fa-save"
            style="color:red">
         </i>
         <i class="trash fas fa-trash"
            style="color:yellow">
         </i>
    </div>
    
    <div class="title-div">
        <textarea class="title"
            placeholder="Write the title ...">${title}
        </textarea>
    </div>

    <textarea class="content"
        placeholder="Note down our toughts ....">${text}
        </textarea>
    `;

    function remove (note){
        console.log("remove function called");
        note.remove();
        saveNotes();
    }

    // function handleTrashClick()  {
    //     note.remove();
    //     saveNotes();
    // }
    // function handleSaveClick()  {
    //     saveNotes();
    // }

    const delBtn = note.querySelector(".trash");
    const saveBtn= note.querySelector(".save");
    const textareas= note.querySelector(".textarea");


    delBtn.addEventListener("click",() =>{
        console.log("trash button  clicked");
        remove(note);
        alert ("Your note has been removed")
    });
    saveBtn.addEventListener("click",() => {
        console.log("save button  clicked");
        saveNotes();
        alert ("Your note has been saved");
    });
    main.appendChild(note);
    saveNotes();
};

//Loading all the notes those are saved in 
//the localstorage

function loadNotes() {
    const titlesData=JSON.parse(localStorage.getItem("item"))   || [];
    const contentData=JSON.parse(localStorage.getItem("notes")) || [];

    for (let i=0; i<Math.max(titlesData.length,contentData.length);i++){
        addNote(contentData[i],titlesData[i]);    
    }
}
loadNotes();