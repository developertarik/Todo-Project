    //doms
    const todos = ["todo"];
    const projects = ["Today","Sports"]
    const button = document.getElementById("btn")
    const container = document.getElementById("container")
    const box = document.createElement("div")
    const input = document.getElementById("title")
    const date = document.createElement("input");
    const checkbox = document.createElement("button");
    date.setAttribute("type","date")
    checkbox.innerText = "Complete task!";
    box.classList.add("box")
    const projectsDiv =  document.getElementById("projectsDiv")
    
    //functions
    function Todo(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;

    }
    
 function addProject(){
    for (let i = 0; i < projects.length; i++) {
        const element = projects[i];
        projectsDiv.innerHTML+="<a class='element'>"+ element +"</a>"
        
    }
 }
 addProject();
 function addTask(){
    btn.addEventListener("click", function (e) {
        let todo = new Todo("i love you theodin");
        const input = document.getElementById("title")
        const a = document.createElement("a")
        a.innerText = input.value
        todo.title = input.value
        const date = document.createElement("input");
        date.setAttribute("type","date")
        todo.dueDate = date
        todos.push(todo)
        console.log(todos)
 
        const box = document.createElement("li")
         box.classList.add("box")
        box.appendChild(date)
         const checkbox = document.createElement("button");
        checkbox.innerText = "Complete task!";
        box.appendChild(a)
        box.appendChild(checkbox)
        localStorage.setItem("Inbox",container.innerHTML)
        container.appendChild(box)    
       input.value = "" 
    });
   
   
}

function deleteTask(){
  checkbox.addEventListener("click",(e)=>{
      box.remove();
      button.remove();
      todos.pop();
 
  })
  }
  
 
  addTask();
deleteTask();

