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
const inboxBtn = document.getElementById("inboxBtn")
const dat = document.createElement("input");
container.innerText = "Inbox"

dat.setAttribute("type", "date");
function addTask() {

    button.addEventListener("click", function () {
        newTask = new Todo(title);

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

        localStorage.setItem("Inbox",container.innerHTML)
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


inboxBtn.addEventListener("click", () => {
    container.innerText = "Inbox"
    container.innerHTML =  localStorage.getItem("Inbox",container.innerHTML);

})

function addProject() {
    const projects2 = document.createElement("li");

    projectsBtn.addEventListener("click", () => {
        const projectName = prompt("What is the project name ?")
        projects2.innerHTML += "<a href='#'>" + projectName + "</a>" + "<br>"
        projects.appendChild(projects2)
        localStorage.setItem('project', projects2.innerHTML);
        // Check for saved wishlist items
 

    })
    

 projects2.addEventListener("click",function( e){
    console.log("you clicked this element:",e.target)
     
  })
 
}

addProject()
