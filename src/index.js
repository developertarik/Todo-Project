function Todo(title,description,dueDate,priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    
}
// yeni js dosyaları açıyoruz sanırım
// ve ekliyoruz
// restoran projesi ile books un bir karışımı olacak
 
const div2 = document.createElement("div");
const analog = document.getElementById("todo");


function addTask(){
    const titlePrompt = prompt("Başlık nedir? ");
    const descPrompt = prompt("Açıklama nedir ? ");
    const dueDatePrompt = prompt("tarihi nedir?");
    const priorityPrompt = prompt("Önceliği nedir?");
    const checkboxBtn = document.createElement("input");
    checkboxBtn.setAttribute("type","checkbox");
    
console.log(titlePrompt,descPrompt,dueDatePrompt,priorityPrompt);
    div2.innerHTML += titlePrompt
    div2.appendChild(checkboxBtn);    
    analog.appendChild(div2)
}

const button = document.getElementById("btn");
button.addEventListener("click",addTask);

//delete todo
// change
// add
function completeTask(){
        // tıklayınca üzeri çizilsin yada yokolsun

}

function changePriority(){
    
}


function deleteTask(checkboxBtn,titlePrompt){
    checkboxBtn.addEventListener("click",()=>{
        analog.removeChild(div2)
    })
}








 // //add todo
// function addTodo( ){
//     const tasks = [];
//     const tasksA = prompt("Görev ne ekliyim?");

//     analog.innerText = tasksA;
// }
// addTodo(analog);
    //todo okay
//todo change
