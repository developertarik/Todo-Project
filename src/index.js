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
const form  = document.getElementById("form");
const button = document.getElementById("btn");

 


function addTask() {
      
   newTask = new Todo(title,date,priority);
    console.log(newTask.value)
    analog.appendChild(div2)
    console.log(title.innerText,date,priority);
            // div2.innerHTML += "<p class='b'>" + newTask.title.value +"</p>" + "<p class='b'>" + newTask.date   +"</p>" + "Pages:"+ newTask.priority;
        div2.innerHTML += "<br>" +newTask.title.value
        analog.appendChild(div2)
}
button.addEventListener("click",addTask);


// //delete todo
// // change
// // add
// function completeTask(){
//         // tıklayınca üzeri çizilsin yada yokolsun

// }

// function changePriority(){
    
// }
  form.addEventListener("submit",(e)=>{
      e.preventDefault();
      title = document.getElementById("title").value
     date = document.getElementById("date").value
      priority = document.getElementById("priority").value
      console.log(newTask.title)
    
      title = document.getElementById("title").value = ""
      date = document.getElementById("date").value = ""
      priority = document.getElementById("priority").value = ""
     addTask(button)
      }); 

// function deleteTask(checkboxBtn){
//     checkboxBtn.addEventListener("click",()=>{
//         analog.removeChild(div2)
//     })
// }





 
