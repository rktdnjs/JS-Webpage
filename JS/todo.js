const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const list = document.createElement("li");
    list.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    list.appendChild(span);
    list.appendChild(button);
    toDoList.appendChild(list);
}

function handleToDoSubmit(event) {
    event.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//     console.log("This is ", item);
// }

// for each는 배열의 각 item에 대해서 function을 실행하게 해준다.
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

// localStorage의 데이터가 사라지지 않아서 새로고침 하면 다시 생긴다.
// 그렇다면, 기록된 toDos를 삭제하도록 코드를 짜보자!
// 중복되는 todo가 있을 경우 무엇을 삭제할 지 컴퓨터는 알 지 못한다.
// 그렇기 때문에 각 todo에 어떤 id를 부여해서, 해당 id에 대한 데이터베이스를 삭제한다.
 
// filter함수를 써서 배열에서 어떤 item들만 제외가 가능하다.
// filter함수는 false를 리턴 시 해당 item을 제외하고 true를 리턴 시 해당 item을 다시 준다.
// 즉 우리가 배열의 item을 유지하고 싶으면 해당 item에 대해서 filter함수가 true를 받아야 한다.