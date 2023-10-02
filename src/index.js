const todos = [];
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
const a = document.createElement("a");
const projects = document.getElementById("projectsDiv")
const projectsBtn = document.getElementById("projectsBtn")
const projectsInput = document.getElementById("projectsInput")
const projectList = document.getElementById("projects-List")
 const dat = document.createElement("input");
container.innerText = "Inbox"
const projectForm = document.getElementById("project-form")
dat.setAttribute("type", "date");
function addTask() {
    button.addEventListener("click", function () {
        task = new Todo(title);
        todos.push(task);
        console.log(todos)
        const box = document.createElement("li")
        box.classList.add("box")
        analog.appendChild(div2)
        console.log(title.value);
        box.appendChild(dat)
        box.innerHTML += "<p class=`myTitle`>" + title.value + "</p>"
        const checkbox = document.createElement("button");
        checkbox.innerText = "Complete task!"
        checkbox.addEventListener("click", () => {
            box.remove();
            checkbox.remove();
        })
        box.appendChild(checkbox)
        localStorage.setItem("Inbox", container.innerHTML)
        analog.appendChild(div2)
        localStorage.setItem("contentDiv", container.innerHTML);
        container.appendChild(box)
        titleInput.value = "";
    });
    titleInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            button.click();
        }
    });


}

addTask();


 

function Project(){
const projects2 = document.getElementById("projects-List");
localStorage.setItem('project', projects2.innerHTML);

      projectsBtn.addEventListener("click", () => {
        const projectName = document.getElementById("projectsName");
         projects2.innerHTML += "<li href='#'>" + projectName.value + "</li>" + "<br>"
         projects.appendChild(projects2)
        localStorage.getItem('project', projects2.innerHTML);
       

     })
     projects2.addEventListener("click", () => {
         container.innerText = projects2.innerText
    })
     let saved = localStorage.getItem('project');
      if (saved) {
       projects2.innerHTML = saved;
 }
}

Project()
 
 