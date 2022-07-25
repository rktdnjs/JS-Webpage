const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
    const list = document.createElement("li");
    const span = document.createElement("span");
    list.appendChild(span);
    span.innerText = newTodo;
    
    toDoList.appendChild(list);
}

function handleToDoSubmit(event) {
    event.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);