const btnAddTask = document.getElementById("btnAddTask")
const txtTodoItem = document.getElementById("txtTodoItem")
const listTodos = document.getElementById("listTodos")

let todos = []

function display() {
    let todoItems = ""
    for (let i =0; i < todos.length; i++) {
        todoItems += "<li>"+todos[i]+"</li>"
    }
    listTodos.innerHTML = todoItems
}

btnAddTask.addEventListener("click", () => {
    todos.push(txtTodoItem.value)
    display()
})
