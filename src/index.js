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
   const box = document.createElement("box")
    box.classList.add("box")
     analog.appendChild(div2)
    console.log(title.value,date.value,priority.value);
             // div2.innerHTML += "<p class='b'>" + newTask.title.value +"</p>" + "<p class='b'>" + newTask.date   +"</p>" + "Pages:"+ newTask.priority;
        box.innerHTML += "<br>" +newTask.title.value 
        analog.appendChild(div2)
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
      analog.appendChild(box)
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

// function deleteTask(checkboxBtn){
//     checkboxBtn.addEventListener("click",()=>{
//         analog.removeChild(div2)
//     })
// }





 
