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
 
const analog = document.getElementById("todo");
const header = document.createElement("h1");
const form  = document.getElementById("form");
const button = document.getElementById("btn");
const titleInput = document.getElementById("title")
 const checkbox = document.createElement("input");
 const a = document.createElement("a")
 checkbox.setAttribute("type","checkbox");
 checkbox.classList.add("check");
 const dat =document.createElement("input");
 dat.setAttribute("type","date");
 


function addTask() {
      
    button.addEventListener("click",function(){
        newTask = new Todo(title);
       const box = document.createElement("div")
        box.classList.add("box")
         analog.appendChild(div2)
        console.log(title.value );
        box.appendChild(checkbox)
        box.appendChild(dat)
    
    
             box.innerHTML +=   "<p>" +title.value + "</p>"  
             analog.appendChild(div2)
           container.appendChild(box)
         
        titleInput.value = "";
    
    });
    titleInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            button.click();
        }
    });
      
      checkbox.addEventListener("click",(box)=>{
        box.remove();
      });
  
}
addTask();

// yap
// boxun içine tarih ekle ve boxun width ini büyüy ve checkbox basınca kaldır
  