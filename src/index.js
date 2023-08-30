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
const checkbox = document.createElement("button");
const a = document.createElement("a")
checkbox.innerText = "Complete task!"
checkbox.classList.add("delete-checkbox");
const dat = document.createElement("input");
dat.setAttribute("type", "date");
 
function deleteTask( ){
    checkbox.addEventListener("click", function( ){   {
        this.parentNode.remove();
        alert("tasks Deleted")

    } });

}
function addTask() {
  button.addEventListener("click", function () {
        newTask = new Todo(title);
        const box = document.createElement("div")

         box.classList.add("box")
        analog.appendChild(div2)
        console.log(title.value);

        box.appendChild(dat)


        
        box.innerHTML += "<p>" + title.value + "</p>"

        analog.appendChild(div2)
        box.appendChild(checkbox)

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