    const todos = ["test"];
    const projects = ["project1"];    
    const btn = document.getElementById("btn")
    const projectBtn = document.getElementById("pBtn")
    const projectDiv = document.getElementById("projectsDiv")
    const container = document.getElementById("container")
    function Todo(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;

    }
    let todo = new Todo("a");
    const projectList = document.getElementById("projectList")
    const newProjects = document.createElement("li")
    function dom() {
        projectBtn.addEventListener("click",function(e){
                projects.push(e)
                console.log(projects)
                const projectBox = document.createElement("li")
                projectBox.innerHTML = e.target
                
        })
        

        projects.forEach(element => {
      projects.push(element)
      console.log(projects)
        });
    }
    function addTask(){
        btn.addEventListener("click", function (e) {
            const input = document.getElementById("title")
            const a = document.createElement("a")
            a.innerText = input.value
            todo.title = input.value
            const date = document.createElement("input");
            date.setAttribute("type","date")
            todo.dueDate = date
            todos.push(todo)
            console.log(todos)
            projects.push(todos)

            const box = document.createElement("li")
            box.classList.add("box")
            box.appendChild(date)
             const checkbox = document.createElement("button");
            checkbox.innerText = "Complete task!";
            box.appendChild(a)
            box.appendChild(checkbox)
            localStorage.setItem("Inbox",container.innerHTML)
            container.appendChild(box)    
           
        });
       
       
    }
    todos.forEach(element=>{
        todos.push(todo)
        console.log(todo)

    })
    dom();
    addTask();

    

    // let todo = new Todo("My title", "My todo description","08/2023"), true)
    // const array = []
    // array.push(todo)