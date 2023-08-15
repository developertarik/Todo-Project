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
const header = document.createElement("h1");
const form  = document.getElementById("form")



function addTask(){
     
    console.log(title.innerText,date,priority);
    div2.innerHTML += "<p class='b'>" + newTask.title +"</p>" + "<p class='b'>" + newTask.date +"</p>" + "Pages:"+ newTask.priority;
    analog.appendChild(div2)
}

const button = document.getElementById("btn");
button.addEventListener("click",addTask);
  

analog.appendChild(div2)
//delete todo
// change
// add
function completeTask(){
        // tıklayınca üzeri çizilsin yada yokolsun

}

function changePriority(){
    
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    title = document.getElementById("title").value
    date = document.getElementById("date").value
    priority = document.getElementById("priority").value
    newTask = new Todo(title,date,priority);
    console.log(newTask.title)
    
    title = document.getElementById("title").value = ""
    date = document.getElementById("date").value = ""
    priority = document.getElementById("priority").value = ""
    addTask()
    }); 

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
