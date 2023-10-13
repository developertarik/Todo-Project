    const todos = ["todo"];
    const projects = ["project"];    
    const button = document.getElementById("btn")
    const container = document.getElementById("container")
    const box = document.createElement("div")
    const input = document.getElementById("title")

    box.classList.add("box")
    function Todo(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;

    }
    function Project(projectTitle,todo){
        this.projectTitle = projectTitle;
        this.todo = todo;
    }
 

    let todo = new Todo("i love you theodin","thanks","29.05.2023",2);
/*
  const input = document.getElementById("title")
            const a = document.createElement("a")
            a.innerText = input.value
            todo.title = input.value
            const date = document.createElement("input");
            date.setAttribute("type","date")
            todo.dueDate = date
             const box = document.createElement("li")
            box.classList.add("box")
            box.appendChild(a)
            box.appendChild(checkbox)
            localStorage.setItem("Inbox",container.innerHTML)
            container.appendChild(box)    
           
*/

function addTodo(){
    //doms
    const date = document.createElement("input");
    date.setAttribute("type","date")
    const checkbox = document.createElement("button");
    checkbox.innerText = "Complete task!";

    todo.dueDate = date

    todos.push(todo) 
    todo.title = input.value;
    box.appendChild(checkbox)
    box.appendChild(date)

    console.log(todos)
    container.appendChild(box)
    
}


button.addEventListener("click",addTodo);

