//CRUD ... CREATE , READ , UPDATE, DELETE

let todos = [
  { id: 1, title: "go to work", dueDate: "2024-03-8" },
  { id: 2, title: "go to the gym", dueDate: "2024-03-9" },
];

function createTodo() {}

//add to do

let btn = document.getElementById("btn");

btn.addEventListener("click", createTodo);

function createTodo(e) {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let dueDate = document.getElementById("date").value;
  let id = new Date().getTime();

  todos.push({ id: 1 });
}

//update
function updateTodo(e) {
  let updateId = Number(e.target.id);
  let todo = todos.filter((todo, index) => {
    return todo.id === updateId;
  });
  document.getElementById("title").value = todo[0].title;
  document.getElementById("btn").style = "display:none";
  let updatebtn = document.createElement("button");
  updatebtn.textContent = "save update";
  updatebtn.onclick = saveTodoUpdate;
  let form = document.getElementById("form");
  form.append(updatebtn);
}

function saveTodoUpdate() {}
//view/read/display READ

const renderTodos = function () {
  document.getElementById("render").innerHTML = "";
  todos.map((todo) => {
    let div = document.createElement("div");
    div.textContent = todo.title + " " + todo.dueDate;
    let render = document.getElementById("render");
    let updateBtn = document.createElement("button");
    updateBtn.textContent = "Update";
    updateBtn.id = todo.id;
    updateBtn.style = "margin-left:12px; margin-top:12px";
    updateBtn.onclick = updateTodo;
    div.append(updateBtn);
    let deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete todo";
    deletebtn.id = todo.id;
    deletebtn.onclick = deleteTodo;

    div.append(deletebtn);
    render.append(div);
  });
};

render();
