function Todo(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

}
const button = document.getElementById("btn");
const container = document.getElementById("container");

const checkbox = document.createElement("button");
checkbox.innerText = "Complete task!"

const box = document.createElement("div");
box.classList.add("box")

// yapılması gereken
// containeri bul
// kutu oluştur
// eğer butona basarsan kutuya veri ekle
function addTask(){
    button.addEventListener("click",function(){
        const newBox = document.createElement("div");
        box.innerHTML = "Aa"
        box.appendChild(checkbox)
        box.appendChild(newBox)
        container.appendChild(box);
        
    })

}
function deleteTask(){
    checkbox.addEventListener("click",function(e){
        newBox.remove();

    })
}

addTask();
deleteTask();