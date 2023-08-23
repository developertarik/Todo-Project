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
const container = document.getElementById("container");
const newheader = document.createElement("p");
newheader.innerText = "Tasks:";
const analog = document.getElementById("todo");
const header = document.createElement("h1");
const form  = document.getElementById("form");
const button = document.getElementById("btn");
const titleInput = document.getElementById("title")
 const checkbox = document.createElement("input");
 const a = document.createElement("a")
 checkbox.setAttribute("type","checkbox");
 


function addTask() {
      
   
  
}
button.addEventListener("click",function(){
    newTask = new Todo(title);
   const box = document.createElement("div")
    box.classList.add("box")
     analog.appendChild(div2)
    console.log(title.value     );
         box.innerHTML += title.value
        box.appendChild(checkbox)
         analog.appendChild(div2)
                    container.appendChild(newheader)
      container.appendChild(box)
      box.innerHTML += a.value
    
    titleInput.value = "";

});
titleInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        button.click();
    }
});
 




  