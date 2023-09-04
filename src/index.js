function Todo(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

}
 
//doms
const div2 = document.createElement("div");
const container = document.getElementById("container");
const analog = document.getElementById("todo");
const header = document.createElement("h1");
const form = document.getElementById("form");
const button = document.getElementById("btn");
const titleInput = document.getElementById("title")
 const a = document.createElement("a")
 const dat = document.createElement("input");
dat.setAttribute("type", "date");
function addTask() {
  
  button.addEventListener("click", function () {
  
        newTask = new Todo(title );
        const box = document.createElement("li")

         box.classList.add("box")
        analog.appendChild(div2)
        console.log(title.value);

        box.appendChild(dat)



        box.innerHTML += "<p>" + title.value + "</p>"  
        
          const checkbox = document.createElement("button");

        checkbox.innerText = "Complete task!"
        
            checkbox.addEventListener("click",()=>{
                box.remove();
                checkbox.remove();
        })  
        
        
        box.appendChild(checkbox)
 
 
        analog.appendChild(div2)

        container.appendChild(box)

        titleInput.value = "";

    });


}
function changeTitle(){
    titleInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            button.click();
        }
    });
}
addTask();
deleteTask();
changeTitle();
