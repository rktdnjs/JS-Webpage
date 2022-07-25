const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

// 반복되는 String들은 변수명으로 처리해놓아야 오타가 나더라도 JS에서 지적을 해줄 수 있다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings(savedUsername);
}