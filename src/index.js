 // <!--yapcaklar proje aç içine proje ekle ve projelerin içine görev ekle-->
//  <!--ve içine inbox ekle bir default proje olarak-->

    const todos =  [];
    const projects = ["Today","Tomorrow"];
    const deleteBtn = document.getElementById("deleteBtn")
    class Todo{
        constructor(title,description,dueDate,priority){
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
        }
        addTodo(){
            todos.push(newTodo1)
        }
        deleteTodo(){
            todos.pop(newTodo1)
        }

    }
    const newTodo1 = new Todo("Take a cold Shower","Tomorrow","29.09.2023","1")
    const newTodo2 = new Todo("i love you folks","Today","29.09.23","2")
    console.log(newTodo1)
    console.log(newTodo2)
    newTodo1.addTodo()
    deleteBtn.addEventListener("click",()=>{
        newTodo1.deleteTodo()
    })