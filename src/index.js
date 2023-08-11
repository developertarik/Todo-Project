function Todo(title,description,dueDate,priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    
}
// yeni js dosyaları açıyoruz sanırım
// ve ekliyoruz
// restoran projesi ile books un bir karışımı olacak
 

function addTask(){
    const titlePrompt = prompt("Başlık nedir? ");
    const descPrompt = prompt("Açıklama nedir ? ");
    const dueDatePrompt = prompt("tarihi nedir?");
    const priorityPrompt = prompt("Önceliği nedir?");
    console.log(titlePrompt,descPrompt,dueDatePrompt,priorityPrompt);
}

const button = document.getElementById("btn");
button.addEventListener("click",addTask);


function completeTask(){

}

function changePriority(){
    
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
