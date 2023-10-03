const todos = ["task1"];
const projects = ["task2"];    
function Todo(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

}

 const projectList = document.getElementById("projectList")
 const newProjects = document.createElement("li")
function dom() {
     
 
    projects.forEach(element => {
       newProjects.innerHTML += element  
       projectList.appendChild(newProjects)     
    });
}
function addTask(){
     todos.forEach(element=>{
        container.innerHTML +=element 

    })
}
dom();
addTask();

// let todo = new Todo("My title", "My todo description","08/2023"), true)
// const array = []
// array.push(todo)